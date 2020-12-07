import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

const Head = ({
  children,
  pathUrl,
  page = 'Home',
  title = 'Articles',
  description,
  image,
}) => {
  const twitterHandle = '@iamsainikhil12'
  const siteName = 'Blog'
  const pageTitle = `${title} | ${page} | ${siteName}`
  const metaDescription =
    description ||
    `Sainikhil's personal blog with many interesting articles related to Web Development, Software Tools, Tips & Tricks, etc.`
  const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID
  const hjsv = process.env.NEXT_PUBLIC_HOTJAR_VERSION
  const isProd = process.env.NODE_ENV === 'production'
  return (
    <>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Damion&family=Fira+Code&family=Lato:ital,wght@0,400;0,700;1,300&display=swap' />
      <NextHead>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='blog,nextjs,prismic,theme UI,prismjs,react,scss,blog-starter'
        />
        <meta name='author' content='Sai Nikhil'></meta>
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
        {/* Open Graph */}
        <meta property='og:type' content='website' key='ogtype' />
        <meta property='og:url' content={pathUrl} key='ogurl' />
        <meta property='og:image' content={image} key='ogimage' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta
          property='og:description'
          content={metaDescription}
          key='ogdesc'
        />
        {/* favicons */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#333333' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#333' />
        <title>{pageTitle}</title>
        {/* Hotjar Tracking Code */}
        {/* {isProd ? (
          <script
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        ) : null} */}
        <script
          async
          defer
          src='https://static.cdn.prismic.io/prismic.js?new=true&repo=iamsainikhil-blog'></script>
        {children}
      </NextHead>
    </>
  )
}
export default Head
