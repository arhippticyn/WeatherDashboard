import Header from "./components/Header/Header";
import Main from "./components/Main";
import News from "./components/News/News"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <News />
      <Main />
    <Footer />
    </div>
  );
}

export default App;
