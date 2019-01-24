var test = require('tape')
var goodbye = require('pull-goodbye')
var network = require('../../browser.js')
var _ = icebreaker

test('wss:connect', function (t) {
  t.plan(3)
  network.connect('wss://echo.websocket.org', function (err,connection) {
    t.notOk(err)
    _(
      connection,
      goodbye({
        source: _('hello'),
        sink: _.drain(function (d) {
          t.equals(d, 'hello')
        },t.notOk)
      }, 'GoodBye'),
      connection
    )
  })
})
