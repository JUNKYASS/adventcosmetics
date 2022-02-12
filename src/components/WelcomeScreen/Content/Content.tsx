import styles from './Content.module.scss';
import Arrow from 'assets/images/triangle.svg';
import VideoPlay from 'assets/images/video-play.svg';
import Exclamation from 'assets/images/exclamation.svg';
import CalendarPhoto from 'assets/images/calendar-photo-test.jpg';
import Backgrid from 'assets/images/backgrid.svg';
import Image from 'next/image';
import Socials from 'components/Socials/Socials';
import ActionButton from 'components/ActionButton/ActionButton';
import ContactMessangers from 'components/ContactMessangers/ContactMessangers';
import { useMediaQuery } from 'react-responsive';

const Content = () => {
  const isMobile = useMediaQuery({ maxWidth: 540 });

  return (
    <div className={styles.root}>
      <div className={styles.welcomeHeading}>
        <div className={styles.arrow}><span className={styles.triangle}><Image src={Arrow} alt='offer arrow icon' className={styles.icon} /></span></div>
        <div className={styles.heading}>
          <div className={styles.headingFirst}>ЛЮБОВЬ — САМАЯ<br />ЛУЧШАЯ КОСМЕТИКА</div>
          <div className={styles.headingSecond}>...но косметику купить проще, а мы Вам с этим поможем</div>
        </div>
        {!isMobile && <Socials />}
      </div>
      <div className={styles.offer}>
        {isMobile && <Socials cname={styles.socials} />}
        <div className={styles.headingFirst}>Адвент-календарь с косметикой</div>
        <div className={styles.headingSecond}>Набор косметики суммарной стоимостью более 20 000 рублей — сделайте подарок себе или близкому человеку.<br />Качественная косметика из натуральных материалов ждет Вас!</div>
        <div className={styles.exclamation}>
          <span className={styles.icon}><Image src={Exclamation} alt='about calendar icon' /></span>
          <span className={styles.text}><span>Что такое адвент-календарь?</span></span>
        </div>

        <ActionButton text='Смотреть набор' cname={styles.actionBtn} />

        <div className={styles.video}>
          <span className={styles.text}>Смотреть видео с распаковкой</span>
          <span className={styles.icon}><Image src={VideoPlay} alt='video play icon' /></span>
        </div>

        <ContactMessangers cname={styles.messengers} />

        {/* <div className={styles.videoAndMessangers}>
          <div className={styles.video}>
            <span className={styles.text}>Смотреть видео с распаковкой</span>
            <span className={styles.icon}><Image src={VideoPlay} alt='video play icon' /></span>
          </div>
          <ContactMessangers cname={styles.messengers} />
        </div> */}

        <div className={styles.photo}>
          <div className={styles.calendarPhoto}><Image src={CalendarPhoto} alt='calendar photo' /></div>
          <div className={styles.backgrid}><Image src={Backgrid} alt='backgrid image' /></div>
          <div className={styles.backlight}></div>
        </div>
      </div>
    </div>
  );
};

export default Content;