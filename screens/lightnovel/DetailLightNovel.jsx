import React, { useEffect } from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import useDetailLightNovel from "../../common/hooks/lightnovel/useDetailLightNovel";
import WebView from "react-native-webview";
import { ScrollView } from "react-native";
import styles from "../../styles/lightnovel";

export default function DetailLightNovel({ route, navigation }) {
  const { id, name } = route.params;
  const { data } = useDetailLightNovel(id);
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  //   console.log(escapeHtml(data?.content_chapter));
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button title="< Trang trước"></Button>
        <View>
          <Text>{data?.name_chapter}</Text>
        </View>
        <Button title="Kế tiếp >"></Button>
      </View>
      <ScrollView>
        <WebView
          style={{ width: "100%", height: 9000, flex: 1 }}
          source={{
            html:
              "<style>*{ font-size: 40px; word-wrap: break-word; } a{color:#6393eb} img{max-width:100%}</style>" +
              data?.content_chapter,
          }}
        />
      </ScrollView>
    </View>
  );
}
