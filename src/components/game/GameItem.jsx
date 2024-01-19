import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import PropTypes from "prop-types";
import { StarRating } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { addGame, removeGame } from "../../redux/store/playlistSlice";

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}.${date}.${year}`;
};

const GameItem = ({ gameItem, isGrid }) => {
  const dispatch = useDispatch();
  const gamesArray = useSelector((state) => state.playlist.playlist);

  const addToPlaylist = (game) => {
    const selectedGame = gamesArray.find((item) => item.id === game.id);
    if (!selectedGame) {
      const currentDate = getDate();
      const updatedGame = {
        ...game,
        added_date: currentDate,
      };

      console.log(updatedGame);

      dispatch(addGame(updatedGame));
    } else {
      alert("Game is already in playlist");
    }
  };

  return (
    <GameItemWrapper>
      {isGrid ? (
        <Grid>
          <Link to={`/games/${gameItem?.id}`}>
            <div className="card-top img-fit-cover">
              <img src={gameItem?.background_image} alt={gameItem?.name} />
              <StarRating rating={gameItem?.rating} />
              <div className="ratings-count">
                {gameItem?.ratings_count} <BsStar className="ms-1" size={12} />
              </div>
            </div>
          </Link>
          <div className="card-bottom">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Link to={`/games/${gameItem?.id}`}>
                <h4 className="text-white text-uppercase card-title">{gameItem?.name}</h4>
              </Link>
              {gamesArray.find((item) => item.id === gameItem.id) ? (
                <FaHeart onClick={() => dispatch(removeGame(gameItem))} className="heart-icon text-white" size={18} />
              ) : (
                <CiHeart onClick={() => addToPlaylist(gameItem)} className="heart-icon text-white" size={22} />
              )}
            </div>
          </div>
        </Grid>
      ) : (
        <Column>
          <Link to={`/games/${gameItem?.id}`} className="card-list-top img-fit-cover">
            <img src={gameItem?.background_image} alt={gameItem?.name} />
          </Link>
          <div className="card-list-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-white text-uppercase card-list-title">{gameItem?.name}</h4>
              <div onClick={() => dispatch(removeGame(gameItem))} className="card-list-cross">
                <RxCross2 className="cross" size={20} />
              </div>
            </div>
            <p className="card-list-secondary">Added at {gameItem?.added_date}</p>
          </div>
        </Column>
      )}
    </GameItemWrapper>
  );
};

export default GameItem;

GameItem.propTypes = {
  gameItem: PropTypes.object,
};

const GameItemWrapper = styled.div``;
const Grid = styled.div`
  .card-top {
    height: 280px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 92.08%);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .ratings-count {
      position: absolute;
      left: 18px;
      bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      padding: 0px 12px;
      border-radius: 16px;
      background-color: var(--clr-white);
      z-index: 1;
    }
  }

  .card-bottom {
    background-color: var(--clr-violet-light);
    padding: 20px 18px;
    padding-bottom: 5px;

    .card-title {
      font-size: 18px;
      font-weight: 800px;
      font-family: var(--font-family-poppins) !important;
      letter-spacing: 0.06em;
    }

    .heart-icon {
      cursor: pointer;
      transition: all 0.5s ease-out;
    }

    // .card-button {
    //   height: 34px;
    //   text-align: center;
    //   border: 1px solid var(--clr-green-normal);
    //   padding: 0px 16px;
    //   min-width: 108px;
    //   color: var(--clr-white);
    //   font-weight: 600;
    //   letter-spacing: 0.03em;
    //   display: flex;
    //   align-items: center;
    //   transition: var(--transition-default);

    //   &:hover {
    //     background-color: var(--clr-green-normal);
    //   }
    // }
  }
`;

const Column = styled.div`
  display: flex;

  .card-list-top {
    width: 20%;
    height: 150px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 92.08%);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
  }

  .card-list-bottom {
    width: 100%;
    background-color: var(--clr-violet-light);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-list-title {
      // font-family: var(--font-family-poppins) !important;
      font-size: 22px;
      font-weight: 800px;
      letter-spacing: 0.06em;
    }

    .card-list-secondary {
      color: var(--clr-white-secondary);
      margin-left: auto;
    }

    // .card-list-button {
    //   height: 34px;
    //   text-align: center;
    //   border: 1px solid var(--clr-green-normal);
    //   padding: 0px 16px;
    //   min-width: 108px;
    //   color: var(--clr-white);
    //   font-weight: 600;
    //   letter-spacing: 0.03em;
    //   display: flex;
    //   align-items: center;
    //   transition: var(--transition-default);

    //   &:hover {
    //     background-color: var(--clr-green-normal);
    //   }
    // }

    .card-list-cross {
      color: var(--clr-white);
      padding: 12px;
      cursor: pointer;
    }
  }
`;
