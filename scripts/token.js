// tokenScript.js

const { StreamChat } = require("stream-chat");

// Your Stream API keys
const apiKey = "your-api-key"; // Replace with your actual API key
const apiSecret = "your-api-secret"; // Replace with your secret key

// Initialize the Stream Chat client
const chatClient = StreamChat.getInstance(apiKey, apiSecret);

// Function to generate a token
const generateToken = (userId) => {
    if (!userId) {
        console.error("User ID is required to generate a token.");
        return;
    }
    const token = chatClient.createToken(userId);
    console.log(`Token for user ${userId}: ${token}`);
};

// Generate a token for a user
const userId = "Aaron"; // Replace with the user's ID
generateToken(userId);
