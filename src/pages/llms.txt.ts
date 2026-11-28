// llms.txt (https://llmstxt.org): index of the site for AI agents.
import { person } from '../data/site';

const SITE = 'https://kheddache.me';

const body = `# ${person.name}

> ${person.shortBio}

Personal site of ${person.name}: bio, projects, talks and interviews, recognition, writing, press kit and contact.
The whole site is one page; its Markdown version is below. Send \`Accept: text/markdown\` to ${SITE}/ to get it too.

## Site

- [${person.name}: bio, projects, talks, recognition, writing, press kit and contact](${SITE}/index.md): the full page in Markdown
`;

export const GET = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
