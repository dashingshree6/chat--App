import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./chat.css";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "../firebaseConfig";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

export default function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.random() * 5000);
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          variant="rounded"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last activity{""}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownCircleOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName && "chat_reveiver"
            }`}
          >
            <span className="chat_name ">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message"
          />
        </form>
        <button onClick={sendMessage} type="submit">
          Send
        </button>
        <MicIcon />
      </div>
    </div>
  );
}
