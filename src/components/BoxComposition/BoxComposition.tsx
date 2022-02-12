import styles from './BoxComposition.module.scss';
// import Image from 'next/image';
import cn from 'classnames';
import commonStyles from 'styles/utils.module.scss';
import { productsMap } from 'assets/svg';

interface IBoxCompositionProps {
  id?: string,
  refProp: any,
}

const BoxComposition: React.FC<IBoxCompositionProps> = (props) => {
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

export default BoxComposition;