import { expect, test as oclifTest } from '@oclif/test'

describe('hello', () => {
  oclifTest
    .stdout()
    .command(['hello', 'friend', '--from=oclif'])
    .it('runs hello cmd', ctx => {
      expect(ctx.stdout).to.contain('hello friend from oclif!')
    })
})
