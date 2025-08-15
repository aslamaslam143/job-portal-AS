import { createContext ,useEffect,useState } from "react";
import {jobsData} from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // context state goes here
  const [jobs, setJobs] = useState([]);
  //function to fetch jobs
  const fetchJobs = async () => {
    setJobs(jobsData);  
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  //function to fetch jobs

  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
    
  });
  const [searchResults, setSearchResults] = useState(false);
  const value = {
    // context state goes here
    searchFilter,
    setSearchFilter,

    searchResults,
    setSearchResults,

    jobs,
    setJobs,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
