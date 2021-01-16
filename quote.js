const QUOTES = [
  {
    author: "Ricky Bobby",
    quote:
      "Here's the deal I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence.",
  },
  { author: "Ricky Bobby", quote: "If you ain't first, you're last." },
  {
    author: "Mike Tyson",
    quote:
      "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds.",
  },
  { author: "Mike Tyson", quote: "Everyone has a plan 'till they get punched in the mouth." },
  { author: "Denzel (Alonzo Harris)", quote: "King Kong ain't got shit on me!" },
  {
    author: "Ayn Rand",
    quote: "The question isn't who is going to let me: it's who is going to stop me.",
  },
  {
    author: "Pablo Picasso",
    quote: "Every child is an artist. The problem is how to remain an artist once he grows up.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  { author: "Jim Rohn", quote: "Either you run the day, or the day runs you." },
  {
    author: "Mark Twain",
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "The Dalai Lama",
    quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
  },
  {
    author: "Hunter S. Thompson",
    quote:
      "I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me.",
  },
  {
    author: "Hunter S. Thompson",
    quote: "I have a theory that the truth is never told during the nine-to-five hours.",
  },
  {
    author: "Hunter S. Thompson",
    quote:
      "Life has become immeasurably better since I have been forced to stop taking it seriously.",
  },
  {
    author: "Spike Lee",
    quote: "I may have been born yesterday, but I stayed up all night.",
  },
  {
    author: "Michael Scott",
    quote: "You miss 100% of the shots you don't take. - Wayne Gretzky",
  },
  {
    author: "Michael Scott",
    quote: "I'm not superstitious, but I am a little-stitious.",
  },
  {
    author: "Michael Scott",
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
  },
  {
    author: "Dwight Schrute",
    quote: "I am ready to face any challenge that might be foolish enough to face me.",
  },
  {
    author: "Dwight Schrute",
    quote: "Powerpoints are the peacocks of the business world; all show, no meat.",
  },
  {
    author: "Dwight Schrute",
    quote:
      "How would I describe myself? Three words: hardworking, alpha male, jackhammer, merciless, insatiable.",
  },
  {
    author: "Ron Swanson",
    quote:
      "Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.",
  },
  {
    author: "Ron Swanson",
    quote: "Crying: Acceptable at funerals and the Grand Canyon.",
  },
  {
    author: "Ron Swanson",
    quote: "Never half-ass two things. Whole-ass one thing.",
  },
  {
    author: "Ron Swanson",
    quote: "There is only one bad word: taxes.",
  },
  {
    author: "Ron Swanson",
    quote: "Don't start chasing applause and acclaim. That way lies madness.",
  },
  {
    author: "Ron Swanson",
    quote: "You've accidentally given me the food that my food eats.",
  },
  {
    author: "Yogi Berra",
    quote: "Baseball is ninety percent mental and the other half is physical.",
  },
  {
    author: "Yogi Berra",
    quote: "The future ain't what it used to be.",
  },
  {
    author: "Yogi Berra",
    quote: "Take it with a grin of salt.",
  },
  {
    author: "Yogi Berra",
    quote: "Always go to other people's funerals, otherwise they won't come to yours.",
  },
  {
    author: "Wilt Chamberlain",
    quote: "Everything is habit forming, so make sure what you do is what you want to be doing.",
  },
  {
    author: "Julius Erving",
    quote:
      "Being a professional is doing the things you love to do, on the days you don't feel like doing them.",
  },
  {
    author: "Kareem Abdul-Jabbar",
    quote: "You can't win unless you learn how to lose.",
  },
  {
    author: "Kareem Abdul-Jabbar",
    quote:
      "I think that the good and the great are only separated by the willingness to sacrifice.",
  },
  {
    author: "Kareem Abdul-Jabbar",
    quote: "Good thoughts are no better than good dreams, unless they are executed.",
  },
  {
    author: "Shaquille O'Neal",
    quote: "I don't know how it is for you earthlings, but where I'm from, strength is mental.",
  },
  {
    author: "Shaquille O'Neal",
    quote: "I'm a combination of the Terminator and Bambi.",
  },
  {
    author: "Allen Iverson",
    quote: "I'd rather have more heart than talent any day.",
  },
  {
    author: "Kobe Bryant",
    quote: "If you see me in a fight with a bear, pray for the bear.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will never get out of it alive.",
  },
  {
    author: "Voltaire",
    quote: "Life is a shipwreck but we must not forget to sing in the lifeboats.",
  },
  {
    author: "Steven Wright",
    quote: "You can't have everything. Where would you put it?",
  },
  {
    author: "Billie Burk",
    quote: "Age is of no importance unless you're a cheese.",
  },
  {
    author: "Zig Ziglar",
    quote:
      "People often say that motivation doesn't last. Well, neither does bathing; that's why we recommend it daily.",
  },
  {
    author: "Anonymous",
    quote: "All of us could take a lesson from the weather; it pays no attention to criticism.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Oscar Wilde",
    quote: "A good friend will always stab you in the front.",
  },
  {
    author: "Oscar Wilde",
    quote: "I don't want to go to heaven. None of my friends are there.",
  },
  {
    author: "Price Cobb",
    quote: "Some days you're the bug. Some days you're the windshield.",
  },
  {
    author: "African Proverb",
    quote: "If you want to go fast, go alone. If you want to go far, go together.",
  },
  {
    author: "Japanese Proverb",
    quote: "Fall seven times, stand up eight.",
  },
  {
    author: "Swedish Proverb",
    quote: "Shared joy is a double joy; shared sorrow is half a sorrow.",
  },
  {
    author: "Yiddish Proverb",
    quote: "Words should be weighed, not counted.",
  },
  {
    author: "Italian Proverb",
    quote: "If you can’t live longer, live deeper.",
  },
  {
    author: "Russian Proverb",
    quote: "There is no shame in not knowing; the shame lies in not finding out.",
  },
  {
    author: "Thai Proverb",
    quote: "In a battle between elephants, the ants get squashed.",
  },
  {
    author: "French Proverb",
    quote: "Good advice is often annoying, bad advice never is.",
  },
  {
    author: "New Zealander Proverb",
    quote: "Turn your face to the sun and the shadows will fall behind you.",
  },
  {
    author: "Chinese Proverb",
    quote:
      "Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.",
  },
  {
    author: "Slovenian Proverb",
    quote: "Speak the truth, but leave immediately after.",
  },
  {
    author: "Anonymous",
    quote: "A bird in hand is worth two in the bush.",
  },
  {
    author: "Anonymous",
    quote: "A ship in the harbor is safe, but that is not what a ship is for.",
  },
  {
    author: "Anonymous",
    quote: "Barking dogs seldom bite.",
  },
  {
    author: "Anonymous",
    quote: "A thing begun is half done.",
  },
  {
    author: "Anonymous",
    quote: "Beauty is only skin deep.",
  },
  {
    author: "Anonymous",
    quote: "It’s okay if you don’t like me. Not everyone has good taste.",
  },
  {
    author: "Anonymous",
    quote: "Silence is golden. Duct tape is silver.",
  },
];

const COLORS = [
  "#101117",
  "#212537",
  "#1B1B1B",
  "#02075d",
  "#262b1e",
  "#222233",
  "#144840",
  "#0a2145",
  "#29166c",
  "#224039",
  "#141437",
  "#21538e",
  "#3a4c5a",
  "#000000",
  "#262b2f",
  "#00022e",
  "#000133",
  "#062e03",
  "#420303",
  "#220a0a",
  "#280137",
  "#1d0200",
  "#23191e",
  "#171717",
  "#0a0502",
  "#1b1811",
  "#080808",
  "#050d25",
  "#1b1811",
  "#110022",
  "#25342b",
  "#35063e",
];

//Background:
const randomBgColor = COLORS[Math.floor(Math.random() * COLORS.length)];
document.body.style.backgroundColor = randomBgColor;

const { author, quote } = QUOTES[Math.floor(Math.random() * QUOTES.length)];
//Quote:
const quoteElement = document.createElement("p");
const quoteBody = document.createTextNode(quote);
quoteElement.appendChild(quoteBody);
quoteElement.className = "quote-body";

document.getElementById("root").appendChild(quoteElement);

// Author:
const authorElement = document.createElement("p");
const quoteAuthor = document.createTextNode(`- ${author}`);
authorElement.appendChild(quoteAuthor);
authorElement.className = "quote-author";

document.getElementById("root").appendChild(authorElement);
