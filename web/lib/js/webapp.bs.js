// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Ds_nav = require("./design_system/ds_nav.bs.js");
var Search = require("./search/search.bs.js");
var Ds_logo = require("./design_system/ds_logo.bs.js");
var Ds_footer = require("./design_system/ds_footer.bs.js");
var Ds_global = require("./design_system/ds_global.bs.js");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Ds_background = require("./design_system/ds_background.bs.js");
var Ds_search_input = require("./design_system/ds_search_input.bs.js");

function Webapp$Main(Props) {
  var match = React.useState((function () {
          return "";
        }));
  return React.createElement(Ds_global.make, {
              children: null
            }, React.createElement(Ds_background.make, { }), React.createElement(Ds_nav.make, {
                  children: null
                }, React.createElement(Ds_logo.make, { }), React.createElement(Ds_search_input.make, {
                      onChange: match[1],
                      placeholder: "Search..."
                    })), React.createElement(Search.App[/* make */0], {
                  filter: match[0]
                }), React.createElement(Ds_footer.make, { }));
}

var Main = /* module */[/* make */Webapp$Main];

ReactDOMRe.renderToElementWithId(React.createElement(Webapp$Main, { }), "app");

exports.Main = Main;
/*  Not a pure module */
