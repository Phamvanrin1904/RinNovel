import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import config from "../../api/config";
import useViewLightNovel from "../../common/hooks/lightnovel/useViewLightNovel";
import styles from "../../styles/lightnovel";

export default function ViewLightNovel({ route, navigation }) {
  const { id } = route.params;
  const { data } = useViewLightNovel(id);
  console.log(data?.ln);
  const onDetail = (id, name) => {
    navigation.navigate("DetailLightNovel", { id, name });
  };
  return (
    <View>
      <View style={styles.flex}>
        <View style={styles.col6}>
          <Image
            style={styles.img}
            source={{
              uri: config.resource + "/" + data?.ln?.img_lightnovel,
            }}
          />
        </View>
        <View style={styles.col6}>
          <Text>
            Tên truyện :
            <Text style={styles.bold}>{data?.ln?.name_lightnovel}</Text>
          </Text>
          <Text>Tác giả : {data?.ln?.user?.display_name}</Text>
          <Text>Ngày viết : {data?.ln?.data_updated}</Text>
          <Text>Lượt xem : {data?.ln?.view}</Text>
          <Text>{data?.ln?.descr_lightnovel.substring(0, 220)}</Text>
          <Button title="Đọc ngay" type="outline"></Button>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, textTransform: "uppercase" }}>
          Danh sách chương
        </Text>
        {data?.chapter?.map((e, i) => {
          return (
            <TouchableOpacity
              onPress={() => onDetail(e.id_chapter, data?.ln?.name_lightnovel)}
            >
              <Text style={styles.item}>
                {e.name_chapter} :{e.desc_chapter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
