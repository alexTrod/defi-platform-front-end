import * as React from "react"
import logo from "./logo.svg"
import { DAppProvider, ChainId } from "@usedapp/core"
import {Header} from "./components/header"
import {Container} from "@mui/material"
import { Main } from "./components/main"

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
      }}
    >
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
