import axios from "axios";
import { UserInfoResponse } from "../types/user";

export async function getUserInfo() {
  const url = "https://api.skyrodev.ru/user";
  return (await axios.get(url).then((res) => res.data)) as UserInfoResponse;
}
