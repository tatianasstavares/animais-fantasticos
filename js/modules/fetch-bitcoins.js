export default function initFetchBitcoin() {}
fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((body) => {
    const btcPrice = document.querySelector(".btc-price");
    btcPrice.innerText = (1000 / body.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    Error(erro);
  });
