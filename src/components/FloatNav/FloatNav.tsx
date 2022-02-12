import styles from './FloatNav.module.scss';
import cn from 'classnames';
import React from 'react';

interface IFloatNavProps {
  elements?: React.ReactNode,
  isWindowScrolled?: boolean,
  currentScreen: number,
}

const FloatNav: React.FC<IFloatNavProps> = (props) => {
  const { elements, isWindowScrolled, currentScreen } = props;

  const items = React.Children.map(elements, (item: any, i) => {
    if (!item?.props.id) return null;

    const index = i + 1;

    const isActive = currentScreen === i;

    return <div className={cn(styles.item, { [styles.active]: isActive })}>0{index}</div>;
  });

  return (
    <div className={cn(styles.root, { [styles.scrolled]: isWindowScrolled })}>
      {items}
    </div>
  );
};

export default FloatNav;