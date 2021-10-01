import pMap from 'p-map';
import { basename } from 'path';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  // Import all .md files in the directory
  const modules = import.meta.glob('./*.md');

  const posts = await pMap(Object.entries(modules), async function ([filename, module]) {
    const { metadata } = await module();

    return {
      title: metadata.title,
      date: new Date(metadata.date),
      summary: metadata.summary,
      slug: basename(filename, '.md')
    };
  });

  // Sort posts by descending date
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return {
    body: { posts }
  };
};
