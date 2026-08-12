import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { NoteType } from "../../@types/types";

interface NoteState {
  notes: NoteType[];
}

const initialState: NoteState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteType>) {
      state.notes.unshift(action.payload);
    },
    removeNote(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
