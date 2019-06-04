"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('word parser', function () {
    beforeEach(function () {
        lib.reload(['--reset']);
    });
    it('initializes', function () {
        chai_1.expect(lib.operation).to.equal('');
    });
    it('parses boolean', function () {
        lib.reload(['--start']);
        chai_1.expect(lib.options.start).to.equal(true);
    });
    it('parses boolean negative', function () {
        lib.reload(['--nostart']);
        chai_1.expect(lib.options.start).to.equal(false);
    });
    it('parses boolean with value', function () {
        lib.reload(['--start', 'false']);
        chai_1.expect(lib.options.start).to.equal(false);
    });
    it('parses float', function () {
        lib.reload(['--speed', '25.6']);
        chai_1.expect(lib.options.speed).to.equal(25.6);
    });
    it('parses string', function () {
        lib.reload(['--speed', '25mph']);
        chai_1.expect(lib.options.speed).to.equal('25mph');
    });
    it('parses with equal sign', function () {
        lib.reload(['--speed=25.6']);
        chai_1.expect(lib.options.speed).to.equal(25.6);
    });
    it('parses command', function () {
        lib.reload(['create', 'reload']);
        chai_1.expect(lib.commands.length).to.equal(2);
        chai_1.expect(lib.commands[0]).to.equal('create');
        chai_1.expect(lib.commands[1]).to.equal('reload');
    });
    it('parses operation', function () {
        lib.reload(['create', '--start']);
        chai_1.expect(lib.operation).to.equal('create');
    });
});
