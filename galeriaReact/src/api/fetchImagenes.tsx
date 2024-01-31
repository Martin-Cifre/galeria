// PixabaySearch.tsx
import React, { useState } from "react";

interface PixabaySearchProps {
  onImages: (newImages: any[]) => void;
}

const PixabaySearch: React.FC<PixabaySearchProps> = ({ onImages }) => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const apiKey = "42101566-27cbcb92d259ca511cd87aac9";
  const endpoint = "https://pixabay.com/api/";

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${endpoint}?key=${apiKey}&q=${query}`);
      const data = await response.json();
      setImages(data.hits);
      onImages(data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="query">Buscar:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
};

export default PixabaySearch;
