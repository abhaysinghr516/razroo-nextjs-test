import styles from './name.module.scss';

/* eslint-disable-next-line */
export interface NameProps {}

export function Name(props: NameProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Name!</h1>
    </div>
  );
}

export default Name;
