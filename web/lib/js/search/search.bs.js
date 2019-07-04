// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Package = require("../model/package.bs.js");
var Repromise = require("@aantron/repromise/lib/js/src/js/repromise.js");
var Design_system = require("../design_system/design_system.bs.js");
var Pkg_index_data = require("./pkg_index_data.bs.js");

function make(index) {
  return /* record */[/* index */index];
}

var initial = /* record */[/* index */undefined];

var State = /* module */[
  /* make */make,
  /* initial */initial
];

function load_index(state, setState) {
  React.useEffect((function () {
          var match = state[/* index */0];
          if (match === undefined) {
            Repromise.Rejectable[/* map */5]((function (index) {
                    Curry._1(setState, (function (param) {
                            return /* record */[/* index */index];
                          }));
                    return Repromise.Rejectable[/* resolved */2](/* () */0);
                  }), Pkg_index_data.load(/* () */0));
          }
          return undefined;
        }));
  return /* () */0;
}

var Effects = /* module */[/* load_index */load_index];

function match_name(pattern, pkg) {
  return pattern.test(pkg[/* name */0]);
}

function match_desc(pattern, pkg) {
  var match = pkg[/* description */1];
  if (match !== undefined) {
    return pattern.test(match);
  } else {
    return true;
  }
}

function match_target(pattern, pkg) {
  return pattern.test(Package.Target[/* to_string */1](pkg[/* target */4]));
}

function find_pkgs(filter) {
  return List.filter((function (pkg) {
                var pattern = new RegExp(filter);
                if (pattern.test(pkg[/* name */0]) || match_desc(pattern, pkg)) {
                  return true;
                } else {
                  return match_target(pattern, pkg);
                }
              }));
}

function handle_results(filter, index) {
  var pkgs = index[/* packages */1];
  var pkgs$1 = filter === "" ? pkgs : find_pkgs(filter)(pkgs);
  var pkg_count = String(List.length(pkgs$1));
  var heading = filter === "" ? React.createElement(Design_system.Tiny_title[/* make */1], {
          children: pkg_count + " packages in the ecosystem."
        }) : React.createElement(Design_system.Tiny_title[/* make */1], {
          children: pkg_count + (" search results for \"" + (filter + "\""))
        });
  return React.createElement(Design_system.Container[/* make */1], {
              children: null
            }, heading, React.createElement(Design_system.Package_list[/* make */1], {
                  packages: pkgs$1
                }));
}

function Search$App(Props) {
  var filter = Props.filter;
  var match = React.useState((function () {
          return initial;
        }));
  var state = match[0];
  load_index(state, match[1]);
  var match$1 = state[/* index */0];
  if (match$1 !== undefined) {
    return handle_results(filter, match$1);
  } else {
    return React.createElement(Design_system.Loading[/* make */1], { });
  }
}

var App = /* module */[/* make */Search$App];

exports.State = State;
exports.Effects = Effects;
exports.match_name = match_name;
exports.match_desc = match_desc;
exports.match_target = match_target;
exports.find_pkgs = find_pkgs;
exports.handle_results = handle_results;
exports.App = App;
/* react Not a pure module */
