import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

const pages = import.meta.glob("./pages/*.jsx");

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  const Component = lazy(pages[path]);
  return {
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    element: <Component />,
  };
});

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
