import sections from '../../data/sections';

const initialState = {
  sections,
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default directoryReducer;
