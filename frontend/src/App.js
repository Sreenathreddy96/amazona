import data from "./data";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";



function App() {
  return (
    <BrowserRouter>
    <div >
      <header >
        <a href="/">amazona</a>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>
        </Routes>
       
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
