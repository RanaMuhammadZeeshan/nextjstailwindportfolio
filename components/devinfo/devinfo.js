function DevInfoComponent() {
  return (
    <section className='mt-20'>
      <div>
        <h1 className='text-4xl text-gray-500 text-center font-bold'>
          Who Is Rana Muhammad <span className='text-yellow-500'>Zeeshan</span>
        </h1>

        <div className='relative text-gray-800 font-bold'>
          <div className='h-2/3'>
            <lottie-player
              src='https://assets1.lottiefiles.com/packages/lf20_dcatp5cr.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className='absolute inset-0 flex flex-col  items-center justify-center'>
            <h1 className='text:sm sm:text-base  md:text-2xl'>
              Assalam O Alaikum, Hi, Hello ...
              <hr />
              <pre className='text-xs sm:text-sm md:text-base lg:text-lg my-5  font-semibold'>
                {JSON.stringify(
                  {
                    name: 'Rana Muhammad Zeeshan',
                    specie: 'Human',
                    age: '25',
                    gender: 'Male',
                    country: 'Pakistan, Planet Earth',
                  },
                  null,
                  2
                )}
              </pre>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevInfoComponent
