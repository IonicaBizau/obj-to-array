"use strict";

const objToArray = require("../lib");

const categories = {
    "planets": {
        posts: [
            "Hello Pluto",
            "Messages from Earth"
        ]
    },
    "dummy": {
        posts: [
            "Foo",
            "Bar"
        ]
    }
};

console.log(objToArray(categories));
// =>
// [ { posts: [ 'Hello Pluto', 'Messages from Earth' ] },
//   { posts: [ 'Foo', 'Bar' ] } ]

// Append the category field as well
console.log(objToArray(categories, "category"));
// =>
// [ { posts: [ 'Hello Pluto', 'Messages from Earth' ],
//     category: 'planets' },
//   { posts: [ 'Foo', 'Bar' ], category: 'dummy' } ]
