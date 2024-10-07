import { RouteObject } from 'react-router'

type PathConfig = Record<'index', string>

type Paths = { [p: string]: PathConfig | Paths }

/*
 * @example
 * getAbsolutePath({ path: 'root', paths }) // => '/'
 * getAbsolutePath({ path: 'root.about.intention', paths }) // => '/about/intention'
 */
type PathWrapper = { parent: Paths; path: string }
const getAbsolutePath = (props: { path: string; paths: Paths }): string =>
  props.path.split('.').reduce(
    (acc, cur) =>
      ({
        parent: acc.parent[cur],
        path: (() => {
          if (!acc.path) return acc.parent[cur].index
          if (acc.path === '/') return acc.path + acc.parent[cur].index
          return `${acc.path}/${acc.parent[cur].index}`
        })(),
      }) as PathWrapper,
    {
      parent: props.paths,
      path: '',
    } as PathWrapper,
  ).path

type RouteObjectWithAuth = Omit<RouteObject, 'children'> & {
  children?: RouteObjectWithAuth[]
  id: string
  isPrivate?: boolean
  isPublicOnly?: boolean
}

const getSearchParamsFromUrl = (url: string): Record<string, string> => {
  const search = url.split('?')[1]
  if (!search) return {}
  return search.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    return { ...acc, [key]: value }
  }, {})
}

export type { Paths, RouteObjectWithAuth }
export { getAbsolutePath, getSearchParamsFromUrl }
