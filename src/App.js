import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;