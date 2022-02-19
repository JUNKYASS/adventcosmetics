import styles from './AboutScreen.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import commonStyles from 'styles/utils.module.scss';
import BackgroundImage from 'assets/images/about_screen_bg.svg';
import AboutlineImage from 'assets/images/aboutline.svg';

interface IAboutScreenProps {
  id?: string,
  refProp: any,
}

const AboutScreen: React.FC<IAboutScreenProps> = (props) => {
  const { id, refProp } = props;

  return (
    <section className={cn(styles.root, 'screen')} id={id} ref={refProp} >
      <Image 
        src={BackgroundImage}
        layout='fill'
        objectPosition='center'
        objectFit='cover'
        alt='about screen background image'
        priority
        className={styles.bg}
      />
      <div className={styles.aboutline}>
        <div className={styles.aboutlineImageBlock}>
          <Image
            src={AboutlineImage}
            layout='fixed'
            objectFit='contain'
            alt='aboutline image'
            className={styles.aboutlineImage}
          />
        </div>


        <div className={styles.heading}>
          <div className={styles.subHeading}>Что такое адвент-календарь?</div>
          <div className={styles.mainHeading}>Твой адвент-календарь с косметикой - это:</div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;