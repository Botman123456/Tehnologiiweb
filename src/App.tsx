import React, { useEffect } from 'react';
import './lab3/stiluri.css';
import './App.css';
import { MyHeader } from './page-components/Header';
import { MyFooter } from './page-components/Footer';
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
      <MyFooter />
    </>
  );
}

export default App;
