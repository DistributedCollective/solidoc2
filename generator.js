
const pino = require('pino');
const path = require('path');
const fs = require('fs');
const temp = require('./helpers/template-helper');

const logger = pino({
  prettyPrint: true
});

const serializeContract = (contract, contracts) => {
  let template = temp.ContractTemplate;

  require('require-all')({
    dirname: path.join(__dirname, 'serializers'),
    filter: /(.+serializer)\.js$/,
    resolve: (serializer) => {
      template = serializer.serialize(contract, template, contracts);
    }
  });

  return template;
};

const serialize = (contracts, outputDirectory, cb) => {
  logger.info('Total contracts: %s.', contracts.length);
  let contract, result, file;

  for (let i = 0; i < contracts.length; i++) {
    contract = contracts[i];
    result = serializeContract(contract, contracts).replace(/[\r\n]\s*[\r\n]/g, '\n\n');
    file = path.join(outputDirectory, `${contract.contractName}.md`);

    logger.info('Writing %s.', file);
    fs.writeFileSync(file, result);
  }
  if (contracts.length > 0) {
    cb(contract, result, file);
  }
};

module.exports = {
  serialize
};