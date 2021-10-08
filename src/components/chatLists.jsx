import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Container, Col, Row, Card, Accordion, Button, FormControl, CloseButton, Image, InputGroup } from "react-bootstrap";
import { MessageList, Input, SystemMessage, MessageBox, ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "../styles/chatBox.css";
import { io } from "socket.io-client";
import InputEmoji from "react-input-emoji";
import ChatBox from "./chatBox";

const ADDRESS = "http://localhost:3255";
const socket = io(ADDRESS, { transports: ["websocket"] });

const ChatLists = ({ roomHistory, setShowChat, user, selectedRoom, firstname, lastname, setShowChatList, showChat, continueRoom, getRooms, chats }) => {
  const [userName, setUserName] = useState("Liam");
  const [currentMessage, setCurrentMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    getRooms();
  }, []);

  const showChatBoxList = () => {
    setShowChat(true);
    // continueRoom();
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="chatListComp">
            {/*  xs={{ offset: 3, span: 5 }} */}
            <div className="d-flex justify-content-between pt-2 px-1">
              <div className="d-flex ">
                <h5>Messages</h5>
              </div>
              <CloseButton onClick={() => setShowChatList(false)} />
            </div>
            <hr className="p-0 " />

            <div>
              {chats &&
                chats.map((chat) => (
                  <div style={{ maxHeight: "100%", overflowY: "scroll", backgroundColor: "white" }}>
                    <div className="d-flex  gap-3 summary Box" onClick={showChatBoxList}>
                      <div className=" px-2 pt-2">
                        <Image src="https://picsum.photos/seed/picsum/200/300" height="45" width="45" roundedCircle />
                      </div>{" "}
                      <div className="d-grid py-1 gap-1">
                        <span>Name</span>
                        <span>last message</span>
                      </div>
                    </div>
                    <span className="ml-2" style={{ fontSize: "0.7rem" }}>
                      {new Date().toLocaleTimeString("en-US")}
                    </span>
                    <hr className="m =0 p-0" />
                  </div>
                ))}
            </div>
            <div>
              <div style={{ maxHeight: "100%", overflowY: "scroll", backgroundColor: "white" }}>
                <div className="d-flex  gap-3 summary Box">
                  <div className=" px-2 pt-2">
                    <Image src="https://picsum.photos/seed/picsum/200/300" height="45" width="45" roundedCircle />
                  </div>{" "}
                  <div className="d-grid py-1 gap-1">
                    <span>Name</span>
                    <span>last message</span>
                  </div>
                </div>
                <hr />
              </div>

              <ChatList
                style={{ maxHeight: "100%", overflowY: "scroll" }}
                className="chat-list "
                // onClick={continueRoom}
                // dataSource={chats}
                dataSource={[
                  {
                    avatar: "https://picsum.photos/seed/picsum/200/300",
                    alt: "Reactjs",
                    title: "Name",
                    subtitle: "Hello",
                    date: new Date(),
                    unread: 3,
                  },
                  {
                    avatar: "https://picsum.photos/seed/picsum/200/300",
                    alt: "Reactjs",
                    title: "Name",
                    subtitle: "Thank you for reaching out",
                    date: new Date(),
                    unread: 3,
                  },
                ]}
              />
            </div>
          </Col>
          <Col xs={3} className="">
            <ChatBox selectedRoom={selectedRoom} roomHistory={roomHistory} showChat={showChat} setShowChat={setShowChat} user={user} firstname={user.firstname} lastname={user.lastname} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatLists;
