import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Container, Col, Row, Form, ListGroup, Button, FormControl, CloseButton, InputGroup } from "react-bootstrap";
import { MessageList, Input, SystemMessage, MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "../styles/chatBox.css";
import { io } from "socket.io-client";
import InputEmoji from "react-input-emoji";

const ADDRESS = "http://localhost:3255";
const socket = io(ADDRESS, { transports: ["websocket"] });

const ChatBox = ({ selectedRoom, firstname, lastname, setShowChat, showChat }) => {
  const [userName, setUserName] = useState("Liam");
  const [currentMessage, setCurrentMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("this is the socket id", socket.id);
    });

    socket.on("chat-message", (data) => {
      console.log(data);
    });
  }, []);

  const sendMessage = async (e) => {
    // e.prevent.Default();
    console.log("message sent");
    const messageToSend = {
      text: currentMessage,
      id: socket.id,
      type: "text",
      sender: "You",
      timestamp: Date.now(),
    };
    // socket.emit("sendMessage", messageToSend);
    console.log("selectedRoom:", selectedRoom);
    socket.emit("sendMessage", { message: messageToSend, selectedRoom });
    setChatHistory([...chatHistory, messageToSend]);
    setCurrentMessage("");
  };

  return showChat ? (
    <>
      <Container>
        <Row>
          <Col className="chatBoxComp">
            {/*  xs={{ offset: 3, span: 5 }} */}
            <div className="d-flex justify-content-between pt-2 px-1">
              <div className="d-flex ">
                <h5>{firstname}</h5>
                <h5 className="px-2 ">{lastname}</h5>
              </div>
              <CloseButton onClick={() => setShowChat(false)} />
            </div>
            <hr className="p-0 " />

            <div>
              {chatHistory.map((message) => (
                <div key={message.id} className="my-2">
                  <span className=" py-3 ">
                    <strong>{message.sender}</strong>
                  </span>
                  <br />
                  <span className="messageBox my-3 ">{message.text}</span>
                  <br />

                  <span className="ml-2" style={{ fontSize: "0.7rem" }}>
                    {new Date().toLocaleTimeString("en-US")}
                  </span>
                  <hr className=" " />
                </div>

              ))}
            </div>
            {/* <div key="{message.id}" className="my-2"></div> */}
            <InputGroup className="chatInput mb-3">
            <hr className=" " />
              <FormControl placeholder="Write a message" aria-label="Recipient's username" aria-describedby="basic-addon2" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
              <Button type="submit" variant="outline-secondary" id="button-addon2" onClick={sendMessage}>
                Send
              </Button>
            </InputGroup>
            

            {/* <div className="input-parent d-flex p-3">
              <InputEmoji className="message-input"  onChange={(e) => setCurrentMessage(e.target.value)} cleanOnEnter={true} onEnter={sendMessage} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    ""
  );
};

export default ChatBox;
