import styles from './AdvantagesScreen.module.scss';
import cn from 'classnames';

interface IAdvantagesScreenProps {
  id?: string,
  refProp: any,
}

const AdvantagesScreen: React.FC<IAdvantagesScreenProps> = (props) => {
  const { id, refProp } = props;

  return (
    <section className={cn(styles.root, 'screen')} id={id} ref={refProp} >
      
    </section>
  );
};

export default AdvantagesScreen;