/**
 * Created by chkui on 2016/11/16.
 */
require("style-loader!css-loader!./style.css");
document.write('<h1>hello webpack</h1>');
//新增对module.js的引用
document.write(require('./module.js'));