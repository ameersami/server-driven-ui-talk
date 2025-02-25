'use server';

import NewsFeedFactory from '@/Components/NewsFeedComponentFactory/NewsFeedComponentFactory';
import posts from '@/data/newsFeedSchema.json';
import { type NewsPost } from '@/types/newsFeedSchema';

export default async (offset: number) => {
  const slicedPosts = posts.slice(offset, offset + 5);

  if (!slicedPosts.length) {
    return null;
  }

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, 100);
  });

  return slicedPosts.map(post => (
    <NewsFeedFactory key={`news-feed-post-item-${post.id}-${post.author}`} post={post as NewsPost} />
  ));
};