import axios from "axios";
import { ACCESS_TOKEN, API_URL } from "../constant/api_accts";

const GetToken = async () => {
  const token = await axios.get(`${API_URL}/authentication/token/new`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });
  return token.data.request_token;
};

const loginFunc = async (username: string, password: string) => {
  const request_token = await GetToken();
  const response = await axios.post(
    `${API_URL}/authentication/token/validate_with_login`,
    {
      username,
      password,
      request_token,
    },
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data.request_token;
};
const createSession = async (username: string, password: string) => {
  const request_token = await loginFunc(username, password);
  const response = await axios.post(
    `${API_URL}/authentication/session/new`,
    {
      request_token,
    },
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  return response.data.session_id;
};
export const getUserInfoWithSession = async (
  username: string,
  password: string
) => {
  const session_id = await createSession(username, password);
  const user_info = await axios.get(`${API_URL}/account`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
      session_id,
    },
  });
  return user_info;
};
