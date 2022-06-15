async function web3Login() {

  
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    const state = { account: account };
    const url = "index.html";
    window.history.pushState(state, "", url);
    location.reload();
  }
  
  document
    .querySelector("#connect-wallet")
    .addEventListener("click", function () {
      web3Login();
    });
  

  
  async function isUnlocked() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    let unlocked;
  
    try {
      const accounts = await provider.listAccounts();
  
      unlocked = accounts.length > 0;
    } catch (e) {
      unlocked = false;
    }
  
    return unlocked;
  }