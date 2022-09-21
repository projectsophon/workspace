const { assert } = require("chai");
const path = require("path");

describe("@projectsophon/workspace", function () {
  it("works in the root of a project", function () {
    const result = require("./fixtures/project-one/index.js");
    assert.equal(result, path.join(__dirname, "./fixtures/project-one/foo"));
  });

  it("works from inside a workspace of a project", function () {
    const result = require("./fixtures/project-one/foo/index.js");
    assert.equal(result, path.join(__dirname, "./fixtures/project-one/bar"));
  });

  it("returns undefined if a workspace does not exist", function () {
    const result = require("./fixtures/project-one/bar/index.js");
    assert.equal(result, undefined);
  });

  it("can get all workspaces", function () {
    const result = require("./fixtures/project-one/all/index.js");
    assert.equal(result.size, 3);
    assert.exists(result.get("foo"));
    assert.exists(result.get("bar"));
    assert.exists(result.get("all"));
  });
});
