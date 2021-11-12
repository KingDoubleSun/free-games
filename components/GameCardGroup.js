import GameCard from "./GameCard";

export default function GameCardGroup({ games_per_page, dataSet, loading }) {
  if (loading) {
    dataSet = Array.from({ length: games_per_page }).map((_, idx) => ({
      id: idx,
    }));
  }

  // return unfound message if there is no games.
  if (dataSet.length === 0) {
    return (
      <div className="row text-white mt-5">
        <h1 className="d-flex justify-content-center">No results found</h1>
        <h4 className="d-flex justify-content-center">
          Unfortunately, I was not able to find any results that matched your
          search.
        </h4>
      </div>
    );
  }

  return (
    <div className="row">
      {dataSet.map((game) => {
        return (
          <div className="col-md-3 my-3" key={game["id"]}>
            <GameCard data={game} loading={loading} />
          </div>
        );
      })}
    </div>
  );
}
