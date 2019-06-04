import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  beforeEach(() => {
    lib.reload(['--reset']);
  });

  it('initializes', () => {
    expect(lib.operation).to.equal('');
  });

  it('parses boolean', () => {
    lib.reload(['--start']);
    expect(lib.options.start).to.equal(true);
  });

  it('parses boolean negative', () => {
    lib.reload(['--nostart']);
    expect(lib.options.start).to.equal(false);
  });

  it('parses boolean with value', () => {
    lib.reload(['--start', 'false']);
    expect(lib.options.start).to.equal(false);
  });

  it('parses float', () => {
    lib.reload(['--speed', '25.6']);
    expect(lib.options.speed).to.equal(25.6);
  });

  it('parses string', () => {
    lib.reload(['--speed', '25mph']);
    expect(lib.options.speed).to.equal('25mph');
  });

  it('parses with equal sign', () => {
    lib.reload(['--speed=25.6']);
    expect(lib.options.speed).to.equal(25.6);
  });

  it('parses command', () => {
    lib.reload(['create', 'reload']);
    expect(lib.commands.length).to.equal(2);
    expect(lib.commands[0]).to.equal('create');
    expect(lib.commands[1]).to.equal('reload');
  });

  it('parses operation', () => {
    lib.reload(['create', '--start']);
    expect(lib.operation).to.equal('create');
  });
});
