import { INavbar } from './Navbar';

const header: INavbar = {
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

const market_header: INavbar = {
  items: [
    {
      id: 1,
      title: 'home',
      href: '/market/',
      value: 'Home',
    },
    {
      id: 2,
      title: 'create-nft',
      href: '/market/create-nft',
      value: 'Create NFT',
    },
    {
      id: 3,
      title: 'dashboard',
      href: '/market/dashboard',
      value: 'Dashboard',
    },
    {
      id: 4,
      title: 'my-assets',
      href: '/market/my-assets',
      value: 'My Assets',
    },
  ],
};

export const mockNavbarProps = {
  header,
  market_header,
};
