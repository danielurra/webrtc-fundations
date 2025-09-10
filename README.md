## Project Overview

This is a real-time chat application built with <b>Node.js, Express</b>, and <b>Socket.io</b>. The application consists of a simple WebSocket server and a client-side interface for real-time messaging.

## Development Commands

### Running the Application
- **Start server**: `node index.js` (serves on localhost:4000)
- **Install dependencies**: `npm install`

### Testing and Code Quality
- **Tests**: No testing framework currently configured
- **Linting**: No linting tools configured
- **Type checking**: No TypeScript configuration

## Architecture Overview

### Backend (`index.js`)
- Express server serving static files from `public/` directory
- Socket.io WebSocket server handling real-time communication
- Listens for `sendingmessage` events and broadcasts `broadcastmessage` events
- Runs on port 4000

### Frontend (`public/`)
- **`index.html`**: Simple chat interface with username input and message display
- **`chat.js`**: Socket.io client handling message sending/receiving
- **`styles.css`**: Dark theme styling with responsive design

### Key Dependencies
- **Express v5.1.0**: Web framework
- **Socket.io v4.8.1**: Real-time bidirectional communication

## Code Structure

The project follows a simple client-server architecture:
- Server handles WebSocket connections and message broadcasting
- Client connects to WebSocket server and manages UI interactions
- No database or message persistence - all communication is real-time only
- No authentication or user management system

## Development Notes

- Application is hardcoded to use port 4000
- Client JavaScript contains hardcoded server URL (`http://localhost:4000`)
- Messages are not persisted - only real-time broadcasting between connected clients
- Dark theme UI with max-width 600px and scrollable chat window (400px height)
