import Nav from "../NavList/nav_list";

interface HeaderProps {
  navList: string[];
}

const Header: React.FC<HeaderProps> = ({ navList }) => {
  return (
    <header className="site-header">
      <div className="site-identity">
        <a>
          <img
            className="eefe-logo"
            src="/icons8-space-64.png"
            alt="eefe spaceship logo"
          />
        </a>
        <h1>Extraterrestrial Excursions for Earthlings</h1>
      </div>
      <Nav navList={navList} />
    </header>
  );
};

export default Header;
