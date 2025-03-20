import Logo from "../../assets/Logo/page-icon-new-horizons.svg";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <img src={Logo} alt="New Horizons Logo" className="h-14" />
        <h1 className="text-blue-400 text-xl ml-4">Employee Management Tool</h1>
      </div>
    </header>
  );
};

export default Header;
