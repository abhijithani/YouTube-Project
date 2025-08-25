import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isWatchpage: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        togglePage : (state) => {
            state.isWatchpage = !state.isWatchpage
        },
    }
});

export const {toggleMenu, closeMenu, togglePage} = appSlice.actions;

export default appSlice.reducer;