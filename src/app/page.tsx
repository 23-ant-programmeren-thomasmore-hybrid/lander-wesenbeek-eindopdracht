import Head from 'next/head'
import CanvasPickles from './RenderPickle.tsx'

export default function Home() {
  return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="../styles/output.css" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main class="bg-orange-200">
          <div class="mx-auto">
              <CanvasPickles/>
            <div className={"overlap"}>
              hey texttttttttttttttttttttttttttttttttttt
              overlap test
            </div>
          </div>
        </main>
      </>
  )
}
