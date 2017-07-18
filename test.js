const path = require('path');
const existsSync = require('fs').existsSync;

/** Name of the build config file. */
const BUILD_CONFIG_FILENAME = 'build-config.js';

/** Method that searches for a build config file that will be used for packaging. */

  let currentDir = process.cwd();

  while (!existsSync(path.resolve(currentDir, BUILD_CONFIG_FILENAME))) {
    let parentDir = path.dirname(currentDir);
    console.log(parentDir);

    if (parentDir === currentDir) {
      return null;
    }

    currentDir = parentDir;
  }

  console.log(path.join(currentDir, BUILD_CONFIG_FILENAME));
