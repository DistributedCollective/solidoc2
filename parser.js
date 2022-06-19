
const fs = require('fs')
const glob = require('glob')
const pino = require('pino')

const logger = pino({
  prettyPrint: true
})

const parse = (buildDirectory, ignoreFiles = [] ) => {
  logger.info('Parsing %s', buildDirectory)
  const contracts = []

  const files = glob.sync(buildDirectory + '/**/*.json', { ingore: ignoreFiles });

  for (let i = 0; i < files.length; i++) {
    const data = fs.readFileSync(files[i])
    contracts.push(JSON.parse(data))
  }

  return contracts
}

module.exports = {
  parse
}
