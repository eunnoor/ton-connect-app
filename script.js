if (TonConnect) {
    console.log('TON Connect SDK is loaded');
} else {
    console.error('TON Connect SDK is not loaded');
}

const tonConnect = new TonConnect({
    manifestUrl: 'https://raw.githubusercontent.com/eunnoor/ton-connect-app/main/tonconnect-manifest.json'
});

document.querySelector('.wallet-button').addEventListener('click', async () => {
    console.log('Connect Wallet button clicked');
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});

document.querySelector('.claim-button').addEventListener('click', async () => {
    console.log('Connect Wallet to Claim button clicked');
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});
