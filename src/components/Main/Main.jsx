import React, { useEffect, useState } from 'react';
import axios from "axios";
import List from '../List';

const Main = () => {
  const [appState, setAppState] = useState({    
    repos: null
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ repos: allRepos });
    });
  }, [setAppState]);
  
  return (
    <>
     
     <List repos={appState.repos}/>
    </>
  );
};

export default Main;
