function convertCrypto() {
    // Az aktuális kriptovaluták és pénznemek kiválasztása
    const crypto = document.getElementById("crypto-select").value;
    const currency = document.getElementById("currency-select").value;
    const amount = document.getElementById("amount").value;
  
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Kérlek, adj meg egy érvényes összeget!");
      return;
    }
  
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data[crypto][currency];
        const result = (conversionRate * amount).toFixed(2);
        document.getElementById("conversion-result").innerText = `${amount} ${crypto.toUpperCase()} = ${result} ${currency.toUpperCase()}`;
      })
      .catch(error => {
        console.error("Hiba történt az API lekérés során:", error);
        document.getElementById("conversion-result").innerText = "Hiba történt az adatok lekérésekor.";
      });
  }
  