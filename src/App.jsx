import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    setSearchValue(query);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <Hero query={query} setQuery={setQuery} onSearch={onSearch} />
      <Main searchValue={searchValue} />
      <Footer />
    </div>
  );
}

export default App;
