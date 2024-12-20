#!/usr/bin/node
export default class HolbertonCourse {
  constructor(name, length, students) {

    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must an array of strings');
    }
    
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // setter for name, length and students
  // name
  set name(value) {
    if (value !== String) {
    throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  // length
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
    throw new TypeError('Length must be a number');
    }
  }

  // students
  set students(value) {
    if (!Array.isArray(value)) {
    throw new TypeError('students must be an array of strings');
    }
    // validate all elements in array are strings
    for (const students of value) {
      if (typeof students !== 'string') {
      throw new TypeError('Each student name must be a string');
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
