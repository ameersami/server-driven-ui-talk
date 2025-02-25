import NewsFeedLoadMore from '@/Components/NewsFeedLoader/NewsFeedLoader';
import getPosts from '@/functions/newsFeed/getPosts';

import styles from './page.module.css';

const NewsFeed = async () => {

  const Posts = await getPosts(0);

  return (
    <div className={styles.container}>
      <div className={styles.phoneContainer}>
        <NewsFeedLoadMore>
          {Posts}
        </NewsFeedLoadMore>
      </div>
    </div>
  );
};

export default NewsFeed;
