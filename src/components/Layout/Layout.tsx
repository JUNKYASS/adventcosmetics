import styles from './Layout.module.scss';

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export {
  Layout
};