import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ILoginStore, IRootStore } from './interfaces/Interfata2';
import storeProvider, { loginPorvider } from './mst/store/StoreProvider';
import { BrowserRouter } from "react-router-dom";


const StoreContext = React.createContext<IRootStore | any>(null);
const LoginContext = React.createContext<ILoginStore | any>(null);

export const useRootStore = () => React.useContext(StoreContext);
export const useLoginStore = () => React.useContext(LoginContext);

const StoreProvider = ({ children }: { children: ReactElement }) => {
  return (
      <StoreContext.Provider value={ storeProvider }>
          { children }
      </StoreContext.Provider>
  )
}

const LoginProvider = ({ children }: { children: ReactElement }) => {
  return (
      <LoginContext.Provider value={ loginPorvider }>
          { children }
      </LoginContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
