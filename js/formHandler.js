$(function () {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: !0,
    submitSuccess: function (b, c) {
      if (!b.attr("action")) {
        c.preventDefault();
        var d = a(b),
          e = {};
        b.find("input, textarea, option:selected").each(function (c) {
          var a = $(this).val(),
            b = $(this).attr("id");
          $(this).is(":checkbox")
            ? (a = $(this).is(":checked"))
            : $(this).is(":radio")
            ? (a = $(this).val() + " = " + $(this).is(":checked"))
            : $(this).is("option:selected") &&
              (b = $(this).parent().attr("id")),
            (e[b] = a);
        }),
          $.ajax({
            url: d,
            type: "POST",
            data: e,
            cache: !1,
            success: function () {
              b.is("[success-msg]")
                ? b.append(
                    "<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                      b.attr("success-msg") +
                      "</strong></div></div>"
                  )
                : window.location.replace(b.attr("success-url")),
                b.trigger("reset");
            },
            error: function () {
              0 == $("#form-alert").length &&
                b.append(
                  "<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                    b.attr("fail-msg") +
                    "</strong></div></div>"
                );
            },
          });
      }
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  function a(a) {
    var b = "./includes/" + a.attr("id") + ".php";
    return (
      a.attr("template-path") &&
        (b = a.attr("template-path") + "/includes/" + a.attr("id") + ".php"),
      b
    );
  }
});
