import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Pagina from "./pages/Pagina";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={Layout}>
          <Route path="/" element={Pagina} />
          <Route path="*" element={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
