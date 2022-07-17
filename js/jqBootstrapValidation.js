/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

!(function ($) {
  var a = [],
    b = {
      options: {
        prependExistingHelpBlock: !1,
        sniffHtml: !0,
        preventSubmit: !0,
        submitError: !1,
        submitSuccess: !1,
        semanticallyStrict: !1,
        autoAdd: { helpBlocks: !0 },
        filter: function () {
          return !0;
        },
      },
      methods: {
        init: function (f) {
          var e = $.extend(!0, {}, b);
          e.options = $.extend(!0, e.options, f);
          var g = $.unique(
            this.map(function () {
              return $(this).parents("form")[0];
            }).toArray()
          );
          return (
            $(g).bind("submit", function (c) {
              var a = $(this),
                d = 0,
                b = a
                  .find("input,textarea,select")
                  .not("[type=submit],[type=image]")
                  .filter(e.options.filter);
              b
                .trigger("submit.validation")
                .trigger("validationLostFocus.validation"),
                b.each(function (c, b) {
                  var a = $(b).parents(".form-group, .checkbox").first();
                  a.hasClass("warning") &&
                    (a.removeClass("warning").addClass("error"), d++);
                }),
                b.trigger("validationLostFocus.validation"),
                d
                  ? (e.options.preventSubmit && c.preventDefault(),
                    a.addClass("error"),
                    $.isFunction(e.options.submitError) &&
                      e.options.submitError(
                        a,
                        c,
                        b.jqBootstrapValidation("collectErrors", !0)
                      ))
                  : (a.removeClass("error"),
                    $.isFunction(e.options.submitSuccess) &&
                      e.options.submitSuccess(a, c));
            }),
            this.each(function () {
              var b = $(this),
                h = b.parents(".form-group, .checkbox").first(),
                g = h.find(".help-block").first(),
                n = b.parents("form").first(),
                i = [];
              if (
                (!g.length &&
                  e.options.autoAdd &&
                  e.options.autoAdd.helpBlocks &&
                  ((g = $('<div class="help-block" />')),
                  h.append(g),
                  a.push(g[0])),
                e.options.sniffHtml)
              ) {
                var f = "";
                if (
                  (void 0 !== b.attr("pattern") &&
                    ((f =
                      "Not in the expected format<!-- data-validation-pattern-message to override -->"),
                    b.data("validationPatternMessage") &&
                      (f = b.data("validationPatternMessage")),
                    b.data("validationPatternMessage", f),
                    b.data("validationPatternRegex", b.attr("pattern"))),
                  void 0 !== b.attr("max") ||
                    void 0 !== b.attr("aria-valuemax"))
                ) {
                  var k =
                    void 0 !== b.attr("max")
                      ? b.attr("max")
                      : b.attr("aria-valuemax");
                  (f =
                    "Too high: Maximum of '" +
                    k +
                    "'<!-- data-validation-max-message to override -->"),
                    b.data("validationMaxMessage") &&
                      (f = b.data("validationMaxMessage")),
                    b.data("validationMaxMessage", f),
                    b.data("validationMaxMax", k);
                }
                if (
                  void 0 !== b.attr("min") ||
                  void 0 !== b.attr("aria-valuemin")
                ) {
                  var l =
                    void 0 !== b.attr("min")
                      ? b.attr("min")
                      : b.attr("aria-valuemin");
                  (f =
                    "Too low: Minimum of '" +
                    l +
                    "'<!-- data-validation-min-message to override -->"),
                    b.data("validationMinMessage") &&
                      (f = b.data("validationMinMessage")),
                    b.data("validationMinMessage", f),
                    b.data("validationMinMin", l);
                }
                void 0 !== b.attr("maxlength") &&
                  ((f =
                    "Too long: Maximum of '" +
                    b.attr("maxlength") +
                    "' characters<!-- data-validation-maxlength-message to override -->"),
                  b.data("validationMaxlengthMessage") &&
                    (f = b.data("validationMaxlengthMessage")),
                  b.data("validationMaxlengthMessage", f),
                  b.data("validationMaxlengthMaxlength", b.attr("maxlength"))),
                  void 0 !== b.attr("minlength") &&
                    ((f =
                      "Too short: Minimum of '" +
                      b.attr("minlength") +
                      "' characters<!-- data-validation-minlength-message to override -->"),
                    b.data("validationMinlengthMessage") &&
                      (f = b.data("validationMinlengthMessage")),
                    b.data("validationMinlengthMessage", f),
                    b.data(
                      "validationMinlengthMinlength",
                      b.attr("minlength")
                    )),
                  (void 0 !== b.attr("required") ||
                    void 0 !== b.attr("aria-required")) &&
                    ((f = e.builtInValidators.required.message),
                    b.data("validationRequiredMessage") &&
                      (f = b.data("validationRequiredMessage")),
                    b.data("validationRequiredMessage", f)),
                  void 0 !== b.attr("type") &&
                    "number" === b.attr("type").toLowerCase() &&
                    ((f = e.builtInValidators.number.message),
                    b.data("validationNumberMessage") &&
                      (f = b.data("validationNumberMessage")),
                    b.data("validationNumberMessage", f)),
                  void 0 !== b.attr("type") &&
                    "email" === b.attr("type").toLowerCase() &&
                    ((f =
                      "Not a valid email address<!-- data-validator-validemail-message to override -->"),
                    b.data("validationValidemailMessage")
                      ? (f = b.data("validationValidemailMessage"))
                      : b.data("validationEmailMessage") &&
                        (f = b.data("validationEmailMessage")),
                    b.data("validationValidemailMessage", f)),
                  void 0 !== b.attr("minchecked") &&
                    ((f =
                      "Not enough options checked; Minimum of '" +
                      b.attr("minchecked") +
                      "' required<!-- data-validation-minchecked-message to override -->"),
                    b.data("validationMincheckedMessage") &&
                      (f = b.data("validationMincheckedMessage")),
                    b.data("validationMincheckedMessage", f),
                    b.data(
                      "validationMincheckedMinchecked",
                      b.attr("minchecked")
                    )),
                  void 0 !== b.attr("maxchecked") &&
                    ((f =
                      "Too many options checked; Maximum of '" +
                      b.attr("maxchecked") +
                      "' required<!-- data-validation-maxchecked-message to override -->"),
                    b.data("validationMaxcheckedMessage") &&
                      (f = b.data("validationMaxcheckedMessage")),
                    b.data("validationMaxcheckedMessage", f),
                    b.data(
                      "validationMaxcheckedMaxchecked",
                      b.attr("maxchecked")
                    ));
              }
              void 0 !== b.data("validation") &&
                (i = b.data("validation").split(",")),
                $.each(b.data(), function (b, c) {
                  var a = b.replace(/([A-Z])/g, ",$1").split(",");
                  "validation" === a[0] && a[1] && i.push(a[1]);
                });
              var j = i,
                m = [];
              do
                $.each(i, function (a, b) {
                  i[a] = c(b);
                }),
                  (i = $.unique(i)),
                  (m = []),
                  $.each(j, function (f, a) {
                    if (void 0 !== b.data("validation" + a + "Shortcut"))
                      $.each(
                        b.data("validation" + a + "Shortcut").split(","),
                        function (b, a) {
                          m.push(a);
                        }
                      );
                    else if (e.builtInValidators[a.toLowerCase()]) {
                      var d = e.builtInValidators[a.toLowerCase()];
                      "shortcut" === d.type.toLowerCase() &&
                        $.each(d.shortcut.split(","), function (b, a) {
                          (a = c(a)), m.push(a), i.push(a);
                        });
                    }
                  }),
                  (j = m);
              while (j.length > 0);
              var o = {};
              $.each(i, function (j, a) {
                var d = b.data("validation" + a + "Message"),
                  h = void 0 !== d,
                  f = !1;
                if (
                  ((d =
                    d ||
                    "'" +
                      a +
                      "' validation failed <!-- Add attribute 'data-validation-" +
                      a.toLowerCase() +
                      "-message' to input to change this message -->"),
                  $.each(e.validatorTypes, function (e, g) {
                    void 0 === o[e] && (o[e] = []),
                      f ||
                        void 0 === b.data("validation" + a + c(g.name)) ||
                        (o[e].push(
                          $.extend(
                            !0,
                            { name: c(g.name), message: d },
                            g.init(b, a)
                          )
                        ),
                        (f = !0));
                  }),
                  !f && e.builtInValidators[a.toLowerCase()])
                ) {
                  var g = $.extend(
                    !0,
                    {},
                    e.builtInValidators[a.toLowerCase()]
                  );
                  h && (g.message = d);
                  var i = g.type.toLowerCase();
                  "shortcut" === i
                    ? (f = !0)
                    : $.each(e.validatorTypes, function (d, e) {
                        void 0 === o[d] && (o[d] = []),
                          f ||
                            i !== d.toLowerCase() ||
                            (b.data(
                              "validation" + a + c(e.name),
                              g[e.name.toLowerCase()]
                            ),
                            o[i].push($.extend(g, e.init(b, a))),
                            (f = !0));
                      });
                }
                f || $.error("Cannot find validation info for '" + a + "'");
              }),
                g.data(
                  "original-contents",
                  g.data("original-contents")
                    ? g.data("original-contents")
                    : g.html()
                ),
                g.data(
                  "original-role",
                  g.data("original-role")
                    ? g.data("original-role")
                    : g.attr("role")
                ),
                h.data(
                  "original-classes",
                  h.data("original-clases")
                    ? h.data("original-classes")
                    : h.attr("class")
                ),
                b.data(
                  "original-aria-invalid",
                  b.data("original-aria-invalid")
                    ? b.data("original-aria-invalid")
                    : b.attr("aria-invalid")
                ),
                b.bind("validation.validation", function (c, f) {
                  var g = d(b),
                    a = [];
                  return (
                    $.each(o, function (c, d) {
                      (g ||
                        g.length ||
                        (f && f.includeEmpty) ||
                        (e.validatorTypes[c].blockSubmit &&
                          f &&
                          f.submitting)) &&
                        $.each(d, function (f, d) {
                          e.validatorTypes[c].validate(b, g, d) &&
                            a.push(d.message);
                        });
                    }),
                    a
                  );
                }),
                b.bind("getValidators.validation", function () {
                  return o;
                }),
                b.bind("submit.validation", function () {
                  return b.triggerHandler("change.validation", {
                    submitting: !0,
                  });
                }),
                b.bind(
                  "keyup.validation focus.validation blur.validation click.validation keydown.validation keypress.validation change.validation",
                  function (c, i) {
                    var f = d(b),
                      a = [];
                    h.find("input,textarea,select").each(function (f, c) {
                      var e = a.length;
                      if (
                        ($.each(
                          $(c).triggerHandler("validation.validation", i),
                          function (c, b) {
                            a.push(b);
                          }
                        ),
                        a.length > e)
                      )
                        $(c).attr("aria-invalid", "true");
                      else {
                        var d = b.data("original-aria-invalid");
                        $(c).attr("aria-invalid", void 0 !== d && d);
                      }
                    }),
                      n
                        .find("input,select,textarea")
                        .not(b)
                        .not('[name="' + b.attr("name") + '"]')
                        .trigger("validationLostFocus.validation"),
                      (a = $.unique(a.sort())).length
                        ? (h.removeClass("success error").addClass("warning"),
                          e.options.semanticallyStrict && 1 === a.length
                            ? g.html(
                                a[0] +
                                  (e.options.prependExistingHelpBlock
                                    ? g.data("original-contents")
                                    : "")
                              )
                            : g.html(
                                '<ul class="list-unstyled alert alert-warning" role="alert"><li>' +
                                  a.join("</li><li>") +
                                  "</li></ul>" +
                                  (e.options.prependExistingHelpBlock
                                    ? g.data("original-contents")
                                    : "")
                              ))
                        : (h.removeClass("warning error success"),
                          f.length > 0 && h.addClass("success"),
                          g.html(g.data("original-contents"))),
                      "blur" === c.type && h.removeClass("success");
                  }
                ),
                b.bind("validationLostFocus.validation", function () {
                  h.removeClass("success");
                });
            })
          );
        },
        destroy: function () {
          return this.each(function () {
            var b = $(this),
              d = b.parents(".form-group, .checkbox").first(),
              c = d.find(".help-block").first();
            b.unbind(".validation"),
              c.html(c.data("original-contents")),
              d.attr("class", d.data("original-classes")),
              b.attr("aria-invalid", b.data("original-aria-invalid")),
              c.attr("role", b.data("original-role")),
              a.indexOf(c[0]) > -1 && c.remove();
          });
        },
        collectErrors: function (b) {
          var a = {};
          return (
            this.each(function (f, d) {
              var b = $(d),
                c = b.attr("name"),
                e = b.triggerHandler("validation.validation", {
                  includeEmpty: !0,
                });
              a[c] = $.extend(!0, e, a[c]);
            }),
            $.each(a, function (b, c) {
              0 === c.length && delete a[b];
            }),
            a
          );
        },
        hasErrors: function () {
          var a = [];
          return (
            this.each(function (c, b) {
              a = a.concat(
                $(b).triggerHandler("getValidators.validation")
                  ? $(b).triggerHandler("validation.validation", {
                      submitting: !0,
                    })
                  : []
              );
            }),
            a.length > 0
          );
        },
        override: function (a) {
          b = $.extend(!0, b, a);
        },
      },
      validatorTypes: {
        callback: {
          name: "callback",
          init: function (a, b) {
            return {
              validatorName: b,
              callback: a.data("validation" + b + "Callback"),
              lastValue: a.val(),
              lastValid: !0,
              lastFinished: !0,
            };
          },
          validate: function (c, b, a) {
            if (a.lastValue === b && a.lastFinished) return !a.lastValid;
            if (!0 === a.lastFinished) {
              (a.lastValue = b), (a.lastValid = !0), (a.lastFinished = !1);
              var d = a,
                e = c;
              f(a.callback, window, c, b, function (a) {
                d.lastValue === a.value &&
                  ((d.lastValid = a.valid),
                  a.message && (d.message = a.message),
                  (d.lastFinished = !0),
                  e.data("validation" + d.validatorName + "Message", d.message),
                  setTimeout(function () {
                    e.trigger("change.validation");
                  }, 1));
              });
            }
            return !1;
          },
        },
        ajax: {
          name: "ajax",
          init: function (a, b) {
            return {
              validatorName: b,
              url: a.data("validation" + b + "Ajax"),
              lastValue: a.val(),
              lastValid: !0,
              lastFinished: !0,
            };
          },
          validate: function (c, b, a) {
            return "" + a.lastValue == "" + b && !0 === a.lastFinished
              ? !1 === a.lastValid
              : (!0 === a.lastFinished &&
                  ((a.lastValue = b),
                  (a.lastValid = !0),
                  (a.lastFinished = !1),
                  $.ajax({
                    url: a.url,
                    data: "value=" + b + "&field=" + c.attr("name"),
                    dataType: "json",
                    success: function (b) {
                      "" + a.lastValue == "" + b.value &&
                        ((a.lastValid = !!b.valid),
                        b.message && (a.message = b.message),
                        (a.lastFinished = !0),
                        c.data(
                          "validation" + a.validatorName + "Message",
                          a.message
                        ),
                        setTimeout(function () {
                          c.trigger("change.validation");
                        }, 1));
                    },
                    failure: function () {
                      (a.lastValid = !0),
                        (a.message = "ajax call failed"),
                        (a.lastFinished = !0),
                        c.data(
                          "validation" + a.validatorName + "Message",
                          a.message
                        ),
                        setTimeout(function () {
                          c.trigger("change.validation");
                        }, 1);
                    },
                  })),
                !1);
          },
        },
        regex: {
          name: "regex",
          init: function (a, b) {
            return { regex: e(a.data("validation" + b + "Regex")) };
          },
          validate: function (c, b, a) {
            return (
              (!a.regex.test(b) && !a.negative) ||
              (a.regex.test(b) && a.negative)
            );
          },
        },
        required: {
          name: "required",
          init: function (a, b) {
            return {};
          },
          validate: function (c, a, b) {
            return (
              !!(0 === a.length && !b.negative) ||
              !!(a.length > 0 && b.negative)
            );
          },
          blockSubmit: !0,
        },
        match: {
          name: "match",
          init: function (a, c) {
            var b = a
              .parents("form")
              .first()
              .find('[name="' + a.data("validation" + c + "Match") + '"]')
              .first();
            return (
              b.bind("validation.validation", function () {
                a.trigger("change.validation", { submitting: !0 });
              }),
              { element: b }
            );
          },
          validate: function (c, b, a) {
            return (
              (b !== a.element.val() && !a.negative) ||
              (b === a.element.val() && a.negative)
            );
          },
          blockSubmit: !0,
        },
        max: {
          name: "max",
          init: function (a, b) {
            return { max: a.data("validation" + b + "Max") };
          },
          validate: function (c, b, a) {
            return (
              (parseFloat(b, 10) > parseFloat(a.max, 10) && !a.negative) ||
              (parseFloat(b, 10) <= parseFloat(a.max, 10) && a.negative)
            );
          },
        },
        min: {
          name: "min",
          init: function (a, b) {
            return { min: a.data("validation" + b + "Min") };
          },
          validate: function (c, b, a) {
            return (
              (parseFloat(b) < parseFloat(a.min) && !a.negative) ||
              (parseFloat(b) >= parseFloat(a.min) && a.negative)
            );
          },
        },
        maxlength: {
          name: "maxlength",
          init: function (a, b) {
            return { maxlength: a.data("validation" + b + "Maxlength") };
          },
          validate: function (c, b, a) {
            return (
              (b.length > a.maxlength && !a.negative) ||
              (b.length <= a.maxlength && a.negative)
            );
          },
        },
        minlength: {
          name: "minlength",
          init: function (a, b) {
            return { minlength: a.data("validation" + b + "Minlength") };
          },
          validate: function (c, b, a) {
            return (
              (b.length < a.minlength && !a.negative) ||
              (b.length >= a.minlength && a.negative)
            );
          },
        },
        maxchecked: {
          name: "maxchecked",
          init: function (a, c) {
            var b = a
              .parents("form")
              .first()
              .find('[name="' + a.attr("name") + '"]');
            return (
              b.bind("click.validation", function () {
                a.trigger("change.validation", { includeEmpty: !0 });
              }),
              {
                maxchecked: a.data("validation" + c + "Maxchecked"),
                elements: b,
              }
            );
          },
          validate: function (b, c, a) {
            return (
              (a.elements.filter(":checked").length > a.maxchecked &&
                !a.negative) ||
              (a.elements.filter(":checked").length <= a.maxchecked &&
                a.negative)
            );
          },
          blockSubmit: !0,
        },
        minchecked: {
          name: "minchecked",
          init: function (a, c) {
            var b = a
              .parents("form")
              .first()
              .find('[name="' + a.attr("name") + '"]');
            return (
              b.bind("click.validation", function () {
                a.trigger("change.validation", { includeEmpty: !0 });
              }),
              {
                minchecked: a.data("validation" + c + "Minchecked"),
                elements: b,
              }
            );
          },
          validate: function (b, c, a) {
            return (
              (a.elements.filter(":checked").length < a.minchecked &&
                !a.negative) ||
              (a.elements.filter(":checked").length >= a.minchecked &&
                a.negative)
            );
          },
          blockSubmit: !0,
        },
      },
      builtInValidators: {
        email: { name: "Email", type: "shortcut", shortcut: "validemail" },
        validemail: {
          name: "Validemail",
          type: "regex",
          regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",
          message:
            "Not a valid email address<!-- data-validator-validemail-message to override -->",
        },
        passwordagain: {
          name: "Passwordagain",
          type: "match",
          match: "password",
          message:
            "Does not match the given password<!-- data-validator-paswordagain-message to override -->",
        },
        positive: {
          name: "Positive",
          type: "shortcut",
          shortcut: "number,positivenumber",
        },
        negative: {
          name: "Negative",
          type: "shortcut",
          shortcut: "number,negativenumber",
        },
        number: {
          name: "Number",
          type: "regex",
          regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
          message:
            "Must be a number<!-- data-validator-number-message to override -->",
        },
        integer: {
          name: "Integer",
          type: "regex",
          regex: "[+-]?\\d+",
          message:
            "No decimal places allowed<!-- data-validator-integer-message to override -->",
        },
        positivenumber: {
          name: "Positivenumber",
          type: "min",
          min: 0,
          message:
            "Must be a positive number<!-- data-validator-positivenumber-message to override -->",
        },
        negativenumber: {
          name: "Negativenumber",
          type: "max",
          max: 0,
          message:
            "Must be a negative number<!-- data-validator-negativenumber-message to override -->",
        },
        required: {
          name: "Required",
          type: "required",
          message:
            "This is required<!-- data-validator-required-message to override -->",
        },
        checkone: {
          name: "Checkone",
          type: "minchecked",
          minchecked: 1,
          message:
            "Check at least one option<!-- data-validation-checkone-message to override -->",
        },
      },
    },
    c = function (a) {
      return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (c, a, b) {
        return a + b.toUpperCase();
      });
    },
    d = function (b) {
      var a = b.val(),
        c = b.attr("type");
      return (
        "checkbox" === c && (a = b.is(":checked") ? a : ""),
        "radio" === c &&
          (a =
            $('input[name="' + b.attr("name") + '"]:checked').length > 0
              ? a
              : ""),
        a
      );
    };
  function e(a) {
    return new RegExp("^" + a + "$");
  }
  function f(d, a) {
    for (
      var e = Array.prototype.slice.call(arguments).splice(2),
        b = d.split("."),
        f = b.pop(),
        c = 0;
      c < b.length;
      c++
    )
      a = a[b[c]];
    return a[f].apply(this, e);
  }
  ($.fn.jqBootstrapValidation = function (a) {
    return b.methods[a]
      ? b.methods[a].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof a && a
      ? ($.error(
          "Method " + a + " does not exist on jQuery.jqBootstrapValidation"
        ),
        null)
      : b.methods.init.apply(this, arguments);
  }),
    ($.jqBootstrapValidation = function (a) {
      $(":input")
        .not("[type=image],[type=submit]")
        .jqBootstrapValidation.apply(this, arguments);
    });
})(jQuery);
