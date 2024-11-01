#!/usr/bin/node
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      console.error('Amount must be a number');
    }

    if (!(currency instanceof Currency)) {
      console.error('currency must be an instance of Currency')
    }
    this._amount = amount;
    this._currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

set currency(value) {
  if (!(value instanceof Currency)) {
    throw new TypeError("Currency must be an instance of the Currency class.");
  }
  this._currency = value;
}

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
