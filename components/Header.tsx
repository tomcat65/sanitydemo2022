import Head from 'next/head'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="cusor-pointer w-44 object-contain"
            src="https://links.papareact.com/yvf"
            alt="medium logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='bg-green-600 text-white px-4 rounded-full py-1'>Follow</h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full border-green-600'>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
