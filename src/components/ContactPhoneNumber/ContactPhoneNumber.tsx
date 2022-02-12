import styles from './ContactPhoneNumber.module.scss';
import Phone from 'assets/images/phone.svg';
import Image from 'next/image';
import cn from 'classnames';

const PHONE_NUMBER = '+7 (920) 358-33-89';

interface IContactPhoneNumber {
  cname?: string,
}

const ContactPhoneNumber: React.FC<IContactPhoneNumber> = (props) => {
  const { cname } = props;

  return ( 
    <a href={`tel:${PHONE_NUMBER}`} className={cn(styles.root, cname)}>
      <span className={styles.text}>{PHONE_NUMBER}</span>
      <span className={styles.icon}><Image src={Phone} alt='phone icon' /></span>
    </a>
  );
};

export default ContactPhoneNumber;