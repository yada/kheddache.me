// Markdown version of the home page, for AI agents: served at /index.md, linked from /llms.txt,
// and returned for `Accept: text/markdown` requests (netlify/edge-functions/markdown.ts).
// Built from the same data as the HTML page (src/data/site.ts), so both stay in sync.
import {
  person, socials, projects, upcoming, talks, earlierTalks, badges, courses, posts, allPosts,
} from '../data/site';

const SITE = 'https://kheddache.me';

const fmt = (d: string) =>
  new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const fr = (lang?: string) => (lang === 'fr' ? ' (in French)' : '');

export function homeMarkdown(): string {
  const today = new Date().toISOString().slice(0, 10);
  const nextEvents = upcoming.filter((e) => e.end >= today);
  const credly = socials.find((s) => s.id === 'credly')!;
  const linkedin = socials.find((s) => s.id === 'linkedin')!;

  const out: string[] = [
    `# ${person.name}`,
    '',
    `> ${person.shortBio} For the site index, see [llms.txt](${SITE}/llms.txt).`,
    '',
    person.title,
    '',
    socials.map((s) => `- [${s.label}](${s.url})`).join('\n'),
    '',
    '## About',
    '',
    person.bio.join('\n\n'),
    '',
    '## Projects',
    '',
  ];

  for (const p of projects) {
    out.push(
      `### ${p.name}`,
      '',
      `${p.role}. ${p.tagline}`,
      '',
      p.text,
      '',
      p.links.map((l) => `- [${l.label}](${l.url})`).join('\n'),
      '',
    );
  }

  out.push(
    '### CNCF Ambassador',
    '',
    'CNCF Ambassador for 2026-2028. I also review talks for KubeCon + CloudNativeCon as a track chair and program committee member. [My CNCF Ambassador profile](https://www.cncf.io/people/ambassadors/?p=yacine-kheddache)',
    '',
    '## Talks and interviews',
    '',
  );

  if (nextEvents.length > 0) {
    out.push('Upcoming:', '');
    for (const e of nextEvents) out.push(`- ${e.when}: [${e.name}](${e.url}), ${e.where}. ${e.what}`);
    out.push('');
  }

  for (const t of talks) {
    const url = t.youtube ? yt(t.youtube) : t.links?.[0]?.url;
    const extra = t.youtube && t.links ? ` Also on ${t.links.map((l) => `[${l.label}](${l.url})`).join(', ')}.` : '';
    out.push(`- ${fmt(t.date)}: [${t.title}](${url}), ${t.where}${fr(t.lang)}.${extra}`);
  }
  out.push('', 'Earlier:', '');
  for (const t of earlierTalks) {
    out.push(`- ${t.date.slice(0, 4)}: [${t.title}](${t.links![0].url}), ${t.where}${fr(t.lang)}.`);
  }

  out.push('', '## Recognition', '');
  for (const b of badges) out.push(`- [${b.name}](${b.url})`);
  out.push('', 'Courses:', '');
  for (const c of courses) out.push(`- [${c.name}](${c.url})`);
  out.push('', `[All badges on Credly](${credly.url})`, '', '## Writing', '');
  for (const p of posts) out.push(`- ${fmt(p.date)}, ${p.site}: [${p.title}](${p.url})`);
  out.push('', allPosts.map((l) => `- [${l.label}](${l.url})`).join('\n'));

  out.push(
    '',
    '## Press kit',
    '',
    'For event organizers, CfP forms and articles. Use any of these as is.',
    '',
    '### Short bio',
    '',
    person.shortBio,
    '',
    '### Long bio',
    '',
    person.bio.join('\n\n'),
    '',
    '### Downloads',
    '',
    `- [Headshot, JPG, 1000 × 1000](${SITE}/press/yacine-kheddache-headshot.jpg)`,
    `- [Banner, JPG, 1500 × 500](${SITE}/press/yacine-kheddache-banner-1500x500.jpg)`,
    '',
    'Name: Yacine Kheddache. Handles: @YadaYac on X, @kheddache.me on Bluesky.',
    '',
    '## Contact',
    '',
    `Talk invitations, podcasts, Microcks or reShapr questions: [message me on LinkedIn](${linkedin.url}) or use the contact form on ${SITE}/#contact.`,
    '',
  );

  return out.join('\n');
}
