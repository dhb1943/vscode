/**
 * Created by chkui on 2016/11/16.
 */
module.exports = {
    entry: './entry.js',//定义要引入的js文件
    output: {
        path: __dirname,
        filename: 'bundle.js' //定义要输出的js文件
    },
    module: {
        loaders: [//定义加载内容
            {test: /\.css$/, loader: '!style-loader!css-loader!./style!css'}
        ]
    }
};