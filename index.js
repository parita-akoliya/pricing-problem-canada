#! /usr/bin/env node

const PricingProblem = require("./PricingProblem.js")
const myArgs = process.argv.slice(2);

function main(quantity, price, province) {
    try {
        let pricingProblem = new PricingProblem();
        let res1 = pricingProblem.getFinalPrice(quantity, price, province)
        console.log("Result:")
        console.log(res1)
    } catch (error) {
        throw Error
    }
}

main(myArgs[0], myArgs[1], myArgs[2])