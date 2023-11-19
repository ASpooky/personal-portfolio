import fetch from "node-fetch";

// 下記の値は自分の OAuth アプリのものに変更してください
const URL = "https://github.com/login/oauth/access_token";
const CLIENT_ID = "af23c23a4a8ffbbe6b96";
const CLIENT_SECRET = "f4e92357a87d83a5fa74fd66f00021352cdd02f7";
const TEMP_CODE = "9fb1c79b1124020ddce3"; // 一時コード

// HTTP リクエストのカスタマイズ
const fetchOption = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: TEMP_CODE,
  }),
};

// HTTP POST リクエストを送信
fetch(URL, fetchOption)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
  })
  // ここでレスポンスの JSON オブジェクトを出力
  .then((json) => console.log(json))
  // エラーはまとめて処理
  .catch((err) => console.error(err));
