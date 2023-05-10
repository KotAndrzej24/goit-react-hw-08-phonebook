import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'manageContacts',
  initialState: { items: [], status: 'Idle', error: null, filter: '' },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       const isName = state.find(
  //         el => el.name.toLowerCase() === action.payload.name.toLowerCase()
  //       );

  //       isName
  //         ? alert(`${action.payload.name} is already in contacts`)
  //         : state.push(action.payload);
  //     },

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

    // builder.addCase(addContact.rejected, (state, action) => {
    //   state.error = action.payload;
    //   console.log(action.payload);
    //   state.status = 'Error';
    // });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.status = 'Finished';
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    });

    // builder.addCase(deleteContact.rejected, (state, action) => {
    //   state.error = action.payload;
    //   console.log(action.payload);
    //   state.status = 'Error';
    // });
  },
});

export const contactsReducer = contactsSlice.reducer;
