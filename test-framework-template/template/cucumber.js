const configReader = require('cucumber-playwright-framework/lib/readers/testConfigReader')
const fs = require('fs-extra')

const testConfigFile = `${__dirname}/test.config.json`
process.env.TEST_CONFIG = testConfigFile

const testConfig = configReader.TestConfigReader.getConfig(testConfigFile)
fs.rmSync(testConfig.reportPath, { recursive: true, force: true })
fs.ensureDirSync(testConfig.artifactsPath)

const common = [
  './features/**/*.feature',
  '--require-module ts-node/register',
  '--require ./src/hooks/hooks.ts',
  '--require ./src/steps/**/*.ts',
  `-f json:${testConfig.reportPath}/${testConfig.reportFileName}.json`,
  `-f html:${testConfig.reportPath}/${testConfig.reportFileName}.html`,
  `-f junit:${testConfig.reportPath}/${testConfig.reportFileName}.junit`,
  '-f summary',
  '-f progress',
  `--retry ${testConfig.retry}`,
  `--parallel ${testConfig.parallel}`,
  '--publish-quiet',
  '--format-options \'{"colorsEnabled":false}\''
].join(' ')

const all = `${common} --tags "not @ignore and not @skip"`
const only = `${common} --tags "@only and not @ignore and not @skip"`
const smoke = `${common} --tags "@smoke and not @ignore and not @skip"`
const ci = `${common} --tags "@ci and not @ignore and not @skip"`

module.exports = {
  default: all,
  all,
  only,
  ci,
  smoke
}
