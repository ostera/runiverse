// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Format = require("bs-platform/lib/js/format.js");
var $$String = require("bs-platform/lib/js/string.js");
var Package = require("./package.bs.js");

function make(packages) {
  return /* record */[
          /* package_count */List.length(packages),
          /* packages */List.sort((function (a, b) {
                  return $$String.compare(a[/* name */0], b[/* name */0]);
                }), packages)
        ];
}

function pp(fmt, index) {
  Curry._1(Format.fprintf(fmt, /* Format */[
            /* Formatting_gen */Block.__(18, [
                /* Open_box */Block.__(1, [/* Format */[
                      /* End_of_format */0,
                      ""
                    ]]),
                /* String_literal */Block.__(11, [
                    "(package_count \"",
                    /* Int */Block.__(4, [
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        /* String_literal */Block.__(11, [
                            "\")\n(packages ",
                            /* Formatting_gen */Block.__(18, [
                                /* Open_box */Block.__(1, [/* Format */[
                                      /* End_of_format */0,
                                      ""
                                    ]]),
                                /* End_of_format */0
                              ])
                          ])
                      ])
                  ])
              ]),
            "@[(package_count \"%d\")\n(packages @["
          ]), index[/* package_count */0]);
  Format.pp_print_list(undefined, Package.pp, fmt, index[/* packages */1]);
  return Format.fprintf(fmt, /* Format */[
              /* Char_literal */Block.__(12, [
                  /* ")" */41,
                  /* Formatting_lit */Block.__(17, [
                      /* Close_box */0,
                      /* Formatting_lit */Block.__(17, [
                          /* Close_box */0,
                          /* End_of_format */0
                        ])
                    ])
                ]),
              ")@]@]"
            ]);
}

var empty = /* record */[
  /* package_count */0,
  /* packages : [] */0
];

exports.empty = empty;
exports.make = make;
exports.pp = pp;
/* Format Not a pure module */
