import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
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
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
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

export async function getRelatedPosts(id, count = 3) {
  const allPosts = await getSortedPostsData();
  let currentPostIndex = allPosts.findIndex((p) => p.id === id);
  let uniqueIndex = [];
  while (uniqueIndex.length < count) {
    let random = Math.round(Math.random() * (allPosts.length - 1));
    if (!uniqueIndex.includes(random) && random !== currentPostIndex) {
      uniqueIndex.push(random);
    }
  }
  let relatedPosts = uniqueIndex.map((index) => allPosts[index]);
  return relatedPosts;
}
