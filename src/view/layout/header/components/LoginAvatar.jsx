import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserInfo } from "../../../../redux/userSlice";

export default function LoginAvatar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);

  return (
    <Avatar sx={{ width: 32, height: 32 }}>
      {isLoggedIn ? userInfo.firstName[0] : "L"}
    </Avatar>
  );
}
