import React from "react";
import Reducer from "./Reducer";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  alldata: [],
  page: 5,
};
const AppContext = createContext();

function AppProvider({ children }) {
  //const [alldata, setAlldata] = useState([]);
  //const [page, setPage] = useState(3);
  const [state, dispatch] = useReducer(Reducer, initialState);
  let api =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-12-01&sortBy=publishedAt&apiKey=09b8ee2de0f94d9e8243453a0d1de47f";

  const getdata = async (kk) => {
    try {
      const res = await fetch(kk);
      const data = await res.json();
      //setAlldata(data.articles);
      dispatch({
        type: "DATAA",
        payload: { alldata: data.articles },
      });
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata(`${api}&page=${state.page}`);
  }, [state.page]);

   function nextpage() {
    //return setPage(page + 1);
    dispatch({ type: "NEXTPAGE" });
  }
  const prevpage = () => {
    //return setPage(page - 1);
   dispatch({ type: "PREVPAGE" });
  };

  const removepage = (index) => {
    const newdata = state.alldata.filter((elem, id) => {
      return index !== id;
    });
    dispatch({type: "REMOVEPAGE",
      payload:newdata});
  };

  return (
    <>
      <AppContext.Provider value={{ ...state, nextpage, prevpage, removepage }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
const useGlobelcontext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobelcontext };
