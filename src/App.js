
import './App.css';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Loging from './Pages/Loging';
import ShopCatogory from './Pages/ShopCatogory'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './Pages/Products';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kids_banner from './Components/Assests/banner_kids.png';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/men' element={<ShopCatogory banner={men_banner} category="mens"/>}/>
          <Route path='/women' element={<ShopCatogory banner={women_banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCatogory banner={kids_banner} category="kids"/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path=':productId' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loging/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
