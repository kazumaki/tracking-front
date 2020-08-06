import React from 'react';
import styles from '../styles/Loading.module.scss';

const Loading = () => (
  <div className={styles.outterBox}>
    <div className={styles.innerBox}>
      <div className={styles.loader} />
    </div>
  </div>
);

export default Loading;
