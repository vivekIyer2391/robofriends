import { CHANGE_SEARCH_FIELD } from "./constant";
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    PAYLOAD: text, 
})