import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialThemeState;
if (localStorage.getItem("isTheme") === "dark") {
  initialThemeState = {
    mode: "dark",
    uiColor: "purple",
    theme: {
      color: "cyan",
      backgroundColor: "black",
    },
    nonThemeColor: "white",
  };
} else {
  initialThemeState = {
    mode: "light",
    uiColor: "purple",
    theme: {
      color: "black",
      backgroundColor: "rgb(237, 249, 254)",
    },
    nonThemeColor: "black",
  };
}

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeThemeColor(state, action) {
      state.theme.color = action.payload;
    },
    toggleMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
        state.theme.color = "cyan";
        state.theme.backgroundColor = "black";
        state.nonThemeColor = "white";
      } else {
        state.mode = "light";
        state.theme = {
          color: "black",
          backgroundColor: "rgb(237, 249, 254)",
        };
        state.nonThemeColor = "black";
      }
      localStorage.setItem("isTheme", state.mode);
    },
  },
});
const store = configureStore({
  reducer: themeSlice.reducer,
});

export const themeActions = themeSlice.actions;
export default store;
