import DevInfoComponent from '../components/devinfo/devinfo'
import FavouriteTechnologyComponent from '../components/favouritetechnology/favouriteTechnology'

import IntroComponent from '../components/intro/intro'
import LayoutComponent from '../components/layout/layout'
import TechnologiesComponent from '../components/technologies/technologies'

export default function HomePage() {
  return (
    <>
      <LayoutComponent title={'Home Page'}>
        <IntroComponent />

        <TechnologiesComponent />

        <FavouriteTechnologyComponent
          coloredTitle={'YES!'}
          title={'I Am Javascript Buff...'}
          FavouriteTechnology={true}
        />

        <FavouriteTechnologyComponent
          coloredTitle={'DEV!'}
          title={'Stack'}
          FavouriteTechnology={false}
        />

        <DevInfoComponent />
      </LayoutComponent>
    </>
  )
}
