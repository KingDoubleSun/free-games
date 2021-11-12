import Navigator from "./Navigator";

const Layout = ({ children }) => {
  return (
    <div className="bg-dark">
      <Navigator />
      {children}
    </div>
  );
};

export default Layout;
