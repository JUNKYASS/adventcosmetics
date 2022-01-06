import NavMainItem from './NavMainItem/NavMainItem';

import styles from './NavMain.module.scss';

const NavMain = () => {
  const navItems = [
    {
      id: 'contacts',
      name: 'Контакты'
    },
    {
      id: 'delivery',
      name: 'Доставка'
    },
    {
      id: 'faq',
      name: 'Частые вопросы'
    },
    {
      id: 'order',
      name: 'Заказать',
      active: true
    },
  ];

  return (
    <div className={styles.root}>
      {
        navItems.map(item => {
          return <NavMainItem
            key={item.id}
            id={item.id} 
            name={item.name} 
            active={item.active || false}
          />;
        })
      }
    </div>
  );
};

export default NavMain;