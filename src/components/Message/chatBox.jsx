import { useState, useEffect } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "../../styles/chatBox.css";
import styles from "./message.module.css";

// import ChatComponent from "./ChatComponent";
const userId = localStorage.getItem("id");

// import InputEmoji from "react-input-emoji";

// const MY_APP_API_URL = "http://localhost:3255";
// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const ChatBox = ({ title, chatcomp, chat, chatHistory, socket, user, setShowButton, selectedRoom, setShowChat, showChat }) => {
  // const [userName, setUserName] = useState("Liam");
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    //   const historyOfChat = async () => {
    //     console.log(chatHistory);
    //     const response = await fetch(`${MY_APP_API_URL}/room/history/${selectedRoom._id}`, {
    //       method: "GET",
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //       },
    //     });
    //     if (response.ok) {
    //       const history = await response.json();
    //       console.log("history:", history);
    //       setChatHistory(history);
    //     }
    //   };
    //   historyOfChat()
  }, []);

  const sendMessage = async (e) => {
    // e.prevent.Default();
    console.log("message sent");
    const messageToSend = {
      id: socket.id,
      text: currentMessage,
      type: "text",
      sender: userId,
    };

    // Emit message to server
    socket.emit("joinRoom", selectedRoom);
    // socket.emit("sendMessage", messageToSend);
    socket.emit("sendMessage", { messageToSend, selectedRoom });
    //{ message: messageToSend,
    // selectedRoom }
    setCurrentMessage("");
  };

  const closeChat = () => {
    setShowChat(false);
    setShowButton(true);
  };

  return (
    // showChat && (
    <>
      <div className={styles.chatRoomsTitle}>
        {userId === user._id ? (
          <div className="d-flex ">
            <span>
              {chat.firstname} {chat.lastname}
            </span>
          </div>
        ) : (
          <div className="d-flex  ">
            <span>
              {user.firstname} {user.lastname}
            </span>
          </div>
        )}
        {title === "profile" && (
          <div className={styles.closeBtn} onClick={closeChat}>
            <span>
              <i className="bi bi-x-lg"></i>
            </span>
          </div>
        )}
      </div>
      <div className={styles.chatBox}>
        <div>
          <div className={styles.chatMessages}>
            <div>
              {chatHistory &&
                chatHistory.map((message, i) => (
                  <>
                    <div key={i} className="my-2">
                      <MessageBox
                        position={message.sender === user._id ? "left" : "right"}
                        type={"text"}
                        text={message.text}
                        title={message.sender === user._id ? user.firstname : "You"}
                        data={message}
                        date={new Date()}
                      />
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chatForm}>
        <button className={styles.sendButton}>
          <i class="bi bi-emoji-laughing"></i>{" "}
        </button>
        <button className={styles.sendButton}>
          <i class="bi bi-paperclip"></i>{" "}
        </button>
        <input className={styles.chatInput} type="text" placeholder="Write a message" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        <button className={styles.sendButton} onClick={sendMessage}>
          <i class="bi bi-send-fill"></i>
        </button>
      </div>
    </>
  );
};

export default ChatBox;
