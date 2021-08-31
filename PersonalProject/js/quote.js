const quotes = [
    {
      quote_k:
      "한 사람에게는 단지 조그만 한 발짝에 불과하지만 전 인류에게는 하나의 큰 도약이다.",
      quote_e:
      "That's one samll step for a man, one giant leap for mankind.",
      title: "닐 암스트롱",
    },
    {
       quote_k: "누구도 자신이 있는곳에 만족하는 사람은 없다.",
       quote_e: "No one is ever satisfied where he is.",
       title: "어린왕자",
    },

    {
      quote_k: "인내는 쓰지만 그 열매는 달다",
      quote_e: "Patience is bitter, but its fruit is sweet.",
      title: "아리스토텔레스",
   },

  ];
  
  function randomQuotes() {
    const quote = document.querySelector("#quote span:first-child");
    const title = document.querySelector("#quote span:last-child");
  
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    quote.innerHTML = todayQuote.quote_e + "<br> - " + todayQuote.title + "‎ -";
  }
  
  randomQuotes();
  setInterval(randomQuotes, 5000);
  