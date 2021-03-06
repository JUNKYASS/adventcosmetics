import cn from 'classnames';
import styles from './ActionButton.module.scss';
import Arrow from 'assets/images/arrow-action-btn.svg';
import Stars from 'assets/images/2stars.svg';
import Image from 'next/image';

interface IActionButtonProps {
  text?: string,
  cname?: string,
}

const ActionButton: React.FC<IActionButtonProps> = (props) => {
  const { text, cname } = props;

  return (
    <div className={cn(styles.root, cname)}>
      <span className={styles.text}>{text || 'Вперед'}</span>
      <span className={styles.icon}><Image src={Arrow} alt='button arrow icon' /></span>
      <span className={styles.stars}><Image src={Stars} alt='button stars icon' /></span>
    </div>
  );
};

export default ActionButton;