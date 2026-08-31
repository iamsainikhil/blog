import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
import animationData from '../public/404_animation.json'
const Layout = dynamic(() => import('../components/Layout'), {
  loading: Loader,
})
const Lottie = dynamic(() => import('react-lottie'), { ssr: false })

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  }

  return (
    <Layout title='Page Not Found' page='404'>
      <div
        sx={{
          position: 'absolute',
          marginTop: '-2rem',
          zIndex: 10,
          left: 0,
          right: 0,
        }}>
        <Lottie options={defaultOptions} />
      </div>
    </Layout>
  )
}
