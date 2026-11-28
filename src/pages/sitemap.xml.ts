// Sitemap: the site is one page (/thanks and the 404 page are noindex, so left out).
// Also the ground truth for the llms.txt coverage check (afdocs).
const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://kheddache.me/</loc></url>
</urlset>
`;

export const GET = () =>
  new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
