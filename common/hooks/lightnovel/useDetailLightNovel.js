import { useQuery } from "react-query";
import api from "../../../api";
import config from "../../../api/config";

export default function useDetailLightNovel(id) {
  return useQuery(["chapter", { id }], async () => {
    const data = await api.get(`${config.api}chapter/${id}`);
    return data.data;
  });
}
