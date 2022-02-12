import styles from './AboutScreen.module.scss';
import cn from 'classnames';
import commonStyles from 'styles/utils.module.scss';
import { productsMap } from 'assets/svg';
import { useEffect } from 'react';

interface IAboutScreenProps {
  id?: string,
  refProp: any,
}

const AboutScreen: React.FC<IAboutScreenProps> = (props) => {
  const { id, refProp } = props;

  return (
    <section className={cn(styles.root, 'screen')} id={id} ref={refProp} >
      {/* <div className={styles.productsMap}>{productsMap}</div> */}
    </section>
  );
};

export default AboutScreen;