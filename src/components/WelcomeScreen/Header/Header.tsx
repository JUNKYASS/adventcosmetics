import Image from 'next/image';
import Link from 'next/link';

import Logo from 'assets/images/logo.svg';
import styles from './Header.module.scss';

import NavMain from './NavMain/NavMain';
import ContactPhoneNumber from 'components/ContactPhoneNumber/ContactPhoneNumber';

const Header = () => {
  return (
    <header className={styles.root}>
      <Link href='/'>
        <a>
          <Image 
            src={Logo}
            quality={100}
            layout={'fixed'} // layout=fixed is important to manage width and height!!!
            width={110}
            height={74}
            alt='logo'
            className={styles.logo}
            priority
          />
        </a>
      </Link>
      <NavMain />
      <ContactPhoneNumber />
    </header>
  );
};

export default Header;