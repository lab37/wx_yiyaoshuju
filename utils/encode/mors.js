var morjs=require("morjs.js");

var decToHex = function(str) {
  var res = [];
  for (var i = 0; i < str.length; i++)
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  return "\\u" + res.join("\\u");
}
var hexToDec = function(str) {
  str = str.replace(/\\/g, "%");
  return unescape(str);
}
//console.log(decToHex("decToHex unicode 编码转换"));
morjs.modes.custom = {
  charSpacer: '',
  letterSpacer: '/',
  longString: '-',
  shortString: '.',
  wordSpacer: '/'
};

var ss = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@";

function v10toX(n, m) {
  m = String(m).replace(/ /gi, "");
  if (m == "") return "";
  if (parseInt(m) != m) { /*M("输入的摩斯码不符合要求！");*/
    return false;
  }
  var t = "";
  var a = ss.substr(0, n);
  while (m != 0) {
    var b = m % n;
    t = a.charAt(b) + t;
    m = (m - b) / n
  }
  return t
}

function vXto10(n, m) {
  m = String(m).replace(/ /gi, "");
  if (m == "") return "";
  var a = ss.substr(0, n);
  var reg7 = new RegExp('[' + a + ']', 'gi');
  if (m.replace(reg7,'') != "") { /*M("输入的摩斯码不符合要求！");*/
    return false;
  }
  var t = 0,
    c = 1;
  for (var x = m.length - 1; x > -1; x--) {
    t += c * (a.indexOf(m.charAt(x)));
    c *= n
  }
  return t
}

function vXtoY(n, m, y) {
  var a = vXto10(n * 1, m);
  if (a == "") return "";
  a = v10toX(y, a);
  return a
}

function M(str) {
  alert(str)
}

function convert(hex_input, id_input, hex_output, id_output) {
  var input_v = str_input;
  var outputEle = str_output;
  var hex_in_v = hex_input;
  var hex_out_v = hex_output;
  outputEle.value = vXtoY(hex_in_v, input_v, hex_out_v)
}

function convert_c(hex_input_v, str_input, hex_output_v, str_output) {
  var input_v = str_input;
  var outputEle = str_output;
  outputEle.value = vXtoY(hex_input_v, input_v, hex_output_v)
}

var morse_char_re = /[a-zA-Z0-9.:,;?=\'\/\!_\"()$&@]/;



function encode_morse_zh(str) {
  var input = str;
  var matchs = input.match(/[\u0000-\uffff]/g);
  var out = "";
  if (matchs != null) {
    for (var i = 0; i < matchs.length; i++) {
      var match = matchs[i];
      if (match.trim() != '') {
        if (morse_char_re.test(match)) {
          //使用morse处理
          out = out + morjs.encode(match, options) + morjs.modes.custom.letterSpacer;
        } else {
          //中文morse处理
          var unicode = decToHex(match);
          if (unicode && unicode.substring(0, 2) == '\\u') {
            unicode = unicode.substring(2, unicode.length);
            unicode = vXtoY(16, unicode, 2);
            //将1替换为长，0替换为短str = str.replace(/word/g,"Excel")
            unicode = unicode.replace(/1/g, morjs.modes.custom.longString);
            unicode = unicode.replace(/0/g, morjs.modes.custom.shortString);
            out = out + unicode + morjs.modes.custom.letterSpacer;
          }
        }
      } else {
        //不处理空字符串
      }
    };
  }
  //去掉末尾的/
  if (out != null && out.length > 0 && out.substring(out.length - 1, out.length)) {
    out = out.substring(0, out.length - 1);
  }
  return out;
}



function decode_morse_zh(str) {
  var input = str;
  var out = '';
  if (input != null) {
    var input_array = input.split(morjs.modes.custom.letterSpacer);
    //var re_1 = "/\\" + morjs.modes.custom.longString + "/g";
    var re_1 = new RegExp('\\-', 'g');
    //var re_0 = "/\\" + morjs.modes.custom.shortString + "/g";
    var re_0 = new RegExp('\\.', 'g');
    for (var i = 0; i < input_array.length; i++) {
      input = input_array[i];
      if (input != null && input.length >= 1) {
        if (input.length <= 5) {
          //morse最长5位
          out = out + morjs.decode(input, options) + ' ';
        } else {
          //汉字
          input = input.replace(re_1, '1');
          input = input.replace(re_0, '0');
          input = vXtoY(2, input, 16);
          if (input === false || input === '') {
            out = "输入的摩斯码不符合要求！";
          } else {
            input = '\\u' + input;
            input = hexToDec(input);
            out = out + input + ' ';
          }
        }
      }
    }
  }

  return out;
}
var options = {
  mode: 'custom'
};


module.exports = {
  encode: encode_morse_zh,
  decode: decode_morse_zh
}