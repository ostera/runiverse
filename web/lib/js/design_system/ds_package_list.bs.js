// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Ds_package_card = require("./ds_package_card.bs.js");

var style = {
  padding: "0"
};

function Ds_package_list(Props) {
  var packages = Props.packages;
  return React.createElement("ul", {
              style: style
            }, $$Array.of_list(List.map((function (pkg) {
                        return React.createElement(Ds_package_card.make, {
                                    pkg: pkg
                                  });
                      }), packages)));
}

var S = 0;

var make = Ds_package_list;

exports.S = S;
exports.style = style;
exports.make = make;
/* react Not a pure module */
