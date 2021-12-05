import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </React.Fragment>
  );
};

export default App;
