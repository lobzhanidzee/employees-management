const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} New Horizons Project. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
