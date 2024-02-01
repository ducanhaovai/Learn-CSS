import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginSignup } from "./components/login-signup/LoginSignup";
import { Indexs } from "./components/header/Indexs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Indexs />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
