import firebase from "./firebase";

export async function getResourceIds(){
  let output = [];
  try{
    const snapshot = await firebase.collection("resources").get();
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            params: {
              id:doc.id
            }
          }
        );
      }
    );
  } catch(error) {
    console.error(error)
  }

  return output;
}

export async function getResourceData(idRequested) {
  const doc = await firebase.collection("resources").doc(idRequested).get();

  let output;
  if (!doc.empty) {
    output = { id:doc.id, data:doc.data() };
  } else {
    output = null;
  }

  return output;
}

export async function getFood(){
  let output = [];
  try{
    const snapshot = await firebase.collection("resources").get();
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            id: doc.id.toString(),
            img: doc.data().img.toString(),
            food: doc.data().food.toString()            
          }
        );
      }
    );
  } catch(error) {
    console.error(error)
  }

  return output;
}