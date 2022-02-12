import NavMainItem from './NavMainItem/NavMainItem';
import cn from 'classnames';
import styles from './NavMain.module.scss';

interface INavMainProps {
  cname?: string,
}

const NavMain: React.FC<INavMainProps> = (props) => {
  const { cname } = props;
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
    <div className={cn(styles.root, cname)}>
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