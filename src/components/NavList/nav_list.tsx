import NavItem from "../NavItem/nav_item";

interface NavListProps {
  navList: string[];
}

const NavList: React.FC<NavListProps> = ({ navList }) => {
  return (
    <ul className="go-somewhere">
      {navList.map((item, i) => {
        return <NavItem key={i} navItem={item} />;
      })}
    </ul>
  );
};

export default NavList;
