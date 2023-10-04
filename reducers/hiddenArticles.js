import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHiddenArticle: (state, action) => {
			state.value.push(action.payload);
		},
		removeHiddenArticle: (state, action) => {
            state.value = state.value.filter(article => article.title !== action.payload.title);
        },
        removeAllHiddenArticle: (state) => {  // Moved this inside the 'reducers' object
			state.value = [];
		},
	},
});

export const { addHiddenArticle, removeHiddenArticle, removeAllHiddenArticle } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
