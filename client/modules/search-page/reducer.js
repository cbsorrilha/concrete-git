const initialState = {
  searchField: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_SEARCH_FIELD':
      return {
        ...state,
        searchField: payload.value,
      };

    default:
      return state;
  }
};
