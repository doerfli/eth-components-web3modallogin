import { notification } from "antd";
import { connectorErrorText, CouldNotActivateError, EthersModalConnector, NoStaticJsonRPCProviderFoundError, useEthersAppContext, useEthersContext, UserClosedModalError } from "eth-hooks/context";
import { TCreateEthersModalConnector } from "eth-hooks/models";
import { useCallback } from "react";
import { web3ClientConfig } from "../utils/appConfig";
import { Account, Balance } from 'eth-components/ant';
import { useAccount, useWebsocketProvider, Web3Button, Web3Modal } from "@web3modal/react";
import { useBalance, useEthersAdaptorFromProviderOrSigners } from "eth-hooks";
import { mergeDefaultUpdateOptions } from "eth-hooks/functions";

export default function ShowAccount() {

    const createLoginConnector: TCreateEthersModalConnector = useCallback(
        (id?: string) => {
            if (web3ClientConfig) {
                console.log(1);
                const connector = new EthersModalConnector({ ...web3ClientConfig, theme: 'light' });
                return connector;
            }
        },
        [web3ClientConfig, web3ClientConfig.theme]
    );

    const onLoginError = useCallback(
        (e: Error) => {
            if (e instanceof UserClosedModalError) {
                notification.info({
                    message: connectorErrorText.UserClosedModalError,
                    description: e.message,
                });
            } else if (e instanceof NoStaticJsonRPCProviderFoundError) {
                notification.error({
                    message: 'Login Error: ' + connectorErrorText.NoStaticJsonRPCProviderFoundError,
                    description: e.message,
                });
            } else if (e instanceof CouldNotActivateError) {
                notification.error({
                    message: 'Login Error: ' + connectorErrorText.CouldNotActivateError,
                    description: e.message,
                });
            } else {
                notification.error({ message: 'Login Error: ', description: e.message });
            }
        },
        [notification]
    );

    const price = 18.63;
    const blockExplorer = 'https://testnet.snowtrace.io/';

    const { websocketProvider } = useWebsocketProvider();
    const { account } = useAccount();

    const [adaptor] = useEthersAdaptorFromProviderOrSigners(websocketProvider);
    
    const ethersContext = useEthersAppContext();
    
    console.log(ethersContext.account);
    const [balance] = useBalance(account.address, mergeDefaultUpdateOptions(), {
        adaptorEnabled: false,

        adaptor,
    });


    console.log(balance);

    return (
        <div>
            <Account 
                createLoginConnector={createLoginConnector}
                loginOnError={onLoginError}
                ensProvider={ethersContext.provider}
                price={price}
                blockExplorer={blockExplorer}
                hasContextConnect={true}
            />
            AVAX 
            <Balance 
                address={account.address}
                balance={balance}
                />
        </div>
    );
}