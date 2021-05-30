import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/sugg";
import { Rating } from "react-native-elements";

import config from "../../api/config";
import { Header } from "react-native-elements";
import useLightNovel from "../../common/hooks/lightnovel/useLightNovel";
const LightNovel = ({ navigation }) => {
  const { data } = useLightNovel();
  console.log(data);
  navigation.setOptions({ headerShown: false });
  function onView(id) {
    navigation.navigate("ViewLightNovel", { id });
  }
  return (
    <ScrollView>
      <Header
        leftComponent={{ icon: "home", color: "#fff" }}
        centerComponent={{ text: "Trang chủ", style: { color: "#fff" } }}
      />
      {data?.map((e, i) => {
        return (
          <View key={e.id_lightnovel} style={styles.divPrdItem}>
            <View style={styles.imgPrc}>
              <Image
                style={styles.img}
                source={{
                  uri: config.resource + "/" + e.img_lightnovel,
                }}
              />
            </View>
            <View style={styles.Citem}>
              <Text
                onPress={() => onView(e.id_lightnovel)}
                style={styles.title}
              >
                {e.name_lightnovel}
              </Text>
              <View style={styles.desc}>
                <Text style={styles.descTx}>
                  {e.create_at.substring(0, 10)}
                </Text>
                <Text>{e.descr_lightnovel.substring(0, 55) + "..."}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default LightNovel;
