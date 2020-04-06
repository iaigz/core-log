
console.log('TEST node', __filename)

process.on('exit', code => { console.log('CODE', code) })

let Log = null

try {
  Log = require('.')
  console.log('PASS module can be required without errors')
} catch (err) {
  console.error(err.stack)
  console.log('FAIL module should be able to be required without errors')
  process.exit(1)
}

let log = null

try {
  log = new Log()
  console.log('PASS instances can be created without arguments')
} catch (err) {
  console.error(err.stack)
  console.log('FAIL instances should be able to be created without arguments')
  process.exit(1)
}

/*
const assert = require('assert')

try {
  assert.ok(log instanceof Log, 'log instances should be instanceof Log')
  console.log('PASS inheritance chain seems ok')
} catch (err) {
  console.error(err.stack)
  console.log('FAIL inheritance chain is broken')
  process.exit(1)
}
*/

/* vim: set expandtab: */
/* vim: set filetype=javascript ts=2 shiftwidth=2: */
