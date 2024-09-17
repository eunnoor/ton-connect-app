// Ensure the DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Check if buttons exist in the DOM
    const walletButton = document.querySelector('.wallet-button');
    const claimButton = document.querySelector('.claim-button');

    if (walletButton) {
        console.log('Wallet button found');
    } else {
        console.error('Wallet button not found');
    }

    if (claimButton) {
        console.log('Claim button found');
    } else {
        console.error('Claim button not found');
    }

    // Event listener for Connect Wallet button
    walletButton.addEventListener('click', () => {
        console.log('Connect Wallet button clicked');
    });

    // Event listener for Connect Wallet to Claim button
    claimButton.addEventListener('click', () => {
        console.log('Connect Wallet to Claim button clicked');
    });
});
