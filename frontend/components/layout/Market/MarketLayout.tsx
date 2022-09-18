import Navbar from '../../reusable/Navbar/Navbar';

export const MarketLayout = ({ children }: { children: React.ReactNode }) => {
  const navbarItems = {
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
  return (
    <>
      <Navbar items={navbarItems.items} />
      <main>{children}</main>
    </>
  );
};
