const Blockchain = require('./src/models/Blockchain');
const Block = require('./src/models/Block');

const testChain = new Blockchain();

testChain.addBlock(
  new Block(Date.now().toString(), [
    { from: 'John Snow', to: 'North', amount: 100 },
  ]),
);

console.log(testChain.chain);