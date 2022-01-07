import IntroComponent from '../components/intro/intro'
import LayoutComponent from '../components/layout/layout'
import TechnologiesComponent from '../components/technologies/technologies'

export default function HomePage() {
  return (
    <>
      <LayoutComponent title={'Home Page'}>
        <IntroComponent />
        <TechnologiesComponent />
      </LayoutComponent>
    </>
  )
}
