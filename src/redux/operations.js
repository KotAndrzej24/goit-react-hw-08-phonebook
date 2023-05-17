import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
      const { name, number } = contact;
      const res = await api.post('/contacts', { name, number });
      setAuthHeader(res.data.token);
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
  async (contactId, thunkAPI) => {
    try {
      const res = await api.delete(`/contacts/${contactId}`);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
