!(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t]
            }.bind(null, o),
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function(e, t, n) {
    'use strict'
    var r =
        (this && this.__awaiter) ||
        function(e, t, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(e) {
              try {
                c(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              try {
                c(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function c(e) {
              e.done
                ? o(e.value)
                : new n(function(t) {
                    t(e.value)
                  }).then(a, u)
            }
            c((r = r.apply(e, t || [])).next())
          })
        },
      o =
        (this && this.__generator) ||
        function(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function() {
                return this
              }),
            i
          )
          function u(i) {
            return function(u) {
              return (function(i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !(o = 0 < (o = a.trys).length && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, u])
            }
          }
        },
      i = this,
      a = document.querySelector('[data-js=list]'),
      u = document.querySelector('[data-js=sidebar-click-catcher]'),
      c = document.querySelector('[data-js=open-sidebar]'),
      l = document.querySelector('[data-js=theme-button]'),
      d = document.querySelector('[data-js=sidebar]'),
      s = document.querySelector('[data-js=form]'),
      f = document.querySelector('[data-js=todo-field]')
    if (
      (s &&
        s.addEventListener('submit', function(e) {
          return r(i, void 0, void 0, function() {
            var t, n
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return (
                    e.preventDefault(),
                    [
                      4,
                      fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ todo: f.value }),
                      }),
                    ]
                  )
                case 1:
                  return [4, r.sent().json()]
                case 2:
                  return (
                    (t = r.sent()),
                    ((n = document.createElement('li')).innerHTML = t.todo),
                    a.appendChild(n),
                    [2]
                  )
              }
            })
          })
        }),
      c &&
        c.addEventListener('click', function(e) {
          e.preventDefault(), d.classList.toggle('sidebar--open')
        }),
      u &&
        u.addEventListener('click', function(e) {
          e.preventDefault(), d.classList.toggle('sidebar--open')
        }),
      l &&
        l.addEventListener('click', function(e) {
          e.preventDefault(), document.body.classList.toggle('body--themed')
        }),
      !a)
    )
      throw new Error('Could not find [data-js=list]')
    if (!u) throw new Error('Could not find [sidebar-click-catcher]')
    if (!c) throw new Error('Could not find [data-js=open-sidebar]')
    if (!l) throw new Error('Could not find [data-js=theme-button]')
    if (!d) throw new Error('Could not find [data-js=sidebar]')
    if (!s) throw new Error('Could not find [data-js=form]')
    if (!f) throw new Error('Could not find [data-js=todo-field]')
  },
])
