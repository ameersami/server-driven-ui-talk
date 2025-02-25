'use client';

import { startTransition, useActionState, useEffect, useRef, useState } from "react";

import getPosts from '@/functions/newsFeed/getPosts';

import styles from './NewsFeedLoader.module.css';

export default ({ children }: { children: any }) => {

  const [offset, offsetSetter] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [state, submitAction, isPending] = useActionState<Array<any>, number>(
    async (previousState, newOffset) => {
      const newComponents = await getPosts(newOffset);

      if (!newComponents) {
        return previousState;
      }

      return [
        ...previousState,
        newComponents
      ];
    },
    [],
  );

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", function() {
        const diff = Math.abs((this.scrollTop + this.clientHeight) - this.scrollHeight);

        if(diff <= 5) {
          offsetSetter(prev => prev + 5);
        }
      });
    }
  }, [scrollContainerRef.current]);

  useEffect(() => {
    if (offset) {
      startTransition(() => {
        submitAction(offset);
      });
    }
  }, [offset]);

  return (
    <div
      ref={scrollContainerRef}
      className={styles.scrollContainer}
    >
      {children}
      {state}
    </div>
  );
};