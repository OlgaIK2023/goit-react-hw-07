import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestContacts } from "../services/api";

export const apiRequestContacts = createAsyncThunk (
    "contacts/getContacts",
    async (_, thunkApi) => {
        try {
          const data = await requestContacts();
    
          return data; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
);


// async () => {
//     try {
//         const response = await fetch('https://goit-phonebook-api.herokuapp.com/contacts');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }