import axios from "axios";
import GameCardGroup from "../components/GameCardGroup";
import PageSystem from "../components/PageSystem";
import Navigator from "../components/Navigator";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { useState, useEffect } from "react";

export default function Home() {
  const GAMES_PER_PAGE = 24;

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [filterPlatform, setFilterPlatform] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [sortCondition, setSortCondition] = useState("relevance");

  // fetch game data
  useEffect(() => {
    const filter = filterCategory.length ? "filter" : "games";

    const options = {
      method: "GET",
      url: `https://free-to-play-games-database.p.rapidapi.com/api/${filter}`,
      params: {
        platform: filterPlatform.length === 1 ? filterPlatform[0] : "all",
        tag: filterCategory.join("."),
        "sort-by": sortCondition,
      },
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "5bf162546cmsh7125237bb311b0fp1c906fjsn76a33950d8fb",
      },
    };

    const fetchGames = async () => {
      setLoading(true);
      const res = await axios.request(options);
      // status 201, no games foud
      const data = res["status"] !== 201 ? res["data"] : [];
      setGames(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchGames();
  }, [filterCategory, filterPlatform, sortCondition]);

  // variables and functions for change pages
  const end_index = currentpage * GAMES_PER_PAGE;
  const start_index = end_index - GAMES_PER_PAGE;
  const displayed_games = games.slice(start_index, end_index);
  function paginate(number) {
    setLoading(true);
    setCurrentpage(number);
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 500);
  }

  // variables and functions for change filters
  function addFilter(method, condition, value) {
    if (method === "remove") {
      if (condition === "category")
        setFilterCategory((old) =>
          old.filter((item) => item !== value.toLowerCase())
        );
      else if (condition === "platform")
        setFilterPlatform((old) =>
          old.filter((item) => item !== value.toLowerCase())
        );
    } else if (method === "add") {
      setCurrentpage(1);
      if (condition === "category")
        setFilterCategory((old) => [...old, value.toLowerCase()]);
      else if (condition === "platform")
        setFilterPlatform((old) => [...old, value.toLowerCase()]);
    }
  }

  // function for change sort order
  function changeSortCondition(new_condition) {
    setSortCondition(new_condition);
  }

  return (
    <div className="container">
      <div className="col-2 mt-3 text-white">
        Sort By:
        <Sort changeCondition={changeSortCondition} />
      </div>

      <div className="row">
        <div className="col-10">
          <GameCardGroup
            games_per_page={GAMES_PER_PAGE}
            dataSet={displayed_games}
            loading={loading}
          />
          <div className="d-flex justify-content-center">
            <PageSystem
              current_page={currentpage}
              games_per_page={GAMES_PER_PAGE}
              data_length={games.length}
              paginate={paginate}
            />
          </div>
        </div>
        <div className="col-2">
          <Filter addFilter={addFilter} />
        </div>
      </div>
    </div>
  );
}
