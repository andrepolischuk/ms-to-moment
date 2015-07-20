import msToMoment from './index';
import assert from 'assert';
const ms = 1e3 * 60 * 60 * 24;

describe('msToMoment(date)', () => {
  it('should return ms after past moment', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    assert(msToMoment(date) - ms < 5);
  });

  it('should return zero for current moment', () => {
    assert(msToMoment(new Date()) == 0);
  });

  it('should return ms before future moment', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    assert(msToMoment(date) - ms < 5);
  });
});
