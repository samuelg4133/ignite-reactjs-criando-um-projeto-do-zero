import Link from 'next/link';

import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
    </header>
  );
}
