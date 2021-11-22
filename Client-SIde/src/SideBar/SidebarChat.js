import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
//import { doc, setDoc } from "firebase/firestore";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";

export default function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  });
  useEffect(() => {
    setSeed(Math.random() * 5000);
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar_singleChat">
        <Avatar
          variant="rounded"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <div className="sidebar_info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebar_singleChat">
      <h2>Add New Chat</h2>
    </div>
  );
}
