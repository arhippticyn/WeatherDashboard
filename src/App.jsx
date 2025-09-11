import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import AuthModal from "./components/AuthModal/AuthModal";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");
   const [selectedCity, setSelectedCity] = useState(null);
  
   const onSearch = () => {
    setSearchValue(query);

  const handleWeeklyClick = (city) => {
    setSelectedCity(city);

  return (
    <div className="page-wrapper">
      <Header />
      <Hero query={query} setQuery={setQuery} onSearch={onSearch} />
      <Main searchValue={searchValue} selectedCity={selectedCity} />
      <Footer />
    </div>
  );
}

export default App;
