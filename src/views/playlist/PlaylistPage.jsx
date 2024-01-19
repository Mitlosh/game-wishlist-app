import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import GameItem from "../../components/game/GameItem";
import { Title } from "../../components/common";
import styled from "styled-components";
import { updatePlaylist } from "../../redux/store/playlistSlice";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const gamesArray = useSelector((state) => state.playlist.playlist);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(gamesArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updatePlaylist(items));
  }

  return (
    <PlaylistWrapper>
      <div className="container">
        <Title titleName={{ firstText: "wish to", secondText: "play" }} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="gamesArray">
            {(provided) => (
              <ul className="games" {...provided.droppableProps} ref={provided.innerRef}>
                {gamesArray.map((game, index) => {
                  return (
                    <Draggable key={game.id} draggableId={game.id.toString()} index={index}>
                      {(provided) => (
                        <div>
                          <li
                            className="games-item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <GameItem key={game.id} gameItem={game} isGrid={false} />
                          </li>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </PlaylistWrapper>
  );
};

export default PlaylistPage;

const PlaylistWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  padding: 50px 0;

  .games-item {
    // margin: 0 200px;
    margin-bottom: 1em;
  }
`;
