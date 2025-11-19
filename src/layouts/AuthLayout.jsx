import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../Pages/Loading";

const AuthLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
