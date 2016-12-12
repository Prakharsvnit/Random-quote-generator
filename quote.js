var quotes = [ 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. Maya Angelou',
'Whether you think you can or you think you can\’t, you\’re right. Henry Ford',
'Perfection is not attainable, but if we chase perfection we can catch excellence. Vince Lombardi',
'Remember no one can make you feel inferior without your consent. Eleanor Roosevelt',
'Strive not to be a success, but rather to be of value. Albert Einstein',
'The only way to do great work is to love what you do. Steve Jobs',
'I alone cannot change the world, but I can cast a stone across the water to create many ripples. Mother Teresa',
'Whatever the mind of man can conceive and believe, it can achieve. —Napoleon Hill'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
