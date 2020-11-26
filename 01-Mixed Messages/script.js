let messages = 
{
    firstWord : ["I", "You", "He", "She", "It", "We", "They"],
    secondWord : ["like", "hate", "love", "swim", "eat", "see"],
    thirdWord : ["apple", "sea", "onion", "math", "university", "web development", "art"],

    createMessage()
    {
        let randomNumber1 = Math.floor(Math.random() * this.firstWord.length);

        let randomNumber2 = Math.floor(Math.random() * this.secondWord.length);

        let randomNumber3 = Math.floor(Math.random() * this.thirdWord.length);

        console.log((this.firstWord[randomNumber1] + " " + this.secondWord[randomNumber2] + " " + this.thirdWord[randomNumber3]));
    },
};

messages.createMessage();