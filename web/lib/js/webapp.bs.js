// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Repromise = require("@aantron/repromise/lib/js/src/js/repromise.js");
var Components = require("./design_system/components.bs.js");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Pkg_index_data = require("./pkg_index/pkg_index_data.bs.js");

Repromise.Rejectable[/* map */5]((function (index) {
        ReactDOMRe.renderToElementWithId(React.createElement(Components.Pkg_list[/* make */1], {
                  index: index
                }), "app");
        return Repromise.Rejectable[/* resolved */2](/* () */0);
      }), Pkg_index_data.load(/* () */0));

/*  Not a pure module */
