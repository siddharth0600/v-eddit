import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
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
