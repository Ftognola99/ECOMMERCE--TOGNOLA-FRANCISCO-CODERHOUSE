import "./main.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Children } from "react";

const App = () => {
  return (
    <div className="background">
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer greetings="lista de productos" textColor="white"/>}/>
        <Route path="/productos" element={<ItemListContainer greetings="lista de productos" textColor="white"/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="/categoria/;categoriaId" element={<ItemListContainer greetings={Children.categoriaId}textColor="white"/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
