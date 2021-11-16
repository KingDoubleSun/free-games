import Navigator from "./Navigator";
import Loader from "./Loader";
import { useEffect } from "react";

const Layout = ({ children, loading }) => {
  // keep document body background dark
  useEffect(() => {
    document.querySelector("body").classList.add("bg-dark");
  });
  return (
    <>
      <Navigator />
      {loading ? <Loader loading={loading} /> : null}
      {children}
    </>
  );
};

export default Layout;
