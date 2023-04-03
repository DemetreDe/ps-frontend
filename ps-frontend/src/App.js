
import Login from "./components/login/login"
import Products from "./components/products/ProductPage";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
