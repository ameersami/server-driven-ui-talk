import { Avatar, Card, Chip, Column, Row, Text } from 'lib';
import Image from 'next/image';

import UrgentNewsArticleIndicator from '@/Components/UrgentNewsArticleIndicator/UrgentNewsArticleIndicator';
import { NewsPost } from '@/types/newsFeedSchema';

import styles from './NewsFeedFactory.module.css';

export default ({ post }: { post: NewsPost }) => {

  let content = (<></>);
  switch (post.type) {
    case 'article':

      content = (
        <div className={styles.imageContainer}>
          <div className={styles.postImageTextContainer}>
            {post.badge?.type === 'urgent' && (
              <UrgentNewsArticleIndicator/>
            )}
            <Text spacing="none" textStyle="l" textWeight="bold" textColor="white">{post.title}</Text>
            <Text spacing="none" textStyle="m" textWeight="medium" textColor="white">{post.subtitle}</Text>
          </div>
          <Image
            src="/news.jpg"
            blurDataURL="/news.jpg"
            alt="news image"
            width={450}
            height={450}
            objectFit="cover"
            className={styles.articleImage}
          />
        </div>
      );
      break;
    case 'livestream':
    case 'video':
      content = (
        <iframe className={styles.videoFrame} width="560" height="315" src="https://www.youtube.com/embed/6pGnkDIW-8c?si=GRn_cG33s63bBedA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      );
      break;
    case 'gallery':
      content = (
        <div className={styles.gallery}>
          <Image
            src="/news.jpg"
            blurDataURL="/news.jpg"
            alt="news image"
            width={450}
            height={450}
            objectFit="cover"
            className={styles.articleImage}
          />
          <Image
            src="/news.jpg"
            blurDataURL="/news.jpg"
            alt="news image"
            width={450}
            height={450}
            objectFit="cover"
            className={styles.articleImage}
          />
          <Image
            src="/news.jpg"
            blurDataURL="/news.jpg"
            alt="news image"
            width={450}
            height={450}
            objectFit="cover"
            className={styles.articleImage}
          />
        </div>
      );
      break;
    case 'interactive':
    case 'podcast': 
      content = (
        <iframe
          scrolling="no"
          src="https://syntax.fm/embed/873"
          title="Show Embed"
          className={styles.podcastWrapper}
        />
      );
      break;
    default:
      break;
  }

  return (
    <Card
      hasPadding={false}
      key={`article-card-${post.id}`}
      borderColor="var(--colors_GRAY_300)"
    >
      <Row direction="column" className={styles.cardColumn} hPadding="xs" >
        {content}
        <Text spacing="xxs" />
        <Row direction="row" wrap={false} vAlign="center" columnsHGap="xxs">
          <Avatar
            text={post?.author?.name?.slice(0, 2) ?? ''}
            fillColor="var(--colors_BLUE_GRAY_300)"
            size="m"
          />
          <Column>
            <Row direction="row" hAlign="space-between" vAlign="center">
              <Row direction="column" columnsHGap="xs">
                <Text isInlineBlock spacing="none" textStyle="m" textWeight="normal">{post?.author?.name ?? ''}</Text>
                <Text isInlineBlock spacing="none" textStyle="xs" textWeight="normal">{post?.timestamp ? new Date(post?.timestamp).toLocaleDateString() : ''}</Text>
              </Row>
              <div>
                {post.category && (
                  <Chip text={post.category} appearance="tertiary" hasCloseButton={false} />
                )}
              </div>
            </Row>
          </Column>
        </Row>
        <Text spacing="xs" />
      </Row>
    </Card>
  );

};