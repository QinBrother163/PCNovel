/**
 * Created by NameX on 2018/5/28.
 */


!function (b) {
    function c(d) {
        if (a[d]) {
            return a[d].exports
        }
        var e = a[d] = {exports: {}, id: d, loaded: !1};
        return b[d].call(e.exports, e, e.exports, c), e.loaded = !0, e.exports
    }

    var a = {};
    return c.m = b, c.c = a, c.p = "", c(0)
}([function (A, N, J) {
    function B(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    var F = J(3), R = B(F), E = J(4), C = B(E), H = J(5), K = B(H), P = J(6), z = B(P), O = J(1), M = B(O), x = J(2), L = B(x), D = J(7), G = B(D);

    var I = $("#J_Slider01").find(".j-intro");
    I.removeClass("in"), $(I[0]).addClass("in"), new R["default"]("#J_Slider01", {
        animation: "fade",
        animationDuration: 300,
        callBackEvent: function () {
            I.filter(".in").removeClass("in").addClass("out"), $(I[this.crtNum]).removeClass("out").addClass("in")
        }
    }), new C["default"]("#J_GoTab1", {switchOps: "hover"}), new z["default"]("#J_WeekGood"), new z["default"]("#J_WeekLast");
    var j = $("#J_3DSlider").find(".j-intro");
    j.removeClass("active"), $(j[0]).addClass("active"), new G["default"]("#J_3DSlider", {
        action: "click",
        baseWidth: 254,
        itemWidth: 142,
        callBackEvent: function () {
            j.removeClass("active"), $(j[this.crtNum]).addClass("active")
        }
    }), new C["default"]("#J_BangClick", {
        switchOps: "hover", defaultTab: 0, callBackEvent: function () {
            var a = [{
                contentid: $("#J_BangClick ol")[0],
            }, {
                contentid: $("#J_BangClick ol")[1],
            }, {
                contentid: $("#J_BangClick ol")[2],
            }];

        }
    }), new C["default"]("#J_BangTable", {
        switchOps: "hover", callBackEvent: function () {
            var a = [{
                contentid: "#totalworksup",
            }, {
                contentid: "#vipworksup",
            }, {
                contentid: "#freeworksup",
            }];
        }
    });
    var q = $("#J_BangTable").find(".tabs li"), Q = $("#J_BangTable").find(".crt-line");
    Q.width($(q[0]).outerWidth()), q.hover(function () {
        Q.width($(this).outerWidth()), Q.css("left", $(this).offset().left - $(q[0]).offset().left)
    }), new L["default"](".j-wxwx", {popSelector: "#J_WXM"}), new L["default"](".j-yxyx", {popSelector: "#J_YXM"}), new L["default"]("#J_Service", {popSelector: "#J_ServiceNum"})
}, function (b, c) {
    Object.defineProperty(c, "__esModule", {value: !0});
    var a = function () {
        var f = function () {
            var e = void 0;
            $(".j-show-moremenu").mouseenter(function () {
                $(".j-show-moremenu").hide(), $(".j-headermenu-more").show(), $(".j-sch").hide()
            }), $(".j-headermenu-more").mouseleave(function () {
                e = setTimeout(function () {
                    e && ($(".j-headermenu-more").hide(), $(".j-sch").show(), $(".j-show-moremenu").show())
                }, 200)
            }), $(".j-headermenu-more").mouseenter(function () {
                e && clearTimeout(e), $(".j-show-moremenu").hide(), $(".j-headermenu-more").show(), $(".j-sch").hide()
            })
        }, g = function () {
            $(window).height();
            $(window).scroll(function (h) {
                var i = $(window).scrollTop();
                window.ActiveXObject && !window.XMLHttpRequest ? i > $("#J_Header").height() + 10 ? $(".m-headerfix").show() : $(".m-headerfix").hide() : i > $("#J_Header").height() + 10 ? $(".m-headerfix").addClass("m-headerfix-scrolling") : ($(".m-headerfix-scrolling .J_SearchOps").hide(), $(".m-headerfix").removeClass("m-headerfix-scrolling"))
            })
        }, d = function () {
            var e = [".m-bonus-success"];
            $("body").on("click", function (h) {
                $.each(e, function (k, j) {
                    document.querySelector(j) && h.target !== document.querySelector(j) && ($(j).fadeOut(300), $(".m-mask").fadeOut(300))
                })
            })
        };
        $().ready(function () {
            g(), f(), d()
        }), "undefined" != typeof YD && (void 0 == YD.Header && (YD.Header = {}), YD.Header.toggleMoreHeaderMenu = f, YD.Header.toggleFixHeader = g)
    };
    c["default"] = a, b.exports = c["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e);
            var i = {popSelector: "#J_WXM", time: 300};
            this.settings = $.extend({}, i, g), this.$ele = $(h), this.$popLayer = $(this.settings.popSelector), this.$ele.on("click", this.openPopLayer.bind(this)), this.$ele.on("click", ".close", this.closePopLayer.bind(this)), this.init()
        }

        return c(e, [{
            key: "init", value: function () {
                var g = this;
                $(document).click(function (h) {
                    ~g.$ele.toArray().indexOf(h.target) || g.closePopLayer()
                })
            }
        }, {
            key: "openPopLayer", value: function (j) {
                j.preventDefault();
                var l = $(j.target), h = l.offset().left, k = l.offset().top, p = l.width();
                this.type = l.data("type");
                var g = this.$popLayer.width(), m = this.$popLayer.height();
                this.$popLayer.addClass(this.type).css({
                    left: h - (g - p) / 2,
                    top: k - m - 25
                }).fadeIn(this.settings.time)
            }
        }, {
            key: "closePopLayer", value: function () {
                var g = this;
                this.$popLayer.fadeOut(this.settings.time, function () {
                    g.type && g.$popLayer.removeClass(g.type), g.hasOpen = !1
                })
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e);
            var i = {
                sliderWrap: "ul.j-slider",
                sliderItem: "ul.j-slider li",
                animation: "fade",
                switchMotion: "on",
                animationDuration: 400,
                autoDuration: 5000,
                automatic: !0,
                hoverPause: !0,
                showControl: !0,
                controlWrap: "ol.j-control",
                controlItem: "ol.j-control li",
                controlLeft: ".j-cl",
                controlRight: ".j-cr",
                orientation: "horizontal",
                multipleShow: !1,
                action: "hover",
                stopClass: [],
                crtNum: 1,
                callBackEvent: function () {
                    $.noop()
                }
            };
            this.settings = $.extend({}, i, g), this.container = $(h), this.sliderWrap = this.container.find(this.settings.sliderWrap), this.sliderItem = this.container.find(this.settings.sliderItem), this.sliderCount = this.sliderItem.length, this.sliderWidth = this.sliderItem.outerWidth(), this.sliderHeight = this.sliderItem.outerHeight(), this.animating = !1, this.paused = !1, this.crtNum = 0, this.nextNum = 0, this.position = 1, this.activeItem = this.sliderItem.eq(0), this.forward = "forward", this.backward = "backward", this.controlWrap = this.container.find(this.settings.controlWrap), this.controlItem = this.controlWrap.children(), this.controlLeft = this.container.find(this.settings.controlLeft), this.controlRight = this.container.find(this.settings.controlRight), this.goInterval, this.init()
        }

        return c(e, [{
            key: "init", value: function () {
                this.styleSetting(), this.autoRun(), this.hoverControl(), this.setControl(), this.stopControl()
            }
        }, {
            key: "styleSetting", value: function () {
                if (!(this.sliderCount <= 1)) {
                    if ("fade" === this.settings.animation) {
                        this.sliderItem.not(":first").hide(), this.sliderItem.css({
                            position: "absolute",
                            top: "0",
                            left: 0
                        })
                    } else {
                        if ("slide" === this.settings.animation) {
                            var h = this.sliderItem.eq(0), j = this.sliderItem.eq(this.sliderCount - 1);
                            if (h.clone().addClass("clone").appendTo(this.sliderWrap), j.clone().addClass("clone").prependTo(this.sliderWrap), this.settings.multipleShow) {
                                var g = sliderItem.eq(this.sliderCount - 2);
                                g.clone().addClass("clone").prependTo(this.sliderWrap)
                            }
                            this.sliderItem = this.sliderWrap.children(), this.sliderCount = this.sliderItem.length, "horizontal" === this.settings.orientation && (this.sliderWrap.css({
                                width: this.sliderWidth * this.sliderCount,
                                left: -this.sliderWidth
                            }), this.sliderItem.css({
                                "float": "left",
                                position: "relative",
                                display: "inline"
                            })), "vertical" === this.settings.orientation && (this.sliderWrap.css({top: -this.sliderHeight}), this.sliderItem.css({
                                position: "relative",
                                display: "block"
                            }))
                        }
                    }
                    this.controlItem.length > 0 && this.settings.showControl && this.controlItem.eq(0).addClass("j-crt")
                }
            }
        }, {
            key: "checkPos", value: function (g) {
                "fade" === this.settings.animation && (g === this.forward ? this.activeItem.next().length ? this.nextNum++ : this.nextNum = 0 : g === this.backward && (this.activeItem.prev().length ? this.nextNum-- : this.nextNum = this.sliderCount - 1)), "slide" === this.settings.animation && (g === this.forward ? this.nextNum = this.position + 1 : g === this.backward && (this.nextNum = this.position - 1))
            }
        }, {
            key: "autoRun", value: function () {
                var g = this;
                "on" === this.settings.switchMotion && (this.goInterval = setInterval(function () {
                    g.goMove(g.forward)
                }, this.settings.autoDuration))
            }
        }, {
            key: "hoverControl", value: function () {
                var g = this;
                this.settings.hoverPause && this.settings.automatic && "on" === this.settings.switchMotion && this.container.hover(function () {
                    g.paused || (clearInterval(g.goInterval), g.paused = !0)
                }, function () {
                    g.paused && (g.goInterval = setInterval(function () {
                        g.goMove(g.forward)
                    }, g.settings.autoDuration), g.paused = !1)
                })
            }
        }, {
            key: "stopControl", value: function () {
                var h = this;
                if (this.settings.stopClass && this.settings.stopClass.length > 0) {
                    for (var j = 0, g = this.settings.stopClass.length; j < g; j++) {
                        $(this.settings.stopClass[j]).click(function () {
                            h.paused ? (h.goInterval = setInterval(function () {
                                    h.goMove(h.forward)
                                }, h.settings.autoDuration), h.paused = !1) : (clearInterval(h.goInterval), h.paused = !0)
                        })
                    }
                }
            }
        }, {
            key: "setControl", value: function () {
                var g = this;
                this.controlItem.length > 0 && this.settings.showControl && !function () {
                    var h = g;
                    g.settings.action && "click" == g.settings.action ? g.controlItem.click(function () {
                            if (!$(this).hasClass("j-crt") && !h.animating) {
                                var i = 1 * $(this).find("span").text();
                                h.goMove(!1, i)
                            }
                        }) : g.controlItem.hover(function () {
                            if (!$(this).hasClass("j-crt") && !h.animating) {
                                var i = 1 * $(this).find("span").text();
                                h.goMove(!1, i)
                            }
                        }, function () {
                        })
                }(), (this.controlLeft.length > 0 || this.controlRight.length > 0) && (this.controlLeft.click(function (h) {
                    h.preventDefault(), g.animating || g.goMove(g.backward, !1)
                }), this.controlRight.click(function (h) {
                    h.preventDefault(), g.animating || g.goMove(g.forward, !1)
                }))
            }
        }, {
            key: "slideCallBack", value: function (h, j, g) {
                0 === this.nextNum ? (this.position = this.sliderCount - 2, this.sliderWrap.css({cssDir: -this.position * j})) : g && this.nextNum === this.sliderCount - 3 ? (this.position = 0, this.sliderWrap.css({cssDir: 0})) : g || this.nextNum !== this.sliderCount - 1 ? this.position = this.nextNum : (this.position = 1, this.sliderWrap.css({cssDir: -j})), this.animating = !1
            }
        }, {
            key: "goMove", value: function (h, k) {
                var g = this, j = void 0, l = void 0;
                this.animating || (h ? this.checkPos(h) : k && "fade" == this.settings.animation ? this.nextNum = k - 1 : this.nextNum = k, l = this.nextNum, this.animating = !0, "fade" === this.settings.animation ? (this.controlItem.length > 0 && this.settings.showControl && (this.controlItem.eq(this.crtNum).removeClass("j-crt"), this.controlItem.eq(l).addClass("j-crt")), j = this.sliderItem.eq(l), this.activeItem.fadeOut(this.settings.animationDuration), j.fadeIn(this.settings.animationDuration, function () {
                        g.activeItem.hide(), g.crtNum = l, g.activeItem = j, g.animating = !1
                    }), this.crtNum = l) : "slide" === this.settings.animation && (this.controlItem.length > 0 && this.settings.showControl && (this.controlItem.eq(this.position - 1).removeClass("j-crt"), l === this.sliderCount - 1 ? this.controlItem.eq(0).addClass("j-crt") : 0 === l ? this.controlItem.eq(this.sliderCount - 3).addClass("j-crt") : this.controlItem.eq(l - 1).addClass("j-crt")), "horizontal" === this.settings.orientation ? this.sliderWrap.animate({left: -l * this.sliderWidth}, this.settings.animationDuration, function () {
                            g.slideCallBack("left", g.sliderWidth, !1)
                        }) : "vertical" !== this.settings.orientation || this.settings.multipleShow ? "vertical" === this.settings.orientation && this.settings.multipleShow && this.sliderWrap.animate({top: -l * this.sliderHeight}, this.settings.animationDuration, function () {
                                g.slideCallBack("top", g.sliderHeight, !0)
                            }) : this.sliderWrap.animate({top: -l * this.sliderHeight}, this.settings.animationDuration, function () {
                                g.slideCallBack("top", g.sliderHeight, !1)
                            })), this.settings.crtNum = this.crtNum, this.settings.callBackEvent && this.settings.callBackEvent())
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e);
            var i = {
                switchOps: "click",
                ifFade: !1,
                tabs: ".tabs ul li",
                contents: ".contents .item-tab",
                crtNum: 1,
                crtTab: "",
                crtContent: "",
                hoverDuring: 200,
                defaultTab: 0,
                callBackEvent: function () {
                    $.noop()
                }
            };
            this.settings = $.extend({}, i, g), this.$ele = $(h), this.index = 0, this.tabTop = this.$ele.find(this.settings.tabs), this.tabContents = this.$ele.find(this.settings.contents), this.init()
        }

        return c(e, [{
            key: "init", value: function () {
                var g = this.settings.switchOps;
                this.setDefault(), "click" === g ? this.tabClickEvent() : "hover" === g ? this.tabHoverEvent() : "all" === g && this.tabAllEvent()
            }
        }, {
            key: "setDefault", value: function () {
                var g = this;
                this.settings.crtNum = this.index, this.settings.crtTab = this.tabTop.eq(this.settings.crtNum), this.settings.crtContent = this.tabContents.eq(this.settings.crtNum), this.tabContents.each(function (h) {
                    h !== g.settings.defaultTab && g.tabContents.eq(h).hide()
                }), this.tabTop.each(function (h) {
                    h === g.settings.defaultTab && g.tabTop.eq(h).addClass("crt")
                })
            }
        }, {
            key: "switchFunc", value: function (g) {
                var h = this;
                $(g).hasClass("crt") || (this.tabTop.each(function (j, k) {
                    $(k).removeClass("crt"), h.tabTop[j] === g && (h.index = j)
                }), $(g).addClass("crt"), this.settings.crtNum = this.index, this.settings.crtTab = this.tabTop.eq(this.settings.crtNum), this.settings.crtContent = this.tabContents.eq(this.settings.crtNum), this.settings.callBackEvent && this.settings.callBackEvent(), this.tabContents.each(function (i) {
                    i !== h.index ? h.tabContents.eq(i).hide() : h.tabContents.eq(i).show()
                }))
            }
        }, {
            key: "tabClickEvent", value: function () {
                var g = this;
                this.tabTop.click(function () {
                    g.switchFunc(this)
                })
            }
        }, {
            key: "tabHoverEvent", value: function () {
                var g = this;
                this.tabTop.hover(function () {
                    var h = this;
                    g.hoverTimer = setTimeout(function () {
                        g.switchFunc(h)
                    }, g.settings.hoverDuring)
                }, function () {
                    clearTimeout(g.hoverTimer)
                })
            }
        }, {
            key: "tabAllEvent", value: function () {
                this.tabClickEvent(), this.tabHoverEvent()
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e);
            var i = {
                type: "init",
                tpl: "foldList",
                url: "",
                crtNum: 1,
                contents: [],
                bookDefaultImg: "https://easyreadfs.nosdn.127.net/w1aEx-Tk2agsxWIvrzR2nQ==/6597170921726099743",
                callBack: function () {
                    $.noop()
                }
            };
            this.settings = $.extend({}, i, g), this.selector = h, this.$ele = $(h), this.url = this.settings.url, this.currentTab, this.init()
        }

        return c(e, [{
            key: "init", value: function () {
                "init" === this.settings.type ? this.aGetData() : this.addTabContent()
            }
        }, {
            key: "addTabContent", value: function () {
                var g = $(".tabs .crt", this.selector), h = $(".tabs ul li", this.selector).index(g);
                "true" != g.attr("complated") && (this.currentTab = g, this.$ele = $(this.settings.contents[h].contentid), this.settings.crtNum = h, this.settings.url = this.settings.contents[h].dataurl, this.aGetData())
            }
        }, {
            key: "aGetData", value: function () {
                var g = this;
                this.$ele.addClass("m-loading"), jQuery.ajax({
                    type: "GET",
                    url: this.settings.url,
                    dataType: "json",
                    success: function (j) {
                        if (j.success) {
                            var h = g[g.settings.tpl](j.list);
                            g.$ele.html(h), g.cutWords(), g.$ele.removeClass("m-loading"), "init" != g.settings.type && g.currentTab.attr("complated", "true"), g.settings.callBack && g.settings.callBack()
                        }
                    }
                })
            }
        }, {
            key: "cutWords", value: function () {
                $(".j-cutted", this.$ele).each(function () {
                    var g = 1 * $(this).attr("words") - 1, h = $(this).text();
                    h.length > g && (h = $(this).text().slice(0, g) + "..."), $(this).text(h)
                })
            }
        }, {
            key: "ifImgEmpty", value: function (g) {
                var h = "#" == g ? this.settings.bookDefaultImg : g;
                return h
            }
        }, {
            key: "foldList", value: function (u) {
                for (var p = "", m = 0, v = u.length; m < v; m++) {
                    var j = u[m].url, q = u[m].title, h = this.ifImgEmpty(u[m].iconUrl), g = u[m].author, k = m < 9 ? "0" + (m + 1) : m + 1;
                    p += '<li><p class="fold"><a href="' + j + '"><i>' + k + "</i>" + q + "</a></p>", p += '<div class="unfold" style="display:none;"><i>' + k + '</i><div class="border f-cb"><a class="img" href="' + j + '" target="_blank" title="' + q + '"><img src="' + h + '" alt="' + q + '"></a><h3><a href="' + j + '" target="_blank" title="' + q + '">' + q + "</a></h3><p>" + g + "</p></div></div></li>"
                }
                return p
            }
        }, {
            key: "foldListNew", value: function (w) {
                for (var u = "", p = 0, x = w.length; p < x; p++) {
                    var k = w[p].url, v = w[p].title, j = this.ifImgEmpty(w[p].iconUrl), g = w[p].author, m = p + 1, q = p < 3 ? "num num-" + (p + 1) : "num";
                    u += '<li><p class="fold"><a href="' + k + '"><i class="' + q + '">' + m + "</i>" + v + "</a></p>", u += '<div class="unfold" style="display:none;"><i class="' + q + '">' + m + '</i><div class="border f-cb"><a class="img" href="' + k + '" target="_blank" title="' + v + '"><img src="' + j + '" alt="' + v + '"></a><h3><a href="' + k + '" target="_blank" title="' + v + '">' + v + "</a></h3><p>" + g + "</p></div></div></li>"
                }
                return u
            }
        }, {
            key: "hotselltpl", value: function (w) {
                for (var u = "", p = 0, x = w.length; p < x; p++) {
                    var k = w[p].url, v = w[p].title, j = this.ifImgEmpty(w[p].iconUrl), g = w[p].author, m = p + 1, q = p < 3 ? "num num-" + (p + 1) : "num";
                    u += p < 1 ? '<li><div class="unfold-s"><a href="' + k + '" title="' + v + '" target="_blank"><div class="intro"><i class="' + q + '">NO.1</i><h3>' + v + '</h3><span class="color-hot">閿€閲忓啝鍐�</span><p>' + g + '</p></div><img src="' + j + '" alt="' + v + '"></a></div></li>' : '<li><p class="fold" style="display:block;"><a href="' + k + '" title="' + v + '" target="_blank"><i class="' + q + '">' + m + "</i>" + v + "</a></p></li>"
                }
                return u
            }
        }, {
            key: "unfoldList", value: function (j) {
                for (var l = "", h = 0, k = j.length; h < k; h++) {
                    var p = j[h].url, g = j[h].title, m = h < 9 ? "0" + (h + 1) : h + 1;
                    l += '<li><p class="fold"><a href="' + p + '"><i>' + m + "</i>" + g + "</a></p>"
                }
                return l
            }
        }, {
            key: "ranktpl", value: function (j) {
                for (var l = "", h = 0, k = j.length; h < k; h++) {
                    l += h > 8 && h == k - 1 ? "<li class='ll'>" : "<li>";
                    var p = j[h].url, g = j[h].title, m = h + 1;
                    l += h < 3 ? "<span class='top'>" + m + "</span>" : "<span>" + m + "</span>", l += '<a href="' + p + '" target="_blank" title="' + g + '">' + g + "</a></li>"
                }
                return l
            }
        }, {
            key: "rank8tpl", value: function (j) {
                for (var l = "", h = 0, k = j.length; h < k; h++) {
                    l += h == k - 1 ? "<li class='ll'>" : h > 8 ? "<li class='n2'>" : "<li>";
                    var p = j[h].url, g = j[h].title, m = h + 1;
                    l += h < 3 ? "<span class='top'>" + m + "</span>" : "<span>" + m + "</span>", l += '<a href="' + p + '" target="_blank" title="' + g + '">' + g + "</a></li>"
                }
                return l
            }
        }, {
            key: "worksupdatetpl", value: function (B) {
                for (var w = "", p = 0, C = B.length; p < C; p++) {
                    var k = p % 2 == 0 ? "odd" : "";
                    w += p == C - 1 ? "<tr class='lt " + k + "'>" : "<tr class='" + k + "'>";
                    var z = B[p].url, j = B[p].categoryLabel, g = B[p].title, m = B[p].latestArticleUrl, q = B[p].latestArticleTitle, y = (B[p].authorSearchUrl, B[p].author), A = B[p].updateTime, x = B[p].totalCount, v = B[p].vip;
                    w += '<td class="col-left">[' + j + "]</td>", w += '<td><a href="' + z + '" target="_blank" class="j-cutted" words="13" title="' + g + '">' + g + "</a></td>", w += '<td class="col-ml"><a href="' + m + '" target="_blank" class="j-cutted" words="13" title="' + q + '">' + q + "</a>", w += 1 == v ? '<span class="png">VIP</span>' : "", w += '</td><td class="col-grey col-mid">' + x + "</td>", w += '<td class="col-mid col-grey"><span class="j-cutted" words="10" title="' + y + '">' + y + "</span></td>", w += '<td class="col-right col-grey">' + A + "</td></tr>"
                }
                return w = '<tr class="hd"><th class="col-left" width="142">绫诲瀷</th><th width="230">灏忚鍚嶇О</th><th width="240">鏈€鏂扮珷鑺�</th><th width="" class="col-mid">瀛楁暟</th><th class="col-mid" width="150">浣滆€�</th><th class="col-right" width="120">鏇存柊鏃堕棿</th></tr>' + w
            }
        }, {
            key: "noranktpl", value: function (j) {
                for (var l = "", h = 0, k = j.length; h < k; h++) {
                    l += h == k - 1 ? "<li class='ll'>" : "<li>";
                    var m = j[h].url, g = j[h].title;
                    l += '<a href="' + m + '" target="_blank" class="j-cutted" words="16" title="' + g + '">' + g + "</a></li>"
                }
                return l
            }
        }, {
            key: "categorytpl", value: function (j) {
                for (var l = "", h = 0, k = j.length; h < k; h++) {
                    var m = j[h].url, g = j[h].title;
                    l += '<a href="' + m + '" target="_blank" title="' + g + '">' + g + "</a>"
                }
                return l
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e), this.$ele = $(h), this.settings = {}, this.defaults = {
                fold: ".fold",
                unfold: ".unfold",
                crtNum: 0,
                inited: !1,
                hoverDuring: 50,
                defaultTab: 0,
                callBackEvent: function () {
                    $.noop()
                }
            }, this.settings = $.extend({}, this.defaults, g), this.index = 0, this.foldList = this.$ele.find(this.settings.fold), this.unfoldList = this.$ele.find(this.settings.unfold), this.init(), this.hoverEvent()
        }

        return c(e, [{
            key: "init", value: function () {
                this.settings.crtNum = this.index, this.unfoldList.each(function (g, h) {
                    0 === g && $(h).show()
                }), this.switchHover(this.settings.crtNum), this.settings.inited = !0
            }
        }, {
            key: "switchHover", value: function (g) {
                g !== this.settings.crtNum && this.settings.inited && (this.foldList.eq(this.settings.crtNum).show(), this.unfoldList.eq(this.settings.crtNum).hide()), "undefined" !== g && (this.foldList.eq(g).hide(), this.unfoldList.eq(g).show()), this.settings.crtNum = g
            }
        }, {
            key: "hoverEvent", value: function () {
                var g = this;
                this.foldList.on("mouseenter", function (j) {
                    var h = g.foldList.index(j.currentTarget);
                    g.hoverTimer = setTimeout(function () {
                        g.switchHover(h)
                    }, g.settings.hoverDuring)
                }), this.foldList.on("mouseleave", function (h) {
                    clearTimeout(g.hoverTimer)
                })
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}, function (b, d) {
    function a(g, h) {
        if (!(g instanceof h)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    Object.defineProperty(d, "__esModule", {value: !0});
    var c = function () {
        function e(h, k) {
            for (var g = 0; g < k.length; g++) {
                var j = k[g];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(h, j.key, j)
            }
        }

        return function (j, g, h) {
            return g && e(j.prototype, g), h && e(j, h), j
        }
    }(), f = function () {
        function e(h, g) {
            a(this, e);
            var i = {
                crtNum: 0,
                autoMove: !0,
                itemClickable: !0,
                timeInterval: 3000,
                baseWidth: 980,
                itemWidth: 640,
                action: "none",
                sliderWrap: ".j-slider",
                sliderItem: ".j-sliderItem",
                showControl: !0,
                controlWrap: "ol.j-control",
                controlItem: "ol.j-control li",
                controlLeft: ".j-cl",
                controlRight: ".j-cr",
                scales: [0.5, 0.62, 0.77, 1, 0.77, 0.62, 0.5],
                zIndexs: [6, 9, 19, 199, 19, 9, 6],
                accountShown: 5,
                callBackEvent: function () {
                    $.noop()
                }
            };
            this.settings = $.extend({}, i, g), this.styles = [], this.paused = !1, this.autoInterval, this.container = $(h), this.sliderWrap = this.container.find(this.settings.sliderWrap), this.wrapWidth = this.sliderWrap.width(), this.wrapScale = this.wrapWidth / this.settings.baseWidth, this.sliderList = this.container.find(this.settings.sliderItem), this.itemWidth = this.sliderList.width(), this.itemHeight = this.sliderList.height(), this.len = this.sliderList.length, this.crtNum = this.settings.crtNum, this.steps = this.crtNum * -1, this.controlItems = this.container.find(this.settings.controlItem), this.leftBtn = this.container.find(this.settings.controlLeft), this.rightBtn = this.container.find(this.settings.controlRight), this.leftBtn.on("click", $.proxy(this.movePre, this)), this.rightBtn.on("click", $.proxy(this.moveNext, this)), this.init()
        }

        return c(e, [{
            key: "init", value: function () {
                this.renderSlider(), this.setControl()
            }
        }, {
            key: "renderSlider", value: function () {
                $(".m-cardSlider").css({transform: "scale(" + this.wrapScale + ")"}), this.countStyles();
                for (var h = 0; h < this.len; h++) {
                    var j = this.styles[h], g = $(this.sliderList[h]);
                    g.css(j), g.find("img").css({width: j.width, height: j.height})
                }
                this.settings.autoMove && this.autoMove(), this.controlItems.length > 0 && this.settings.showControl && this.controlItems.eq(0).addClass("crt")
            }
        }, {
            key: "countStyles", value: function () {
                for (var w = this.settings.scales, u = this.settings.zIndexs, p = this.settings.accountShown, x = 0; x < this.len; x++) {
                    var k = (this.wrapWidth - this.itemWidth) / 4, v = this.itemWidth * w[x], j = this.itemHeight * w[x], g = this.itemHeight * (1 - w[x]) / 2;
                    if (this.styles[x] = {width: v, height: j, top: g, opacity: 1}, x < Math.ceil(this.len / 2)) {
                        var m = k * (x - 1);
                        this.styles[x] = $.extend(this.styles[x], {
                            display: "inline-block",
                            left: m + "px",
                            "z-index": u[x]
                        })
                    } else {
                        if (x < this.len) {
                            var m = this.wrapWidth - k * (p - x) - v;
                            this.styles[x] = $.extend(this.styles[x], {
                                display: "inline-block",
                                left: m + "px",
                                "z-index": u[x]
                            })
                        }
                    }
                    (x < (this.len - p) / 2 || x >= (this.len + p) / 2) && (this.styles[x] = $.extend(this.styles[x], {
                        display: "none",
                        opacity: 0
                    }))
                }
                var q = this.styles.splice(0, Math.floor(this.len / 2));
                this.styles = this.styles.concat(q)
            }
        }, {
            key: "setControl", value: function () {
                var g = this;
                "click" != this.settings.action && "all" != this.settings.action || this.controlItems.on("click", function (k) {
                    var h = $(k.target).is("li") ? $(k.target) : $(k.target).parents("li")[0], j = g.controlItems.index(h);
                    g.handleCrtEvent(k, j)
                }), "hover" != this.settings.action && "all" != this.settings.action || this.controlItems.hover(function (k) {
                    var h = $(k.target).is("li") ? $(k.target) : $(k.target).parents("li")[0], j = g.controlItems.index(h);
                    g.handleCrtEvent(k, j)
                }), this.settings.itemClickable && this.sliderList.on("click", function (k) {
                    var h = $(k.target).hasClass(".j-sliderItem") ? $(k.target) : $(k.target).parents(".j-sliderItem")[0], j = g.sliderList.index(h);
                    g.handleCrtEvent(k, j)
                })
            }
        }, {
            key: "handleCrtEvent", value: function (h, j) {
                var g = this;
                this.crtNum != j && (h.preventDefault(), this.paused || !function () {
                    var k = function () {
                        return j === this.crtNum ? (clearInterval(i), this.paused = !1, void (this.settings.autoMove && this.autoMove())) : void (l < m ? this.movePre() : this.moveNext())
                    };
                    g.paused = !0, clearInterval(g.autoInterval);
                    var l = (g.crtNum - j + g.len) % g.len, m = (j - g.crtNum + g.len) % g.len, i = void 0;
                    k.call(g), i = setInterval(k.bind(g), 600)
                }())
            }
        }, {
            key: "autoMove", value: function () {
                var g = this;
                this.autoInterval = setInterval(function () {
                    g.moveNext()
                }, this.settings.timeInterval)
            }
        }, {
            key: "moveNext", value: function () {
                this.steps--, this.crtNum = ++this.crtNum % this.len, this.goMove()
            }
        }, {
            key: "movePre", value: function () {
                this.steps++, this.crtNum = (--this.crtNum + this.len) % this.len, this.goMove()
            }
        }, {
            key: "goMove", value: function () {
                var h = this;
                this.steps = this.steps % this.len;
                for (var j = function (m) {
                    var k = (m + h.steps) % h.len;
                    k < 0 && (k += h.len);
                    var l = h.styles[k], o = $(h.sliderList[m]);
                    "none" != l.display ? o.css({display: l.display}).animate($.extend(l, {opacity: 1}), 600) : o.animate($.extend(l, {opacity: 0}), 600, function () {
                            o.css({display: l.display})
                        }), o.find("img").animate({width: l.width, height: l.height}, 600)
                }, g = 0; g < this.len; g++) {
                    j(g)
                }
                this.controlItems.length > 0 && this.settings.showControl && (this.controlItems.removeClass("crt"), this.controlItems.eq(this.crtNum).addClass("crt")), this.settings.crtNum = this.crtNum, this.settings.callBackEvent && this.settings.callBackEvent()
            }
        }]), e
    }();
    d["default"] = f, b.exports = d["default"]
}]);


!function () {
    //周
    var djrankweek = document.getElementById('djrankweek');
    //月
    var djrankmonth = document.getElementById('djrankmonth');
    //总
    var djranktotal = document.getElementById('djranktotal');

    //月票榜
    var yprank = document.getElementById('yprank');

    //新书榜
    var xsrank = document.getElementById('xsrank');


    djrankweek.onmouseover = function () {
        app(djrankweek)
    };

    djrankmonth.onmouseover = function () {
        app(djrankmonth)
    };

    djranktotal.onmouseover = function () {
        app(djranktotal)
    };

    yprank.onmouseover = function () {
        app(yprank)
    };

    xsrank.onmouseover = function () {
        app(xsrank)
    };


    function app(box) {
        var liList, fold, unfold;

        function getPrefix(node) {
            liList = node.querySelectorAll('li');
            fold = node.querySelectorAll('.fold');
            unfold = node.querySelectorAll('.unfold');

            for (var i = 0; i < liList.length; i++) {
                liList[i].onmouseover = mouseoverStatus;
                liList[i].idx = i;
            }
        }

        getPrefix(box);

        function mouseoverStatus() {

            for (var i = 0; i < liList.length; i++) {
                unfold[i].style.display = 'none';
                fold[i].style.display = 'block';
            }
            if (liList[this.idx] == this) {
                unfold[this.idx].style.display = 'block';
                fold[this.idx].style.display = 'none';
            }
        }
    }
}();