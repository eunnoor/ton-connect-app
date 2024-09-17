document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons from the DOM
    const walletButton = document.getElementById('wallet-button');
    const claimButton = document.getElementById('claim-button');

    // Verify that the buttons exist
    if (walletButton) {
        console.log('Wallet button found');
        walletButton.addEventListener('click', () => {
            console.log('Connect Wallet button clicked');
        });
    } else {
        console.error('Wallet button not found');
    }

    if (claimButton) {
        console.log('Claim button found');
        claimButton.addEventListener('click', () => {
            console.log('Connect Wallet to Claim button clicked');
        });
    } else {
        console.error('Claim button not found');
    }
});
