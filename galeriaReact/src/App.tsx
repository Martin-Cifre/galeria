// App.tsx
import React, { useState } from "react";
import PixabaySearch from "./api/fetchImagenes";
import Resultados from "./assets/resultados/resultados";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);

  const handleImages = (newImages: any[]) => {
    setImages(newImages);
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <PixabaySearch onImages={handleImages} />
        </div>
      </header>
      <main>
        <Resultados images={images} />
      </main>
    </>
  );
};

export default App;
