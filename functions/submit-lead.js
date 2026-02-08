export async function onRequestPost({ request, env }) {
    try {
        const { name, email, phone, company, message } = await request.json();

        // Securely retrieve keys from environment variables
        const NOTION_TOKEN = env.NOTION_TOKEN;
        const NOTION_DATABASE_ID = env.NOTION_DATABASE_ID;

        if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
            return new Response(JSON.stringify({ error: 'Server configuration missing' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const notionResponse = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28'
            },
            body: JSON.stringify({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    'Name': {
                        title: [
                            { text: { content: name } }
                        ]
                    },
                    'Email': {
                        email: email
                    },
                    'Phone': {
                        phone_number: phone
                    },
                    'Company': {
                        rich_text: [
                            { text: { content: company || 'N/A' } }
                        ]
                    },
                    'Message': {
                        rich_text: [
                            { text: { content: message } }
                        ]
                    },
                    'Status': {
                        select: { name: 'New' }
                    }
                }
            })
        });

        const notionResult = await notionResponse.json();

        if (notionResponse.ok) {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            console.error('Notion Error:', notionResult);
            return new Response(JSON.stringify({ error: 'Failed to save to Notion', details: notionResult }), {
                status: 502,
                headers: { 'Content-Type': 'application/json' }
            });
        }

    } catch (error) {
        console.error('Request Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
