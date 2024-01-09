import styled from "styled-components";
import { ImageSlider } from "../../components/common";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGames, selectAllGamesStatus } from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import SearchPage from "../../components/search/SearchPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
  }, []);

  return (
    <HomeWrapper>
      <section className="section sc-popular">
        <div className="container">
          <SearchPage games={games} />
        </div>
      </section>

      <ImageSlider />
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }
`;
