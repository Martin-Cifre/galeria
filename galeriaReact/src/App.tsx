// App.tsx
import React from "react";
import PixabaySearch from "./api/fetchImagenes";
//import Resultados from "./assets/resultados/resultados";
import styles from "./App.module.css";

const App: React.FC = () => {
  

  const handleImages = (newImages: any[]) => {
    setImages(newImages);
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <PixabaySearch onImages={handleImages} />
        </div>
      </header>
      
    </>
  );
};

export default App;
