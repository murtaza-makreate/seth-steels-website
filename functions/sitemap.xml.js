export async function onRequestGet({ request, env }) {
    try {
        const url = new URL(request.url);
        const baseUrl = `${url.protocol}//${url.hostname}`;
        const sitemapEntries = [];

        // 1. Static Routes
        const staticRoutes = [
            '/',
            '/products.html',
            '/articles.html',
            '/testimonials.html'
        ];

        staticRoutes.forEach(route => {
            sitemapEntries.push({
                loc: `${baseUrl}${route}`,
                changefreq: 'weekly',
                priority: route === '/' ? '1.0' : '0.8'
            });
        });

        // 2. Fetch and Parse Articles
        try {
            const articlesResponse = await env.ASSETS.fetch(new Request(`${baseUrl}/js/articles.js`));
            if (articlesResponse.ok) {
                const articlesText = await articlesResponse.text();
                // Extract IDs using regex. Looks for id: 'some-string' or id: "some-string"
                const idRegex = /id:\s*['"]([^'"]+)['"]/g;
                let match;
                while ((match = idRegex.exec(articlesText)) !== null) {
                    sitemapEntries.push({
                        loc: `${baseUrl}/article.html?id=${match[1]}`,
                        changefreq: 'monthly',
                        priority: '0.6'
                    });
                }
            }
        } catch (e) {
            console.warn('Failed to fetch/parse articles.js for sitemap:', e);
        }

        // 3. Fetch and Parse Products
        try {
            const productsResponse = await env.ASSETS.fetch(new Request(`${baseUrl}/js/products.js`));
            if (productsResponse.ok) {
                const productsText = await productsResponse.text();
                // Extract IDs using regex. Looks for id: 'some-string' or id: "some-string"
                const idRegex = /id:\s*['"]([^'"]+)['"]/g;
                let match;
                while ((match = idRegex.exec(productsText)) !== null) {
                    sitemapEntries.push({
                        loc: `${baseUrl}/product.html?id=${match[1]}`,
                        changefreq: 'monthly',
                        priority: '0.7'
                    });
                }
            }
        } catch (e) {
            console.warn('Failed to fetch/parse products.js for sitemap:', e);
        }

        // 4. Construct XML
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        sitemapEntries.forEach(entry => {
            xml += '  <url>\n';
            xml += `    <loc>${entry.loc}</loc>\n`;
            if (entry.changefreq) xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
            if (entry.priority) xml += `    <priority>${entry.priority}</priority>\n`;
            xml += '  </url>\n';
        });

        xml += '</urlset>';

        return new Response(xml, {
            headers: {
                'content-type': 'application/xml; charset=utf-8',
                'cache-control': 'public, max-age=3600',
                'x-content-type-options': 'nosniff'
            }
        });

    } catch (error) {
        console.error('Sitemap Generation Error:', error);
        return new Response('Error generating sitemap', { status: 500 });
    }
}
