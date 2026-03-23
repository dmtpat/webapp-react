import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Pagina from "./pages/Pagina";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Pagina} ></Route>
          <Route path="*" Component={NotFound} ></Route>
        </Route>
      </Routes >
    </BrowserRouter >
  )
}

export default App
