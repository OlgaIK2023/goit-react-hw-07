import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    isError: false,
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSliceNew = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
});

export const contactsReducerNew = contactsSliceNew.reducer;

export const selectContacts = (state) => state.contacts.items;
