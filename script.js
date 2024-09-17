// Initialize TON Connect with the manifest URL
const tonConnect = new TonConnect({
    manifestUrl: 'https://raw.githubusercontent.com/eunnoor/ton-connect-app/main/tonconnect-manifest.json'  // Use the raw URL here
});

// Connect Wallet button click event
document.querySelector('.wallet-button').addEventListener('click', async () => {
    console.log('Connect Wallet button clicked'); // Log when the button is clicked
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});

// Connect Wallet to Claim button click event
document.querySelector('.claim-button').addEventListener('click', async () => {
    console.log('Connect Wallet to Claim button clicked'); // Log when the button is clicked
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});
