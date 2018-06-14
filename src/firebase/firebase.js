import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOZ3zL_UenQl_YORiVvEt9LlKJUrkiKeQ",
    authDomain: "expensify-18f47.firebaseapp.com",
    databaseURL: "https://expensify-18f47.firebaseio.com",
    projectId: "expensify-18f47",
    storageBucket: "expensify-18f47.appspot.com",
    messagingSenderId: "890404609184"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

//   //child_removed

//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


//   //child_changed

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   //child_added

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


// //   database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// //   });

// //   database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = []; 
        
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });


//   database.ref('expenses').push({
//       description: 'Rent',
//       note: "saving",
//       amount: '$1500',
//       createdAt: "12 20"
//     })

//   //database.ref('notes/-LEu5GrGNdBzUjQ4NvHK').remove();

// //   database.ref('notes').push({
// //       title: 'course topics',
// //       body: 'react native, angular, js'
// //   });
// //   const notes = [{
// //       id: 2,
// //       title: 'First Note',
// //       body: 'My 1st Note'
// //   }, {
// //       id: '7aserti',
// //       title: 'Another Note',
// //       body: 'My 2nd Note'
// //   }];

// //   database.ref('notes').set(notes);
// //   const onValueChange = database.ref()
// //     .on('value', (snapshot) => {
// //         const val = snapshot.val();
// //         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //     }, (e) => {
// //         console.log("Error with fetching data : ", e);
// //     })

// //   const onValueChange = database.ref()
// //     .on('value', (snapshot) => {
// //         console.log(snapshot.val());
// //     }, (e) => {
// //         console.log("Error with fetching data : ", e);
// //     });

// //     setTimeout(() => {
// //         database.ref('age').set(24);
// //     }, 3500);

// //     setTimeout(() => {
// //         database.ref().off(onValueChange);
// //     }, 7000);

// //     setTimeout(() => {
// //         database.ref('age').set(20);
// //     }, 10500);

// //   database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error Fetching data : ', e);
// //     });

// //   database.ref().set({
// //       name: 'Veena KR',
// //       age: 24,
// //       job: {
// //           title: 'Software Developer',
// //           company: 'CTS'
// //       },
// //       stressLevel: 6,
// //       location: {
// //           city: 'Bangalore',
// //           country: 'India'
// //       }
// //   }).then(() => {
// //       console.log('Data is saved');
// //   }).catch((e) => {
// //       console.log('This failed: ', e);
// //   });

// //   database.ref().update({
// //       stressLevel: 9,
// //       'job/company': 'Amazon',
// //       'location/city': 'New York'
// //   })

// //   database.ref('isSingle').set(null);

// // database.ref('isSingle').remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         console.log('data wasn\'t removed: ',e);
// //     });