import { createContext, useContext, useReducer } from "react";
import { defaultDataState } from "./defaultDataState";
import { dataReducer } from "../reducers";
import { useEffect } from "react";
import { getAllVideos } from "../utils/videoServerCalls";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, defaultDataState);

  useEffect(() => {
    getAllVideos(dispatchData);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
