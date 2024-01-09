import { createSlice } from "@reduxjs/toolkit";

const initialState = { playlist: [] };

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addGame(state, action) {
      state.playlist.push(action.payload);
    },
    removeGame(state, action) {
      state.playlist = state.playlist.filter((game) => game.id !== action.payload.id);
    },
  },
});

export const { addGame, removeGame } = playlistSlice.actions;
export default playlistSlice.reducer;
