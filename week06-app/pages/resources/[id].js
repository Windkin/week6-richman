import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getResourceIds, getResourceData } from '../../lib/resources';

export async function getStaticProps({ params }) {
  const itemData = await getResourceData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getResourceIds();
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  console.log(itemData);
  return (
    <Layout>
      <div className="container">
        <div className="row text-center">
          <div className="col">
          {itemData ? 
            <h3 className="text-center"><u>{itemData.data.food}</u></h3> : null}
              {itemData ?
              <img src={itemData.data.imgLg} alt="" /> : null}
                {itemData ?
                <p>Made {itemData.data.date}</p> : null}
          </div>

        </div>
        
        </div>
    </Layout>
  );
}