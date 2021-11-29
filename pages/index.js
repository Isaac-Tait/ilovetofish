import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/">
            <a className="text-blue-600">iloveto.fish!</a>
          </Link>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/blog">
          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Blog &rarr;</h3>
              <p className="mt-4 text-xl">
                Read about fishing here...
              </p>
            </a>
          </Link>

          <a
            href="https://iloveto.fish/about"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about stuff!
            </p>
          </a>

          <a
            href="https://iloveto.fish/landskein"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Landskein &rarr;</h3>
            <p className="mt-4 text-xl">
              What the heck is a landskein?
            </p>
          </a>

          <a
            href="https://iloveto.fish/stuff"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Stuff &rarr;</h3>
            <p className="mt-4 text-xl">
              Stuff!
            </p>
          </a>
        </div>
      </main>

      <footer className="text-gray-800 w-full px-2 text-center text-xs flex flex-row justify-between">
            <div>
              <p>© {new Date().getFullYear()} I Love To Fish&nbsp;</p>
            </div>

            <div>
                <p>
                    Another&nbsp;
                    <a
                    href="https://mountaintopcoding.dev"
                    className="text-blue-600 hover:text-pink-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    mountainTopCoding(
                    <span role="img" aria-label="mountain with snow-cap">
                        &#127956;
                    </span>
                    );
                    </a>{' '}
                    project
                </p>
            </div>
        </footer>
    </div>
  )
}
