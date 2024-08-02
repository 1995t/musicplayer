import { configureStore } from "@reduxjs/toolkit";
import playlist from "../../components/slice";

export const store = configureStore(
    {
        reducer:
        {
        playlist:playlist.reducer
        }
    })