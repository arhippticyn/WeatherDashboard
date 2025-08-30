import Header from "./components/Header/Header";
import Main from "./components/Main";
import News from "./components/News/News"
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Main />
    <Footer />
    </div>
  );
}

export default App;
