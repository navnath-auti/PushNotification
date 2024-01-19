// app.js
// Request permission and get FCM token
messaging
  .requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then((token) => {
    console.log("FCM Token:", token);
    // Send this token to your backend to associate with the user
    // Also, subscribe to a topic (e.g., "offers")
    messaging
      .subscribeToTopic("offers")
      .then(() => {
        console.log('Subscribed to topic "offers"');
      })
      .catch((error) => {
        console.error("Error subscribing to topic:", error);
      });
  })
  .catch((error) => {
    console.error("Error getting permission or token:", error);
  });

// Handle incoming messages
messaging.onMessage((payload) => {
  console.log("Message received:", payload);
  // Handle the notification in your frontend as needed
});
