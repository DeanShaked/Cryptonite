import { INavbar } from './Navbar';

const base: INavbar = {
  items: [
    {
      id: 1,
      title: 'Home',
      href: '/',
      value: 'Home',
    },
    {
      id: 2,
      title: 'Market',
      href: '/market',
      value: 'NFT Marketplace',
    },
    {
      id: 3,
      title: 'Exchange',
      href: '/exchange',
      value: 'Exchange',
    },
    {
      id: 4,
      title: 'Cynite DAO',
      href: '/dao',
      value: 'Cynite DAO',
    },
  ],
};

export const mockNavbarProps = {
  base,
};
