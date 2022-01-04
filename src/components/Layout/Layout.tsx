import styles from './Layout.module.scss';
import cn from 'classnames';

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <div className={cn(styles.layout)}>
      {children}
    </div>
  );
};

export {
  Layout
};