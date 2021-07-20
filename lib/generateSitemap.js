import { getAllAlumnisData } from './airtableApi';

const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'posts/**/*{.md,.json}',
    'stories/**/*{.md,.json}',
    '!drafts/**/*{.md,.json}'
  ]);
  const alumniData = getAllAlumnisData();

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>https://altcampus.school</loc>
            </url>
            <url>
              <loc>https://altcampus.school/how-it-works</loc>
            </url>
            <url>
              <loc>https://altcampus.school/pricing</loc>
            </url>
            <url>
              <loc>https://altcampus.school/community</loc>
            </url>
            <url>
              <loc>https://altcampus.school/community/posts</loc>
            </url>
            <url>
              <loc>https://altcampus.school/community/stories</loc>
            </url>
            <url>
              <loc>https://altcampus.school/community/web-development</loc>
            </url>
            <url>
              <loc>https://altcampus.school/curriculum</loc>
            </url>
            <url>
              <loc>https://altcampus.school/apply-for-emi</loc>
            </url>
            ${pages
              .map((page) => {
                const path = page
                  .replace('.json', '')
                  .replace('.md', '')
                  .replace('content/', '')
                  .replace('blog/', '');
                const route = path === '/index' ? '' : path;
                return `
                <url>
                <loc>${`https://altcampus.school/community/${route}`}</loc>
                </url>`;
              })
              .join('')}
            <url>
              <loc>https://altcampus.school/placements</loc>
            </url>
            ${alumniData
              .map((alumni) => {
                return `
                <url>
                  <loc>${`https://altcampus.school/placements/${alumni.slug}`}</loc>
                </url>`;
              })
              .join('')}
        </urlset>
    `;
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });
  fs.writeFileSync(`public/sitemaps/sitemap.xml`, formatted);
}

export default generateSitemap;
