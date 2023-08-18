# Delegate Snap

This snap demonstrates how to develop a snap with TypeScript. It is a simple
snap that displays a confirmation dialog when the `hello` JSON-RPC method is
called.

## Notes

- Babel is used for transpiling TypeScript to JavaScript, so when building with
  the CLI, `transpilationMode` must be set to `localOnly` (default) or
  `localAndDeps`.
