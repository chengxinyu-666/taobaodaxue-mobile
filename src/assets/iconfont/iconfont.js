!(function (e) {
  var t,
    n,
    o,
    i,
    l,
    d =
      '<svg><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#444444" ></path></symbol><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M938.64603 886.273219l-173.071777-173.074847c53.665247-63.987337 86.075401-146.400325 86.075401-236.446154 0-203.406666-164.895561-368.298134-368.301204-368.298134-203.409736 0-368.302227 164.892491-368.302227 368.298134 0 203.409736 164.892491 368.302227 368.302227 368.302227 89.246627 0 171.055864-31.767518 234.798631-84.579327l173.148525 173.148525c1.576915 1.576915 8.15575-2.443655 14.6957-8.979512l23.675212-23.675212C936.205445 894.428969 940.222945 887.850134 938.64603 886.273219zM483.347426 778.093381c-166.425404 0-301.338093-134.912689-301.338093-301.338093s134.912689-301.338093 301.338093-301.338093S784.685519 310.329884 784.685519 476.755288 649.773853 778.093381 483.347426 778.093381z"  ></path></symbol><symbol id="icon-shaixuan" viewBox="0 0 1024 1024"><path d="M640.124 191.784L448.209 448.209l-0.122 383.512 64.012 63.918v-447.43l192.038-256.425V127.99H64.012v63.794L256.05 448.209v319.593l64.012 63.919V448.209L128.025 191.784z"  ></path><path d="M640.04 384.088h256.05v64.419H640.04zM640.04 512.521h256.218v63.823H640.04zM640.04 640.263h256.218v63.919H640.04z"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[
      a.length - 1
    ].getAttribute('data-injectcss'),
    c = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    l || ((l = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll('left');
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e, t;
    ((t = document.createElement('div')).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (e = document.body).firstChild ? c(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (l = !1),
        r(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
