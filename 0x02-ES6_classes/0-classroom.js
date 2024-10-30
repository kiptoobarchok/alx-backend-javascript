#!/usr/bin/node

export default class ClassRoom {
    constructor(maxStudentsSize){
        this._maxStudentsSize = maxStudentsSize;
    }
    set maxStudentsSize(newMaxStudentSize) {
        if (typeof newMaxStudentSize === 'number') {
            this._maxStudentsSize = newMaxStudentSize;
        }
    }

    get maxStudentsSize() {
        return this._maxStudentsSize;
    }
}