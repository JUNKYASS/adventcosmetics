import Header from 'components/WelcomeScreen/Header/Header';

import styles from './WelcomeScreen.module.scss';
import commonStyles from 'styles/utils.module.scss';

const WelcomeScreen = () => {
  return (
    <section className={styles.root}>
      <div className={commonStyles.contentCentered}>
        <Header />
      </div>
    </section>
  );
};

export default WelcomeScreen;