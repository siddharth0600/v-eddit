import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit</title>
      </Head>
      {/* PostBox */}
      <PostBox />
      <div>{/* Feed */}</div>
    </div>
  )
}

export default Home
