import Image from 'next/image';
import Link from 'next/link';
import Logo from 'assets/images/logo.svg';
import styles from './Header.module.scss';
import MobileMenuOpenBtn from 'assets/images/mobile-menu.svg';
import NavMain from './NavMain/NavMain';
import ContactPhoneNumber from 'components/ContactPhoneNumber/ContactPhoneNumber';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isLaptop = useMediaQuery({ maxWidth: 780 });

  return (
    <header className={styles.root}>
      <Link href='/'>
        <a className={styles.logoWrap}>
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
      {!isLaptop && <NavMain cname={styles.navmain} />}
      <ContactPhoneNumber cname={styles.phoneNumber} />

      {isLaptop && <span className={styles.mobileMenuOpenBtn}><Image src={MobileMenuOpenBtn} alt='phone icon' /></span>}
    </header>
  );
};

export default Header;