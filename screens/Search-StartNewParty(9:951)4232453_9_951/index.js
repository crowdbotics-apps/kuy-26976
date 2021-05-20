import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_9_952}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0967/c474/6346824f4de994056ec8981f057d1e3a"
          }}
          style={styles.ImageBackground_9_953}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c94/a238/4b53a51132cbc9a0845cbd1f3efd96d0"
          }}
          style={styles.ImageBackground_9_954}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a58/9ba1/9c8dc068ae5c9251aba2ada40ca9c58a"
          }}
          style={styles.ImageBackground_9_955}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bd/c95d/4809df1523d27208cf5ed08c1f1b764f"
          }}
          style={styles.ImageBackground_9_956}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bc/8306/679485c3211810a29fe6a4710684710d"
          }}
          style={styles.ImageBackground_9_957}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b35/9b65/0f32e044218720915e4f5606ba6335e7"
          }}
          style={styles.ImageBackground_9_959}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd7/5fb2/423ea1fef37d8c0963c5caab5c60f4f0"
          }}
          style={styles.ImageBackground_9_960}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059e/0594/1032ca5a78658a3aaf067d3f9c6ce045"
          }}
          style={styles.ImageBackground_9_961}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_962}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_963}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782f/1d67/0ac95d09ac38e156838c39684af5c0d5"
          }}
          style={styles.ImageBackground_9_964}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_965}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_966}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f06/cb76/41ecfc3c98dd1f1177402cddb04e4698"
          }}
          style={styles.ImageBackground_9_967}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8e4/9eed/3f1ba3ff071c3063629f15c545d4769a"
          }}
          style={styles.ImageBackground_9_968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6f/b77a/24b69f124198dcac64324df789602690"
          }}
          style={styles.ImageBackground_9_969}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd0/ea37/b7ecf81035ca84e8b075b1c542736113"
          }}
          style={styles.ImageBackground_9_970}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3361/c673/ba8f1e1fec53974781ea87d6a7114553"
          }}
          style={styles.ImageBackground_9_971}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028a/63c9/ad53fd0c3366298f380674d87af038cd"
          }}
          style={styles.ImageBackground_9_972}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd94/0c84/307566f5147d555840976fd56392e7e5"
          }}
          style={styles.ImageBackground_9_973}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b138/2f25/bf3b7b44ee2f26fb06e4b29a220014b6"
          }}
          style={styles.ImageBackground_9_974}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a933/9107/24075e5b2fba6f5ddcceb47277a705c5"
          }}
          style={styles.ImageBackground_9_975}
        />
      </View>
      <View style={styles.View_9_976} />
      <View style={styles.View_9_977}>
        <Text style={styles.Text_9_977}>End Time</Text>
      </View>
      <View style={styles.View_9_978}>
        <View style={styles.View_9_979} />
        <View style={styles.View_9_980}>
          <View style={styles.View_I9_980_9_471}>
            <View style={styles.View_I9_980_9_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e3/6063/51dadae8524dd4ed6602c3a5886af81e"
                }}
                style={styles.ImageBackground_I9_980_9_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/d99f/f881a4c130ba197cc135eaaaf5af327a"
                }}
                style={styles.ImageBackground_I9_980_9_474}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_9_981}>
          <View style={styles.View_I9_981_9_478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca3/8bb9/07f17f2ca9551376e1878b8df3b46e2b"
              }}
              style={styles.ImageBackground_I9_981_9_479}
            />
          </View>
        </View>
        <View style={styles.View_9_982}>
          <View style={styles.View_I9_982_9_485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f1e/66c0/fca2468f55758e9541bc9cd9d1351aa3"
              }}
              style={styles.ImageBackground_I9_982_9_486}
            />
          </View>
        </View>
        <View style={styles.View_9_983}>
          <View style={styles.View_9_984} />
        </View>
        <View style={styles.View_9_985}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd5/90c6/c006ad2789dc6abdd440c436f7a36006"
            }}
            style={styles.ImageBackground_I9_985_9_468}
          />
        </View>
        <View style={styles.View_9_986}>
          <Text style={styles.Text_9_986}>Search</Text>
        </View>
      </View>
      <View style={styles.View_9_987} />
      <View style={styles.View_9_988} />
      <View style={styles.View_9_989}>
        <Text style={styles.Text_9_989}>Now</Text>
      </View>
      <View style={styles.View_9_990}>
        <Text style={styles.Text_9_990}>Later</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bda/3d69/0dc64f848da568a6d8b42d4126a6beb1"
        }}
        style={styles.ImageBackground_9_991}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a150/d4ef/1fe78c9602775ea68bbe727bea405999"
        }}
        style={styles.ImageBackground_9_992}
      />
      <View style={styles.View_9_993}>
        <Text style={styles.Text_9_993}>Isabella is waiting...</Text>
      </View>
      <View style={styles.View_9_994} />
      <View style={styles.View_9_995}>
        <Text style={styles.Text_9_995}>Join</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bda/3d69/0dc64f848da568a6d8b42d4126a6beb1"
        }}
        style={styles.ImageBackground_9_996}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a150/d4ef/1fe78c9602775ea68bbe727bea405999"
        }}
        style={styles.ImageBackground_9_997}
      />
      <View style={styles.View_9_998}>
        <Text style={styles.Text_9_998}>Kezia is ready at 5PM</Text>
      </View>
      <View style={styles.View_9_999} />
      <View style={styles.View_9_1000}>
        <Text style={styles.Text_9_1000}>Join</Text>
      </View>
      <View style={styles.View_9_1001} />
      <View style={styles.View_9_1002}>
        <Text style={styles.Text_9_1002}>+</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_9_952: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_953: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_954: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.042667643229166%")
  },
  ImageBackground_9_955: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.042667643229166%")
  },
  ImageBackground_9_956: {
    width: wp("1.600053532918294%"),
    height: hp("1.4572031510983658%"),
    top: hp("61.70311182574496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.5999755859375%")
  },
  ImageBackground_9_957: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_959: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_960: {
    width: wp("4.533327229817708%"),
    height: hp("2.1578550338745117%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80004069010417%")
  },
  ImageBackground_9_961: {
    width: wp("1.283203125%"),
    height: hp("0.15686739012191858%"),
    top: hp("10.36226866675205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.41466471354167%")
  },
  ImageBackground_9_962: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_963: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_964: {
    width: wp("4.533317057291667%"),
    height: hp("2.73224043715847%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80001627604167%")
  },
  ImageBackground_9_965: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_966: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_967: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_968: {
    width: wp("4.266739908854166%"),
    height: hp("2.732229753921592%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.5333251953125%")
  },
  ImageBackground_9_969: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("106.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_9_970: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_9_971: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%")
  },
  ImageBackground_9_972: {
    width: wp("9.115626017252604%"),
    height: hp("1.2737753612747609%"),
    top: hp("103.12076422686134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.576534016927083%")
  },
  ImageBackground_9_973: {
    width: wp("5.3333984375%"),
    height: hp("2.732236007523667%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  ImageBackground_9_974: {
    width: wp("20%"),
    height: hp("3.551912568306011%"),
    top: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%")
  },
  ImageBackground_9_975: {
    width: wp("32.53333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_9_976: {
    width: wp("131.20000000000002%"),
    height: hp("131.4207650273224%"),
    top: hp("-20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_9_977: {
    width: wp("81.33333333333333%"),
    top: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  Text_9_977: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_978: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_979: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_9_980: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_980_9_471: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158424%")
  },
  View_I9_980_9_472: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_980_9_473: {
    width: wp("4.266666666666667%"),
    height: hp("1.0055759565426352%"),
    top: hp("1.7266653925994717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_980_9_474: {
    width: wp("2.873157246907552%"),
    height: hp("1.4626684084616073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69662272135416%")
  },
  View_9_981: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_981_9_478: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333243%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I9_981_9_479: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_982: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_982_9_485: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I9_982_9_486: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_983: {
    width: wp("31.466666666666665%"),
    height: hp("7.240437158469945%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_9_984: {
    width: wp("31.466666666666665%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(40, 152, 250, 1)",
    borderTopLeftRadius: 26.5,
    borderTopRightRadius: 26.5,
    borderBottomLeftRadius: 26.5,
    borderBottomRightRadius: 26.5
  },
  View_9_985: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_985_9_468: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333332%"),
    top: hp("0.2732240437158424%")
  },
  View_9_986: {
    width: wp("13.333333333333334%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  Text_9_986: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_987: {
    width: wp("39.733333333333334%"),
    height: hp("3.551912568306011%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(40, 152, 250, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_9_988: {
    width: wp("41.06666666666667%"),
    height: hp("3.551912568306011%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    backgroundColor: "rgba(124, 193, 252, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_9_989: {
    width: wp("10.4%"),
    top: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%")
  },
  Text_9_989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_990: {
    width: wp("10.4%"),
    top: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%")
  },
  Text_9_990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_991: {
    width: wp("81.86666666666666%"),
    height: hp("10.51912568306011%"),
    top: hp("29.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  ImageBackground_9_992: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%")
  },
  View_9_993: {
    width: wp("37.333333333333336%"),
    top: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%")
  },
  Text_9_993: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_994: {
    width: wp("16.266666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    backgroundColor: "rgba(124, 193, 252, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_9_995: {
    width: wp("8.533333333333333%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  Text_9_995: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_996: {
    width: wp("81.86666666666666%"),
    height: hp("10.51912568306011%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%")
  },
  ImageBackground_9_997: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%")
  },
  View_9_998: {
    width: wp("37.333333333333336%"),
    top: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%")
  },
  Text_9_998: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_999: {
    width: wp("16.266666666666666%"),
    height: hp("3.1420765027322406%"),
    top: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    backgroundColor: "rgba(124, 193, 252, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_9_1000: {
    width: wp("8.533333333333333%"),
    top: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%")
  },
  Text_9_1000: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_1001: {
    width: wp("17.866666666666667%"),
    height: hp("6.284153005464481%"),
    top: hp("89.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    backgroundColor: "rgba(40, 152, 250, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_9_1002: {
    width: wp("8%"),
    top: hp("89.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%")
  },
  Text_9_1002: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
