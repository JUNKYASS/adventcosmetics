import styles from 'NavMenu.module.scss';

const NavMenu = () => {
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
      name: 'Заказать'
    },
  ];
  return (
    <div className={styles.root}>
      
    </div>
  );
};

export default NavMenu;