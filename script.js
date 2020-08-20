new Vue({
  el: '#app',
  data: {
    aiScore: 0,
    yourScore: 0,
    messages: [],
  },
  methods: {
    makePlay: function (choice) {
      let aiChoice = Math.floor(Math.random() * 3);
      const userMessage = getPlayName(choice);
      const aiMessage = getPlayName(aiChoice);
      let resultmessage = '';
      if (choice == aiChoice) {
        resultmessage = 'DREW';
      } else if (choice == 0) {
        if (aiChoice == 1) {
          resultmessage = 'LOST';
          this.aiScore++;
        } else if (aiChoice == 2) {
          resultmessage = 'WON';
          this.yourScore++;
        }
      } else if (choice == 1) {
        if (aiChoice == 0) {
          resultmessage = 'WON';
          this.yourScore++;
        } else if (aiChoice == 2) {
          resultmessage = 'LOST';
          this.aiScore++;
        }
      } else if (choice == 2) {
        if (aiChoice == 0) {
          resultmessage = 'LOST';
          this.aiScore++;
        } else if (aiChoice == 1) {
          resultmessage = 'WON';
          this.yourScore++;
        }
      }
      this.messages = [
        `AI played ${aiMessage}. You played ${userMessage}. You ${resultmessage}.`,
        ...this.messages,
      ];
    },
    reset: function () {
      this.aiScore = 0;
      this.yourScore = 0;
      this.messages = [];
    },
  },
});

const getPlayName = function (choice) {
  switch (choice) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
};
