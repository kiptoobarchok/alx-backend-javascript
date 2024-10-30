#!/usr/bin/node

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // setter
  set code(value) {
    if (value !== String) {
      console.error('code must be a String');
    } else {
      this._code = value;
    }
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (value !== String) {
      console.error('name must be a String');
    } else {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
