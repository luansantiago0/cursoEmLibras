import React from "react";
import Header from "../components/Header";
import HomePage from "./(home)";

const App: React.FC = () => {
  return (
    <div className="App bg-[#FFFFFF]">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
