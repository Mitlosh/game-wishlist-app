import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GameItem } from "../../components/game";
import { Title } from "../../components/common";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  console.log(playlist);

  return (
    <PlaylistPageWrapper>
      <section className="pl-details">
        <Title titleName={{ firstText: "playlist", secondText: "games" }} />
        <div className="container card-list">
          {playlist.playlist.map((item) => (
            <GameItem key={item.id} gameItem={item} />
          ))}
        </div>
      </section>
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;

const PlaylistPageWrapper = styled.div`
  .pl-details {
    background-color: var(--clr-violet-dark-active);
    min-height: 100vh;
    padding-top: 55px;
    padding-bottom: 55px;
  }
`;
