# @projectsophon/workspace

Utility for finding workspace directory paths in a project using npm workspaces.

## Usage

```js
const workspace = require("@projectsophon/workspace");

console.log(workspace("client")); // prints absolute path to your workspace named "client"
```

## API

### `workspace(name)`

Takes a workspace name and returns an absolute string path to the workspace location if it exists.
This requires your `package-lock.json` file to be up-to-date, which allows this package to behave
synchronously.
