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
      <View style={styles.View_10_546}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0967/c474/6346824f4de994056ec8981f057d1e3a"
          }}
          style={styles.ImageBackground_10_547}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c94/a238/4b53a51132cbc9a0845cbd1f3efd96d0"
          }}
          style={styles.ImageBackground_10_548}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a58/9ba1/9c8dc068ae5c9251aba2ada40ca9c58a"
          }}
          style={styles.ImageBackground_10_549}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bd/c95d/4809df1523d27208cf5ed08c1f1b764f"
          }}
          style={styles.ImageBackground_10_550}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bc/8306/679485c3211810a29fe6a4710684710d"
          }}
          style={styles.ImageBackground_10_551}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b35/9b65/0f32e044218720915e4f5606ba6335e7"
          }}
          style={styles.ImageBackground_10_553}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd7/5fb2/423ea1fef37d8c0963c5caab5c60f4f0"
          }}
          style={styles.ImageBackground_10_554}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059e/0594/1032ca5a78658a3aaf067d3f9c6ce045"
          }}
          style={styles.ImageBackground_10_555}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_10_556}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_10_557}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782f/1d67/0ac95d09ac38e156838c39684af5c0d5"
          }}
          style={styles.ImageBackground_10_558}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_10_559}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_10_560}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f06/cb76/41ecfc3c98dd1f1177402cddb04e4698"
          }}
          style={styles.ImageBackground_10_561}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8e4/9eed/3f1ba3ff071c3063629f15c545d4769a"
          }}
          style={styles.ImageBackground_10_562}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6f/b77a/24b69f124198dcac64324df789602690"
          }}
          style={styles.ImageBackground_10_563}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd0/ea37/b7ecf81035ca84e8b075b1c542736113"
          }}
          style={styles.ImageBackground_10_564}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3361/c673/ba8f1e1fec53974781ea87d6a7114553"
          }}
          style={styles.ImageBackground_10_565}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028a/63c9/ad53fd0c3366298f380674d87af038cd"
          }}
          style={styles.ImageBackground_10_566}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd94/0c84/307566f5147d555840976fd56392e7e5"
          }}
          style={styles.ImageBackground_10_567}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b138/2f25/bf3b7b44ee2f26fb06e4b29a220014b6"
          }}
          style={styles.ImageBackground_10_568}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a933/9107/24075e5b2fba6f5ddcceb47277a705c5"
          }}
          style={styles.ImageBackground_10_569}
        />
      </View>
      <View style={styles.View_10_570} />
      <View style={styles.View_10_571}>
        <View style={styles.View_10_572} />
        <View style={styles.View_10_573}>
          <View style={styles.View_I10_573_9_471}>
            <View style={styles.View_I10_573_9_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e3/6063/51dadae8524dd4ed6602c3a5886af81e"
                }}
                style={styles.ImageBackground_I10_573_9_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/d99f/f881a4c130ba197cc135eaaaf5af327a"
                }}
                style={styles.ImageBackground_I10_573_9_474}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_10_574}>
          <View style={styles.View_I10_574_9_485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f1e/66c0/fca2468f55758e9541bc9cd9d1351aa3"
              }}
              style={styles.ImageBackground_I10_574_9_486}
            />
          </View>
        </View>
        <View style={styles.View_10_575}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2abb/70d8/84bc7bf654b6cbd998c3059d685da7c4"
            }}
            style={styles.ImageBackground_I10_575_9_468}
          />
        </View>
        <View style={styles.View_10_576}>
          <View style={styles.View_10_577} />
        </View>
        <View style={styles.View_10_633}>
          <View style={styles.View_10_634} />
        </View>
        <View style={styles.View_10_578}>
          <View style={styles.View_I10_578_9_478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f580/d588/f45261dd1e0f830973e29e4820cb249a"
              }}
              style={styles.ImageBackground_I10_578_9_479}
            />
          </View>
        </View>
        <View style={styles.View_10_579}>
          <Text style={styles.Text_10_579}>Chat</Text>
        </View>
      </View>
      <View style={styles.View_10_580} />
      <View style={styles.View_10_615} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e35c/ccd6/f4a01e983f801d36ed4509e368869052"
        }}
        style={styles.ImageBackground_9_780}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e6/a6b5/ba00333af475e0c179b82fcff02f8e0a"
        }}
        style={styles.ImageBackground_10_584}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a67/b090/7019edc4e67c4b1c04387426773258a5"
        }}
        style={styles.ImageBackground_9_779}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d52b/0fb8/effce9e369ab330edf605a8898a7fde1"
        }}
        style={styles.ImageBackground_9_778}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb2c/e113/b76ad8a4359c66aa121701e2e69246e6"
        }}
        style={styles.ImageBackground_10_689}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8406/c871/97a29dc5444fbcc82467ab176dc213ea"
        }}
        style={styles.ImageBackground_9_777}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e5/2fd4/9df7148114de3ac038b561fa0cbae207"
        }}
        style={styles.ImageBackground_10_682}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f56/f8c4/d8f686e33cf430c06c4fd514519e5976"
        }}
        style={styles.ImageBackground_10_685}
      />
      <View style={styles.View_10_635}>
        <View style={styles.View_10_688}>
          <Text style={styles.Text_10_688}>. . .</Text>
        </View>
        <View style={styles.View_10_636} />
      </View>
      <View style={styles.View_10_637}>
        <View style={styles.View_10_638} />
      </View>
      <View style={styles.View_10_692}>
        <Text style={styles.Text_10_692}>Group Name</Text>
      </View>
      <View style={styles.View_10_693}>
        <Text style={styles.Text_10_693}>Hillary, Andy, ... and 6 others</Text>
      </View>
      <View style={styles.View_10_694}>
        <Text style={styles.Text_10_694}>Mark is typing ...</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_10_546: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_547: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_548: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.042659505208333%")
  },
  ImageBackground_10_549: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.042659505208333%")
  },
  ImageBackground_10_550: {
    width: wp("1.600053532918294%"),
    height: hp("1.4572031510983658%"),
    top: hp("61.70310765667691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59996744791667%")
  },
  ImageBackground_10_551: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_10_553: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_10_554: {
    width: wp("4.533327229817708%"),
    height: hp("2.1578550338745117%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80003255208332%")
  },
  ImageBackground_10_555: {
    width: wp("1.283203125%"),
    height: hp("0.15686739012191858%"),
    top: hp("10.36226866675205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.41466471354167%")
  },
  ImageBackground_10_556: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_10_557: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_10_558: {
    width: wp("4.533317057291667%"),
    height: hp("2.73224043715847%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80001627604167%")
  },
  ImageBackground_10_559: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_10_560: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_10_561: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_562: {
    width: wp("4.266739908854166%"),
    height: hp("2.732229753921592%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  ImageBackground_10_563: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("106.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_10_564: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_10_565: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%")
  },
  ImageBackground_10_566: {
    width: wp("9.115626017252604%"),
    height: hp("1.2737753612747609%"),
    top: hp("103.12076422686134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.576529947916667%")
  },
  ImageBackground_10_567: {
    width: wp("5.3333984375%"),
    height: hp("2.732236007523667%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  ImageBackground_10_568: {
    width: wp("20%"),
    height: hp("3.551912568306011%"),
    top: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%")
  },
  ImageBackground_10_569: {
    width: wp("32.53333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_10_570: {
    width: wp("169.33333333333334%"),
    minWidth: wp("169.33333333333334%"),
    height: hp("110.10928961748634%"),
    minHeight: hp("110.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-23.733333333333334%"),
    top: hp("-7.103825136612022%"),
    backgroundColor: "rgba(113, 189, 255, 1)"
  },
  View_10_571: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_572: {
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
  View_10_573: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_573_9_471: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158424%")
  },
  View_I10_573_9_472: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10_573_9_473: {
    width: wp("4.266666666666667%"),
    height: hp("1.0055759565426352%"),
    top: hp("1.7266612235314227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10_573_9_474: {
    width: wp("2.873157246907552%"),
    height: hp("1.4626684084616073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966145833333286%")
  },
  View_10_574: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_574_9_485: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I10_574_9_486: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_575: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10_575_9_468: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333332%"),
    top: hp("0.2732240437158424%")
  },
  View_10_576: {
    width: wp("28.26666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  View_10_577: {
    width: wp("28.26666666666667%"),
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
  View_10_633: {
    width: wp("28.26666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  View_10_634: {
    width: wp("28.26666666666667%"),
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
  View_10_578: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_578_9_478: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I10_578_9_479: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_579: {
    width: wp("13.333333333333334%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%")
  },
  Text_10_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_580: {
    width: wp("90.93333333333334%"),
    height: hp("14.207650273224044%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(249, 249, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_10_615: {
    width: wp("90.93333333333334%"),
    height: hp("74.59016393442623%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(249, 249, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_9_780: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("10.49593732656677%"),
    minHeight: hp("10.49593732656677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("58.060109289617486%")
  },
  ImageBackground_10_584: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6.420765027322404%")
  },
  ImageBackground_9_779: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("19.808743169398905%")
  },
  ImageBackground_9_778: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("10.929222315386996%"),
    minHeight: hp("10.929222315386996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("26.639344262295083%")
  },
  ImageBackground_10_689: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("5.4646601442430836%"),
    minHeight: hp("5.4646601442430836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("38.9344262295082%")
  },
  ImageBackground_9_777: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("10.929230653523096%"),
    minHeight: hp("10.929230653523096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    top: hp("45.76502732240437%")
  },
  ImageBackground_10_682: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("5.464665876711653%"),
    minHeight: hp("5.464665876711653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("69.94535519125684%")
  },
  ImageBackground_10_685: {
    width: wp("18.400006103515626%"),
    minWidth: wp("18.400006103515626%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("76.775956284153%")
  },
  View_10_635: {
    width: wp("83.73333333333333%"),
    height: hp("14.89071038251366%"),
    top: hp("77.8688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_10_688: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("0%")
  },
  Text_10_688: {
    color: "rgba(36, 107, 253, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_636: {
    width: wp("83.73333333333333%"),
    height: hp("7.240437158469945%"),
    top: hp("7.6502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 233, 253, 1)",
    borderTopLeftRadius: 26.5,
    borderTopRightRadius: 26.5,
    borderBottomLeftRadius: 26.5,
    borderBottomRightRadius: 26.5
  },
  View_10_637: {
    width: wp("11.466666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("86.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.60000000000001%")
  },
  View_10_638: {
    width: wp("11.466666666666667%"),
    height: hp("5.46448087431694%"),
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
  View_10_692: {
    width: wp("70.93333333333334%"),
    top: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%")
  },
  Text_10_692: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_693: {
    width: wp("70.93333333333334%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  Text_10_693: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_694: {
    width: wp("70.93333333333334%"),
    top: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%")
  },
  Text_10_694: {
    color: "rgba(40, 152, 250, 1)",
    fontSize: 12,
    fontWeight: "400",
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
