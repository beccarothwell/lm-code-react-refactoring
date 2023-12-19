interface NavItemProps {
  navItem: string;
}

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  return (
    <li>
      <a>{navItem}</a>
    </li>
  );
};

export default NavItem;
