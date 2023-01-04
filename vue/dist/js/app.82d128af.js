;(function () {
  'use strict'
  var e = {
      7635: function (e, t, n) {
        var o = n(9242),
          r = n(3396)
        function u(e, t) {
          const n = (0, r.up)('router-link'),
            o = (0, r.up)('router-view')
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)('nav', null, [
                  (0, r.Wm)(
                    n,
                    { to: '/' },
                    { default: (0, r.w5)(() => [(0, r.Uk)('Home')]), _: 1 }
                  ),
                  (0, r.Uk)(' | '),
                  (0, r.Wm)(
                    n,
                    { to: '/about' },
                    { default: (0, r.w5)(() => [(0, r.Uk)('About')]), _: 1 }
                  )
                ]),
                (0, r.Wm)(o)
              ],
              64
            )
          )
        }
        var i = n(89)
        const a = {},
          s = (0, i.Z)(a, [['render', u]])
        var c = s,
          f = n(2483)
        const l = { id: 'container' }
        function d(e, t, n, u, i, a) {
          return (
            (0, r.wg)(),
            (0, r.iD)('div', l, [
              (0, r.wy)(
                (0, r._)(
                  'textarea',
                  {
                    disabled: '',
                    'onUpdate:modelValue':
                      t[0] || (t[0] = (e) => (i.textarea = e)),
                    id: 'messages'
                  },
                  null,
                  512
                ),
                [[o.nr, i.textarea]]
              ),
              (0, r.wy)(
                (0, r._)(
                  'input',
                  {
                    'onUpdate:modelValue':
                      t[1] || (t[1] = (e) => (i.message = e)),
                    autocomplete: 'off',
                    id: 'input',
                    onKeyup:
                      t[2] ||
                      (t[2] = (0, o.D2)((e) => a.sendMessage(), ['enter']))
                  },
                  null,
                  544
                ),
                [[o.nr, i.message]]
              ),
              (0, r._)(
                'button',
                { onClick: t[3] || (t[3] = (e) => a.sendMessage()) },
                '전송'
              )
            ])
          )
        }
        var p = {
          name: 'HomeView',
          created() {
            this.$socket.on('chat', (e) => {
              window.scrollTo(0, document.body.scrollHeight),
                (this.textarea += e.message + '\n')
            })
          },
          data() {
            return { textarea: '', message: '' }
          },
          methods: {
            sendMessage() {
              this.$socket.emit('chat', { message: this.message }),
                (this.message = '')
            }
          },
          components: {}
        }
        const m = (0, i.Z)(p, [
          ['render', d],
          ['__scopeId', 'data-v-7e8daf05']
        ])
        var v = m
        const g = [
            { path: '/', name: 'home', component: v },
            {
              path: '/about',
              name: 'about',
              component: () => n.e(443).then(n.bind(n, 7381))
            }
          ],
          h = (0, f.p7)({ history: (0, f.PO)('/'), routes: g })
        var b = h,
          y = n(65),
          w = (0, y.MT)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {}
          }),
          k = n(2066)
        const O = (0, o.ri)(c),
          _ = (0, k.io)()
        ;(O.config.globalProperties.$socket = _),
          (O.config.globalProperties.kys = '짱멋짐'),
          O.use(w).use(b).mount('#app')
      }
    },
    t = {}
  function n(o) {
    var r = t[o]
    if (void 0 !== r) return r.exports
    var u = (t[o] = { exports: {} })
    return e[o](u, u.exports, n), u.exports
  }
  ;(n.m = e),
    (function () {
      var e = []
      n.O = function (t, o, r, u) {
        if (!o) {
          var i = 1 / 0
          for (f = 0; f < e.length; f++) {
            ;(o = e[f][0]), (r = e[f][1]), (u = e[f][2])
            for (var a = !0, s = 0; s < o.length; s++)
              (!1 & u || i >= u) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](o[s])
              })
                ? o.splice(s--, 1)
                : ((a = !1), u < i && (i = u))
            if (a) {
              e.splice(f--, 1)
              var c = r()
              void 0 !== c && (t = c)
            }
          }
          return t
        }
        u = u || 0
        for (var f = e.length; f > 0 && e[f - 1][2] > u; f--) e[f] = e[f - 1]
        e[f] = [o, r, u]
      }
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e['default']
              }
            : function () {
                return e
              }
        return n.d(t, { a: t }), t
      }
    })(),
    (function () {
      n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
      }
    })(),
    (function () {
      ;(n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, o) {
              return n.f[o](e, t), t
            }, [])
          )
        })
    })(),
    (function () {
      n.u = function (e) {
        return 'js/about.6cc51154.js'
      }
    })(),
    (function () {
      n.miniCssF = function (e) {}
    })(),
    (function () {
      n.g = (function () {
        if ('object' === typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' === typeof window) return window
        }
      })()
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
    })(),
    (function () {
      var e = {},
        t = 'vue_pr03:'
      n.l = function (o, r, u, i) {
        if (e[o]) e[o].push(r)
        else {
          var a, s
          if (void 0 !== u)
            for (
              var c = document.getElementsByTagName('script'), f = 0;
              f < c.length;
              f++
            ) {
              var l = c[f]
              if (
                l.getAttribute('src') == o ||
                l.getAttribute('data-webpack') == t + u
              ) {
                a = l
                break
              }
            }
          a ||
            ((s = !0),
            (a = document.createElement('script')),
            (a.charset = 'utf-8'),
            (a.timeout = 120),
            n.nc && a.setAttribute('nonce', n.nc),
            a.setAttribute('data-webpack', t + u),
            (a.src = o)),
            (e[o] = [r])
          var d = function (t, n) {
              ;(a.onerror = a.onload = null), clearTimeout(p)
              var r = e[o]
              if (
                (delete e[o],
                a.parentNode && a.parentNode.removeChild(a),
                r &&
                  r.forEach(function (e) {
                    return e(n)
                  }),
                t)
              )
                return t(n)
            },
            p = setTimeout(
              d.bind(null, void 0, { type: 'timeout', target: a }),
              12e4
            )
          ;(a.onerror = d.bind(null, a.onerror)),
            (a.onload = d.bind(null, a.onload)),
            s && document.head.appendChild(a)
        }
      }
    })(),
    (function () {
      n.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }
    })(),
    (function () {
      n.p = '/'
    })(),
    (function () {
      var e = { 143: 0 }
      ;(n.f.j = function (t, o) {
        var r = n.o(e, t) ? e[t] : void 0
        if (0 !== r)
          if (r) o.push(r[2])
          else {
            var u = new Promise(function (n, o) {
              r = e[t] = [n, o]
            })
            o.push((r[2] = u))
            var i = n.p + n.u(t),
              a = new Error(),
              s = function (o) {
                if (n.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var u = o && ('load' === o.type ? 'missing' : o.type),
                    i = o && o.target && o.target.src
                  ;(a.message =
                    'Loading chunk ' + t + ' failed.\n(' + u + ': ' + i + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = u),
                    (a.request = i),
                    r[1](a)
                }
              }
            n.l(i, s, 'chunk-' + t, t)
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t]
        })
      var t = function (t, o) {
          var r,
            u,
            i = o[0],
            a = o[1],
            s = o[2],
            c = 0
          if (
            i.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (r in a) n.o(a, r) && (n.m[r] = a[r])
            if (s) var f = s(n)
          }
          for (t && t(o); c < i.length; c++)
            (u = i[c]), n.o(e, u) && e[u] && e[u][0](), (e[u] = 0)
          return n.O(f)
        },
        o = (self['webpackChunkvue_pr03'] = self['webpackChunkvue_pr03'] || [])
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)))
    })()
  var o = n.O(void 0, [998], function () {
    return n(7635)
  })
  o = n.O(o)
})()
//# sourceMappingURL=app.82d128af.js.map
