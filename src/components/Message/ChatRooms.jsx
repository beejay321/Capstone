import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "react-chat-elements/dist/main.css";
// import "../../styles/chatBox.css";
import styles from "./message.module.css";

const userId = localStorage.getItem("id");
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function ChatRooms({ showChatBox, showNotification }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      console.log("getRooms");
      try {
        const response = await fetch(`${MY_APP_API_URL}/users/${userId}/chats`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.ok) {
          const chatRooms = await response.json();
          console.log("chatRooms:", chatRooms);
          setChats(chatRooms);
        } else {
          console.log("chats not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRooms();
  }, []);

  return (
    <>
      <div className={styles.chatRoomsTitle}>
        <span>Messages</span>
      </div>
      {/* <div className={styles.dividerRow}>
        <span></span>
      </div> */}
      <div>
        <div className={styles.messageList}>
          {chats &&
            chats.map((chat, i) => (
              <>
                <div>
                  {chat.members[0]._id === userId ? (
                    <>
                      <div className={styles.chatList} onClick={() => showChatBox(chat.members[0])}>
                        <div className={styles.chatDiv}>
                          <div className={styles.imageDiv}>
                            <Image className={styles.image} src={chat.members[1].picture} fluid />
                          </div>

                          <div className="">
                            <div className={styles.messageOwner}>
                              {chat.members[1].firstname} {chat.members[1].lastname}{" "}
                            </div>
                            <div className={styles.lastMessage}>message</div>
                            {/* <div className={styles.lastMessage}>{chat.chatHistory[1]}</div> */}
                          </div>
                        </div>
                        {/*  */}
                        <div className="">
                          <div className={styles.time}>just now</div>
                          <div className={styles.newMsg}>3</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.chatList} onClick={() => showChatBox(chat.members[0])}>
                        <div className={styles.chatDiv}>
                          <div className={styles.imageDiv}>
                            <Image className={styles.image} src={chat.members[0].picture} fluid />
                          </div>

                          <div className="">
                            <div className={styles.messageOwner}>
                              {chat.members[0].firstname} {chat.members[0].lastname}{" "}
                            </div>
                            <div className={styles.lastMessage}>message</div>
                            {/* <div className={styles.lastMessage}>{chat.chatHistory[1]}</div> */}
                          </div>
                        </div>
                        {/*  */}
                        <div className="">
                          <div className={styles.time}>just now</div>
                          <div className={styles.newMsg}>3</div>
                          {/* <div className={styles.newMsg}>{showNotification}</div> */}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default ChatRooms;
