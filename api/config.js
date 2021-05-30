import Constants from "expo-constants";
const { manifest } = Constants;
const resourse = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/RinLightNovel/public`;
const base = `http://${manifest.debuggerHost.split(":").shift()}/RinLightNovel`;
export default {
  api: "",
  resource: resourse,
  base: base,
};
