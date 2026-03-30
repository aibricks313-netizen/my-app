let provider;
let signer;
let userAddress;

// Connect Wallet
export async function connectWallet() {
if (window.ethereum) {
provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
signer = provider.getSigner();
userAddress = await signer.getAddress();

document.getElementById("walletStatus").innerText = "Connected: " + userAddress;

return signer;
} else {
alert("Install MetaMask");
}
}

// Get Balance
export async function getBalance() {
const balance = await provider.getBalance(userAddress);
return ethers.utils.formatEther(balance);
}

// Send Transaction (TEST TRADE)
export async function sendTrade() {
const tx = await signer.sendTransaction({
to: userAddress, // self send (safe test)
value: ethers.utils.parseEther("0.001")
});

await tx.wait();

alert("Trade Executed 🚀");
}
