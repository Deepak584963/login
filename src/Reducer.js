export default function Reducer(state, action) {
  switch (action.type) {
    case "NEXTPAGE":
      return {
        ...state,
        page: state.page + 1,
      };

    case "PREVPAGE":
      return {
        ...state,
        page: state.page -1,
      };

    case "DATAA":
      return {
        ...state,
        alldata: action.payload.alldata,
      };

      case "REMOVEPAGE":
        return {
          ...state,
          alldata: action.payload,
        };

      
  }
  return state;
};
