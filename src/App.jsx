import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleWeeklyClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Cards onWeeklyClick={handleWeeklyClick} />
      <Main selectedCity={selectedCity}  />
      <Footer />
    </div>
  );
}

export default App;
