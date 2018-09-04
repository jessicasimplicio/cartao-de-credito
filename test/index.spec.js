var mocha = require("mocha");
var chai = require("chai");
var index = require("../index");

var expect = chai.expect;

describe("index", function() {

	describe("#cardValidator", function() {

		describe.only("when is empty", function() {
			it("should throw an error", function() {
				expect(index.cardValidator('')).to.be.empty;
				//expect(index.cardValidator()).to.throw(TypeError);

			});
		});

	});

	describe("#badFn", function() {

		describe.only("when is empty", function() {
			it("should throw an error", function() {
				//expect(index.cardValidator('')).to.be.empty;
				expect(index.badFn).to.throw(TypeError);

			});
		});

	});


	

}); 