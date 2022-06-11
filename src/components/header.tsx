import React from 'react';
import { useEthers } from "@usedapp/core";
import { Button } from "@mui/material";

export const Header = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  console.log("account : " + account)
  const isConnected = account !== undefined;

  return (    
      <div>
        {isConnected ? (
          <Button color="primary" onClick={deactivate} variant="contained">
            Disconnect
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => activateBrowserWallet()}
            variant="contained"
          >
            Connect
          </Button>
        )}
    </div>
  );
};
