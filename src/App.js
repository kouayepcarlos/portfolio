import './App.css';
import Accueil from './components/accueil';
import Comptence from './components/Competence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/portfolio';
import Propos from './components/propos';

import React, { useState, useEffect } from "react";
import './index.css';
import Loader from './components/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulez un délai pour le chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 ms = 3 secondes

    return () => clearTimeout(timer); // Nettoyez le timer si le composant est démonté
  }, []);
  return (
    <div className="App">
        
        {isLoading ? (
        <Loader /> // Affiche le loader si le contenu est en chargement
      ) : (
        <>
          <Accueil />
          <Propos />
          <Portfolio />
          <Comptence />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
