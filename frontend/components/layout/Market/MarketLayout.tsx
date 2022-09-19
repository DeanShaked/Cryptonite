// Components
import Navbar from '../../reusable/Navbar/Navbar';

// Mock
import { mockNavbarProps } from '../../reusable/Navbar/Navbar.mock';

export const MarketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <aside className="flex ">
        <Navbar items={mockNavbarProps.market_header.items} />
      </aside>
      <main>{children}</main>
    </div>
  );
};
