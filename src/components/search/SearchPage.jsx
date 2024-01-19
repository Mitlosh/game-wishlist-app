import { useState } from "react";
import styled from "styled-components";
import GameList from "../game/GameList";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import { FaSearch } from "react-icons/fa";

const API_URL = "https://api.rawg.io/api/games?key=6c89e34d9d5f41f8bffa498ddb3717d4";
let numResults;

const SearchPage = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchGames = async (title) => {
    setLoading(true);
    if (title !== "") {
      const response = await fetch(`${API_URL}&search=${title}`);
      const data = await response.json();
      setSearchedGames(data.results);
      numResults = parseInt(data.count);
    }
    setLoading(false);
  };

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  return (
    <SearchPageWrapper>
      <div className="container">
        <div className="d-flex mb-5 ">
          <input
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Games . . ."
            onKeyPress={(e) => {
              if (e.key === "Enter") searchGames(searchTerm);
            }}
            type="text"
          />{" "}
          <button
            className="search-btn"
            onClick={() => {
              searchGames(searchTerm);
            }}>
            <FaSearch className="m-0" />
          </button>
        </div>

        <div className="flex justify-center">
          {searchedGames?.length > 0 ? (
            <div>
              {/* grid of games */}
              <GameList sliceValue={9} games={searchedGames} />
            </div>
          ) : (
            <div>
              <Title titleName={{ firstText: "top popular", secondText: "games" }} />
              {renderedPopularGames}
            </div>
          )}
        </div>
      </div>
    </SearchPageWrapper>
  );
};

export default SearchPage;

const SearchPageWrapper = styled.div`
  .sc-creators {
    min-height: 100vh;
    padding-top: 65px;
  }

  .search-input {
    // width: 75%;
    margin-left: auto;
    border: none;
    border-radius: 6px 0 0 6px;
    padding: 1em 1.5em;
  }

  .search-btn {
    // width: 25%;
    font-size: 16px;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: var(--clr-green-normal);
    color: white;
    padding: 1em 1.5em 0.875em 1.5em;
    cursor: pointer;
  }
`;
