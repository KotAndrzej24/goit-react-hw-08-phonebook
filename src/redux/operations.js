import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'https://6456a11e2e41ccf16921ceb0.mockapi.io/',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { name, phone } = contact;
      const res = await api.post('/contacts', { name, phone });
      const state = thunkAPI.getState();
      const list = state.manageContacts.items;
      const isName = list.find(el => {
        return el.name.toLowerCase() === name.toLowerCase();
      });
      if (isName) {
        alert(`${res.data.name} is already in contacts`);
        return thunkAPI.rejectWithValue();
      }
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await api.delete(`/contacts/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
