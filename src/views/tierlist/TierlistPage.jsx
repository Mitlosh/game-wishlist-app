import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import GameItem from "../../components/game/GameItem";
import { Title } from "../../components/common";
import styled from "styled-components";

function TierlistPage() {
  const gamesArray = useSelector((state) => state.playlist.playlist);
  const [games, updateCharacters] = useState(gamesArray);
  console.log(games);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(games);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <PlaylistWrapper>
      <div className="container">
        <Title titleName={{ firstText: "top popular", secondText: "games" }} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="games">
            {(provided) => (
              <ul className="games" {...provided.droppableProps} ref={provided.innerRef}>
                {games.map((game, index) => {
                  return (
                    <Draggable key={game.id} draggableId={game.id.toString()} index={index}>
                      {(provided) => (
                        <li
                          className="games-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <GameItem gameItem={game} isGrid={false} />
                        </li>
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
}

export default TierlistPage;

const PlaylistWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .games-item {
    margin-bottom: 1em;
  }
`;
