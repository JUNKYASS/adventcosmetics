import styles from './Socials.module.scss';
import Instagram from 'assets/images/instagram.svg';
import Facebook from 'assets/images/facebook.svg';
import Vk from 'assets/images/vk.svg';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

interface ISocialsProps {
  cname?: string,
}

const Socials: React.FC<ISocialsProps> = (props) => {
  const { cname } = props;

  const socialsList = [
    {
      id: 'vk',
      name: 'vk',
      link: 'https://vk.com/adventcosmetics',
      icon: Vk,
    },
    {
      id: 'fb',
      name: 'fb',
      link: 'https://vk.com/adventcosmetics',
      icon: Facebook
    },
    {
      id: 'inst',
      name: 'inst',
      link: 'https://vk.com/adventcosmetics',
      icon: Instagram
    },
  ];

  return (
    <div className={cn(styles.root, cname)}>
      {
        socialsList.map(item => {
          return (
            <div  className={styles.item} key={item.id}>
              <Link href={item.link}>
                <a>
                  <Image src={item.icon} alt={item.name} />
                </a>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Socials;