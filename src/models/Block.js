const crypto = require('crypto'),
  // Get the sha256 hash function.
  SHA256 = (message) =>
    crypto.createHash('sha256').update(message).digest('hex');

class Block {
  /**
   * @param { string | number} timestamp
   * @param {any[]} data
   */
  constructor(timestamp = '', data = []) {
    this.timestamp = timestamp;
    // this.data should contain information like transactions.
    this.data = data;
    this.hash = this.getHash()
    this.prevHash = ''; // previous block's hash
  }

  // Our hash function
  getHash(){
    return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data))
  }
}

module.exports = new Block();
