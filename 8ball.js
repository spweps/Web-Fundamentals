var userQuestion = "Will I pass CodingDojo?";
var randomNumber = Math.floor(Math.random() * 20);
var eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Without a doubt';
    break;
  case 3:
    eightBall = 'Yes--definitely';
    break;
  case 4:
    eightBall = 'You may rely on it';
    break;
  case 5:
    eightBall = 'As I see it, yes';
    break;
  case 6:
    eightBall = 'Most likely';
    break;
  case 7:
    eightBall = 'Outlook good';
    break;
    case 8: 
    eightball = 'Yes';
    break;
    case 9: eightBall = 'Signs point to yes';
    break;
    case 10: eightBall = 'Reply hazy, try again';
    break;
    case 11: eightBall = 'Ask again later';
    break;
    case 12: eightBall = 'Better not tell you now';
    break;
    case 13: eightBall = 'Cannot predict now';
    break;
    case 14: eightBall = 'Concentrate and ask again';
    break;
    case 15: eightBall = 'Highly unlikely';
    break;
    case 16: eightBall = 'My reply is no';
    break;
    case 17: eightBall = 'My sources say no';
    break;
    case 18: eightBall = 'Outlook not so good';
    break;
    case 19: eightBall = 'Very doubtful';
    break;
    case 20: eightBall = 'Hell no';
    break;
}
console.log('The user asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);