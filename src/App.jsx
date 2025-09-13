import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import { Cards } from "./components/Cards/Cards";
import AuthModal from "./components/AuthModal/AuthModal";

function App() {
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [username, setUsername] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const onSearch = () => {
    setSearchValue(query);
  };

  const handleWeeklyClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="page-wrapper">
      <Header
        username={username}
        setUsername={setUsername}
        setIsHidden={setIsHidden}
      />
      <Hero query={query} setQuery={setQuery} onSearch={onSearch} />
      <Main searchValue={searchValue} selectedCity={selectedCity} />
      <Footer />
      <AuthModal
        setUsername={setUsername}
        setIsHidden={setIsHidden}
        isHidden={isHidden}
      ></AuthModal>
    </div>
  );
}

export default App;
