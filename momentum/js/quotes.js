const quotes = [
  {
    quote: "Good design adds value faster than it adds cost.",
    author: "토마스 C. 게일(Thomas C. Gale)",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "리누스 토르발스(Linus Torvalds)",
  },
  {
    quote:
      "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away",
    author: "앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)",
  },
  {
    quote:
      "In theory, theory and practice are the same. In practice, they’re not.",
    author: "요기 베라(Yoggi Berra)",
  },
  {
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    author: "도날드 E 크누스(Donald E. Knuth)",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "빌 게이츠(Bill Gates)",
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
    author: "래리 월(Larry Wall)",
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "브라이언 커니핸(Brian W. Kernighan)",
  },
  {
    quote: "DAMM",
    author: " KEVEIN LEE",
  },
  { quote: "SHIT", author: "KEVIN LEE" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
