import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>KONO PAGE NO DA</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="my-class">Volver a la home</a>
        </Link>
      </h2>
    </Layout>
  )
}
export default FirstPost