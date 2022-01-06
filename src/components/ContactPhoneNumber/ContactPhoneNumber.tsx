import styles from './ContactPhoneNumber.module.scss';
import Phone from 'assets/images/phone.svg';
import Image from 'next/image';

const PHONE_NUMBER = '+7 (920) 358-33-89';

const ContactPhoneNumber = () => {
  return ( 
    <a href={`tel:${PHONE_NUMBER}`} className={styles.root}>
      <span>{PHONE_NUMBER}</span>
      <Image src={Phone} alt='phone icon' layout='fixed' height={22} />
    </a>
  );
};

export default ContactPhoneNumber;