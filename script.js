// Check if TON Connect SDK is loaded
if (typeof TonConnect !== 'undefined') {
    console.log('TON Connect SDK is loaded');
} else {
    console.error('TON Connect SDK is not loaded');
}

// Check if buttons exist
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

// Attach event listener to Connect Wallet button
walletButton.addEventListener('click', () => {
    console.log('Connect Wallet button clicked');
});

// Attach event listener to Connect Wallet to Claim button
claimButton.addEventListener('click', () => {
    console.log('Connect Wallet to Claim button clicked');
});
