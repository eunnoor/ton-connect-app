// Import TON Connect SDK (installed via npm)
import { TonConnect } from '@tonconnect/sdk';

// Initialize TON Connect with the manifest URL
const tonConnect = new TonConnect({
    manifestUrl: 'https://your-site.com/tonconnect-manifest.json'  // You need to host this file
});

// Add event listener for the Connect Wallet button
document.querySelector('.wallet-button').addEventListener('click', async () => {
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
        // Handle the connected wallet information here (e.g., show wallet address)
    } catch (error) {
        console.error('Connection failed', error);
    }
});

// Add event listener for the Connect Wallet to Claim! button (same functionality)
document.querySelector('.claim-button').addEventListener('click', async () => {
    try {
        const walletConnection = await tonConnect.connect();
        console.log('Connected wallet:', walletConnection);
    } catch (error) {
        console.error('Connection failed', error);
    }
});
