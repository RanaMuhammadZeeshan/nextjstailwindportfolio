import Script from 'next/script'

function IntroComponent() {
  return (
    <section>
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
      <div className='h-screen bg-themeColor'>
        <div className='grid  grid-cols-1 lg:grid-cols-2 h-screen items-center lg:border-4 lg:border-white lg:transform lg:rotate-12 lg:mx-20 bg-themeColor'>
          <div className='h-2/3 lg:1/2'>
            <lottie-player
              src='https://assets1.lottiefiles.com/private_files/lf30_gcroxmlt.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className=' px-5 lg:px-0 font-bold text-white'>
            <h1 className='text-4xl lg:text-7xl lg:tracking-wider'>
              Hello, I am{' '}
              <strong className='text-yellow-500'>Rana Muhammad Zeeshan</strong>
            </h1>
            <h1 className='text-xl lg:text-4xl lg:tracking-wider'>
              Human , <strong className='text-blue-500'>Full-Stack</strong>{' '}
              Developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroComponent
