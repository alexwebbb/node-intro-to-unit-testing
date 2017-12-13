const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return fizz if arg mod 3 equals 0', function() {

        
        const normalCases = [3, 9, -12];

        normalCases.forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz');
        });
    });

    it('should return buzz if arg mod 5 equals 0', function() {

        
        const normalCases = [5, 10, -20];

        normalCases.forEach(function(input) {
            fizzBuzzer(input).should.equal('buzz');
        });
    });

    it('should return fizz-buzz if arg mod 5 and arg mod 3 equal 0', function() {

        
        const normalCases = [15, 45, -90];

        normalCases.forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz-buzz');
        });
    });

    it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        const badInputs = ['cat', false, {}];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});