// Content negotiation: an agent that asks for `Accept: text/markdown` on the home page gets
// the Markdown version (/index.md, built from the same data as the HTML). Browsers get HTML.
export default async (request: Request) => {
  const accept = request.headers.get('accept') ?? '';
  if (!/text\/markdown/i.test(accept)) return; // continue to the HTML page

  const md = await fetch(new URL('/index.md', request.url));
  return new Response(md.body, {
    status: md.status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      Vary: 'Accept',
    },
  });
};

export const config = { path: ['/', '/index.html'] };
