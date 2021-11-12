import Navigator from "./Navigator";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <body className="bg-dark" />
      </Head>
      <div>
        <Navigator />
        {children}
      </div>
    </>
  );
};

export default Layout;
