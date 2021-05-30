import { useQuery } from "react-query";
import api from "../../../api";
import config from "../../../api/config";

export default function useLightNovel() {
  return useQuery(["lightnovel"], async () => {
    const data = await api.get(`${config.api}lightnovel`);
    return data.data;
  });
}
