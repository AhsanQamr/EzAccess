import './App.css';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import DetailedPage from './Components/Products/DetailedPage';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SentimentAnalysis from './Components/Products/SentimentAnalysis';
import SearchProducts from './Components/Products/SearchProducts';
import PriceComparison from './Components/Products/PriceComparison';
import ProductsComparison from './Components/Products/ProductsComparison';


function App() {
  return (
      <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mobiles" element={<Products category="Mobiles" />} />
          <Route path="/laptops" element={<Products category="Laptops" />} />
          <Route path="/tablets" element={<Products category="Tablets" />} />
          <Route path="/watches" element={<Products category="Watches" />} />
          <Route path="/accessories" element={<Products category="Accessories" />} />
          <Route path="/:dbName/:collectionName/:productId" element={<DetailedPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sentiment' element = {<SentimentAnalysis />} />
          <Route path='/products' element = {<SearchProducts />} />
          <Route path='/comparison' element = {<ProductsComparison />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
