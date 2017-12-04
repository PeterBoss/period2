const expect = require('chai').expect;
const calculator = require('../lib/calculator');
const util = require('../util/mymodule');
const fs = require('fs');

describe('calculator', () => {
  describe('divide()', () => {
    it('should fail when dividing by 0', () => {
      expect(() => calculator.divide(1, 0)).to.throw('Attempt to divide by zero');
    });
  });
});

let dir = '';
let file = '';
let ext = 'x';

before(() => {
  dir = 'temp';
  file = 'temp.' + ext;
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/${file}`);
});

after(() => {
  fs.unlinkSync(`${dir}/${file}`);
  fs.rmdirSync(dir);
});

describe('util', () => {
  it('execute', (done) => {
    util(dir, ext, (err, files) => {
      if (err) throw err;
      files.forEach(file => console.log(file));
      done();
    });
  });
});





