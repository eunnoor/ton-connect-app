// Initialize TON Connect with the manifest URL
const tonConnect = new TonConnect({
    manifestUrl: 'https://raw.githubusercontent.com/eunnoor/ton-connect-app/main/tonconnect-manifest.json'
});

// Event listener for Connect Wallet button
document.querySelector('.wallet-button').addEventListener('click', async () => {
    console.log('Connect Wallet button clicked');
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});

// Event listener for Connect Wallet to Claim button
document.querySelector('.claim-button').addEventListener('click', async () => {
    console.log('Connect Wallet to Claim button clicked');
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});
