import "./main.scss";
import NavBar from "./components/navBar/NavBar.js";
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
  <NavBar>
    <Routes
    path="/" element={<ItemListContainer greetings="lista de producots"/>}
    />
        <Route
    path="/productos" element={<ItemListContainer greetings="lista de producots"/>}
    />
        <Route
    path="/detalle/:id" element={<ItemListContainer greetings="lista de producots"/>}
    />
        <Route
    path="/categoria/:categoriaId" element={<ItemListContainer greetings={Children.categoriaId}/>}
    />
    <Route path="/contacto" element={<Contact/>}/>

    <Route path="/cart" element={<Cart/>} />

    <Routes/>
  </NavBar>
  </BrowserRouter>
</CartProvider>

    </div>
  );
}

export default App;
