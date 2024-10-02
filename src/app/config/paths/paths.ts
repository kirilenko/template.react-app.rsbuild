type PathConfig = Record<'index', string>

type RawPaths = { [p: string]: PathConfig | RawPaths }

const paths = {
  root: {
    about: {
      achievements: {
        index: 'achievements',
      },
      index: '/about',
      intention: {
        index: 'intention',
      },
    },
    index: '/',
    users: {
      index: '/users',
      user: {
        index: ':userId',
      },
    },
  },
} satisfies RawPaths

export { paths }
