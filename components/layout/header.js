import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaBars } from 'react-icons/fa'

import { useState } from 'react'

function HeaderComponent({ title }) {
  const router = useRouter()

  const [showMenu, setShowMenu] = useState('hidden')

  const pathname = router.pathname

  const menuItems = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
    {
      title: 'Courses',
      key: '/courses',
    },
    {
      title: 'Contact',
      key: '/contact',
    },
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <nav className='text-white font-mont fixed inset-0 z-50'>
        <div
          className={`flex bg-themeColor justify-between items-center p-2 shadow-lg shadow-gray-900 ${
            showMenu !== 'hidden' && 'flex-col lg:flex-row'
          }`}
        >
          <div className='flex justify-between w-full items-center'>
            <h1 className='text-4xl tracking-widest cursor-pointer font-semibold'>
              <Link href={'/'}>
                <a>R M Z</a>
              </Link>
            </h1>

            <FaBars
              className='lg:hidden cursor-pointer text-md'
              onClick={() => {
                if (showMenu === 'hidden') {
                  setShowMenu('')
                } else {
                  setShowMenu('hidden')
                }
              }}
            />
          </div>

          <div className='hidden lg:flex'>
            {menuItems.map((item) => {
              return (
                <li
                  key={item.key}
                  className={`list-none mx-5 p-1 ${
                    item.key === pathname &&
                    'bg-white text-black rounded-md  px-5'
                  }`}
                >
                  <Link href={item.key}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              )
            })}
          </div>

          <div
            className={`flex flex-col items-start w-full lg:hidden mt-5 ${showMenu} `}
          >
            {menuItems.map((item) => {
              return (
                <li
                  key={item.key}
                  className={`list-none py-1 my-2  ${
                    item.key === pathname &&
                    'bg-white text-black rounded-md px-5'
                  } `}
                >
                  <Link href={item.key}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderComponent
