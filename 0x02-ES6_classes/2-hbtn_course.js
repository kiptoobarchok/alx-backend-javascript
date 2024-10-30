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
    if (value === String) {
      console.log('name must be a string');
    } else {
      this._name = value;
    }
  }

  // length
  set length(value) {
    if (value === Number) {
      console.log('name must be a Number');
    } else {
      this._length = value;
    }
  }

  // students
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('name must be a Number');
    }
    // validate all elements in array are strings
    for (const students of value) {
      if (typeof students !== 'string') {
        throw new Error('Each student name must be a string');
      }
    }
    this._students = value;
  }
}
