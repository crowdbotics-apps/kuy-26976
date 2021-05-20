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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/802f/5737/e847e305d870248a009f9ebce3b0d026"
        }}
        style={styles.ImageBackground_10_448}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e28/6ec0/57767df70a1d5f7288fff4978bd0e755"
        }}
        style={styles.ImageBackground_10_106}
      />
      <View style={styles.View_10_392}>
        <View style={styles.View_I10_392_9_471}>
          <View style={styles.View_I10_392_9_472}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e3/6063/51dadae8524dd4ed6602c3a5886af81e"
              }}
              style={styles.ImageBackground_I10_392_9_473}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/d99f/f881a4c130ba197cc135eaaaf5af327a"
              }}
              style={styles.ImageBackground_I10_392_9_474}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10_393}>
        <View style={styles.View_I10_393_9_478}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca3/8bb9/07f17f2ca9551376e1878b8df3b46e2b"
            }}
            style={styles.ImageBackground_I10_393_9_479}
          />
        </View>
      </View>
      <View style={styles.View_10_394}>
        <View style={styles.View_I10_394_9_485}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f1e/66c0/fca2468f55758e9541bc9cd9d1351aa3"
            }}
            style={styles.ImageBackground_I10_394_9_486}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ed/46b2/41e4709fc225a176ca89449b9919eb9a"
        }}
        style={styles.ImageBackground_10_473}
      />
      <View style={styles.View_10_395}>
        <View style={styles.View_10_396} />
      </View>
      <View style={styles.View_10_397}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd5/90c6/c006ad2789dc6abdd440c436f7a36006"
          }}
          style={styles.ImageBackground_I10_397_9_468}
        />
      </View>
      <View style={styles.View_10_398}>
        <Text style={styles.Text_10_398}>Search</Text>
      </View>
      <View style={styles.View_10_447} />
      <View style={styles.View_10_474} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0677/8224/545afc70c4beac8876ca9c1ea332c449"
        }}
        style={styles.ImageBackground_10_500}
      />
      <View style={styles.View_10_504} />
      <View style={styles.View_10_505}>
        <Text style={styles.Text_10_505}>More</Text>
      </View>
      <View style={styles.View_10_506}>
        <Text style={styles.Text_10_506}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_507}>
        <Text style={styles.Text_10_507}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <View style={styles.View_10_508}>
        <Text style={styles.Text_10_508}>(510) 647-9166</Text>
      </View>
      <View style={styles.View_10_509}>
        <Text style={styles.Text_10_509}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_510}>
        <Text style={styles.Text_10_510}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0677/8224/545afc70c4beac8876ca9c1ea332c449"
        }}
        style={styles.ImageBackground_10_513}
      />
      <View style={styles.View_10_514}>
        <Text style={styles.Text_10_514}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_515}>
        <Text style={styles.Text_10_515}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <View style={styles.View_10_516}>
        <Text style={styles.Text_10_516}>(510) 647-9166</Text>
      </View>
      <View style={styles.View_10_517}>
        <Text style={styles.Text_10_517}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_518}>
        <Text style={styles.Text_10_518}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0677/8224/545afc70c4beac8876ca9c1ea332c449"
        }}
        style={styles.ImageBackground_10_519}
      />
      <View style={styles.View_10_520}>
        <Text style={styles.Text_10_520}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_521}>
        <Text style={styles.Text_10_521}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <View style={styles.View_10_522}>
        <Text style={styles.Text_10_522}>(510) 647-9166</Text>
      </View>
      <View style={styles.View_10_523}>
        <Text style={styles.Text_10_523}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_524}>
        <Text style={styles.Text_10_524}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0677/8224/545afc70c4beac8876ca9c1ea332c449"
        }}
        style={styles.ImageBackground_10_525}
      />
      <View style={styles.View_10_526}>
        <Text style={styles.Text_10_526}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_527}>
        <Text style={styles.Text_10_527}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <View style={styles.View_10_528}>
        <Text style={styles.Text_10_528}>(510) 647-9166</Text>
      </View>
      <View style={styles.View_10_529}>
        <Text style={styles.Text_10_529}>Chipotle Mexican Grill</Text>
      </View>
      <View style={styles.View_10_530}>
        <Text style={styles.Text_10_530}>
          2225 Shattuck Ave, Berkeley, CA 94708
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f25/abb9/897f594f0b240def71c67812923bd092"
        }}
        style={styles.ImageBackground_11_124}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_10_448: {
    width: wp("137.33333333333334%"),
    height: hp("118.98907103825135%"),
    top: hp("-24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31.466666666666665%")
  },
  ImageBackground_10_106: {
    width: wp("384%"),
    minWidth: wp("384%"),
    height: hp("110.65573770491804%"),
    minHeight: hp("110.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-94.66666666666667%"),
    top: hp("128.4153005464481%")
  },
  View_10_392: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_392_9_471: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158566%")
  },
  View_I10_392_9_472: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10_392_9_473: {
    width: wp("4.266666666666667%"),
    height: hp("1.0055759565426352%"),
    top: hp("1.7266653925994717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10_392_9_474: {
    width: wp("2.873157246907552%"),
    height: hp("1.4626684084616073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6966145833333286%")
  },
  View_10_393: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_393_9_478: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I10_393_9_479: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_394: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10_394_9_485: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I10_394_9_486: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_473: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61.338797814207645%"),
    minHeight: hp("61.338797814207645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_395: {
    width: wp("31.466666666666665%"),
    height: hp("7.240437158469945%"),
    top: hp("99.4535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_10_396: {
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
  View_10_397: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10_397_9_468: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%"),
    top: hp("0.2732240437158566%")
  },
  View_10_398: {
    width: wp("13.333333333333334%"),
    top: hp("101.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%")
  },
  Text_10_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_447: {
    width: wp("84.53333333333333%"),
    height: hp("8.879781420765028%"),
    top: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(249, 249, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_10_474: {
    width: wp("84.53333333333333%"),
    height: hp("42.21311475409836%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(249, 249, 251, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_10_500: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("22.814207650273225%")
  },
  View_10_504: {
    width: wp("22.400000000000002%"),
    height: hp("3.551912568306011%"),
    top: hp("52.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    backgroundColor: "rgba(124, 193, 252, 1)",
    borderTopLeftRadius: 6.5,
    borderTopRightRadius: 6.5,
    borderBottomLeftRadius: 6.5,
    borderBottomRightRadius: 6.5
  },
  View_10_505: {
    width: wp("10.4%"),
    top: hp("52.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%")
  },
  Text_10_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_506: {
    width: wp("70.93333333333334%"),
    top: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_506: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_507: {
    width: wp("70.93333333333334%"),
    top: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_507: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_508: {
    width: wp("70.93333333333334%"),
    top: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%")
  },
  Text_10_508: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_509: {
    width: wp("70.93333333333334%"),
    top: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_509: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_510: {
    width: wp("70.93333333333334%"),
    top: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_510: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_513: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("31.010928961748636%")
  },
  View_10_514: {
    width: wp("70.93333333333334%"),
    top: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_514: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_515: {
    width: wp("70.93333333333334%"),
    top: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_515: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_516: {
    width: wp("70.93333333333334%"),
    top: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%")
  },
  Text_10_516: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_517: {
    width: wp("70.93333333333334%"),
    top: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_517: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_518: {
    width: wp("70.93333333333334%"),
    top: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_518: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_519: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("39.20765027322404%")
  },
  View_10_520: {
    width: wp("70.93333333333334%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_520: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_521: {
    width: wp("70.93333333333334%"),
    top: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_521: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_522: {
    width: wp("70.93333333333334%"),
    top: hp("34.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%")
  },
  Text_10_522: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_523: {
    width: wp("70.93333333333334%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_523: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_524: {
    width: wp("70.93333333333334%"),
    top: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_524: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_525: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("47.404371584699454%")
  },
  View_10_526: {
    width: wp("70.93333333333334%"),
    top: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_526: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_527: {
    width: wp("70.93333333333334%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_527: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_528: {
    width: wp("70.93333333333334%"),
    top: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%")
  },
  Text_10_528: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_529: {
    width: wp("70.93333333333334%"),
    top: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_529: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_530: {
    width: wp("70.93333333333334%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  Text_10_530: {
    color: "rgba(85, 82, 82, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_124: {
    width: wp("7.936000061035156%"),
    height: hp("4.2709233330898595%"),
    top: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
