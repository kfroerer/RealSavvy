'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlank = isBlank;
exports.inGroupsOf = inGroupsOf;
function isBlank(value) {
  return value === undefined || value === null || value === '';
}

function inGroupsOf(array, number, callback) {
  var groups = [];
  var group = [];

  for (var i = 0; i < array.length; i++) {
    if (i % number === 0 && i > 0) {
      groups.push(callback(group.slice(0), groups.length));
      group = [];
    }
    group.push(array[i]);
  }

  if (group.length > 0) groups.push(callback(group.slice(0), groups.length));

  return groups;
}