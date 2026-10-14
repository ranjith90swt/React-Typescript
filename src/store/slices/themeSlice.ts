import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode: Theme;
}
type Theme = "light" | "dark";
const savedTheme = localStorage.getItem("theme");
const initialState: ThemeState = {
     mode: savedTheme === "dark" ? "dark" : "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.mode = action.payload
        },
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const {
    setTheme,
    toggleTheme
} = themeSlice.actions;

export default themeSlice.reducer;