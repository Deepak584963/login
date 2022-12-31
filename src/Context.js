import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [alldata, setAlldata] = useState([]);
  const [page, setPage] = useState(1);

  const api =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-11-30&sortBy=publishedAt&apiKey=09b8ee2de0f94d9e8243453a0d1de47f";

  const getdata = async (kk) => {
    try {
      const res = await fetch(kk);
      const data = await res.json();
      setAlldata(data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata(`${api}&Page=${page}`);
  }, [page]); 

  function nextpage() {
    return setPage(page + 1);
  }
  const prevpage = () => {
    return setPage(page - 1);
  };

  const removepage = (index) => {
    const newdata = alldata.filter((elem, id) => {
      return index !== id;
    });
    setAlldata(newdata);
  };

  return (
    <>
      <AppContext.Provider value={{ alldata, nextpage, prevpage, removepage }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
const useGlobelcontext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobelcontext };
