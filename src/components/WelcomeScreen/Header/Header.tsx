import Image from 'next/image';
import logo from 'assets/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <Image src={logo.src} width={logo.width} height={logo.height} alt='logo' />
    </header>
  );
};

export default Header;