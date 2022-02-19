import styles from './BoxCompositionScreen.module.scss';
// import Image from 'next/image';
import cn from 'classnames';
import commonStyles from 'styles/utils.module.scss';
import { productsMap } from 'assets/svg';

interface IBoxCompositionScreenProps {
  id?: string,
  refProp: any,
}

const BoxCompositionScreen: React.FC<IBoxCompositionScreenProps> = (props) => {
  const { id, refProp } = props;

  return (
    <div className={cn(styles.root)} id={id} ref={refProp} >
      <div className={cn(styles.inner, commonStyles.contentCentered)}>
        <div className={styles.boxContent}>
          <div className={styles.compositionCircle}>{productsMap}</div>
        </div>
      </div>
    </div>
  );
};

export default BoxCompositionScreen;