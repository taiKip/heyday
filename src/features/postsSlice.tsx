import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";
import { postStateType } from "../types";

const initialState:postStateType= {
    posts: [],
    error: null,
    status:"idle"
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get("http://localhost:8000/posts");
    return response.data;
})
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.error.message
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status ="succeeded"
            state.posts = action.payload
            }).addCase(fetchPosts.pending, (state, action) => {
            state.status ="loading"
        })
    }

})


export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;

