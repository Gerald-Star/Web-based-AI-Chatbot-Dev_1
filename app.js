
const chatBody = document.querySelector('.chat-body');
const messageInput = document.querySelector('.message-input');
const sendMessageButton = document.querySelector('#send-message');


const userData = {
  message: ""
};


// Function to create and display a message element with dynamic classes
const createMessageElement = (content, classes) => {
  const div = document.createElement('div');
  div.classList.add('message', classes);
  div.innerHTML = content;
  return div;

}


//Function to handle outgoing messages and display them in the chat body
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
   if (!userData.message) return;
  // Create and display the user's message in the chat body
  const messageContent = `<div class="message-text"></div>`;

  const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
  outgoingMessageDiv.querySelector('.message-text').textContent = userData.message;
  chatBody.appendChild(outgoingMessageDiv);

   messageInput.value = ""; // clear input field after sending message
   chatBody.scrollTop = chatBody.scrollHeight; // scroll to the bottom of the chat body
 
}


// Handle Enter key press for sending messages
// Event listener for send button
messageInput.addEventListener('keydown', (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    // Display user message in the chat body
    handleOutgoingMessage(e);
  }

});


//sendMessageButton.addEventListener('click', (e) => {
   handleOutgoingMessage(e);
//});

// Send button
sendMessageButton.addEventListener('click', handleOutgoingMessage);