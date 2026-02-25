<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - Seth Steels Enterprises</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <style type="text/css">
                    body {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    }
                    .gradient-bg {
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    }
                </style>
            </head>
            <body class="bg-gray-50 min-h-screen">
                <div class="gradient-bg text-white py-12 px-4 shadow-lg">
                    <div class="max-w-5xl mx-auto">
                        <div class="flex items-center justify-between">
                            <div>
                                <h1 class="text-4xl font-extrabold tracking-tight mb-2">XML Sitemap</h1>
                                <p class="text-blue-300 font-medium">Seth Steels Enterprises - Digital Inventory</p>
                            </div>
                            <div class="hidden md:block">
                                <i class="fas fa-sitemap text-6xl opacity-20"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-5xl mx-auto px-4 -mt-8 pb-20">
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div class="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <span class="text-sm text-gray-500 font-semibold uppercase tracking-wider">Total Pages Indexed</span>
                                <div class="text-3xl font-black text-gray-900 mt-1">
                                    <xsl:value-of count="sitemap:urlset/sitemap:url" select="count(sitemap:urlset/sitemap:url)"/>
                                </div>
                            </div>
                            <div class="text-sm text-gray-500 max-w-xs">
                                This page is an XML Sitemap, meant for consumption by search engines. It has been styled for human readability.
                            </div>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-gray-50 border-b border-gray-100">
                                        <th class="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-tighter w-1/2">URL</th>
                                        <th class="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-tighter text-center">Priority</th>
                                        <th class="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-tighter text-center">Update Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                                        <tr class="hover:bg-blue-50/30 transition-colors border-b border-gray-50">
                                            <td class="px-6 py-4">
                                                <xsl:variable name="itemURL">
                                                    <xsl:value-of select="sitemap:loc"/>
                                                </xsl:variable>
                                                <a href="{$itemURL}" class="text-blue-600 font-medium hover:text-blue-800 break-all">
                                                    <xsl:value-of select="sitemap:loc"/>
                                                </a>
                                            </td>
                                            <td class="px-6 py-4 text-center">
                                                <xsl:variable name="priority" select="sitemap:priority"/>
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold">
                                                    <xsl:choose>
                                                        <xsl:when test="$priority >= 0.8">
                                                            <xsl:attribute name="class">inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800</xsl:attribute>
                                                        </xsl:when>
                                                        <xsl:when test="$priority >= 0.5">
                                                            <xsl:attribute name="class">inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800</xsl:attribute>
                                                        </xsl:when>
                                                        <xsl:otherwise>
                                                            <xsl:attribute name="class">inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800</xsl:attribute>
                                                        </xsl:otherwise>
                                                    </xsl:choose>
                                                    <xsl:value-of select="concat(number($priority) * 100, '%')"/>
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 text-center text-sm text-gray-500 font-medium capitalize">
                                                <xsl:value-of select="sitemap:changefreq"/>
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center text-gray-400 text-xs">
                        &copy; 2026 Seth Steels Enterprises. Rendered via XSL Stylesheet.
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
