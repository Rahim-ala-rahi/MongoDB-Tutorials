/* 
The findById() method in MongoDB is used to find a single document in a collection based on its "_id" field.

The method takes the "_id" value as its only argument and returns the matching document if found, 

or null if no document matches the specified "_id". 
*/

const userId = '613c3ed3e7dc8c72243c9b3d'; // the _id value of the user to find
db.collection('users').findById(userId, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});


