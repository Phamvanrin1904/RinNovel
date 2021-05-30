import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/RinLightNovel/public/api`;
console.log(">?");
console.log(uri);
console.log("<?");
// axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: uri,
  // withCredentials: true,
});
api.defaults.headers.Accept = "application/json";
api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default api;
