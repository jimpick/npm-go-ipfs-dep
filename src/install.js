#!/usr/bin/env node

const fs = require('fs')
const goenv = require('go-platform')
const rimraf = require('rimraf')

process.chdir('go-ipfs')
rimraf.sync('ipfs')
fs.symlinkSync(`ipfs_${goenv.GOOS}-${goenv.GOARCH}`, 'ipfs')

