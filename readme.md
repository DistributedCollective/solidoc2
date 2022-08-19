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

Create solidoc.json in the root

```js
{
  "pathToRoot": "solidity",
  "outputPath": "docs",
  "buildFolder": "build/contracts",
  "noCompilation": true,
  "compiler": "truffle compile",
  "language": "en",
  "ignoreFiles": ["**/*[T|t]est*.json", "**/*[M|m]ock*.json"],
  "readMe": "README.md"
}

```  


E.g. on your project root, run the following command.

```npm
solidoc2 ./ ./docs true
```
  
**CLI Arguments**

    1. Path to truffle project root.
    2. Path to generate documentation to.
    3. Path to abi files relative to the root from p.1, default: root from p.1
    4. Do not recompile. Optional, default: false.
    5. Language. Optional, default: en.

`pathToRoot`: path to truffle project (or similar) root. AST tree required for parsin - compiled with truffle.
`outputPath`: path to generate documentation to
`buildFolder`: path to abi files relative to the root from `pathToRoot`
`noCompilation`: do not recompile, optional, default: false
`compiler`: path to run truffle compiler
`language`: language, optional, default: en
`ignoreFiles`: exclude redundant for docs abi .json files by mask: tests, mocks etc. 
`readMe`: add contracts docs refs to this README.md file
  
This will generate documentation to the `docs` directory.

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

Do not use recompilation (third argument) if you are using this on a non truffle project.

## Configuration File

Alternatively, you can create `solidoc.json` configuration file in your project root.

```json
{
  "pathToRoot": "solidity",
  "outputPath": "docs",
  "buildFolder": "build/contracts",
  "noCompilation": true,
  "compiler": "truffle compile",
  "language": "en",
  "ignoreFiles": ["**/*[T|t]est*.json", "**/*[M|m]ock*.json"],
  "readMe": "README.md"
}
```

and then call `solidoc2` instead of passing any command line argument.


## Overrides

If you wish to change bits and pieces of the documentation generated, place `solidoc templates` on the following directory:

`./.solidoc/templates/`

[Solidoc Templates](templates)


You can also override language literals by copying and editing `i18n` files on the following path:

`./.solidoc/i18n/`



## Example Documentation

[Sovryn Oracle Based AMM Contracts](https://github.com/DistributedCollective/oracle-based-amm/tree/feat/solidoc-docs-generator/docs)
