
import './App.css';
import { HashRouter, Routes, Route,} from "react-router-dom";

import Layout from "./Layouts/Layout"
import Accueil from "./Pages/Accueil/Accueil";
import APropos from "./Pages/Apropos/Apropos";
import Erreur404 from "./Pages/Erreurs/Erreurs";
import Logement from "./Pages/Logements/Logements";

function App() { /*Dossier Routes?s*/
  return (
    <div className="App">
      <main>
      <HashRouter>
            <Layout>
                <Routes>
                    <Route index element={<Accueil />} />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/APropos" element={<APropos />}/>
                    <Route path="/logement/:id" element={<Logement />}/>
                    <Route path="*" element={<Erreur404 />}/>

                </Routes>
            </Layout>
        </HashRouter>
    </main>
    </div>
  );
}

export default App;
