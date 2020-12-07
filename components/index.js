import dynamic from 'next/dynamic'
import SliceMachine from './SliceMachine'

const Layout = dynamic(() => import('./Layout'))
const Head = dynamic(() => import('./Head'))
const Header = dynamic(() => import('./Header'))
const Listing = dynamic(() => import('./Listing'))
const Footer = dynamic(() => import('./Footer'))
const Caption = dynamic(() => import('./Caption'))
const Chip = dynamic(() => import('./Chip'))
const Icon = dynamic(() => import('./Icon'))
const Author = dynamic(() => import('./Author'))
const Share = dynamic(() => import('./Share'))
const DisqusComments = dynamic(() => import('./DisqusComments'))
const RelatedArticles = dynamic(() => import('./RelatedArticles'))

export {
  Layout,
  Head,
  Header,
  Listing,
  Footer,
  SliceMachine,
  Caption,
  Chip,
  Icon,
  Author,
  Share,
  DisqusComments,
  RelatedArticles,
}
