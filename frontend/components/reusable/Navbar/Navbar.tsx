// App
import Link from 'next/link';

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
    <div className="flex flex-column w-full items-center justify-center">
      {items.map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            <a
              className="flex flex-row text-dim-white font-medium first:ml-2 last:mr-2 mx-4 hover:scale-110 duration-200"
              title={item.title}
            >
              {item.value}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
