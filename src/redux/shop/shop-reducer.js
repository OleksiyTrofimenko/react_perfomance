import collections from '../../data/shop';

const initialState = {
  collections,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default shopReducer;
