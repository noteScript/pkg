/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable no-path-concat */

'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var the_require_content_A = './test-z-asset-A.css';
var the_require_content_B = 'test-z-asset-B.css';

function first_lower_case (s) {
  return s.slice(0, 1).toLowerCase() + s.slice(1);
}

function first_upper_case (s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

// ///////////////////////////////////////////////////////////////////////////

fs.readFile(path.join(__dirname, the_require_content_A), function (e01, v01) {
fs.readFile(__dirname + path.sep + the_require_content_B, function (e02, v02) {
fs.readFile(__dirname + '/' + the_require_content_B, function (e03, v03) {

fs.readFile(first_lower_case(path.join(__dirname, the_require_content_A)), function (e04, v04) {
fs.readFile(first_lower_case(__dirname + path.sep + the_require_content_B), function (e05, v05) {
fs.readFile(first_lower_case(__dirname + '/' + the_require_content_B), function (e06, v06) {

fs.readFile(first_upper_case(path.join(__dirname, the_require_content_A)), function (e07, v07) {
fs.readFile(first_upper_case(__dirname + path.sep + the_require_content_B), function (e08, v08) {
fs.readFile(first_upper_case(__dirname + '/' + the_require_content_B), function (e09, v09) {

//

fs.readFile(path.join(__dirname, the_require_content_A + '-no-such'), function (e10, v10) {
fs.readFile(__dirname + path.sep + the_require_content_B + '-no-such', function (e11, v11) {
fs.readFile(__dirname + '/' + the_require_content_B + '-no-such', function (e12, v12) {

fs.readFile(first_lower_case(path.join(__dirname, the_require_content_A + '-no-such')), function (e13, v13) {
fs.readFile(first_lower_case(__dirname + path.sep + the_require_content_B + '-no-such'), function (e14, v14) {
fs.readFile(first_lower_case(__dirname + '/' + the_require_content_B + '-no-such'), function (e15, v15) {

fs.readFile(first_upper_case(path.join(__dirname, the_require_content_A + '-no-such')), function (e16, v16) {
fs.readFile(first_upper_case(__dirname + path.sep + the_require_content_B + '-no-such'), function (e17, v17) {
fs.readFile(first_upper_case(__dirname + '/' + the_require_content_B + '-no-such'), function (e18, v18) {

//

fs.readFile(__dirname, function (e19, v19) {
fs.readFile(path.dirname(__dirname), function (e20, v20) {
fs.readFile(path.dirname(path.dirname(__dirname)), function (e21, v21) {

fs.readFile(first_lower_case(__dirname), function (e22, v22) {
fs.readFile(first_lower_case(path.dirname(__dirname)), function (e23, v23) {
fs.readFile(first_lower_case(path.dirname(path.dirname(__dirname))), function (e24, v24) {

fs.readFile(first_upper_case(__dirname), function (e25, v25) {
fs.readFile(first_upper_case(path.dirname(__dirname)), function (e26, v26) {
fs.readFile(first_upper_case(path.dirname(path.dirname(__dirname))), function (e27, v27) {

//

fs.open(path.join(__dirname, the_require_content_A), 'r', function (e28, v28) {
fs.open(__dirname + path.sep + the_require_content_B, 'r', function (e29, v29) {
fs.open(__dirname + '/' + the_require_content_B, 'r', function (e30, v30) {

fs.open(first_lower_case(path.join(__dirname, the_require_content_A)), 'r', function (e31, v31) {
fs.open(first_lower_case(__dirname + path.sep + the_require_content_B), 'r', function (e32, v32) {
fs.open(first_lower_case(__dirname + '/' + the_require_content_B), 'r', function (e33, v33) {

fs.open(first_upper_case(path.join(__dirname, the_require_content_A)), 'r', function (e34, v34) {
fs.open(first_upper_case(__dirname + path.sep + the_require_content_B), 'r', function (e35, v35) {
fs.open(first_upper_case(__dirname + '/' + the_require_content_B), 'r', function (e36, v36) {

//

fs.open(path.join(__dirname, the_require_content_A + '-no-such'), 'r', function (e37, v37) {
fs.open(__dirname + path.sep + the_require_content_B + '-no-such', 'r', function (e38, v38) {
fs.open(__dirname + '/' + the_require_content_B + '-no-such', 'r', function (e39, v39) {

fs.open(first_lower_case(path.join(__dirname, the_require_content_A + '-no-such')), 'r', function (e40, v40) {
fs.open(first_lower_case(__dirname + path.sep + the_require_content_B + '-no-such'), 'r', function (e41, v41) {
fs.open(first_lower_case(__dirname + '/' + the_require_content_B + '-no-such'), 'r', function (e42, v42) {

fs.open(first_upper_case(path.join(__dirname, the_require_content_A + '-no-such')), 'r', function (e43, v43) {
fs.open(first_upper_case(__dirname + path.sep + the_require_content_B + '-no-such'), 'r', function (e44, v44) {
fs.open(first_upper_case(__dirname + '/' + the_require_content_B + '-no-such'), 'r', function (e45, v45) {

//

fs.open(__dirname, 'r', function (e46, v46) {
fs.open(path.dirname(__dirname), 'r', function (e47, v47) {
fs.open(path.dirname(path.dirname(__dirname)), 'r', function (e48, v48) {

fs.open(first_lower_case(__dirname), 'r', function (e49, v49) {
fs.open(first_lower_case(path.dirname(__dirname)), 'r', function (e50, v50) {
fs.open(first_lower_case(path.dirname(path.dirname(__dirname))), 'r', function (e51, v51) {

fs.open(first_upper_case(__dirname), 'r', function (e52, v52) {
fs.open(first_upper_case(path.dirname(__dirname)), 'r', function (e53, v53) {
fs.open(first_upper_case(path.dirname(path.dirname(__dirname))), 'r', function (e54, v54) {

//

fs.readdir(__dirname, function (e55, v55) {
fs.readdir(path.dirname(__dirname), function (e56, v56) {
fs.readdir(path.dirname(path.dirname(__dirname)), function (e57, v57) {

fs.readdir(first_lower_case(__dirname), function (e58, v58) {
fs.readdir(first_lower_case(path.dirname(__dirname)), function (e59, v59) {
fs.readdir(first_lower_case(path.dirname(path.dirname(__dirname))), function (e60, v60) {

fs.readdir(first_upper_case(__dirname), function (e61, v61) {
fs.readdir(first_upper_case(path.dirname(__dirname)), function (e62, v62) {
fs.readdir(first_upper_case(path.dirname(path.dirname(__dirname))), function (e63, v63) {

//

fs.readdir(__dirname + '-no-such', function (e64, v64) {
fs.readdir(path.dirname(__dirname) + '-no-such', function (e65, v65) {
fs.readdir(path.dirname(path.dirname(__dirname)) + '-no-such', function (e66, v66) {

fs.readdir(first_lower_case(__dirname + '-no-such'), function (e67, v67) {
fs.readdir(first_lower_case(path.dirname(__dirname) + '-no-such'), function (e68, v68) {
fs.readdir(first_lower_case(path.dirname(path.dirname(__dirname)) + '-no-such'), function (e69, v69) {

fs.readdir(first_upper_case(__dirname + '-no-such'), function (e70, v70) {
fs.readdir(first_upper_case(path.dirname(__dirname) + '-no-such'), function (e71, v71) {
fs.readdir(first_upper_case(path.dirname(path.dirname(__dirname)) + '-no-such'), function (e72, v72) {

//

fs.readdir(path.join(__dirname, the_require_content_A), function (e73, v73) {
fs.readdir(__dirname + path.sep + the_require_content_B, function (e74, v74) {
fs.readdir(__dirname + '/' + the_require_content_B, function (e75, v75) {

fs.readdir(first_lower_case(path.join(__dirname, the_require_content_A)), function (e76, v76) {
fs.readdir(first_lower_case(__dirname + path.sep + the_require_content_B), function (e77, v77) {
fs.readdir(first_lower_case(__dirname + '/' + the_require_content_B), function (e78, v78) {

fs.readdir(first_upper_case(path.join(__dirname, the_require_content_A)), function (e79, v79) {
fs.readdir(first_upper_case(__dirname + path.sep + the_require_content_B), function (e80, v80) {
fs.readdir(first_upper_case(__dirname + '/' + the_require_content_B), function (e81, v81) {

//

fs.fstat(v28, function (e136, v136) {
fs.fstat(v29, function (e137, v137) {
fs.fstat(v30, function (e138, v138) {

fs.fstat(v46, function (e139, v139) {
fs.fstat(v47, function (e140, v140) {
fs.fstat(v48, function (e141, v141) {

fs.fstat(v49, function (e142, v142) {
fs.fstat(v50, function (e143, v143) {
fs.fstat(v51, function (e144, v144) {

  console.log([

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readFile', assert(e01 === null),
    e01 === null, v01.length,
    e02 === null, v02.length,
    e03 === null, v03.length,
    e04 === null, v04.length,
    e05 === null, v05.length,
    e06 === null, v06.length,
    e07 === null, v07.length,
    e08 === null, v08.length,
    e09 === null, v09.length,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readFile-no-such', assert(e10.errno === -4058 || e10.errno === -2),
    e10.errno, e10.code, v10 === undefined,
    e11.errno, e11.code, v11 === undefined,
    e12.errno, e12.code, v12 === undefined,
    e13.errno, e13.code, v13 === undefined,
    e14.errno, e14.code, v14 === undefined,
    e15.errno, e15.code, v15 === undefined,
    e16.errno, e16.code, v16 === undefined,
    e17.errno, e17.code, v17 === undefined,
    e18.errno, e18.code, v18 === undefined,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readFile-directory', assert(e19.errno === -4068 || e19.errno === -21),
    e19.errno, e19.code, v19 === undefined,
    e20.errno, e20.code, v20 === undefined,
    e21.errno, e21.code, v21 === undefined,
    e22.errno, e22.code, v22 === undefined,
    e23.errno, e23.code, v23 === undefined,
    e24.errno, e24.code, v24 === undefined,
    e25.errno, e25.code, v25 === undefined,
    e26.errno, e26.code, v26 === undefined,
    e27.errno, e27.code, v27 === undefined,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'open', assert(e28 === null),
    e28 === null, typeof v28,
    e29 === null, typeof v29,
    e30 === null, typeof v30,
    e31 === null, typeof v31,
    e32 === null, typeof v32,
    e33 === null, typeof v33,
    e34 === null, typeof v34,
    e35 === null, typeof v35,
    e36 === null, typeof v36,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'open-no-such', assert(e37.errno === -4058 || e37.errno === -2),
    e37.errno, e37.code, v37 === undefined,
    e38.errno, e38.code, v38 === undefined,
    e39.errno, e39.code, v39 === undefined,
    e40.errno, e40.code, v40 === undefined,
    e41.errno, e41.code, v41 === undefined,
    e42.errno, e42.code, v42 === undefined,
    e43.errno, e43.code, v43 === undefined,
    e44.errno, e44.code, v44 === undefined,
    e45.errno, e45.code, v45 === undefined,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'open-directory', assert(e46 === null),
    e46 === null, typeof v46,
    e47 === null, typeof v47,
    e48 === null, typeof v48,
    e49 === null, typeof v49,
    e50 === null, typeof v50,
    e51 === null, typeof v51,
    e52 === null, typeof v52,
    e53 === null, typeof v53,
    e54 === null, typeof v54,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readdir', assert(e55 === null), assert(v55.length > 0),
    e55 === null, v55.length > 0,
    e56 === null, v56.length > 0,
    e57 === null, v57.length > 0,
    e58 === null, v58.length > 0,
    e59 === null, v59.length > 0,
    e60 === null, v60.length > 0,
    e61 === null, v61.length > 0,
    e62 === null, v62.length > 0,
    e63 === null, v63.length > 0,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readdir-no-such', assert(e64.errno === -4058 || e64.errno === -2),
    e64.errno, e64.code, v64 === undefined,
    e65.errno, e65.code, v65 === undefined,
    e66.errno, e66.code, v66 === undefined,
    e67.errno, e67.code, v67 === undefined,
    e68.errno, e68.code, v68 === undefined,
    e69.errno, e69.code, v69 === undefined,
    e70.errno, e70.code, v70 === undefined,
    e71.errno, e71.code, v71 === undefined,
    e72.errno, e72.code, v72 === undefined,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'readdir-file', assert(e73.errno === -4052 || e73.errno === -20),
    e73.errno, e73.code, v73 === undefined,
    e74.errno, e74.code, v74 === undefined,
    e75.errno, e75.code, v75 === undefined,
    e76.errno, e76.code, v76 === undefined,
    e77.errno, e77.code, v77 === undefined,
    e78.errno, e78.code, v78 === undefined,
    e79.errno, e79.code, v79 === undefined,
    e80.errno, e80.code, v80 === undefined,
    e81.errno, e81.code, v81 === undefined,

    '******************************************************',
    '******************************************************',
    '******************************************************',

    'fstat', assert(e136 === null),
    e136 === null, v136.mode, v136.birthtime.getTime(), v136.isFile(), v136.isDirectory(),
    e137 === null, v137.mode, v137.birthtime.getTime(), v137.isFile(), v137.isDirectory(),
    e138 === null, v138.mode, v138.birthtime.getTime(), v138.isFile(), v138.isDirectory(),
    e139 === null, v139.mode, v139.birthtime.getTime(), v139.isFile(), v139.isDirectory(),
    e140 === null, v140.mode, v140.birthtime.getTime(), v140.isFile(), v140.isDirectory(),
    e141 === null, v141.mode, v141.birthtime.getTime(), v141.isFile(), v141.isDirectory(),
    e142 === null, v142.mode, v142.birthtime.getTime(), v142.isFile(), v142.isDirectory(),
    e143 === null, v143.mode, v143.birthtime.getTime(), v143.isFile(), v143.isDirectory(),
    e144 === null, v144.mode, v144.birthtime.getTime(), v144.isFile(), v144.isDirectory(),

    '******************************************************',
    '******************************************************',
    '******************************************************'

  ].join('\n'));

}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
}); }); }); }); }); }); }); }); });
