import './App.css';
import Footer from './Components/UI/Footer';
import Header from './Components/UI/Header';
import Home from './Components/UI/Home';
import Row from './Components/UI/Row';

function App() {
  return (
      <>
      <div className='App'>
        <Header />
        <Row />
        <Home />
        <Footer />
      </div>
      </>
  );
}

export default App;
