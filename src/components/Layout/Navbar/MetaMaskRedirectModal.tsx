import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider';


const MetaMaskRedirectModal = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        //startApp(provider); // initialize your app
    } else {
        console.log('Please install MetaMask!');
    }

    return (
        <div>
            <h1>SOy el Modal de Redirect!</h1>
        </div>
    )
}

export default MetaMaskRedirectModal