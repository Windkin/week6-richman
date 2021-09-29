import Head from 'next/head';
import Link from 'next/link';

export default function Layout ({ children, home }) {
  return (
    <div>
      <Head>
        <title>Week 6 Next JS App W. Richman</title>
      </Head>
      <header>
        <nav className="text-center">
          <h1>Here Is Some Food I Made</h1>
            {!home && (
              <h2>Enjoy</h2>
            )
            }
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-center">
          <Link href="../../">
            <a className="btn btn-outline-light mt-3 mb-3">← Back to home</a>
          </Link>
          </div>
        )
      }
      <footer className="text-center">
        <h6>Week 5 cs55.13 W. Richman</h6>
      </footer>
    </div>
  );
}