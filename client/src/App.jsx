import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
import Images from './components/Images';
const App = () => {
  return (
      <div className="App">
        <Header />
        <Main />
        <Images />
        <Footer />
      </div>
  );
};

export default App;
