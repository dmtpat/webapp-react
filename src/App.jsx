import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import MoviesListPage from "./pages/MoviesListPage";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={HomePage} ></Route>
          <Route path="/movies" Component={MoviesListPage} ></Route>
          <Route path="*" Component={NotFound} ></Route>
        </Route>
      </Routes >
    </BrowserRouter >
  )
}

export default App
