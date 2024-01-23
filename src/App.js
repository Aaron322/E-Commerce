import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import men_banner from './Components/Assets/test_data/banner_mens.png'
import women_banner from './Components/Assets/test_data/banner_women.png'
import kid_banner from './Components/Assets/test_data/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Category-1"
            element={<ShopCategory banner={men_banner} category="Category-1" />}
          />
          <Route
            path="/Category-2"
            element={
              <ShopCategory banner={women_banner} category="Category-2" />
            }
          />
          <Route
            path="/Category-3"
            element={<ShopCategory banner={kid_banner} category="Category-3" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":product" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
