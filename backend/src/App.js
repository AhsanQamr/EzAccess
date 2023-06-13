import './App.css';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';

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
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
