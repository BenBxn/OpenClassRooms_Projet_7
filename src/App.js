
import './App.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layouts/Layout"
import Accueil from "./Pages/Accueil/Accueil";
import APropos from "./Pages/Apropos/Apropos";

function App() { /*Apropos*/
  return (
    <div className="App">
      <main>
      <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/APropos" element={<APropos />}/>
                </Routes>
            </Layout>
        </HashRouter>
    </main>
    </div>
  );
}

export default App;
