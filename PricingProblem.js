class PricingProblem {
    provinces = {
        'ab': 5,
        'on': 13,
        'qc': 14.975,
        'mi': 6,
        'de': 0
    }
    discounts = {
        1000: 3,
        5000: 5,
        7000: 7,
        10000: 10
    }
    constructor() {

    }
    calculateDiscountAndTax(priceWithoutTax, taxRate) {
        let discount = 0
        for (let element in this.discounts) {
            if (priceWithoutTax < element) {
                break;
            }
            else {
                discount = this.discounts[element]
            }
        }
        let discountPrice = priceWithoutTax - (priceWithoutTax * discount / 100)
        return (discountPrice + (discountPrice * taxRate / 100))

    }
    getFinalPrice(quantity, price, province) {
        try {
            this.validateParameters(quantity, price, province)
            return this.calculateDiscountAndTax(parseFloat(price) * parseFloat(quantity), this.provinces[province.toLowerCase()])
        } catch (error) {
            throw new Error(error);

        }

    }
    validateParameters(quantity, price, province) {
        if (!price || !quantity || !province) {
            throw "Invalid Number of Arguements, please pass Price, Quantity, Province"
        }
        else if (isNaN(parseFloat(price)) || isNaN(parseFloat(quantity)) || price.length == 0 || quantity.length == 0 || province.length == 0) {
            throw "Invalid Arguement"
        }
        else if (!this.provinces[province.toLowerCase()]) {
            throw "Province not found"
        }
        else if (parseFloat(quantity) == 0) {
            throw "Quantity cannot be '0'"
        }
        else if (parseFloat(price) == 0) {
            throw "Price cannot be '0'"
        }
    }
}

module.exports = PricingProblem