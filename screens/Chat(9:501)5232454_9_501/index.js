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
      <View style={styles.View_9_502}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0967/c474/6346824f4de994056ec8981f057d1e3a"
          }}
          style={styles.ImageBackground_9_503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c94/a238/4b53a51132cbc9a0845cbd1f3efd96d0"
          }}
          style={styles.ImageBackground_9_504}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a58/9ba1/9c8dc068ae5c9251aba2ada40ca9c58a"
          }}
          style={styles.ImageBackground_9_505}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bd/c95d/4809df1523d27208cf5ed08c1f1b764f"
          }}
          style={styles.ImageBackground_9_507}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a29/bb5b/b2aba29f62cfb297d50794048e41c654"
          }}
          style={styles.ImageBackground_11_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bc/8306/679485c3211810a29fe6a4710684710d"
          }}
          style={styles.ImageBackground_9_508}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd7/5fb2/423ea1fef37d8c0963c5caab5c60f4f0"
          }}
          style={styles.ImageBackground_9_515}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059e/0594/1032ca5a78658a3aaf067d3f9c6ce045"
          }}
          style={styles.ImageBackground_9_516}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_518}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782f/1d67/0ac95d09ac38e156838c39684af5c0d5"
          }}
          style={styles.ImageBackground_9_519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8278/63ed/96fc3c389fd837cf1caaefa05798b110"
          }}
          style={styles.ImageBackground_9_520}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e46c/dce1/07594e61e7a53c19e2608425936db8cd"
          }}
          style={styles.ImageBackground_9_521}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f06/cb76/41ecfc3c98dd1f1177402cddb04e4698"
          }}
          style={styles.ImageBackground_9_522}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8e4/9eed/3f1ba3ff071c3063629f15c545d4769a"
          }}
          style={styles.ImageBackground_9_523}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d6f/b77a/24b69f124198dcac64324df789602690"
          }}
          style={styles.ImageBackground_9_524}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd0/ea37/b7ecf81035ca84e8b075b1c542736113"
          }}
          style={styles.ImageBackground_9_525}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3361/c673/ba8f1e1fec53974781ea87d6a7114553"
          }}
          style={styles.ImageBackground_9_526}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/028a/63c9/ad53fd0c3366298f380674d87af038cd"
          }}
          style={styles.ImageBackground_9_527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd94/0c84/307566f5147d555840976fd56392e7e5"
          }}
          style={styles.ImageBackground_9_528}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b138/2f25/bf3b7b44ee2f26fb06e4b29a220014b6"
          }}
          style={styles.ImageBackground_9_529}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a933/9107/24075e5b2fba6f5ddcceb47277a705c5"
          }}
          style={styles.ImageBackground_9_530}
        />
      </View>
      <View style={styles.View_9_532}>
        <View style={styles.View_9_533} />
        <View style={styles.View_9_534}>
          <View style={styles.View_I9_534_9_471}>
            <View style={styles.View_I9_534_9_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e3/6063/51dadae8524dd4ed6602c3a5886af81e"
                }}
                style={styles.ImageBackground_I9_534_9_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/d99f/f881a4c130ba197cc135eaaaf5af327a"
                }}
                style={styles.ImageBackground_I9_534_9_474}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_9_536}>
          <View style={styles.View_I9_536_9_485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f1e/66c0/fca2468f55758e9541bc9cd9d1351aa3"
              }}
              style={styles.ImageBackground_I9_536_9_486}
            />
          </View>
        </View>
        <View style={styles.View_9_539}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2abb/70d8/84bc7bf654b6cbd998c3059d685da7c4"
            }}
            style={styles.ImageBackground_I9_539_9_468}
          />
        </View>
        <View style={styles.View_9_537}>
          <View style={styles.View_9_538} />
        </View>
        <View style={styles.View_9_535}>
          <View style={styles.View_I9_535_9_478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f580/d588/f45261dd1e0f830973e29e4820cb249a"
              }}
              style={styles.ImageBackground_I9_535_9_479}
            />
          </View>
        </View>
        <View style={styles.View_9_540}>
          <Text style={styles.Text_9_540}>Chat</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae92/e969/2ebf6fa8b3f39ed630e5d83d35b2b51f"
        }}
        style={styles.ImageBackground_10_532}
      />
      <View style={styles.View_10_534} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/747e/ec4a/d1a57fd995fcfd00223361969899ce62"
        }}
        style={styles.ImageBackground_10_535}
      />
      <View style={styles.View_10_536}>
        <Text style={styles.Text_10_536}>Thu, 5/13/21</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e6/a6b5/ba00333af475e0c179b82fcff02f8e0a"
        }}
        style={styles.ImageBackground_10_538}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e6/a6b5/ba00333af475e0c179b82fcff02f8e0a"
        }}
        style={styles.ImageBackground_10_539}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/747e/ec4a/d1a57fd995fcfd00223361969899ce62"
        }}
        style={styles.ImageBackground_10_541}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e6/a6b5/ba00333af475e0c179b82fcff02f8e0a"
        }}
        style={styles.ImageBackground_10_542}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f25/abb9/897f594f0b240def71c67812923bd092"
        }}
        style={styles.ImageBackground_10_641}
      />
      <View style={styles.View_10_670}>
        <Text style={styles.Text_10_670}>Group Name</Text>
      </View>
      <View style={styles.View_10_671}>
        <Text style={styles.Text_10_671}>Hillary, Andy, ... and 6 others</Text>
      </View>
      <View style={styles.View_10_672}>
        <Text style={styles.Text_10_672}>4 new notifications</Text>
      </View>
      <View style={styles.View_10_676}>
        <Text style={styles.Text_10_676}>Group Name</Text>
      </View>
      <View style={styles.View_10_677}>
        <Text style={styles.Text_10_677}>Hillary, Andy, ... and 6 others</Text>
      </View>
      <View style={styles.View_10_678}>
        <Text style={styles.Text_10_678}>4 new notifications</Text>
      </View>
      <View style={styles.View_10_673}>
        <Text style={styles.Text_10_673}>Group Name</Text>
      </View>
      <View style={styles.View_10_674}>
        <Text style={styles.Text_10_674}>Hillary, Andy, ... and 6 others</Text>
      </View>
      <View style={styles.View_10_675}>
        <Text style={styles.Text_10_675}>4 new notifications</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_9_502: {
    width: wp("100%"),
    height: hp("120.49180327868851%"),
    top: hp("-9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_503: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_504: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("17.676502498772628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04267578125%")
  },
  ImageBackground_9_505: {
    width: wp("24.880265299479166%"),
    height: hp("2.3081972299377775%"),
    top: hp("17.676502498772628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.04267578125%")
  },
  ImageBackground_9_507: {
    width: wp("1.600053532918294%"),
    height: hp("1.4572031510983658%"),
    top: hp("71.26594918673156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.59996744791667%")
  },
  ImageBackground_11_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("95.21857923497268%"),
    minHeight: hp("95.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_9_508: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_515: {
    width: wp("85.06666666666666%"),
    height: hp("24.18032786885246%"),
    top: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  ImageBackground_9_516: {
    width: wp("1.283203125%"),
    height: hp("0.15686739012191858%"),
    top: hp("19.925110196806692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.41466471354167%")
  },
  ImageBackground_9_517: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_518: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("17.04917866024163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_519: {
    width: wp("4.533317057291667%"),
    height: hp("2.73224043715847%"),
    top: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.80001627604167%")
  },
  ImageBackground_9_520: {
    width: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.73333333333333%")
  },
  ImageBackground_9_521: {
    width: wp("0.8959960937500001%"),
    height: hp("0.7234974637057612%"),
    top: hp("17.04917866024163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72213541666667%")
  },
  ImageBackground_9_522: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("107.37704918032786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_523: {
    width: wp("4.266739908854166%"),
    height: hp("2.732229753921592%"),
    top: hp("112.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  ImageBackground_9_524: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("115.57377049180329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  ImageBackground_9_525: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("112.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_9_526: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("112.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%")
  },
  ImageBackground_9_527: {
    width: wp("9.115626017252604%"),
    height: hp("1.2737753612747609%"),
    top: hp("112.68360575691598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.576529947916667%")
  },
  ImageBackground_9_528: {
    width: wp("5.3333984375%"),
    height: hp("2.732236007523667%"),
    top: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  ImageBackground_9_529: {
    width: wp("20%"),
    height: hp("3.551912568306011%"),
    top: hp("52.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%")
  },
  ImageBackground_9_530: {
    width: wp("32.53333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("50.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_9_532: {
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    top: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_533: {
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
  View_9_534: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_534_9_471: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158424%")
  },
  View_I9_534_9_472: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_534_9_473: {
    width: wp("4.266666666666667%"),
    height: hp("1.0055759565426352%"),
    top: hp("1.7266612235314227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I9_534_9_474: {
    width: wp("2.873157246907552%"),
    height: hp("1.4626684084616073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966145833333286%")
  },
  View_9_536: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_536_9_485: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I9_536_9_486: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_539: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_539_9_468: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333332%"),
    top: hp("0.2732240437158424%")
  },
  View_9_537: {
    width: wp("28.26666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  View_9_538: {
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
  View_9_535: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_535_9_478: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I9_535_9_479: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_540: {
    width: wp("13.333333333333334%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%")
  },
  Text_9_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_532: {
    width: wp("88.53333333333333%"),
    height: hp("8.60655737704918%"),
    top: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_10_534: {
    width: wp("90.93333333333334%"),
    height: hp("14.207650273224044%"),
    top: hp("33.060109289617486%"),
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
  ImageBackground_10_535: {
    width: wp("90.93333333333334%"),
    height: hp("14.207650273224044%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%")
  },
  View_10_536: {
    width: wp("67.46666666666667%"),
    top: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  Text_10_536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_538: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("35.38251366120219%")
  },
  ImageBackground_10_539: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("52.459016393442624%")
  },
  ImageBackground_10_541: {
    width: wp("90.93333333333334%"),
    height: hp("14.207650273224044%"),
    top: hp("67.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%")
  },
  ImageBackground_10_542: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("69.53551912568307%")
  },
  ImageBackground_10_641: {
    width: wp("7.936000061035156%"),
    height: hp("4.2709233330898595%"),
    top: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  View_10_670: {
    width: wp("70.93333333333334%"),
    top: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.933333333333334%")
  },
  Text_10_670: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_671: {
    width: wp("70.93333333333334%"),
    top: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%")
  },
  Text_10_671: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_672: {
    width: wp("70.93333333333334%"),
    top: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.933333333333334%")
  },
  Text_10_672: {
    color: "rgba(40, 152, 250, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_676: {
    width: wp("70.93333333333334%"),
    top: hp("68.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%")
  },
  Text_10_676: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_677: {
    width: wp("70.93333333333334%"),
    top: hp("72.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  Text_10_677: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_678: {
    width: wp("70.93333333333334%"),
    top: hp("76.09289617486338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%")
  },
  Text_10_678: {
    color: "rgba(40, 152, 250, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_673: {
    width: wp("70.93333333333334%"),
    top: hp("51.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%")
  },
  Text_10_673: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_674: {
    width: wp("70.93333333333334%"),
    top: hp("55.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  Text_10_674: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_675: {
    width: wp("70.93333333333334%"),
    top: hp("59.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%")
  },
  Text_10_675: {
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
