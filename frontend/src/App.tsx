import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./config/Menu";
import Navbar from "./components/Layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-200">
          <Navbar />
          <main>
            <Routes>
              {Menu.map(({ path, element, index }, key) => (
                <Route key={key} path={path} element={element} index={index} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
