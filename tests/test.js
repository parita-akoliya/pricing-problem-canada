const PricingProblem = require('../PricingProblem.js')
const chai = require('chai');
const assert = chai.assert;

describe('Pricing Problem', () => {
    const pricingProblem = new PricingProblem();
    it('should return final price', () => {
        const result = pricingProblem.getFinalPrice(500, '1', 'ON');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')
    });
    it('should throw an error when invalid number of arguements are passed', () => {
        const result = () => pricingProblem.getFinalPrice('1', 'ON');
        assert.throws(result, Error)
    });
    it('should throw an error when invalid numeric string is passed in quantity and price', () => {
        result = () => pricingProblem.getFinalPrice('abc', '1', 'ON');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice('500', 'abc', 'ON');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice('abc', 'def', 'ON');
        assert.throws(result, Error)
    });
    it('should throw an error when invalid province is passed', () => {
        const result = () => pricingProblem.getFinalPrice(500, '1', 'GJ');
        assert.throws(result, Error)
    });
    it('should return final price when numeric string is passed in price and quantity', () => {
        result = pricingProblem.getFinalPrice('500', '1', 'ON');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')
        result = pricingProblem.getFinalPrice('500', '1', 'ON');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')

    });
    it('should throw an error when 0 quantity for item is passed', () => {
        const result = () => pricingProblem.getFinalPrice(0, '2.25', 'GJ');
        assert.throws(result, Error)
    });
    it('should throw an error when item with price 0 is passed', () => {
        const result = () => pricingProblem.getFinalPrice(500, 0, 'GJ');
        assert.throws(result, Error)
    });
    it('should return final price with case insensitive province code', () => {
        let result = pricingProblem.getFinalPrice("500", '1', 'oN');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')
        result = pricingProblem.getFinalPrice("500", '1', 'On');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')
        result = pricingProblem.getFinalPrice("500", '1', 'on');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')
        result = pricingProblem.getFinalPrice("500", '1', 'ON');
        assert.typeOf(result, 'number')
        assert.equal(result, 565, 'It matches the results')

    });
    it('should throw an error when empty string is passed in any arguements', () => {
        let result = () => pricingProblem.getFinalPrice('', 1, 'ON');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice(500, '', 'ON');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice(500, '1', '');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice('', '1', '');
        assert.throws(result, Error)
        result = () => pricingProblem.getFinalPrice('', '', '');
        assert.throws(result, Error)

    });
    it('should return final price with bigger quantities and price', () => {
        const result = pricingProblem.getFinalPrice(1000, 1000.30, 'ON');
        assert.typeOf(result, 'number')
        assert.equal(result, 1017305.1, 'It matches the results')
    });

});