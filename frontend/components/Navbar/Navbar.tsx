// App
import Link from 'next/link';

// Styles
import styles from './Navbar.module.css';

type NavBarProps = {
  id: number;
  title: string;
  href: string;
  value: string;
};

export interface INavbar {
  items: Array<NavBarProps>;
}

const Navbar: React.FC<INavbar> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            <a className="mr-3" title={item.title}>
              {item.value}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
