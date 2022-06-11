import { Token } from "../main"

interface UWalletProps {
    supportedTokens : Array<Token>
}

export const UWallet = ({supportedTokens} : UWalletProps) => {
    return(<div>I am your wallet !</div>)
}
// 15.00.39