declare module 'object-path' {
  type Path = string | Array<string | Array<any>>

  function get(object: Object, path: Path): any
}

declare module 'object-path-immutable' {
  type Path = string | Array<string | Array<any>>

  function set(object: Object, path: Path, value: any): any
  function del(object: Object, path: Path): any
}