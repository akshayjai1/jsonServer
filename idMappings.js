'use strict'
let index = process.argv.indexOf('--ids');
let idMappings = process.argv[index + 1];
idMappings = JSON.parse(idMappings);

module.exports = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    const entity = req.path.split('/')[1];
    req.body.id = req.body[idMappings[entity]];
  }
  next()
}

json-server --watch db.1.json --id "userId" --port 2323