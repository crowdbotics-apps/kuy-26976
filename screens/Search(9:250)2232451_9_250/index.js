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
      <View style={styles.View_9_251}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0967/c474/6346824f4de994056ec8981f057d1e3a"
          }}
          style={styles.ImageBackground_9_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c94/a238/4b53a51132cbc9a0845cbd1f3efd96d0"
          }}
          style={styles.ImageBackground_9_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a58/9ba1/9c8dc068ae5c9251aba2ada40ca9c58a"
          }}
          style={styles.ImageBackground_9_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d3c/6e4d/932f48b941557b7343495aa97413801b"
          }}
          style={styles.ImageBackground_9_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bd/c95d/4809df1523d27208cf5ed08c1f1b764f"
          }}
          style={styles.ImageBackground_9_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bc/8306/679485c3211810a29fe6a4710684710d"
          }}
          style={styles.ImageBackground_9_257}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e30/bb25/3ae56fa802b3fce3416070dc470875a9"
          }}
          style={styles.ImageBackground_9_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b35/9b65/0f32e044218720915e4f5606ba6335e7"
          }}
          style={styles.ImageBackground_9_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf99/8a42/df43be59513f982a4fae3a5564b48784"
          }}
          style={styles.ImageBackground_9_262}
        />
        <View style={styles.View_9_263}>
          <Text style={styles.Text_9_263}>now</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd7/5fb2/423ea1fef37d8c0963c5caab5c60f4f0"
          }}
          style={styles.ImageBackground_9_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059e/0594/1032ca5a78658a3aaf067d3f9c6ce045"
          }}
          style={styles.ImageBackground_9_265}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_267}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782f/1d67/0ac95d09ac38e156838c39684af5c0d5"
          }}
          style={styles.ImageBackground_9_268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f06/cb76/41ecfc3c98dd1f1177402cddb04e4698"
          }}
          style={styles.ImageBackground_9_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8e4/9eed/3f1ba3ff071c3063629f15c545d4769a"
          }}
          style={styles.ImageBackground_9_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6f/b77a/24b69f124198dcac64324df789602690"
          }}
          style={styles.ImageBackground_9_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd0/ea37/b7ecf81035ca84e8b075b1c542736113"
          }}
          style={styles.ImageBackground_9_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3361/c673/ba8f1e1fec53974781ea87d6a7114553"
          }}
          style={styles.ImageBackground_9_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028a/63c9/ad53fd0c3366298f380674d87af038cd"
          }}
          style={styles.ImageBackground_9_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd94/0c84/307566f5147d555840976fd56392e7e5"
          }}
          style={styles.ImageBackground_9_277}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b138/2f25/bf3b7b44ee2f26fb06e4b29a220014b6"
          }}
          style={styles.ImageBackground_9_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a933/9107/24075e5b2fba6f5ddcceb47277a705c5"
          }}
          style={styles.ImageBackground_9_279}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2707/506f/ef2ea7cd5d92993e2e72a5272a98552b"
        }}
        style={styles.ImageBackground_9_497}
      />
      <View style={styles.View_9_369}>
        <View style={styles.View_9_370} />
        <View style={styles.View_9_470}>
          <View style={styles.View_9_471}>
            <View style={styles.View_9_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e3/6063/51dadae8524dd4ed6602c3a5886af81e"
                }}
                style={styles.ImageBackground_9_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/d99f/f881a4c130ba197cc135eaaaf5af327a"
                }}
                style={styles.ImageBackground_9_474}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_9_477}>
          <View style={styles.View_9_478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca3/8bb9/07f17f2ca9551376e1878b8df3b46e2b"
              }}
              style={styles.ImageBackground_9_479}
            />
          </View>
        </View>
        <View style={styles.View_9_484}>
          <View style={styles.View_9_485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f1e/66c0/fca2468f55758e9541bc9cd9d1351aa3"
              }}
              style={styles.ImageBackground_9_486}
            />
          </View>
        </View>
        <View style={styles.View_10_341}>
          <View style={styles.View_10_342} />
        </View>
        <View style={styles.View_9_467}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd5/90c6/c006ad2789dc6abdd440c436f7a36006"
            }}
            style={styles.ImageBackground_9_468}
          />
        </View>
        <View style={styles.View_9_500}>
          <Text style={styles.Text_9_500}>Search</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a7c/5841/d15f8bae5c38443da4d0aba6db64dc69"
        }}
        style={styles.ImageBackground_9_495}
      />
      <View style={styles.View_10_362} />
      <View style={styles.View_10_363} />
      <View style={styles.View_10_364}>
        <Text style={styles.Text_10_364}>Filter</Text>
      </View>
      <View style={styles.View_10_366}>
        <Text style={styles.Text_10_366}>Sort</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c93/f1d8/443da82a2e7bbeb6bb4003803a421572"
        }}
        style={styles.ImageBackground_10_668}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_9_251: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_252: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_253: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04267578125%")
  },
  ImageBackground_9_254: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("8.113660968717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04267578125%")
  },
  ImageBackground_9_255: {
    width: wp("13.500533040364585%"),
    height: hp("1.667214482208419%"),
    top: hp("51.64098270603867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.11572265625%")
  },
  ImageBackground_9_256: {
    width: wp("1.600053532918294%"),
    height: hp("1.4572031510983658%"),
    top: hp("61.70311182574496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59996744791667%")
  },
  ImageBackground_9_257: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_259: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_261: {
    width: wp("36.59119873046875%"),
    height: hp("8.05464572593814%"),
    top: hp("22.43934172750171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.501855468750001%")
  },
  ImageBackground_9_262: {
    width: wp("25.819732666015625%"),
    height: hp("1.5098363323941257%"),
    top: hp("32.43934339512893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.263476562500001%")
  },
  View_9_263: {
    width: wp("11.466666666666667%"),
    top: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%")
  },
  Text_9_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_264: {
    width: wp("4.533327229817708%"),
    height: hp("2.1578550338745117%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80003255208332%")
  },
  ImageBackground_9_265: {
    width: wp("1.283203125%"),
    height: hp("0.15686739012191858%"),
    top: hp("10.36226866675205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.41466471354167%")
  },
  ImageBackground_9_266: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_267: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_268: {
    width: wp("4.533317057291667%"),
    height: hp("2.73224043715847%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80001627604167%")
  },
  ImageBackground_9_269: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_270: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("7.486337130186987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_271: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_272: {
    width: wp("4.266739908854166%"),
    height: hp("2.732229753921592%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  ImageBackground_9_273: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("106.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_9_274: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_9_275: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("103.00546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%")
  },
  ImageBackground_9_276: {
    width: wp("9.115626017252604%"),
    height: hp("1.2737753612747609%"),
    top: hp("103.12076422686134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.576529947916667%")
  },
  ImageBackground_9_277: {
    width: wp("5.3333984375%"),
    height: hp("2.732236007523667%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  ImageBackground_9_278: {
    width: wp("20%"),
    height: hp("3.551912568306011%"),
    top: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%")
  },
  ImageBackground_9_279: {
    width: wp("32.53333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_497: {
    width: wp("131.20000000000002%"),
    height: hp("131.4207650273224%"),
    top: hp("-20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.86666666666667%")
  },
  View_9_369: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_370: {
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
  View_9_470: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_471: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158424%")
  },
  View_9_472: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_473: {
    width: wp("4.266666666666667%"),
    height: hp("1.0055759565426352%"),
    top: hp("1.7266653925994717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_474: {
    width: wp("2.873157246907552%"),
    height: hp("1.4626684084616073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966145833333286%")
  },
  View_9_477: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_478: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333243%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_9_479: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_484: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_485: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_9_486: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_341: {
    width: wp("31.466666666666665%"),
    height: hp("7.240437158469945%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_10_342: {
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
  View_9_467: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_9_468: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333332%"),
    top: hp("0.2732240437158424%")
  },
  View_9_500: {
    width: wp("13.333333333333334%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  Text_9_500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_495: {
    width: wp("84.53333333333333%"),
    height: hp("8.879781420765028%"),
    top: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_10_362: {
    width: wp("39.733333333333334%"),
    height: hp("3.551912568306011%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(124, 193, 252, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_10_363: {
    width: wp("41.06666666666667%"),
    height: hp("3.551912568306011%"),
    top: hp("16.530054644808743%"),
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
  View_10_364: {
    width: wp("10.4%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%")
  },
  Text_10_364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_366: {
    width: wp("10.4%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%")
  },
  Text_10_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_668: {
    width: wp("8%"),
    height: hp("3.9617486338797816%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
