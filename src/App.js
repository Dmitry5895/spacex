import React from "react";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import logo from "./logo.svg";
import "./style.css";

function App() {
  return (
    <>
    <Header />
    <Main />
    <Calendar />
    <Details />
    <Features />
    <Footer />
    </>
  );
}

export default App;
