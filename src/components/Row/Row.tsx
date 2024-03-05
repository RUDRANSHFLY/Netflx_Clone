import { useState, useEffect } from "react";
import "./Row.scss";
import axios from "../../network/axios";

type Prop = {
  tittle: string;
  fetchUrl: string;
  isLargeRow: boolean;
};

const Row = (prop: Prop) => {
  const base_url: string = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(prop.fetchUrl);
      setMovies(req.data.results);
      return req;
    }

    fetchData();
  }, [prop.fetchUrl]);

  return (
    <div className="row">
      <h2>{prop.tittle}</h2>

      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            src={`${base_url}${
              prop.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`rowPoster ${prop.isLargeRow && "rowPosterLarge"}`}
            key={movie.id}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
