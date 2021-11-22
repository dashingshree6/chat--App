import React, { useState, useEffect } from "react";
import "./sidebar.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SidebarChat from "./SidebarChat";
import db from "../firebaseConfig";
import { useStateValue } from "../StateProvider";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar variant="rounded" src={user?.photoURL} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeRoundedIcon />
          </IconButton>
          <IconButton>
            <QuestionAnswerRoundedIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownCircleOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchRoundedIcon />
          <input type="text" placeholder="Start new chat" />
        </div>
      </div>
      <div className="sidebar_chat">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
