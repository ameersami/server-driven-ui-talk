import { Chip } from "lib";

import styles from './UrgentNewsArticleIndicator.module.css';

export default () => (
  <Chip text="Urgent" appearance="warning" className={styles.urgentIndicator} />
);