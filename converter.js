// Zawgyi<>Unicode converter python module
// Based on rules from Parabaik Myanmar Text Converter
// Copyright (C) 2014 Ngwe Tun (Solveware Solution)
// Copyright (C) 2014 Thura Hlaing

// This file is part of Paytan.

// Paytan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Paytan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

function uni512zg1(input_text) {
    var output_text = input_text;
    output_text = output_text.replace(/\\u104E\\u1004\\u103A\\u1038/gm, "\\u104E");
    output_text = output_text.replace(/\\u102B\\u103A/gm, "\\u105A");
    output_text = output_text.replace(/\\u102D\\u1036/gm, "\\u108E");
    output_text = output_text.replace(/\\u103F/gm, "\\u1086");
    output_text = output_text.replace(/(\?<=\\u102F)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u102F\\u1036)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1030)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1030\\u1036)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1014)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1014[\\u103A\\u1032])\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u103B)\\u1037/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u103B[\\u1032\\u1036])\\u1037/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u103D)\\u1037/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u103D[\\u1032])\\u1037/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C\\u103D])\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C\\u103D][\\u102D\\u1036])\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=(\\u1039[\\u1000-\\u1021]))\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=(\\u1039[\\u1000-\\u1021])[\\u102D\\u1036])\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=[\\u100A\\u100C\\u1020\\u1025\\u1029])\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=[\\u100A\\u100C\\u1020\\u1025\\u1029][\\u102D\\u1036])\\u102F/gm, "\\u1033");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103D])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103E])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103D][\\u103E])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103D][\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103E][\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u103B\\u103C][\\u103D][\\u103E][\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=(\\u1039[\\u1000-\\u1021]))\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=(\\u1039[\\u1000-\\u1021])[\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u100A\\u100C\\u1020\\u1025\\u1029])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=[\\u100A\\u100C\\u1020\\u1025\\u1029][\\u102D\\u1036])\\u1030/gm, "\\u1034");
    output_text = output_text.replace(/(\?<=\\u103C)\\u103E/gm, "\\u1087");
    output_text = output_text.replace(/\\u1009(\?=[\\u103A])/gm, "\\u1025");
    output_text = output_text.replace(/\\u1009(\?=\\u1039[\\u1000-\\u1021])/gm, "\\u1025");
    output_text = output_text.replace(/([\\u1000-\\u1021\\u1029])((\?:\\u1039[\\u1000-\\u1021])?)((\?:[\\u103B-\\u103E\\u1087]*)?)\\u1031/gm, "\\u1031$1$2$3");
    output_text = output_text.replace(/([\\u1000-\\u1021\\u1029])((\?:\\u1039[\\u1000-\\u1021\\u1000-\\u1021])?)(\\u103C)/gm, "$3$1$2");
    output_text = output_text.replace(/\\u1004\\u103A\\u1039/gm, "\\u1064");
    output_text = output_text.replace(/(\\u1064)((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u102D/gm, "$2$3$4\\u108B");
    output_text = output_text.replace(/(\\u1064)((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u102E/gm, "$2$3$4\\u108C");
    output_text = output_text.replace(/(\\u1064)((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u1036/gm, "$2$3$4\\u108D");
    output_text = output_text.replace(/(\\u1064)((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])/gm, "$2$3$4\\u1064");
    output_text = output_text.replace(/\\u100A(\?=[\\u1039\\u102F\\u1030])/gm, "\\u106B");
    output_text = output_text.replace(/\\u100A/gm, "\\u100A");
    output_text = output_text.replace(/\\u101B(\?=[\\u102F\\u1030])/gm, "\\u1090");
    output_text = output_text.replace(/\\u101B/gm, "\\u101B");
    output_text = output_text.replace(/\\u1014(\?=[\\u1039\\u103D\\u103E\\u102F\\u1030])/gm, "\\u108F");
    output_text = output_text.replace(/\\u1014/gm, "\\u1014");
    output_text = output_text.replace(/\\u1039\\u1000/gm, "\\u1060");
    output_text = output_text.replace(/\\u1039\\u1001/gm, "\\u1061");
    output_text = output_text.replace(/\\u1039\\u1002/gm, "\\u1062");
    output_text = output_text.replace(/\\u1039\\u1003/gm, "\\u1063");
    output_text = output_text.replace(/\\u1039\\u1005/gm, "\\u1065");
    output_text = output_text.replace(/\\u1039\\u1006/gm, "\\u1066");
    output_text = output_text.replace(/(\?<=[\\u1001\\u1002\\u1004\\u1005\\u1007\\u1012\\u1013\\u108F\\u1015\\u1016\\u1017\\u1019\\u101D])\\u1066/gm, "\\u1067");
    output_text = output_text.replace(/\\u1039\\u1007/gm, "\\u1068");
    output_text = output_text.replace(/\\u1039\\u1008/gm, "\\u1069");
    output_text = output_text.replace(/\\u1039\\u100F/gm, "\\u1070");
    output_text = output_text.replace(/\\u1039\\u1010/gm, "\\u1071");
    output_text = output_text.replace(/(\?<=[\\u1001\\u1002\\u1004\\u1005\\u1007\\u1012\\u1013\\u108F\\u1015\\u1016\\u1017\\u1019\\u101D])\\u1071/gm, "\\u1072");
    output_text = output_text.replace(/\\u1039\\u1011/gm, "\\u1073");
    output_text = output_text.replace(/(\?<=[\\u1001\\u1002\\u1004\\u1005\\u1007\\u1012\\u1013\\u108F\\u1015\\u1016\\u1017\\u1019\\u101D])\\u1073/gm, "\\u1074");
    output_text = output_text.replace(/\\u1039\\u1012/gm, "\\u1075");
    output_text = output_text.replace(/\\u1039\\u1013/gm, "\\u1076");
    output_text = output_text.replace(/\\u1039\\u1014/gm, "\\u1077");
    output_text = output_text.replace(/\\u1039\\u1015/gm, "\\u1078");
    output_text = output_text.replace(/\\u1039\\u1016/gm, "\\u1079");
    output_text = output_text.replace(/\\u1039\\u1017/gm, "\\u107A");
    output_text = output_text.replace(/\\u1039\\u1018/gm, "\\u107B");
    output_text = output_text.replace(/\\u1039\\u1019/gm, "\\u107C");
    output_text = output_text.replace(/\\u1039\\u101C/gm, "\\u1085");
    output_text = output_text.replace(/\\u100F\\u1039\\u100D/gm, "\\u1091");
    output_text = output_text.replace(/\\u100B\\u1039\\u100C/gm, "\\u1092");
    output_text = output_text.replace(/\\u1039\\u100C/gm, "\\u106D");
    output_text = output_text.replace(/\\u100B\\u1039\\u100B/gm, "\\u1097");
    output_text = output_text.replace(/\\u1039\\u100B/gm, "\\u106C");
    output_text = output_text.replace(/\\u100E\\u1039\\u100D/gm, "\\u106F");
    output_text = output_text.replace(/\\u100D\\u1039\\u100D/gm, "\\u106E");
    output_text = output_text.replace(/\\u1009(\?=\\u103A)/gm, "\\u1025");
    output_text = output_text.replace(/\\u1025(\?=[\\u1039\\u102F\\u1030])/gm, "\\u106A");
    output_text = output_text.replace(/\\u1025/gm, "\\u1025");
    output_text = output_text.replace(/\\u103A/gm, "\\u1039");
    output_text = output_text.replace(/\\u103B\\u103D\\u103E/gm, "\\u107D\\u108A");
    output_text = output_text.replace(/\\u103D\\u103E/gm, "\\u108A");
    output_text = output_text.replace(/\\u103B/gm, "\\u103A");
    output_text = output_text.replace(/\\u103C/gm, "\\u103B");
    output_text = output_text.replace(/\\u103D/gm, "\\u103C");
    output_text = output_text.replace(/\\u103E/gm, "\\u103D");
    output_text = output_text.replace(/\\u103A(\?=[\\u103C\\u103D\\u108A])/gm, "\\u107D");
    output_text = output_text.replace(/(\?<=\\u100A(\?:[\\u102D\\u102E\\u1036\\u108B\\u108C\\u108D\\u108E]))\\u103D/gm, "\\u1087");
    output_text = output_text.replace(/(\?<=\\u100A)\\u103D/gm, "\\u1087");
    output_text = output_text.replace(/\\u103B(\?=[\\u1000\\u1003\\u1006\\u100F\\u1010\\u1011\\u1018\\u101A\\u101C\\u101E\\u101F\\u1021])/gm, "\\u107E");
    output_text = output_text.replace(/\\u107E([\\u1000-\\u1021\\u108F])(\?=[\\u102D\\u102E\\u1036\\u108B\\u108C\\u108D\\u108E])/gm, "\\u1080$1");
    output_text = output_text.replace(/\\u107E([\\u1000-\\u1021\\u108F])(\?=[\\u103C\\u108A])/gm, "\\u1082$1");
    output_text = output_text.replace(/\\u103B([\\u1000-\\u1021\\u108F])(\?=[\\u102D\\u102E\\u1036\\u108B\\u108C\\u108D\\u108E])/gm, "\\u107F$1");
    output_text = output_text.replace(/\\u103B([\\u1000-\\u1021\\u108F])(\?=[\\u103C\\u108A])/gm, "\\u1081$1");
    output_text = output_text.replace(/(\?<=\\u1014)\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1014[\\u103A\\u1032])\\u1037/gm, "\\u1094");
    output_text = output_text.replace(/(\?<=\\u1033)\\u1094/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u1033[\\u1036])\\u1094/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u1034)\\u1094/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=\\u1034[\\u1036])\\u1094/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=[\\u103C\\u103D\\u108A])\\u1037/gm, "\\u1095");
    output_text = output_text.replace(/(\?<=[\\u103C\\u103D\\u108A][\\u1032])\\u1037/gm, "\\u1095");
    return output_text;
}

function zg12uni51(input_text) {
    var output_text = input_text;
    output_text = output_text.replace(/\\u106A/gm, "\\u1009");
    output_text = output_text.replace(/\\u1025(\?=[\\u1039\\u102C])/gm, "\\u1009");
    output_text = output_text.replace(/\\u1025\\u102E/gm, "\\u1026");
    output_text = output_text.replace(/\\u106B/gm, "\\u100A");
    output_text = output_text.replace(/\\u1090/gm, "\\u101B");
    output_text = output_text.replace(/\\u1040/gm, "\\u1040");
    output_text = output_text.replace(/\\u108F/gm, "\\u1014");
    output_text = output_text.replace(/\\u1012/gm, "\\u1012");
    output_text = output_text.replace(/\\u1013/gm, "\\u1013");
    output_text = output_text.replace(/[\\u103D\\u1087]/gm, "\\u103D");
    output_text = output_text.replace(/\\u103C/gm, "\\u103D");
    output_text = output_text.replace(/[\\u103B\\u107E\\u107F\\u1080\\u1081\\u1082\\u1083\\u1084]/gm, "\\u103C");
    output_text = output_text.replace(/[\\u103A\\u107D]/gm, "\\u103B");
    output_text = output_text.replace(/\\u103D\\u103B/gm, "\\u103B\\u103D");
    output_text = output_text.replace(/\\u108A/gm, "\\u103D\\u103D");
    output_text = output_text.replace(/\\u103D\\u103D/gm, "\\u103D\\u103D");
    output_text = output_text.replace(/((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u1064/gm, "\\u1064$1$2$3");
    output_text = output_text.replace(/((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u108B/gm, "\\u1064$1$2$3\\u102D");
    output_text = output_text.replace(/((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u108C/gm, "\\u1064$1$2$3\\u102E");
    output_text = output_text.replace(/((\?:\\u1031)?)((\?:\\u103C)?)([\\u1000-\\u1021])\\u108D/gm, "\\u1064$1$2$3\\u1036");
    output_text = output_text.replace(/\\u105A/gm, "\\u102B\\u103A");
    output_text = output_text.replace(/\\u108E/gm, "\\u102D\\u1036");
    output_text = output_text.replace(/\\u1033/gm, "\\u102F");
    output_text = output_text.replace(/\\u1034/gm, "\\u1030");
    output_text = output_text.replace(/\\u1088/gm, "\\u103D\\u102F");
    output_text = output_text.replace(/\\u1089/gm, "\\u103D\\u1030");
    output_text = output_text.replace(/\\u1039/gm, "\\u103A");
    output_text = output_text.replace(/[\\u1094\\u1095]/gm, "\\u1037");
    output_text = output_text.replace(/([\\u1000-\\u1021])([\\u102C\\u102D\\u102E\\u1032\\u1036]){1,2}([\\u1060\\u1061\\u1062\\u1063\\u1065\\u1066\\u1067\\u1068\\u1069\\u1070\\u1071\\u1072\\u1073\\u1074\\u1075\\u1076\\u1077\\u1078\\u1079\\u107A\\u107B\\u107C\\u1085])/gm, "$1$3$2");
    output_text = output_text.replace(/\\u1064/gm, "\\u1004\\u103A\\u1039");
    output_text = output_text.replace(/\\u104E/gm, "\\u104E\\u1004\\u103A\\u1038");
    output_text = output_text.replace(/\\u1086/gm, "\\u103F");
    output_text = output_text.replace(/\\u1060/gm, "\\u1039\\u1000");
    output_text = output_text.replace(/\\u1061/gm, "\\u1039\\u1001");
    output_text = output_text.replace(/\\u1062/gm, "\\u1039\\u1002");
    output_text = output_text.replace(/\\u1063/gm, "\\u1039\\u1003");
    output_text = output_text.replace(/\\u1065/gm, "\\u1039\\u1005");
    output_text = output_text.replace(/[\\u1066\\u1067]/gm, "\\u1039\\u1006");
    output_text = output_text.replace(/\\u1068/gm, "\\u1039\\u1007");
    output_text = output_text.replace(/\\u1069/gm, "\\u1039\\u1008");
    output_text = output_text.replace(/\\u106C/gm, "\\u1039\\u100B");
    output_text = output_text.replace(/\\u1070/gm, "\\u1039\\u100F");
    output_text = output_text.replace(/[\\u1071\\u1072]/gm, "\\u1039\\u1010");
    output_text = output_text.replace(/[\\u1073\\u1074]/gm, "\\u1039\\u1011");
    output_text = output_text.replace(/\\u1075/gm, "\\u1039\\u1012");
    output_text = output_text.replace(/\\u1076/gm, "\\u1039\\u1013");
    output_text = output_text.replace(/\\u1077/gm, "\\u1039\\u1014");
    output_text = output_text.replace(/\\u1078/gm, "\\u1039\\u1015");
    output_text = output_text.replace(/\\u1079/gm, "\\u1039\\u1016");
    output_text = output_text.replace(/\\u107A/gm, "\\u1039\\u1017");
    output_text = output_text.replace(/\\u107B/gm, "\\u1039\\u1018");
    output_text = output_text.replace(/\\u107C/gm, "\\u1039\\u1019");
    output_text = output_text.replace(/\\u1085/gm, "\\u1039\\u101C");
    output_text = output_text.replace(/\\u106D/gm, "\\u1039\\u100C");
    output_text = output_text.replace(/\\u1091/gm, "\\u100F\\u1039\\u100D");
    output_text = output_text.replace(/\\u1092/gm, "\\u100B\\u1039\\u100C");
    output_text = output_text.replace(/\\u1097/gm, "\\u100B\\u1039\\u100B");
    output_text = output_text.replace(/\\u106F/gm, "\\u100E\\u1039\\u100D");
    output_text = output_text.replace(/\\u106E/gm, "\\u100D\\u1039\\u100D");
    output_text = output_text.replace(/(\\u103C)([\\u1000-\\u1021])((\?:\\u1039[\\u1000-\\u1021])?)/gm, "$2$3$1");
    output_text = output_text.replace(/(\\u103D)(\\u103D)([\\u103B\\u103C])/gm, "$3$2$1");
    output_text = output_text.replace(/(\\u103D)([\\u103B\\u103C])/gm, "$2$1");
    output_text = output_text.replace(/(\\u103D)([\\u103B\\u103C])/gm, "$2$1");
    output_text = output_text.replace(/(\?<=([\\u1000-\\u101C\\u101E-\\u102A\\u102C\\u102E-\\u103D\\u104C-\\u109F]))(\\u1040)(\?=\s)?/gm, "\\u101D");
    output_text = output_text.replace(/(\?<=(\\u101D))(\\u1040)(\?=\s)?/gm, "\\u101D");
    output_text = output_text.replace(/(\?<=([\\u1000-\\u101C\\u101E-\\u102A\\u102C\\u102E-\\u103D\\u104C-\\u109F\s]))(\\u1047)/gm, "\\u101B");
    output_text = output_text.replace(/(\\u1047)(\?=[\\u1000-\\u101C\\u101E-\\u102A\\u102C\\u102E-\\u103D\\u104C-\\u109F\s])/gm, "\\u101B");
    output_text = output_text.replace(/((\?:\\u1031)?)([\\u1000-\\u1021])((\?:\\u1039[\\u1000-\\u1021])?)((\?:[\\u102D\\u102E\\u1032])?)([\\u1036\\u1037\\u1038]{0,2})([\\u103B-\\u103D]{0,3})((\?:[\\u102F\\u1030])?)([\\u1036\\u1037\\u1038]{0,2})((\?:[\\u102D\\u102E\\u1032])?)/gm, "$2$3$6$1$4$9$7$5$8");
    output_text = output_text.replace(/\\u1036\\u102F/gm, "\\u102F\\u1036");
    output_text = output_text.replace(/(\\u103A)(\\u1037)/gm, "$2$1");
    return output_text;
}