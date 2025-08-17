Notes for what does what in a package.json file.

comments aren't allowed in those files as they cause errors to appear.

{
  "name": "chapter_3",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module", <!-- the module tyle will allow for "import style reference to packages" the default is called common.js-->
  "scripts": {
    "dev": "node --watch --env-file=.env --experimental-strip-types --experimental-sqlite ./src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "A full stack todo application that uses a NodeJS backend, a SQLite database and JWT Authentication.",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2"
  }
}