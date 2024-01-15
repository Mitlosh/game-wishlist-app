import { createSlice } from "@reduxjs/toolkit";

const initialState = { playlist: [] };

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    updatePlaylist(state, action) {
      state.playlist = action.payload;
    },
    addGame(state, action) {
      state.playlist.push(action.payload);
    },
    removeGame(state, action) {
      state.playlist = state.playlist.filter((game) => game.id !== action.payload.id);
    },
  },
});

export const { updatePlaylist, addGame, removeGame } = playlistSlice.actions;
export default playlistSlice.reducer;
