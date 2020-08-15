const quotes = [
  {
    author: "Ricky Bobby",
    quote:
      "Well let me just quote the late-great Colonel Sanders, who said...I'm too drunk to taste this chicken.",
  },
  {
    author: "Ricky Bobby",
    quote: "This sticker is dangerous and inconvenient, but I do love Fig Newtons.",
  },
  {
    author: "Ricky Bobby",
    quote:
      "Here's the deal I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence.",
  },
  {
    author: "Ricky Bobby",
    quote:
      "I hope that both of you have sons... Handsome, beautiful, articulate sons, who are talented and star athletes and they have their legs taken away. I mean I pray you know that pain and that hurt.",
  },
  { author: "Ricky Bobby", quote: "If you ain't first, you're last." },
  { author: "Ricky Bobby", quote: "I'm just a big hairy American winning machine, you know?" },
  { author: "Dewey Cox", quote: "YOU CAN TAKE THE CHILDREN, BUT YOU LEAVE ME MY MONKEY!" },
  {
    author: "Dale from Stepbrothers",
    quote: "One time I wrestled a giraffe to the ground with my bare hands.",
  },
  {
    author: "Derek Zoolander",
    quote:
      "Have you ever wondered if there was more to life, other than being really, really, ridiculously good looking?",
  },
  {
    author: "Mike Tyson",
    quote:
      "I just have this thing inside me that wants to eat and conquer. Maybe it's egotistical, but I have it in me. I don't want to be a tycoon. I just want to conquer people and their souls.",
  },
  {
    author: "Mike Tyson",
    quote:
      "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds.",
  },
  { author: "Mike Tyson", quote: "Everyone has a plan 'till they get punched in the mouth." },
  {
    author: "Samuel L. Jackson",
    quote: "I have had it with these motherfuckin' snakes on this motherfuckin' plane!",
  },
  { author: "Denzel", quote: "King Kong ain't got shit on me!" },
  {
    author: "Ayn Rand",
    quote: "The question isn't who is going to let me: it's who is going to stop me.",
  },
  { author: "The Rock", quote: "It doesnt matter what your name is!" },
  {
    author: "Riley Freeman",
    quote:
      "Look, fuck you, fuck the plane you flew in on, fuck them shoes, fuck those socks with the belt on it, fuck your gay-ass fairy faggot accent, fuck them cheap-ass cigars, fuck your yuck-mouth teeth, fuck your hairpiece, fuck your chocolate, fuck Guy Ritchie, fuck Prince William, fuck the Queen. This is America. My president is black and my Lambo is blue, nigga. Now, get the fuck out my hotel room and if I see you in the street, I'm slapping the shit out of you.",
  },
  {
    author: "Pablo Picasso",
    quote: "Every child is an artist. The problem is how to remain an artist once he grows up.",
  },
  {
    author: "Christopher Columbus",
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  { author: "Jim Rohn", quote: "Either you run the day, or the day runs you." },
  {
    author: "Henry Ford",
    quote: "Whether you think you can or you think you can't, you're right.",
  },
  {
    author: "Mark Twain",
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
  },
  {
    author: "Johann Wolfgang von Goethe",
    quote:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
];

const { author, quote } = quotes[Math.floor(Math.random() * quotes.length)];

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
