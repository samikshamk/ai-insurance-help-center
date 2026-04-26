import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./config/Menu";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 font-sans">
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
