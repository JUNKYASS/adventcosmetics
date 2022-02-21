import styles from './AboutScreen.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import commonStyles from 'styles/utils.module.scss';
import BackgroundImage from 'assets/images/about_screen_bg.svg';
import AboutlineImage from 'assets/images/aboutline.svg';
import Heading from 'components/Heading/Heading';
import { aboutStages, IAboutStages } from './data';

interface IAboutScreenProps {
  id?: string,
  refProp: any,
}

const AboutScreen: React.FC<IAboutScreenProps> = (props) => {
  const { id, refProp } = props;

  const createStage = (item: IAboutStages) => (
    <div className={styles.aboutStage}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.descr}>
        <span>{item.descr1}</span>
        <br /><br />
        <span>{item.descr2}</span>
      </div>
    </div>
  );

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
      <div className={cn(styles.aboutline, commonStyles.contentCentered)}>
        <div className={styles.aboutlineImageBlock}>
          <Image
            src={AboutlineImage}
            layout='fixed'
            objectFit='contain'
            alt='aboutline image'
            className={styles.aboutlineImage}
          />
        </div>

        <Heading
          mainText='Твой-адвент-календарь с косметикой — это:'
          subText='Что такое адвент-календарь?'
          className={styles.heading}
        />

        <div className={styles.aboutStages}>
          {aboutStages.map(item => createStage(item))}
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;