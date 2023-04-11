# Solidoc: Documentation Generator for Solidity

This command-line utility creates markdown-based documentation for your Solidity project(s) for the following platforms:

* Ethereum
* Ethereum Classic
* Tron
* Qtum
* Wanchain
* Aeternity
* Counterparty
* Rootstock
* Ubiq
* Monax


## Getting Started
  
**Requirements** 
- Truffle installed  
  
```npm
npm install truffle -g
```
  
- Sovryn solidoc installed

```npm
npm install sovryn-solidoc@git+https://github.com/DistributedCollective/solidoc2#develop -g
```

**How to Use Solidoc2**

Create solidoc.json in the root:  

```js
{
  "pathToRoot": "solidity",
  "outputPath": "docs",
  "buildFolder": "build/contracts",
  "noCompilation": true,
  "compiler": "truffle compile",
  "language": "en",
  "ignoreFiles": ["**/*[T|t]est*.json", "**/*[M|m]ock*.json"],
  "contractsListBeginKeyword": "## Contracts",
  "replaceContractsListBeginKeyword": "### Contracts",
  "freshOutput": true,
  "readMe": "README.md"
}
```  

`pathToRoot`: path to truffle project (or similar) root. AST tree required for parsing - compiled with truffle  
`outputPath`: path to generate documentation to  
`buildFolder`: path to abi files relative to the root from `pathToRoot`  
`noCompilation`: do not recompile, optional, default: false  
`compiler`: path to run truffle compiler  
`language`: language, optional, default: en  
`ignoreFiles`: exclude redundant for docs abi .json files by mask: tests, mocks etc.  
`contractsListBeginKeyword`: text before the keyword will be removed from the contrtacts list for `readMe`
`replaceContractsListBeginKeyword`: replacement of the `contractsListBeginKeyword` value, e.g. when need formatting or a different word/phrase
`freshOutput`: empty the docs folder before generating docs
`readMe`: add contracts docs refs to this README.md file  
  >  Contracts links will be inserted between these lines (put it in the readMe file)  
  >  [comment]: #solidoc (Start)  
  >  [comment]: #solidoc (End) 

and then call `solidoc2` instead of passing command line arguments

You can still use CLI arguments too which have priority over and override config parameters  
  
On your project root, run the following command to generate documentation to the `docs` directory

```npm
solidoc2 ./ ./docs true
```
  
**CLI Arguments**

    1. Path to truffle project root.
    2. Path to generate documentation to.
    3. Path to abi files relative to the root from p.1, default: root from p.1
    4. Do not recompile. Optional, default: false.
    5. Language. Optional, default: en. 
  

**Or edit package.json**

```json
  "scripts": {
    "docgen": "solidoc2 ./ ./docs"
  }
```

and run

```npm
npm run docgen
```

**Note**

Do not use recompilation (forth argument) if you are using this on a non truffle project.


## Overrides

If you wish to change bits and pieces of the documentation generated, place `solidoc templates` on the following directory:

`./.solidoc/templates/`

[Solidoc Templates](templates)


You can also override language literals by copying and editing `i18n` files on the following path:

`./.solidoc/i18n/`



## Example Documentation

[Sovryn Oracle Based AMM Contracts](https://github.com/DistributedCollective/oracle-based-amm/tree/feat/solidoc-docs-generator/docs)
