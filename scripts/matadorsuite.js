"use strict";
$(function () {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitError: function (a, e, t) {
        },
        submitSuccess: function (a, e) {
            e.preventDefault();
            var t = $("input#name").val(),
                i = $("input#email").val(),
                n = $("input#phone").val(),
                o = $("textarea#message").val(),
                r = t;
            r.indexOf(" ") >= 0 && (r = t.split(" ").slice(0, -1).join(" ")), $this = $("#sendMessageButton"), $this.prop("disabled", !0), $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {name: t, phone: n, email: i, message: o},
                cache: !1,
                success: function () {
                    $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Your message has been sent. </strong>"), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset")
                },
                error: function () {
                    $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append($("<strong>").text("Sorry " + r + ", it seems that my mail server is not responding. Please try again later!")), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", !1)
                    }, 1e3)
                }
            });
        },
        filter: function () {
            return $(this).is(":visible")
        }
    }), $('a[data-toggle="tab"]').click(function (a) {
        a.preventDefault(), $(this).tab("show")
    })
}), $("#name").focus(function () {
    $("#success").html("")
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
    return typeof a
} : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
!function (a) {
    function e(a) {
        return new RegExp("^" + a + "$")
    }

    function t(a, e) {
        for (var t = Array.prototype.slice.call(arguments).splice(2), i = a.split("."), n = i.pop(), o = 0; o < i.length; o++) e = e[i[o]];
        return e[n].apply(this, t)
    }

    var i = [], n = {
        options: {
            prependExistingHelpBlock: !1,
            sniffHtml: !0,
            preventSubmit: !0,
            submitError: !1,
            submitSuccess: !1,
            semanticallyStrict: !1,
            autoAdd: {helpBlocks: !0},
            filter: function () {
                return !0
            }
        },
        methods: {
            init: function (e) {
                var t = a.extend(!0, {}, n);
                t.options = a.extend(!0, t.options, e);
                var s = this, l = a.unique(s.map(function () {
                    return a(this).parents("form")[0]
                }).toArray());
                return a(l).bind("submit", function (e) {
                    var i = a(this), n = 0,
                        o = i.find("input,textarea,select").not("[type=submit],[type=image]").filter(t.options.filter);
                    o.trigger("submit.validation").trigger("validationLostFocus.validation"), o.each(function (e, t) {
                        var i = a(t), o = i.parents(".form-group").first();
                        o.hasClass("warning") && (o.removeClass("warning").addClass("error"), n++)
                    }), o.trigger("validationLostFocus.validation"), n ? (t.options.preventSubmit && e.preventDefault(), i.addClass("error"), a.isFunction(t.options.submitError) && t.options.submitError(i, e, o.jqBootstrapValidation("collectErrors", !0))) : (i.removeClass("error"), a.isFunction(t.options.submitSuccess) && t.options.submitSuccess(i, e))
                }), this.each(function () {
                    var e = a(this), n = e.parents(".form-group").first(), s = n.find(".help-block").first(),
                        l = e.parents("form").first(), d = [];
                    if (!s.length && t.options.autoAdd && t.options.autoAdd.helpBlocks && (s = a('<div class="help-block" />'), n.find(".controls").append(s), i.push(s[0])), t.options.sniffHtml) {
                        var c = "";
                        if (void 0 !== e.attr("pattern") && (c = "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e", e.data("validationPatternMessage") && (c = e.data("validationPatternMessage")), e.data("validationPatternMessage", c), e.data("validationPatternRegex", e.attr("pattern"))), void 0 !== e.attr("max") || void 0 !== e.attr("aria-valuemax")) {
                            var u = void 0 !== e.attr("max") ? e.attr("max") : e.attr("aria-valuemax");
                            c = "Too high: Maximum of '" + u + "'\x3c!-- data-validation-max-message to override --\x3e", e.data("validationMaxMessage") && (c = e.data("validationMaxMessage")), e.data("validationMaxMessage", c), e.data("validationMaxMax", u)
                        }
                        if (void 0 !== e.attr("min") || void 0 !== e.attr("aria-valuemin")) {
                            var m = void 0 !== e.attr("min") ? e.attr("min") : e.attr("aria-valuemin");
                            c = "Too low: Minimum of '" + m + "'\x3c!-- data-validation-min-message to override --\x3e", e.data("validationMinMessage") && (c = e.data("validationMinMessage")), e.data("validationMinMessage", c), e.data("validationMinMin", m)
                        }
                        void 0 !== e.attr("maxlength") && (c = "Too long: Maximum of '" + e.attr("maxlength") + "' characters\x3c!-- data-validation-maxlength-message to override --\x3e", e.data("validationMaxlengthMessage") && (c = e.data("validationMaxlengthMessage")), e.data("validationMaxlengthMessage", c), e.data("validationMaxlengthMaxlength", e.attr("maxlength"))), void 0 !== e.attr("minlength") && (c = "Too short: Minimum of '" + e.attr("minlength") + "' characters\x3c!-- data-validation-minlength-message to override --\x3e", e.data("validationMinlengthMessage") && (c = e.data("validationMinlengthMessage")), e.data("validationMinlengthMessage", c), e.data("validationMinlengthMinlength", e.attr("minlength"))), void 0 === e.attr("required") && void 0 === e.attr("aria-required") || (c = t.builtInValidators.required.message, e.data("validationRequiredMessage") && (c = e.data("validationRequiredMessage")), e.data("validationRequiredMessage", c)), void 0 !== e.attr("type") && "number" === e.attr("type").toLowerCase() && (c = t.builtInValidators.number.message, e.data("validationNumberMessage") && (c = e.data("validationNumberMessage")), e.data("validationNumberMessage", c)), void 0 !== e.attr("type") && "email" === e.attr("type").toLowerCase() && (c = "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e", e.data("validationValidemailMessage") ? c = e.data("validationValidemailMessage") : e.data("validationEmailMessage") && (c = e.data("validationEmailMessage")), e.data("validationValidemailMessage", c)), void 0 !== e.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + e.attr("minchecked") + "' required\x3c!-- data-validation-minchecked-message to override --\x3e", e.data("validationMincheckedMessage") && (c = e.data("validationMincheckedMessage")), e.data("validationMincheckedMessage", c), e.data("validationMincheckedMinchecked", e.attr("minchecked"))), void 0 !== e.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + e.attr("maxchecked") + "' required\x3c!-- data-validation-maxchecked-message to override --\x3e", e.data("validationMaxcheckedMessage") && (c = e.data("validationMaxcheckedMessage")), e.data("validationMaxcheckedMessage", c), e.data("validationMaxcheckedMaxchecked", e.attr("maxchecked")))
                    }
                    void 0 !== e.data("validation") && (d = e.data("validation").split(",")), a.each(e.data(), function (a, e) {
                        var t = a.replace(/([A-Z])/g, ",$1").split(",");
                        "validation" === t[0] && t[1] && d.push(t[1])
                    });
                    var v = d, g = [];
                    do {
                        a.each(d, function (a, e) {
                            d[a] = o(e)
                        }), d = a.unique(d), g = [], a.each(v, function (i, n) {
                            if (void 0 !== e.data("validation" + n + "Shortcut")) a.each(e.data("validation" + n + "Shortcut").split(","), function (a, e) {
                                g.push(e)
                            }); else if (t.builtInValidators[n.toLowerCase()]) {
                                var r = t.builtInValidators[n.toLowerCase()];
                                "shortcut" === r.type.toLowerCase() && a.each(r.shortcut.split(","), function (a, e) {
                                    e = o(e), g.push(e), d.push(e)
                                })
                            }
                        }), v = g
                    } while (v.length > 0);
                    var h = {};
                    a.each(d, function (i, n) {
                        var r = e.data("validation" + n + "Message"), s = void 0 !== r, l = !1;
                        if (r = r || "'" + n + "' validation failed \x3c!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message --\x3e", a.each(t.validatorTypes, function (t, i) {
                            void 0 === h[t] && (h[t] = []), l || void 0 === e.data("validation" + n + o(i.name)) || (h[t].push(a.extend(!0, {
                                name: o(i.name),
                                message: r
                            }, i.init(e, n))), l = !0)
                        }), !l && t.builtInValidators[n.toLowerCase()]) {
                            var d = a.extend(!0, {}, t.builtInValidators[n.toLowerCase()]);
                            s && (d.message = r);
                            var c = d.type.toLowerCase();
                            "shortcut" === c ? l = !0 : a.each(t.validatorTypes, function (t, i) {
                                void 0 === h[t] && (h[t] = []), l || c !== t.toLowerCase() || (e.data("validation" + n + o(i.name), d[i.name.toLowerCase()]), h[c].push(a.extend(d, i.init(e, n))), l = !0)
                            })
                        }
                        l || a.error("Cannot find validation info for '" + n + "'")
                    }), s.data("original-contents", s.data("original-contents") ? s.data("original-contents") : s.html()), s.data("original-role", s.data("original-role") ? s.data("original-role") : s.attr("role")), n.data("original-classes", n.data("original-clases") ? n.data("original-classes") : n.attr("class")), e.data("original-aria-invalid", e.data("original-aria-invalid") ? e.data("original-aria-invalid") : e.attr("aria-invalid")), e.bind("validation.validation", function (i, n) {
                        var o = r(e), s = [];
                        return a.each(h, function (i, r) {
                            (o || o.length || n && n.includeEmpty || t.validatorTypes[i].blockSubmit && n && n.submitting) && a.each(r, function (a, n) {
                                t.validatorTypes[i].validate(e, o, n) && s.push(n.message)
                            })
                        }), s
                    }), e.bind("getValidators.validation", function () {
                        return h
                    }), e.bind("submit.validation", function () {
                        return e.triggerHandler("change.validation", {submitting: !0})
                    }), e.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (i, o) {
                        var d = r(e), c = [];
                        n.find("input,textarea,select").each(function (t, i) {
                            var n = c.length;
                            if (a.each(a(i).triggerHandler("validation.validation", o), function (a, e) {
                                c.push(e)
                            }), c.length > n) a(i).attr("aria-invalid", "true"); else {
                                var r = e.data("original-aria-invalid");
                                a(i).attr("aria-invalid", void 0 !== r && r)
                            }
                        }), l.find("input,select,textarea").not(e).not('[name="' + e.attr("name") + '"]').trigger("validationLostFocus.validation"), c = a.unique(c.sort()), c.length ? (n.removeClass("success error").addClass("warning"), t.options.semanticallyStrict && 1 === c.length ? s.html(c[0] + (t.options.prependExistingHelpBlock ? s.data("original-contents") : "")) : s.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (t.options.prependExistingHelpBlock ? s.data("original-contents") : ""))) : (n.removeClass("warning error success"), d.length > 0 && n.addClass("success"), s.html(s.data("original-contents"))), "blur" === i.type && n.removeClass("success")
                    }), e.bind("validationLostFocus.validation", function () {
                        n.removeClass("success")
                    })
                })
            }, destroy: function () {
                return this.each(function () {
                    var e = a(this), t = e.parents(".form-group").first(), n = t.find(".help-block").first();
                    e.unbind(".validation"), n.html(n.data("original-contents")), t.attr("class", t.data("original-classes")), e.attr("aria-invalid", e.data("original-aria-invalid")), n.attr("role", e.data("original-role")), i.indexOf(n[0]) > -1 && n.remove()
                })
            }, collectErrors: function (e) {
                var t = {};
                return this.each(function (e, i) {
                    var n = a(i), o = n.attr("name"), r = n.triggerHandler("validation.validation", {includeEmpty: !0});
                    t[o] = a.extend(!0, r, t[o])
                }), a.each(t, function (a, e) {
                    0 === e.length && delete t[a]
                }), t
            }, hasErrors: function () {
                var e = [];
                return this.each(function (t, i) {
                    e = e.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", {submitting: !0}) : [])
                }), e.length > 0
            }, override: function (e) {
                n = a.extend(!0, n, e)
            }
        },
        validatorTypes: {
            callback: {
                name: "callback", init: function (a, e) {
                    return {
                        validatorName: e,
                        callback: a.data("validation" + e + "Callback"),
                        lastValue: a.val(),
                        lastValid: !0,
                        lastFinished: !0
                    }
                }, validate: function (a, e, i) {
                    if (i.lastValue === e && i.lastFinished) return !i.lastValid;
                    if (!0 === i.lastFinished) {
                        i.lastValue = e, i.lastValid = !0, i.lastFinished = !1;
                        var n = i, o = a;
                        t(i.callback, window, a, e, function (a) {
                            n.lastValue === a.value && (n.lastValid = a.valid, a.message && (n.message = a.message), n.lastFinished = !0, o.data("validation" + n.validatorName + "Message", n.message), setTimeout(function () {
                                o.trigger("change.validation")
                            }, 1))
                        })
                    }
                    return !1
                }
            }, ajax: {
                name: "ajax", init: function (a, e) {
                    return {
                        validatorName: e,
                        url: a.data("validation" + e + "Ajax"),
                        lastValue: a.val(),
                        lastValid: !0,
                        lastFinished: !0
                    }
                }, validate: function (e, t, i) {
                    return "" + i.lastValue == "" + t && !0 === i.lastFinished ? !1 === i.lastValid : (!0 === i.lastFinished && (i.lastValue = t, i.lastValid = !0, i.lastFinished = !1, a.ajax({
                        url: i.url,
                        data: "value=" + t + "&field=" + e.attr("name"),
                        dataType: "json",
                        success: function (a) {
                            "" + i.lastValue == "" + a.value && (i.lastValid = !!a.valid, a.message && (i.message = a.message), i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                                e.trigger("change.validation")
                            }, 1))
                        },
                        failure: function () {
                            i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function () {
                                e.trigger("change.validation")
                            }, 1)
                        }
                    })), !1)
                }
            }, regex: {
                name: "regex", init: function (a, t) {
                    return {regex: e(a.data("validation" + t + "Regex"))}
                }, validate: function (a, e, t) {
                    return !t.regex.test(e) && !t.negative || t.regex.test(e) && t.negative
                }
            }, required: {
                name: "required", init: function (a, e) {
                    return {}
                }, validate: function (a, e, t) {
                    return !(0 !== e.length || t.negative) || !!(e.length > 0 && t.negative)
                }, blockSubmit: !0
            }, match: {
                name: "match", init: function (a, e) {
                    var t = a.parents("form").first().find('[name="' + a.data("validation" + e + "Match") + '"]').first();
                    return t.bind("validation.validation", function () {
                        a.trigger("change.validation", {submitting: !0})
                    }), {element: t}
                }, validate: function (a, e, t) {
                    return e !== t.element.val() && !t.negative || e === t.element.val() && t.negative
                }, blockSubmit: !0
            }, max: {
                name: "max", init: function (a, e) {
                    return {max: a.data("validation" + e + "Max")}
                }, validate: function (a, e, t) {
                    return parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative || parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative
                }
            }, min: {
                name: "min", init: function (a, e) {
                    return {min: a.data("validation" + e + "Min")}
                }, validate: function (a, e, t) {
                    return parseFloat(e) < parseFloat(t.min) && !t.negative || parseFloat(e) >= parseFloat(t.min) && t.negative
                }
            }, maxlength: {
                name: "maxlength", init: function (a, e) {
                    return {maxlength: a.data("validation" + e + "Maxlength")}
                }, validate: function (a, e, t) {
                    return e.length > t.maxlength && !t.negative || e.length <= t.maxlength && t.negative
                }
            }, minlength: {
                name: "minlength", init: function (a, e) {
                    return {minlength: a.data("validation" + e + "Minlength")}
                }, validate: function (a, e, t) {
                    return e.length < t.minlength && !t.negative || e.length >= t.minlength && t.negative
                }
            }, maxchecked: {
                name: "maxchecked", init: function (a, e) {
                    var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return t.bind("click.validation", function () {
                        a.trigger("change.validation", {includeEmpty: !0})
                    }), {maxchecked: a.data("validation" + e + "Maxchecked"), elements: t}
                }, validate: function (a, e, t) {
                    return t.elements.filter(":checked").length > t.maxchecked && !t.negative || t.elements.filter(":checked").length <= t.maxchecked && t.negative
                }, blockSubmit: !0
            }, minchecked: {
                name: "minchecked", init: function (a, e) {
                    var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                    return t.bind("click.validation", function () {
                        a.trigger("change.validation", {includeEmpty: !0})
                    }), {minchecked: a.data("validation" + e + "Minchecked"), elements: t}
                }, validate: function (a, e, t) {
                    return t.elements.filter(":checked").length < t.minchecked && !t.negative || t.elements.filter(":checked").length >= t.minchecked && t.negative
                }, blockSubmit: !0
            }
        },
        builtInValidators: {
            email: {name: "Email", type: "shortcut", shortcut: "validemail"},
            validemail: {
                name: "Validemail",
                type: "regex",
                regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                message: "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"
            },
            passwordagain: {
                name: "Passwordagain",
                type: "match",
                match: "password",
                message: "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"
            },
            positive: {name: "Positive", type: "shortcut", shortcut: "number,positivenumber"},
            negative: {name: "Negative", type: "shortcut", shortcut: "number,negativenumber"},
            number: {
                name: "Number",
                type: "regex",
                regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                message: "Must be a number\x3c!-- data-validator-number-message to override --\x3e"
            },
            integer: {
                name: "Integer",
                type: "regex",
                regex: "[+-]?\\d+",
                message: "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"
            },
            positivenumber: {
                name: "Positivenumber",
                type: "min",
                min: 0,
                message: "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"
            },
            negativenumber: {
                name: "Negativenumber",
                type: "max",
                max: 0,
                message: "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"
            },
            required: {
                name: "Required",
                type: "required",
                message: "This is required\x3c!-- data-validator-required-message to override --\x3e"
            },
            checkone: {
                name: "Checkone",
                type: "minchecked",
                minchecked: 1,
                message: "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"
            }
        }
    }, o = function (a) {
        return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, e, t) {
            return e + t.toUpperCase()
        })
    }, r = function (e) {
        var t = e.val(), i = e.attr("type");
        return "checkbox" === i && (t = e.is(":checked") ? t : ""), "radio" === i && (t = a('input[name="' + e.attr("name") + '"]:checked').length > 0 ? t : ""), t
    };
    a.fn.jqBootstrapValidation = function (e) {
        return n.methods[e] ? n.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== (void 0 === e ? "undefined" : _typeof(e)) && e ? (a.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : n.methods.init.apply(this, arguments)
    }, a.jqBootstrapValidation = function (e) {
        a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery), function (a) {
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = a(this.hash);
            if (e = e.length ? e : a("[name=" + this.hash.slice(1) + "]"), e.length) return a("html, body").animate({scrollTop: e.offset().top - 54}, 1e3, "easeInOutExpo"), !1
        }
    }), a(".js-scroll-trigger").click(function () {
        a(".navbar-collapse").collapse("hide")
    });
    var e = function () {
        a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink")
    };
    e(), a(window).scroll(e), a(".portfolio-modal").on("show.bs.modal", function (e) {
        a(".navbar").addClass("d-none")
    }), a(".portfolio-modal").on("hidden.bs.modal", function (e) {
        a(".navbar").removeClass("d-none")
    })
}(jQuery);