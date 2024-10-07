import { paths } from '@/app/config/paths'
import { getAbsolutePath, getSearchParamsFromUrl } from '@/shared/router'

test('Fn getAbsolutePath', () => {
  type Case = {
    expected: ReturnType<typeof getAbsolutePath>
    id: string
    props: Parameters<typeof getAbsolutePath>
  }

  const cases: Case[] = [
    {
      expected: '/',
      id: 'root',
      props: [
        {
          path: 'root',
          paths,
        },
      ],
    },
    {
      expected: '/about',
      id: 'root.about',
      props: [
        {
          path: 'root.about',
          paths,
        },
      ],
    },
    {
      expected: '/about/intention',
      id: 'root.about.intention',
      props: [
        {
          path: 'root.about.intention',
          paths,
        },
      ],
    },
    {
      expected: '/users/:userId',
      id: 'root.users.user',
      props: [
        {
          path: 'root.users.user',
          paths,
        },
      ],
    },
  ]

  cases.forEach(({ expected, props }) => {
    expect(getAbsolutePath(...props)).toBe(expected)
  })
})

test('Fn getSearchParamsFromUrl', () => {
  type Case = {
    expected: ReturnType<typeof getSearchParamsFromUrl>
    id: string
    props: Parameters<typeof getSearchParamsFromUrl>
  }

  const cases: Case[] = [
    {
      expected: { userId: '1' },
      id: 'userId=1',
      props: ['?userId=1'],
    },
    {
      expected: { name: 'test', userId: '1' },
      id: 'userId=1&name=test',
      props: ['?userId=1&name=test'],
    },
    {
      expected: {},
      id: '',
      props: [''],
    },
  ]

  cases.forEach(({ expected, props }) => {
    expect(getSearchParamsFromUrl(...props)).toEqual(expected)
  })
})
