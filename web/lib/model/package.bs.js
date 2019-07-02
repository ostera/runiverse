// Generated by BUCKLESCRIPT VERSION 6.0.2, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Infix = require("../utils/infix.bs.js");
var Format = require("bs-platform/lib/js/format.js");
var $$String = require("bs-platform/lib/js/string.js");
var Version = require("./version.bs.js");

function pp(fmt, pkg) {
  var name = pkg[/* name */0];
  var desc = Infix.$$Option[/* <|> */0](pkg[/* description */1], "No description.");
  Curry._3(Format.fprintf(fmt, /* Format */[
            /* Formatting_gen */Block.__(18, [
                /* Open_box */Block.__(1, [/* Format */[
                      /* End_of_format */0,
                      ""
                    ]]),
                /* String_literal */Block.__(11, [
                    "(name ",
                    /* Caml_string */Block.__(3, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ") (description ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ") (keywords ",
                                    /* Caml_string */Block.__(3, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            ") (versions ",
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ])
              ]),
            "@[(name %S) (description %S) (keywords %S) (versions "
          ]), name, desc, $$String.concat(", ", pkg[/* keywords */3]));
  Format.pp_print_list(undefined, Version.pp, fmt, pkg[/* versions */2]);
  return Format.fprintf(fmt, /* Format */[
              /* Char_literal */Block.__(12, [
                  /* ")" */41,
                  /* Formatting_lit */Block.__(17, [
                      /* Close_box */0,
                      /* End_of_format */0
                    ])
                ]),
              ")@]"
            ]);
}

exports.pp = pp;
/* Format Not a pure module */
