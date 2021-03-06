const { resolve, join } = require("path");

const BUNDLETOOL_VERSION = "0.15.0";
const BIN_PATH = "./.bundletool";
const DEFAULT_BASE_DIRECTORY = resolve(__dirname, BIN_PATH);
const BUNDLETOOL_FILE_PATH = join(
  DEFAULT_BASE_DIRECTORY,
  `bundletool-${BUNDLETOOL_VERSION}.jar`,
);

module.exports = {
  BUNDLETOOL_VERSION,
  BIN_PATH,
  DEFAULT_BASE_DIRECTORY,
  BUNDLETOOL_FILE_PATH,
};
