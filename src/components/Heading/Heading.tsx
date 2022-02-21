import styles from './Heading.module.scss';
import cn from 'classnames';

interface IHeadingProps {
  subText: string,
  mainText: string,
  className?: string
}

const Heading: React.FC<IHeadingProps> = (props) => {
  const { subText, mainText, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.subHeading}>{subText}</div>
      <div className={styles.mainHeading}>{mainText}</div>
    </div>
  );
};

export default Heading;