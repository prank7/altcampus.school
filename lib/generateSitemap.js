import { getAllAlumnisData } from './airtableApi';
import { getAllRoadmapsInfo } from './roadmaps';

const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'posts/**/*{.md,.json}',
    'roadmpas/**/*{.mdx,.json}',
    'stories/**/*{.md,.json}',
    'guides/**/*{.md,.json}',
    '!drafts/**/*{.md,.json}'
  ]);
  const alumniData = getAllAlumnisData();
  const roadmapsData = getAllRoadmapsInfo();
  const rootURL = 'https://altcampus.com';

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>${rootURL}</loc>
            </url>
            <url>
              <loc>${rootURL}/how-it-works</loc>
            </url>
            <url>
              <loc>${rootURL}/pricing</loc>
            </url>
            <url>
              <loc>${rootURL}/posts</loc>
            </url>
            <url>
              <loc>${rootURL}/stories</loc>
            </url>
            <url>
              <loc>${rootURL}/guides</loc>
            </url>
            <url>
              <loc>${rootURL}/roadmaps/web-development</loc>
            </url>
            <url>
              <loc>${rootURL}/curriculum</loc>
            </url>
            <url>
              <loc>${rootURL}/apply-for-emi</loc>
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
                <loc>${`${rootURL}/${route}`}</loc>
                </url>`;
              })
              .join('')}
            <url>
              <loc>${rootURL}/placements</loc>
            </url>
            ${alumniData
              .map((alumni) => {
                return `
                <url>
                  <loc>${`${rootURL}/placements/${alumni.slug}`}</loc>
                </url>`;
              })
              .join('')}
            ${roadmapsData
              .map((roadmap) => {
                return `
                <url>
                  <loc>${`${rootURL}/roadmaps/web-development/${roadmap.id}`}</loc>
                </url>`;
              })
              .join('')}
        </urlset>
    `;
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });
  fs.writeFileSync(`public/sitemap.xml`, formatted);
}

export default generateSitemap;
