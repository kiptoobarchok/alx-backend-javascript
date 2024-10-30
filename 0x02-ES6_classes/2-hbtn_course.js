#!/usr/bin/node
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // setter for name, length and students
  // name
  set name(value) {
    if (value !== String) {
      console.error('Name must be a string');
    } else {
      this._name = value;
    }
  }

  // length
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      console.error('Length must be a number');
    }
  }

  // students
  set students(value) {
    if (!Array.isArray(value)) {
      console.error('studnets must be an array of strings');
    }
    // validate all elements in array are strings
    for (const students of value) {
      if (typeof students !== 'string') {
        console.error('Each student name must be a string');
      }
    }
    this._students = value;
  }

  // getters

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  get length() {
    return this._length;
  }
}
