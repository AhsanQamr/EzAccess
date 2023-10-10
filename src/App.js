import './App.css';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import DetailedPage from './Components/Products/DetailedPage';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SentimentAnalysis from './Components/Products/SentimentAnalysis';


function App() {
  return (
      <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mobiles" element={<Products category="mobiles" />} />
          <Route path="/laptops" element={<Products category="laptops" />} />
          <Route path="/tablets" element={<Products category="tablets" />} />
          <Route path="/watches" element={<Products category="watches" />} />
          <Route path="/accessories" element={<Products category="accessories" />} />
          <Route path="/:dbName/:collectionName/:productId" element={<DetailedPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sentiment' element = {<SentimentAnalysis />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
