import IntroComponent from '../components/intro/intro'
import LayoutComponent from '../components/layout/layout'

export default function HomePage() {
  return (
    <>
      <LayoutComponent title={'Home Page'}>
        <IntroComponent />
      </LayoutComponent>
    </>
  )
}
