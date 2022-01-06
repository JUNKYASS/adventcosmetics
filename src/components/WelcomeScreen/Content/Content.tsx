import Socials from 'components/Socials/Socials';
import styles from './Content.module.scss';
import Arrow from 'assets/images/triangle.svg';
import VideoPlay from 'assets/images/video-play.svg';
import Exclamation from 'assets/images/exclamation.svg';
import Image from 'next/image';
import ActionButton from 'components/ActionButton/ActionButton';

const Content = () => {
  return (
    <div className={styles.root}>
      <div className={styles.primary}>
        <div className={styles.arrow}><span className={styles.triangle}><Image src={Arrow} alt='offer arrow icon' className={styles.icon} /></span></div>
        <div className={styles.heading}>
          <div className={styles.headingFirst}>ЛЮБОВЬ — САМАЯ<br />ЛУЧШАЯ КОСМЕТИКА</div>
          <div className={styles.headingSecond}>...но косметику купить проще, а мы Вам с этим поможем</div>
        </div>
        <Socials />
      </div>
      <div className={styles.secondary}>
        <div className={styles.info}>
          <div className={styles.headingFirst}>Адвент-календарь с косметикой</div>
          <div className={styles.headingSecond}>Набор косметики суммарной стоимостью более 20 000 рублей — сделайте подарок себе или близкому человеку.<br />Качественная косметика из натуральных материалов ждет Вас!</div>
          <div className={styles.exclamation}>
            <span className={styles.icon}><Image src={Exclamation} alt='about calendar icon' /></span>
            <span className={styles.text}>Подробнее: что такое адвент-календарь?</span>
          </div>

          <ActionButton text='Смотреть набор' />

          <div className={styles.video}>
            <span className={styles.text}>Смотреть видео с распаковкой</span>
            <span className={styles.icon}><Image src={VideoPlay} alt='video play icon' /></span>
          </div>
        </div>
        <div className="photo">

        </div>
      </div>
    </div>
  );
};

export default Content;