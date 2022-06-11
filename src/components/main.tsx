/* eslint-disable spaced-comment */
/// <references types="react-scripts" />

import {useEthers} from "@usedapp/core"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "../brownie_config.json"
import dapp from "../images/dapp.png"
import eth from "../images/eth.png"
import fau from "../images/fau.png"
import { UWallet } from "./u_wallet/UWallet"

export type Token = {
    image : string
    address : string
    name : string
}

export const Main = () => {
    //const dappTokenAddress = 
    const { chainId, error } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    console.log("chainId = " + chainId)
    console.log(networkName)

    const dappTokenAddress = chainId ? networkMapping[String(chainId)]["DappToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"]: constants.AddressZero


    const supportedTokens : Array<Token> = [
        {
            image: dapp,
            address: dappTokenAddress,
            name: "DAPP"
        },
        {
            image: eth,
            address: wethTokenAddress,
            name: "Weth"
        },
        {
            image: fau,
            address: fauTokenAddress,
            name: "DAI"
        }

    ]

    return (
        <UWallet supportedTokens={supportedTokens} />
    )
}