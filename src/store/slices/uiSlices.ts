import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    sidebarOpen: boolean;
    sidebarCollapsed: boolean;
}

const initialState: UIState = {
    sidebarOpen: false,
    sidebarCollapsed: false, // IMPORTANT
};

const uiSlice = createSlice({
    name: "ui",
    initialState,

    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },

        toggleSidebarCollapsed: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },

        closeSidebar: (state) => {
            state.sidebarOpen = false;
        },
    },
});

export const {
    toggleSidebar,
    toggleSidebarCollapsed,
    closeSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;