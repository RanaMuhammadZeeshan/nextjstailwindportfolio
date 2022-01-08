function FavouriteTechnologyComponent({
  coloredTitle,
  title,
  FavouriteTechnology,
}) {
  return (
    <section className='my-20'>
      <div
        className={`text-center h-52 ${
          FavouriteTechnology ? 'bg-favouriteTechnology' : 'bg-yellow-500'
        }  w-full`}
      >
        <h1 className='text-white font-bold text-4xl py-10'>
          <span
            className={`${
              FavouriteTechnology ? 'text-yellow-500' : 'text-gray-500'
            }`}
          >
            {coloredTitle}
          </span>{' '}
          {title}
        </h1>
      </div>

      {FavouriteTechnology ? (
        <div className='text-center mx-5 lg:mx-32 shadow-xl shadow-favouriteTechnology -mt-20 bg-gray-50 rounded hover:bg-gray-400 hover:text-gray-100'>
          <div className='h-96'>
            <lottie-player
              src='https://assets8.lottiefiles.com/packages/lf20_sSF6EG.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <p className=' text-lg lg:text-2xl my-10 font-semibold p-8'>
            Javascript is one of the most used programming language. Especially
            for web development
          </p>
        </div>
      ) : (
        <div className='text-center mx-5 lg:mx-32 shadow-xl shadow-favouriteTechnology -mt-20 bg-gray-50 rounded hover:bg-gray-400 hover:text-gray-100'>
          <div className='h-96'>
            <lottie-player
              src='https://assets8.lottiefiles.com/packages/lf20_hntzYU.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 p-5'>
            <div className='lg:text-left'>
              <h1 className='text-xl font-bold text-yellow-500'>Frontend</h1>
              <hr />

              <p className='font-semibold my-2'>HTML/CSS</p>
              <p className='font-semibold mt-2'>Reactjs</p>
              <p className='font-semibold mt-2'>Javascript</p>
              <p className='font-semibold mt-2'>Nextjs</p>
              <p className='font-semibold my-2'>Redux</p>
            </div>

            <div className='lg:text-center'>
              <h1 className='text-xl font-bold text-yellow-500'>UI/UX</h1>
              <hr />

              <p className='font-semibold my-2'>Tailwind Css</p>
              <p className='font-semibold mt-2'>Bootstrap</p>
              <p className='font-semibold mt-2'>Css</p>
              <p className='font-semibold my-2'>Sass</p>
            </div>

            <div className='lg:text-right '>
              <h1 className='text-xl font-bold text-yellow-500'>
                Backend and Database
              </h1>
              <hr />

              <p className='font-semibold my-2'>Nodejs</p>
              <p className='font-semibold mt-2'>Express</p>
              <p className='font-semibold mt-2'>MongoDB</p>
              <p className='font-semibold my-2'>Cassandra</p>
              <p className='font-semibold my-2'>Firebase</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FavouriteTechnologyComponent
