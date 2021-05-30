import { useQuery } from "react-query";
import api from "../../../api";
import config from "../../../api/config";

export default function useViewLightNovel(id) {
  return useQuery(["lightnovel", { id }], async () => {
    const data = await api.get(`${config.api}lightnovel/${id}`);
    return data.data;
  });
}
