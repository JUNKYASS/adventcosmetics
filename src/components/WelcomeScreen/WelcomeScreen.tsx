import Header from 'components/WelcomeScreen/Header/Header';
import BackgroundImage from 'assets/images/gradient-welcome-screen.svg';
import styles from './WelcomeScreen.module.scss';
import commonStyles from 'styles/utils.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import Content from './Content/Content';

interface IWelcomeScreenProps {
  id?: string,
  refProp: any,
}

const WelcomeScreen: React.FC<IWelcomeScreenProps> = (props) => {
  const { id, refProp } = props;

  return (
    <section className={cn(styles.root, 'screen')} id={id} ref={refProp} >
      <Image 
        src={BackgroundImage} 
        layout='fill'
        objectFit='cover'
        alt='welcome screen background image'
        priority
        className={styles.bg}
      />
      <div className={cn(styles.content, commonStyles.contentCentered)}>
        <Header />
        <Content />
      </div>
    </section>
  );
};

export default WelcomeScreen;