import { expect, test as oclifTest } from '@oclif/test'

describe('hello world', () => {
  oclifTest
    .stdout()
    .command(['hello:world'])
    .it('runs hello world cmd', ctx => {
      expect(ctx.stdout).to.contain('hello world!')
    })
})
