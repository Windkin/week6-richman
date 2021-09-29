import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getFood } from '../lib/resources';

export async function getStaticProps() {
  const itemData = await getFood();
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}


export default function Home({ itemData }) {
  return (
    <Layout home>
      <h1 className="text-center">Menu Items</h1>
        <div className="container text-center">
          <div className="row">
            {itemData ? 
              itemData.map(({ id, food, img }) => (
              <div key={id} className="col-4 mt-20">
                <Link href={`/resources/${id}`}>
                  <a>
                    <img src={img}/><br/>
                      <h3>{food}</h3>
                  </a>
                </Link>
              </div>
            ))
            : null}
        </div>
      </div>
    </Layout>
  );
}