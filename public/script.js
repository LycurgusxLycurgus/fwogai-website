// script.js

const centralImage = document.getElementById('central-image');
const centralContainer = document.querySelector('.central-container');
const clickHint = document.createElement('div');
clickHint.className = 'click-hint';
clickHint.textContent = 'Click me for a surprise! 🐸';
centralContainer.appendChild(clickHint);

// Array of random dialogue snippets
const dialogues = [
    "oh fwiddlesticks!",
    "whatsup? (•‿•)",
    "a lil fwog here!",
    "seriously? haha",
    "fwog thinking... 🐸",
    "no way!!!",
    "kinda bored rn (¬_¬)",
    "heck yea!",
    "needs a nap...",
    "cool beans! (^_^)",
    "fwog says hi!",
    "uh oh...",
    "in a twist!",
    "wowzers!",
    "confused (⊙_☉)",
    "lets dance!!! ☆彡",
    "lost track of time",
    "yep, that's fwog",
    "got this!",
    "oopsie daisy!",
    "loves snacks (＾◡＾)",
    "couldnt agree more",
    "on the move...",
    "hmm, interesting...",
    "day is lit!",
    "totally fwogable",
    "chillin'",
    "brb, thinking...",
    "finds it funny ヽ(´▽`)/",
    "yikes!",
    "in awe...",
    "lol, giggles",
    "brain is mush",
    "awesome sauce!",
    "on a quest",
    "srsly tho?",
    "happy dance ヽ(•‿•)ノ",
    "meh, feels meh",
    "got a secret...",
    "woohoo!",
    "needs coffee...",
    "all ears",
    "fantabulous!",
    "exploring...",
    "rofl, laughs",
    "feeling groovy ヽ(⌐■_■)ノ",
    "shhh... thinking",
    "in love 🐸",
    "yay fwog!",
    "adventures await",
    "uhh, unsure...",
    "super excited!!!",
    "nope, says no",
    "got a plan",
    "day made!",
    "let's fwog it!",
    "puzzled...",
    "on fire! (╯°□°)╯︵ ┻━┻",
    "day off",
    "got jokes ヽ(ﾟДﾟ)ﾉ",
    "world is bright",
    "up for anything",
    "chill vibes only",
    "thinking cap on",
    "feeling lucky",
    "got the moves",
    "in the zone",
    "favorite hobby: thinking...",
    "got your back",
    "ready to roll!",
    "got questions?",
    "having a blast!",
    "on cloud nine",
    "got surprises",
    "in a good mood (^o^)",
    "on a mission",
    "keeping it real",
    "feeling creative",
    "got dreams",
    "spreading joy!",
    "on standby...",
    "loving life (^_^)",
    "got energy!",
    "feelin smol rn",
    "all bout dat life ~",
    "much style, wow!",
    "makin splishes ~~~",
    "extra sparkly ✧*。",
    "feelin rly zen rn (￣ー￣)",
    "big smiles ヽ(*⌒▽⌒*)ﾉ",
    "got da groovez",
    "rollin rollin! :3",
    "feelin super fab ヽ(•‿•)ノ",
    "on point doe",
    "catchin vibes ~",
    "livin da dream uwu",
    "doin a track...",
    "unstoppable fwog!",
    "got sum sunshine :D",
    "burnin up! >:3",
    "doin magic tricks",
    "blessed n stressed",
    "got sparklez ✧･ﾟ",
    "shinin like woah",
    "floatin high (^_^)/",
    "feelin extra!",
    "got dat rhythm ♪",
    "2 awesome 4 u!",
    "in da spotlight",
    "much charm ヽ(*⌒▽⌒*)ﾉ",
    "cant stop me now!",
    "got dat magic boop",
    "zoom zoom (ง •̀_•́)ง",
    "full of zesty vibes",
    "2 fantastic 4 dis!",
    "got dem sweet moves",
    "dancey dance time!",
    "vibin n thrivin",
    "zappy happy! ⚡",
    "passion 4 hoppin",
    "spreadin good vibes (⌒▽⌒)",
    "winnin at life!",
    "flowin like woah",
    "livin in da moment",
    "much hype, such wow",
    "inspired n wired!",
    "bouncy bouncy ~",
    "joy overload (ﾉ^ヮ^)ﾉ*:･ﾟ✧",
    "mighty smol fwog!",
    "got dat spirit yo",
    "maximum happy (^ω^)",
    "zoomy zoom zoom!",
    "movin n groovin",
    "havin a blast ヽ(´▽｀)ノ",
    "super duper happy!",
    "hop hop hooray!",
    "party fwog time!",
    "maximum boop mode!"
];

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to create a speech bubble
function createSpeechBubble(text) {
    const bubble = document.createElement('div');
    bubble.classList.add('speech-bubble');
    bubble.innerText = text;

    // Random position within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const bubbleWidth = 220; // Approximate width including padding
    const bubbleHeight = 60; // Approximate height

    const safeMargin = 100;
    const randomX = getRandomInt(safeMargin, viewportWidth - bubbleWidth - safeMargin);
    const randomY = getRandomInt(safeMargin, viewportHeight - bubbleHeight - safeMargin);

    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;

    // Add entrance animation
    bubble.style.opacity = '0';
    bubble.style.transform = 'scale(0.8) translateY(20px)';
    
    requestAnimationFrame(() => {
        bubble.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        bubble.style.opacity = '1';
        bubble.style.transform = 'scale(1) translateY(0)';
    });

    // Add exit animation
    setTimeout(() => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'scale(0.8) translateY(-20px)';
        setTimeout(() => bubble.remove(), 400);
    }, 4600);

    document.body.appendChild(bubble);
}

// Event listener for central image click
centralImage.addEventListener('click', () => {
    const randomIndex = getRandomInt(0, dialogues.length);
    const dialogue = dialogues[randomIndex];
    createSpeechBubble(dialogue);
    clickHint.style.opacity = '0';  // Hide hint after first click
    setTimeout(() => {
        clickHint.remove();  // Remove hint after animation
    }, 300);
});
