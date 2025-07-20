document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote');

    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "Your time is limited, so don’t waste it living someone else’s life.",
            author: "Steve Jobs"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "The only thing we have to fear is fear itself.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "That's one small step for a man, one giant leap for mankind.",
            author: "Neil Armstrong"
        }
    ];

    newQuoteBtn.addEventListener('click', getNewQuote);

    function getNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
    }

    getNewQuote(); // 初期名言を表示
});