// Wait until the entire DOM (HTML) is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if TON Connect SDK is loaded
    if (typeof TonConnect !== 'undefined') {
        console.log('TON Connect SDK is loaded');
    } else {
        console.error('TON Connect SDK is not loaded');
    }

    // Initialize TON Connect (this can be kept as is)
    const tonConnect = new TonConnect({
        manifestUrl: 'https://raw.githubusercontent.com/eunnoor/ton-connect-app/main/tonconnect-manifest.json'
    });

    // Event listener for Connect Wallet button
    document.querySelector('.wallet-button').addEventListener('click', () => {
        console.log('Connect Wallet button clicked'); // Add logging to detect clicks
    });

    // Event listener for Connect Wallet to Claim button
    document.querySelector('.claim-button').addEventListener('click', () => {
        console.log('Connect Wallet to Claim button clicked'); // Add logging to detect clicks
    });
});
