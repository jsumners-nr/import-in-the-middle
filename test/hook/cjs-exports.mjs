import { strictEqual } from 'assert'
import Hook from '../../index.js'

Hook((exports, name) => {
  if (/exports\.js$/.test(name) === false) return
  exports.foo = 'foo-hooked'
})

import * as mod1 from '../fixtures/exports.js'
strictEqual(mod1.foo, 'foo-hooked')

import mod2 from '../fixtures/exports.js'
strictEqual(mod2.foo, 'foo-hooked')
