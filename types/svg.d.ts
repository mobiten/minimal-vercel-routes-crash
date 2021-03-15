// @see https://github.com/neutrinojs/neutrino/issues/1507
// used to remove the typescript compiler warning on svg imports
declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
