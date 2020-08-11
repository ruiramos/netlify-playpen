const fs = require('fs');

module.exports.handler = async ( event, context ) => {
  const file = fs.readFileSync(__dirname + '/test.zip');
  return {
    statusCode : 200,
    body : file.toString("base64"),
    isBase64Encoded: true
  };
}

