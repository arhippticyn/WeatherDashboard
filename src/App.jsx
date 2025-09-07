import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import AuthModal from "./components/AuthModal/AuthModal";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Main />
      <Footer />
      {/* <AuthModal></AuthModal> */}
    </div>
  );
}

export default App;
