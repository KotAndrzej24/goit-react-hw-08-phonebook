import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'manageContacts',
  initialState: { items: [], status: 'Idle', error: null, filter: '' },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.status = 'Loading';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'Finished';
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.status = 'Finished';
      state.error = null;
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.status = 'Finished';
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
