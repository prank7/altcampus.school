import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import gfm from 'remark-gfm';

const guidesDirectory = path.join(process.cwd(), 'guides');

export function getSortedGuidesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(guidesDirectory);
  const allGuidesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(guidesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      readingTime: readingTime(matterResult.content),
      ...matterResult.data
    };
  });
  // Sort posts by order
  return allGuidesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllGuideIds() {
  const fileNames = fs.readdirSync(guidesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getGuideData(id) {
  const fullPath = path.join(guidesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(prism)
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}

export async function getRelatedGuides(id, count = 3) {
  const allGuides = await getSortedGuidesData();
  if (allGuides.length <= count) {
    return allGuides.filter((p) => p.id !== id);
  }
  let currentGuideIndex = allGuides.findIndex((p) => p.id === id);
  let uniqueIndex = [];

  while (uniqueIndex.length < count) {
    let random = Math.round(Math.random() * (allGuides.length - 1));
    if (!uniqueIndex.includes(random) && random !== currentGuideIndex) {
      uniqueIndex.push(random);
    }
  }
  let relatedGuides = uniqueIndex.map((index) => allGuides[index]);
  return relatedGuides;
}
