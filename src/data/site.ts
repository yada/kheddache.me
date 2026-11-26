// All page content lives here. Edit this file to add a talk, a post or a badge.
// Sources: wiki me/bio.md (bios, handles), Credly public profile, YouTube public data (titles, dates).

export const person = {
  name: 'Yacine Kheddache',
  title:
    'Co-founder of reShapr (open source MCP runtime) & Microcks (CNCF Incubating, API mocking and testing) | CNCF Ambassador',
  // LFX profile bio, approved by Yacine 2026-11-26 (wiki me/bio.md)
  bio: [
    "I co-founded reShapr, the open source MCP runtime that turns your existing APIs into governed MCP tools, and Microcks, a CNCF Incubating project for API mocking and contract testing, where I'm a core maintainer. I'm also a CNCF Ambassador.",
    'Before that: nearly three decades in open source, from early ISP infrastructure and 14 years as an entrepreneur to 6 years at Red Hat. I care about open organization models and helping companies adopt open source and cloud native in practice.',
  ],
  shortBio:
    'Co-founder of reShapr (open source MCP runtime) and Microcks (CNCF Incubating, API mocking and testing). CNCF Ambassador.',
};

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/yacinekheddache/' },
  { id: 'x', label: 'X', url: 'https://x.com/YadaYac' },
  { id: 'bluesky', label: 'Bluesky', url: 'https://bsky.app/profile/kheddache.me' },
  { id: 'mastodon', label: 'Mastodon', url: 'https://hachyderm.io/@YadaYac', rel: 'me' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/yada' },
  { id: 'linuxfoundation', label: 'LFX profile', url: 'https://app.lfx.dev/u/yacinemicrocks' },
  { id: 'credly', label: 'Credly', url: 'https://www.credly.com/users/yacine-kheddache/badges' },
];

export const projects = [
  {
    name: 'reShapr',
    logo: '/img/logos/reshapr-aligned.png',
    logoW: 378,
    logoH: 120,
    role: 'Co-founder and core maintainer',
    tagline: 'Turn your APIs AI-Native.',
    text: 'Open source MCP runtime that turns your existing APIs into governed MCP tools, without rebuilding them.',
    links: [
      { label: 'reshapr.io', url: 'https://reshapr.io' },
      { label: 'GitHub', url: 'https://github.com/reshaprio' },
    ],
  },
  {
    name: 'Microcks',
    logo: '/img/logos/microcks-aligned.png',
    logoW: 467,
    logoH: 120,
    role: 'Co-founder and core maintainer',
    tagline: 'CNCF Incubating project.',
    text: 'API mocking and contract testing: OpenAPI, AsyncAPI, gRPC and GraphQL contracts become live mocks and conformance tests, from a laptop to Kubernetes.',
    links: [
      { label: 'microcks.io', url: 'https://microcks.io' },
      { label: 'GitHub', url: 'https://github.com/microcks' },
    ],
  },
];

// Upcoming events. Hidden automatically after `end` at build time (Netlify rebuilds on every push).
export const upcoming = [
  {
    end: '2026-12-03',
    when: 'Dec 1-3, 2026',
    name: 'FOST Paris',
    where: 'CNIT Forest, Paris La Défense',
    what: 'At the Microcks and reShapr booth.',
    url: 'https://joinfost.io/events/paris',
  },
];

export type Talk = {
  date: string;
  title: string;
  where: string;
  lang?: 'fr';
  youtube?: string;
  links?: { label: string; url: string }[];
};

export const talks: Talk[] = [
  {
    date: '2026-09-10',
    title: 'Scaling Your AI Agents with Open Source: API ➔ No-Code MCP & Observability with reShapr!',
    where: 'apidays India 2026',
    youtube: 'Ehd1SCe8z8Q',
  },
  {
    date: '2026-02-27',
    title: "Microcks : mocking et testing d'API open source à la CNCF",
    where: 'Cloud Native Days France 2026 (informatiquenews)',
    lang: 'fr',
    youtube: 'Jtm3_Nou8f4',
  },
  {
    date: '2026-02-06',
    title: 'API Mocking, Contract Testing, and the AI Shift with Yacine from Microcks',
    where: 'Testkube podcast',
    youtube: 'ZNVOva0C-IE',
    links: [
      {
        label: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/api-mocking-contract-testing-and-the-ai-shift-with/id1797794562?i=1000748541572',
      },
    ],
  },
  {
    date: '2026-01-12',
    title: "De la simulation à l'IA : comment Microcks connecte APIs et agents intelligents",
    where: 'Open Source Experience',
    lang: 'fr',
    youtube: 'cqphHPIgOsc',
  },
  {
    date: '2024-12-12',
    title: 'IT for Business interview: APIdays Paris 2024, Microcks',
    where: 'APIdays Paris 2024',
    lang: 'fr',
    youtube: 'g6_USOEtGuM',
  },
  {
    date: '2024-12-02',
    title: 'Live from the Microcks Project Pavilion',
    where: 'KubeCon + CloudNativeCon Salt Lake City 2024 (Cloud Native Podcast)',
    youtube: '9x0VwrgOOIo',
  },
  {
    date: '2024-04-04',
    title: 'Interview on Microcks and the CAMARA project',
    where: 'Mobile World Congress 2024 (CAMARA Project)',
    youtube: '7uK1T0YnXFU',
  },
  {
    date: '2024-02-21',
    title: 'Microcks Reloaded: Spring AOT and Testcontainers support, with Josh Long',
    where: 'Coffee + Software',
    youtube: 'VsTj0hyYiAA',
  },
  {
    date: '2023-10-03',
    title: 'Microcks: Open source Kubernetes Native tool for API Mocking and Testing, with Josh Long',
    where: 'Coffee + Software',
    youtube: '4ObZu9Gh9Xk',
  },
];

// Before Microcks: one compact line.
export const earlierTalks: Talk[] = [
  {
    date: '2022-03-29',
    title: "L'automatisation du SI, un enjeu majeur dans la transformation numérique",
    where: 'Channelnews',
    lang: 'fr',
    links: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=gf6ylX9NyuM' }],
  },
  {
    date: '2014-05-20',
    title: "Stockage objet (Ceph et les autres) ou comment avoir l'équivalent d'Amazon S3 en propre",
    where: 'JoSy "Cloud privé dans l’enseignement et la recherche", RESINFO / CNRS, Strasbourg',
    lang: 'fr',
    links: [
      {
        label: 'Video',
        url: 'https://webcast.in2p3.fr/video/stockage_objet_ou_comment_avoir_l_equivalent_d_amazon_s3',
      },
    ],
  },
  {
    date: '2014-05-20',
    title: "Enfin le monde du réseau s'ouvre",
    where: 'JoSy "Cloud privé dans l’enseignement et la recherche", RESINFO / CNRS, Strasbourg',
    lang: 'fr',
    links: [{ label: 'Video', url: 'https://webcast.in2p3.fr/video/josycloud_enfin_le_monde_du_reseau_s_ouvre' }],
  },
];

const credly = (id: string) => `https://www.credly.com/badges/${id}/public_url`;

// Credly, public profile (checked 2026-11-26). Red Hat President's Club 2019 left out on purpose (bios: no past employers).
export const badges = [
  { name: 'CNCF Ambassador 2026-2028', img: 'cncf-ambassador', url: credly('3a032820-44f4-49ba-91ce-eda0a335f085') },
  { name: 'Track Chair, KubeCon + CloudNativeCon Europe 2026', img: 'track-chair-eu-2026', url: credly('508dea9f-a5f1-4c85-859e-0cb184fb62f2') },
  { name: 'Program Committee, KubeCon + CloudNativeCon + OpenInfra Summit + PyTorch China 2026', img: 'pc-china-2026', url: credly('b4768edb-871e-4bfe-9ee2-66878c085d0c') },
  { name: 'Program Committee, KubeCon + CloudNativeCon Japan 2026', img: 'pc-japan-2026', url: credly('8e01f091-4777-4b51-8627-8474148e32c1') },
  { name: 'Program Committee, KubeCon + CloudNativeCon North America 2025', img: 'pc-na-2025', url: credly('f50d2c1b-7bea-4e3e-889c-88a21472e7ac') },
];

export const courses = [
  { name: 'LFEL1005: Security Self-Assessments for Open Source Projects', img: 'lfel1005', url: credly('77b5ed7e-a734-43e3-81eb-5eafcf7fdf2a') },
  { name: 'LFC101: Inclusive Speaker Orientation', img: 'lfc101', url: credly('d433a144-b571-4527-a5ad-36beebc588fb') },
  { name: 'LFC102: Inclusive Open Source Community Orientation', img: 'lfc102', url: credly('4dfdadb6-bb26-4191-b9dc-b322b27725e6') },
  { name: 'LFC103: Inclusive Strategies for Open Source', img: 'lfc103', url: credly('472dac27-2b58-4cd3-b96a-8c3e0dd627fb') },
];

export const posts = [
  { date: '2026-11-23', site: 'reshapr.io', title: 'Skills over MCP in reShapr 1.2: Teach Agents How to Use Your APIs', url: 'https://reshapr.io/blog/reshapr-skills-over-mcp' },
  { date: '2026-11-19', site: 'reshapr.io', title: 'reShapr on apple/container: One VM per Container on Your Mac', url: 'https://reshapr.io/blog/reshapr-on-apple-container' },
  { date: '2026-09-22', site: 'reshapr.io', title: 'reShapr 1.0.0: Crossing Our First Stability Gate', url: 'https://reshapr.io/blog/reshapr-1.0.0-release' },
  { date: '2026-07-10', site: 'reshapr.io', title: 'reShapr vs Official GitHub MCP', url: 'https://reshapr.io/blog/reshapr-vs-official-github-mcp' },
  { date: '2026-07-07', site: 'reshapr.io', title: 'From API Sprawl to Agent Actions', url: 'https://reshapr.io/blog/from-api-sprawl-to-agent-actions' },
  { date: '2026-05-11', site: 'microcks.io', title: 'Microcks is Now a CNCF Incubating Project!', url: 'https://microcks.io/blog/microcks-incubating-cncf' },
  { date: '2026-03-01', site: 'reshapr.io', title: 'Why reShapr?', url: 'https://reshapr.io/blog/why-reshapr' },
  { date: '2026-01-07', site: 'microcks.io', title: 'Recap of an Incredible 2025, and Ready for 2026!', url: 'https://microcks.io/blog/recap-of-an-incredible-2025' },
];

export const allPosts = [
  { label: 'All my posts on reshapr.io', url: 'https://reshapr.io/blog/authors/yacine' },
  { label: 'All my posts on microcks.io', url: 'https://microcks.io/blog/authors/yacine-kheddache' },
];

// Visitor stats: GoatCounter site code (e.g. 'kheddache' for kheddache.goatcounter.com). Empty = no stats script.
export const goatcounter = '';
