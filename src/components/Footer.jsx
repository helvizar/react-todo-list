const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <div className="container">
        &copy; {new Date().getFullYear()} Helvizar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
