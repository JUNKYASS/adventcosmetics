import cn from 'classnames';
import { Link  } from 'react-scroll';
import styles from './NavMainItem.module.scss';

interface INavMainItemProps {
  id: string,
  name: string,
  active: boolean,
}

const NavMainItem: React.FC<INavMainItemProps> = (props) => {
  const { id, name, active } = props;

  return (
    <div className={cn(styles.root, { [styles.active]: active })}>
      <Link className={styles.link} to={id} smooth={true} duration={500}>{name}</Link>
    </div>
  );
};

export default NavMainItem;