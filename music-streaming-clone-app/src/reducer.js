//Initial State of the datalayer
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//   discover_weekly: [],
//   token:
    // "BQA53UA3GAtP1rtaBVYoxrTndsV31ZtOyAqxIyiqH7WRpIIHQ0yZTwTOJOv3AHTJ1v6dID-hjvyAZoC5KC395z0voJORy_p_pKuSGdAwpsbtyi9jXbgp5BG5NEO4EY3bCF_1S2Uf_3cKV8NRGeUAxeg0ZmsBrdJt1aItNR6qz9KlqMnl",
  // token: null,
};

const reducer = (state, action) => {
  //action is used to manipulate the datalayer
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //This means update the username in the new state and
        user: action.user, //let other fields remains as it is
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
