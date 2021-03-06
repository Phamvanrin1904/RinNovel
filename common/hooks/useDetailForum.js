import { useQuery } from "react-query";
import api from "../../api";
import config from "../../api/config";

export default function useDetailForum(id) {
  const query = useQuery(["forum", { id }], async () => {
    const data = await api.get(`${config.api}forum/${id}/slug`);
    return data.data;
  });
  return query;
}
