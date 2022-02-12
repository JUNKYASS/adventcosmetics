import React from 'react';
import cn from 'classnames';
import styles from './ContactMessangers.module.scss';
import WhatsappLogo from 'assets/images/whatsapp-logo.svg';
import TelegramLogo from 'assets/images/telegram-logo.svg';
import Link from 'next/link';
import Image from 'next/image';

interface IContactMessangersProps {
  cname?: string,
}

const ContactMessangers: React.FC<IContactMessangersProps> = (props) => {
  const { cname } = props;
  
  return (
    <div className={cn(styles.root, cname)}>
      <Link href="#">
        <a className={styles.link}>
          <Image src={WhatsappLogo} alt='whatsapp logo' />
          <span className={styles.text}>Написать нам в Whatsapp</span>
        </a>
      </Link>
      <Link href="#">
        <a className={styles.link}>
          <Image src={TelegramLogo} alt='telegram logo' />
          <span className={styles.text}>Написать нам в Telegram</span>
        </a>
      </Link>
    </div>
  );
};

export default ContactMessangers;