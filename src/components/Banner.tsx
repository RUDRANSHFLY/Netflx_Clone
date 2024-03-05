import { useEffect, useState } from "react";
import "../components/Banner.scss";
import axios from "../network/axios";
import allLinks from "../network/Request";

interface Movie {
  overview: string;
  original_title: string;
  backdrop_path: string;
}

const trimmer = (s: string | undefined, n: number) => {
  if (s == undefined) {
    return;
  }
  return s?.length > n ? s.substring(0, n - 1) + "..." : s;
};

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(allLinks.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const dektopBanner = movie
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : "";

  return (
    <div className="banner relative">
      <img className="" src={dektopBanner} alt="" srcSet="" />
      <div className="bannerDetail absolute top-0">
        <h1 className="bannerTittle">{movie?.original_title}</h1>
        <div className="bannerButtons">
          <button className="bannerButton">play</button>
          <button className="bannerButton">My list</button>
        </div>
        <h1 className="bannerDesc">{trimmer(movie?.overview, 150)}</h1>
      </div>
      {/* <div className="bannerFadeBottom" /> */}
    </div>
  );
};

export default Banner;
