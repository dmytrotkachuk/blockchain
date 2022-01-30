const Block = require('./Block');

/**
 * @typedef {import('./Block')} Block
 */

class Blockchain {
  constructor() {
    /** @type {Block[]} */
    this.chain = [new Block(Date.now().toString())];
    /** @type {string} */
    this.difficulty = 1;
  }

  /** @returns {Block} */
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  /** @param {Block} block */
  addBlock(block) {
    // Since we are adding a new block, prevHash will be the hash of the old latest block
    block.prevHash = this.getLastBlock().hash;
    // Since now prevHash has a value, we must reset the block's hash
    block.hash = block.getHash();

    block.mine(this.difficulty)

    // Object.freeze ensures immutability in our code
    this.chain.push(Object.freeze(block));
  }

  isValid(blockchain = this) {
    // Iterate over the chain, we need to set i to 1 because there are nothing before the genesis block, so we start at the second block.
    for (let i = 1; i < blockchain.chain.length; i++) {
      const currentBlock = blockchain.chain[i];
      const prevBlock = blockchain.chain[i - 1];

      if (
        currentBlock.hash !== currentBlock.getHash() ||
        prevBlock.hash !== currentBlock.prevHash
      ) {
        return false;
      }

      return true;
    }
  }
}

module.exports = Blockchain;
