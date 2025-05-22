// Kvíz válaszainak ellenőrzése
function checkAnswers() {
    var score = 0;
  
    // Helyes válaszok
    var correctAnswers = {
      q1: 'b',  // Mi a Bitcoin? - helyes válasz: b
      q2: 'b',  // Melyik technológián alapul? - helyes válasz: b
      q3: 'b',  // Mi a kripto bányászat célja? - helyes válasz: b
      q4: 'b',  // Mi a Bitcoin legnagyobb előnye? - helyes válasz: b
      q5: 'a',  // Mi a különbség Bitcoin és Ethereum között? - helyes válasz: a
      q6: 'a',  // Mi az ICO? - helyes válasz: a
      q7: 'b',  // Mi az Ethereum fő funkciója? - helyes válasz: b
      q8: 'a',  // Mi az a "Wallet"? - helyes válasz: a
      q9: 'c',  // Mi az a "HODL"? - helyes válasz: c
      q10: 'b'  // Mi a "fork"? - helyes válasz: b
    };
  
    // Válaszok összegyűjtése
    var form = document.getElementById("quizForm");
  
    // Ellenőrizzük minden kérdés válaszát
    for (var question in correctAnswers) {
      var selectedOption = form.querySelector(`input[name="${question}"]:checked`);
      
      if (selectedOption && selectedOption.value === correctAnswers[question]) {
        score++;
      }
    }
  
    // Eredmény kiírása
    var resultDiv = document.getElementById("result");
    
    // Kiírási logika a szinthez
    var level = '';
    if (score <= 3) {
      level = 'Kezdő';
    } else if (score > 3 && score <= 6) {
      level = 'Haladó';
    } else if (score > 6 && score <= 10) {
      level = 'Profi';
    }
  
    resultDiv.innerHTML = `A kvíz eredménye: ${score} / 10. Szint: ${level}`;
  }
  