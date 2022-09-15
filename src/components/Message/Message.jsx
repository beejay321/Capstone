import { useState, useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import ChatBox from "./chatBox";
import styles from "./message.module.css";
import { io } from "socket.io-client";
import { useHistory } from "react-router-dom";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
// const userId = localStorage.getItem("id");
const socket = io(MY_APP_API_URL, { transports: ["websocket"] });

function Message(props) {
  const [showChat, setShowChat] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showNotification, setShowNotification] = useState(1);
  // const [chats, setChats] = useState([]);
  // const [roomy, setRoomy] = useState("");
  // const [roomHistory, setRoomHistory] = useState("");
  let history = useHistory();

  const user = props.user;

  // const continueRoom = async (room) => {
  //   setSelectedRoom(room);
  //   setRoomHistory([]);
  //   console.log("room:", room);
  //   const response = await fetch(`${MY_APP_API_URL}/room/history/${selectedRoom.id}`);
  //   const { chatHistory } = await response.json();
  //   setRoomHistory(chatHistory);
  // };

  const showChatBox = () => {
    if (localStorage.getItem("id")) {
      setShowButton(false);
      setShowChat(true);
    } else {
      history.push("/register");
    }
    // props.history.push(`/me/messages`);
    // createRoom();
  };
  const outputMessage = (msg) => {
    console.log(chatHistory);
    console.log("hey", selectedRoom);
    chatHistory.push(msg);
    setChatHistory([...chatHistory]);
    console.log("all chats", chatHistory);
  };
  const receiveMessage = (msg) => {
    console.log("to-recipient:", msg);
    console.log("message received");
    setShowNotification(showNotification + 1);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("this is the socket id", socket.id);
    });

    // Message from server
    socket.on("message", (message) => {
      console.log("welcome:", message);
      outputMessage(message);
    });

    socket.on("to-recipient", (message) => {
      receiveMessage(message);
    });
  }, []);

  return (
    <div>
      {localStorage.getItem("id") !== user._id && (
        <Col xs={3} className="">
          {showButton && (
            <Button className={styles.chatButton} variant="primary" type="submit" onClick={showChatBox}>
              Chat with {user.firstname}
            </Button>
          )}
          {showChat && (
            <div className={styles.chatBoxComp}>
              <ChatBox title="profile" socket={socket} user={user} chatHistory={chatHistory} showChat={showChat} setShowChat={setShowChat} setShowButton={setShowButton} selectedRoom={selectedRoom} />
            </div>
          )}
        </Col>
      )}
    </div>
  );
}

export default Message;
