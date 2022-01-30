const crypto = require('crypto'),
  // Get the sha256 hash function.
  SHA256 = (message) =>
    crypto.createHash('sha256').update(message).digest('hex');

class Block {
  /**
   * @param {string} timestamp
   * @param {any[]} data
   */
  constructor(timestamp = '', data = []) {
    this.timestamp = timestamp;
    // this.data should contain information like transactions.
    this.data = data;

    /** @type {string} */
    this.hash = this.getHash();
    /** @type {string} */
    this.prevHash = ''; // previous block's hash
    /** @type {number} */
    this.nonce = 0;
  }

  // Our hash function
  /** @returns {string} */
  getHash() {
    return SHA256(
      this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce,
    );
  }

  /**
   * @param {number} difficulty
   * @returns {void}
   */
  mine(difficulty) {
    // Basically, it loops until our hash starts with
    // the string 0...000 with length of <difficulty>.
    while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
      // We increases our nonce so that we can get a whole different hash.
      this.nonce++;
      // Update our new hash with the new nonce value.
      this.hash = this.getHash();
    }
  }
}

module.exports = Block;
