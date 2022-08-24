import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import ChatRooms from "./ChatRooms";
import styles from "./message.module.css";
import { io } from "socket.io-client";
import ChatBox from "./chatBox";
import Footer from "../Footer";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
const userId = localStorage.getItem("id");
const socket = io(MY_APP_API_URL, { transports: ["websocket"] });
function Messages(props) {
  const [showChat, setShowChat] = useState(false);
  const [noChatRooms, setNoChatRooms] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [recipient, setRecipient] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showNotification, setShowNotification] = useState(0);

  const createRoom = async (rec) => {
    try {
      const response = await fetch(`${MY_APP_API_URL}/room/user/${userId}/${rec._id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.ok) {
        console.log(response);
        const room = await response.json();
        console.log("room:", room);
        setSelectedRoom(room);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showChatBox = (rec) => {
    // setShowButton(false);
    setShowChat(true);
    createRoom(rec);
    setRecipient(rec);
    setNoChatRooms(false);
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
  }, [receiveMessage, outputMessage]);
  return (
    <>
      <NavBar />
      {/* <Container fluid className={styles.topRow}>
        <div></div>
      </Container> */}
      <div className={styles.messagesDiv}>
        <Container>
          <Row className={styles.messagesRow}>
            <div className={styles.chatRooms}>
              <ChatRooms showChatBox={showChatBox} showNotification={showNotification} />
            </div>
            <div className={styles.chats}>
              {noChatRooms ? (
                <>
                  <div className={styles.noList}>
                    <div className="d-grid">
                      <img src="https://res.cloudinary.com/dvyids286/image/upload/v1659264999/CapstoneProjects/qh2wtklt8fua3q55qplw.png" height={200} alt="" srcset="" />
                      <span className={styles.noListText}>Your Chats</span>
                    </div>
                  </div>
                </>
              ) : (
                <div>{showChat && <ChatBox chat={recipient} chatcomp={styles.chatcomp} user={recipient} chatHistory={chatHistory} selectedRoom={selectedRoom} socket={socket} />}</div>
              )}
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Messages;
