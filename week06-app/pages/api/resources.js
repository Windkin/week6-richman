// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import our firebase library so we get connected to the firestore db
import firebase from "../../lib/firebase";

export default async function handler(req, res) {
  try {
    //ask the firestore to get every doc in the resources collection
    const snapshot = await firebase.collection("resources").get();

    //loop through each doc in the returned array in snapshot
    let output = [];

    snapshot.forEach(
      (doc) => {
        output.push( 
          {
            id: doc.id,
            data: doc.data()
          }
         );
      }
    );

    console.log(output);

    //return the newly constructed object value of all firestore doc data
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ output });

  } catch(err) {
    //if error show in the node conse the whole error object
    console.error(err);
    //send back to brower a 500 serv error
    res.status(500).end(err.message);
  }
}
