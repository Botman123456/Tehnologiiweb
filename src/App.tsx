import React, { useEffect } from 'react';
import logo from './logo.svg';
import './lab3/stiluri.css';
import './App.css';
import { ComponentLayout } from './lab3/ComponentLayout';
import { MyHeader } from './page-components/Header';
import { MyFooter } from './page-components/Footer';
import { MyLogin } from './Forms/Login';
import { useLoginStore, useRootStore } from '.';

function App() {

  const rootStore = useRootStore()
  const logStore = useLoginStore();

  useEffect(() => {
      rootStore.setInitialStorageContents()
  }, [])

  useEffect(() => {
    logStore.setInitialStorageContents()
  }, [])

  return (
    <>
      <MyHeader />

        <MyLogin />
        
      <MyFooter />
    </>
  );
}

export default App;
