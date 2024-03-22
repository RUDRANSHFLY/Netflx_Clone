import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row/Row";
import allLinks from "../network/Request";

const Home = () => {
  return (
    <div className="home overflow-x-hidden">
      <Navbar />
      <Banner />
      <Row
        tittle={"NETFLIX ORIGINALS"}
        fetchUrl={allLinks.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        tittle={"TOP RATED MOVIES"}
        fetchUrl={allLinks.fetchTopRated}
        isLargeRow={false}
      />

      <Row
        tittle={"ACTION MOVIES"}
        fetchUrl={allLinks.fetchActionMovies}
        isLargeRow={false}
      />

      <Row
        tittle={"COMEDY MOVIES"}
        fetchUrl={allLinks.fetchComedyMovies}
        isLargeRow={false}
      />

      <Row
        tittle={"HORROR MOVIES"}
        fetchUrl={allLinks.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        tittle={"ROMANTIC MOVIES"}
        fetchUrl={allLinks.fetchRomanaceMovies}
        isLargeRow={false}
      />
      <Row
        tittle={"DOCUMENATRIES"}
        fetchUrl={allLinks.fetchDocumentaries}
        isLargeRow={false}
      />

      <Row
        tittle={"CRIME MOVIES"}
        fetchUrl={allLinks.fetchCrimeMovies}
        isLargeRow={true}
      />

      <Row
        tittle={"ANIMATION"}
        fetchUrl={allLinks.fetchAnimation}
        isLargeRow={false}
      />
      <Row tittle={"WAR"} fetchUrl={allLinks.fetchWar} isLargeRow={false} />
    </div>
  );
};

export default Home;
