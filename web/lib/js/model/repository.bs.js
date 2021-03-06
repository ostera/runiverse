// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$String = require("bs-platform/lib/js/string.js");

function make($staropt$star, ref, url) {
  var kind = $staropt$star !== undefined ? $staropt$star : /* GitHub */625823715;
  var parts = $$String.split_on_char(/* "/" */47, url);
  var len = List.length(parts);
  var name_with_ext = $$String.split_on_char(/* "." */46, List.nth(parts, len - 1 | 0));
  return /* record */[
          /* kind */kind,
          /* name */List.nth(name_with_ext, 0),
          /* url */url,
          /* ref */ref
        ];
}

function kind(t) {
  return t[/* kind */0];
}

function url(t) {
  return t[/* url */2];
}

function ref(t) {
  return t[/* ref */3];
}

function name(t) {
  return t[/* name */1];
}

exports.make = make;
exports.kind = kind;
exports.url = url;
exports.ref = ref;
exports.name = name;
/* No side effect */
