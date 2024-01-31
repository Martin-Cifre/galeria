import React from "react";

interface resultadosProps {
  images: { id: string; webformatURL: string; tags: string }[];
}

const resultados: React.FC<resultadosProps> = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.webformatURL} alt={image.tags} />
      ))}
    </div>
  );
};

export default resultados;
