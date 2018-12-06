const initialState = {
  searchField: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_SEARCH_FIELD':
      return {
        searchField: payload.value,
        ...state,
      };

    default:
      return state;
  }
};
