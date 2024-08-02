import { createSlice, nanoid } from "@reduxjs/toolkit";

export const playlist = createSlice(
    {
        name:'Playlist',
        initialState:
        {
            data:{},
            search:{},
            play:{}
        },
        reducers:
        {
        add:(state,action)=>
                {
                    state.data = action.payload
                },
        searchData:(state,action)=>
            {
                    state.search = action.payload
            },
        playSong:(state,action)=>
            {
                state.play = action.payload
            }
        }
    })

    export const {add,searchData,playSong} = playlist.actions
    export default playlist


