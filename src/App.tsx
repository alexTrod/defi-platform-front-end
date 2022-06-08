import * as React from "react";
import logo from "./logo.svg";
import { DAppProvider, ChainId } from "@usedapp/core";
import {Header} from './components/header'
import Button from "@mui/material/Button";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
      }}
    >
      <Header />    
    </DAppProvider>
  );
}

export default App;
