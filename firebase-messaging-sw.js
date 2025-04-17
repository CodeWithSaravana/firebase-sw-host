<!-- Import Firebase Core -->
<script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"></script>

<!-- Import Firebase Messaging -->
<script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging.js"></script>

<script>
  // Replace with your app's Firebase project configuration
  const firebaseConfig = {
    // ... your config here ...
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Initialize Firebase Cloud Messaging and get a reference to the service
  const messaging = firebase.messaging();

  // Get registration token.
  messaging.getToken({ vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu" }) // Replace with your actual VAPID key
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log("Registration token:", currentToken);
        // ... your code to handle the token ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ... your code to request permission ...
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ... your code to handle the error ...
    });
</script>
