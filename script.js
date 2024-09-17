// Ensure the DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Check if TON Connect SDK is loaded
    if (typeof TonConnect !== 'undefined') {
        console.log('TON Connect SDK is loaded');
    } else {
        console.error('TON Connect SDK is not loaded');
        return; // Exit if the SDK is not loaded
    }

    // Initialize TON Connect
    const tonConnect = new TonConnect({
        manifestUrl: 'https://raw.githubusercontent.com/eunnoor/ton-connect-app/main/tonconnect-manifest.json'
    });

    // Check if buttons exist in the DOM
    const walletButton = document.getElementById('wallet-button');
    const claimButton = document.getElementById('claim-button');

    if (walletButton) {
        console.log('Wallet button found');
        walletButton.addEventListener('click', async () => {
            console.log('Connect Wallet button clicked');
            try {
                const walletConnection = await tonConnect.connect();
                console.log('Connected wallet:', walletConnection);
            } catch (error) {
                console.error('Connection failed:', error);
            }
        });
    } else {
        console.error('Wallet button not found');
    }

    if (claimButton) {
        console.log('Claim button found');
        claimButton.addEventListener('click', async () => {
            console.log('Connect Wallet to Claim button clicked');
            try {
                const walletConnection = await tonConnect.connect();
                console.log('Connected wallet:', walletConnection);
            } catch (error) {
                console.error('Connection failed:', error);
            }
        });
    } else {
        console.error('Claim button not found');
    }
});
