// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Components$Search(Props) {
  var onChange = Props.onChange;
  return React.createElement("input", {
              placeholder: "Package name...",
              onChange: (function (e) {
                  return Curry._1(onChange, e.target.value);
                })
            });
}

var Search = /* module */[/* make */Components$Search];

function Components$Pkg_list(Props) {
  var index = Props.index;
  var match = React.useState((function () {
          return "";
        }));
  var setFilter = match[1];
  var filter = match[0];
  console.log(index);
  var pkgs = filter === "" ? index[/* packages */1] : List.filter((function (pkg) {
              var pattern = new RegExp(filter);
              return pattern.test(pkg[/* name */0]);
            }))(index[/* packages */1]);
  return React.createElement("div", undefined, React.createElement(Components$Search, {
                  onChange: Curry.__1(setFilter)
                }), React.createElement("ul", undefined, $$Array.of_list(List.map((function (pkg) {
                            return React.createElement("li", undefined, pkg[/* name */0]);
                          }), pkgs))));
}

var Pkg_list = /* module */[/* make */Components$Pkg_list];

exports.Search = Search;
exports.Pkg_list = Pkg_list;
/* react Not a pure module */
