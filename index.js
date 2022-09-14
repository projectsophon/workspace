const mapWorkspaces = require("@npmcli/map-workspaces");
const path = require("path");
const getCallerPath = require("caller-path");
const findup = require("findup-sync");

/**
 * @param {string} name The workspace name to query for location
 * @return {string | undefined } The directory path to the workspace if it exists
 * */
function workspace(name) {
  const callerPath = getCallerPath();
  // If we can't get a callerPath, just assume the root is `cwd`
  const searchPath = callerPath ? path.dirname(callerPath) : process.cwd();
  // From the search root, we need to traverse upwards and find the package-lock.json file
  const lockfileJsonPath = findup("package-lock.json", { cwd: searchPath });
  // Once we find a candidate, we require it. If this fails, it'll throw
  const lockfile = require(lockfileJsonPath);
  // If the lockfile is good, we want to use it's path as the root to resolve packages
  const lockfileRoot = path.dirname(lockfileJsonPath);

  const packages = mapWorkspaces.virtual({ cwd: lockfileRoot, lockfile });

  return packages.get(name);
}

module.exports = workspace;
