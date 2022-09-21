export = workspace;
/**
 * @param {string} name The workspace name to query for location
 * @return {string | undefined} The directory path to the workspace if it exists
 **/
declare function workspace(name: string): string | undefined;
declare namespace workspace {
    export { all };
}
/**
 * @return {Map<string, string>} A map of all workspaces to filesystem paths
 **/
declare function all(): Map<string, string>;
//# sourceMappingURL=index.d.ts.map