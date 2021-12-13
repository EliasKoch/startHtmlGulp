import path  from 'path';
// import VueLoaderPlugin  from 'vue-loader'
import { VueLoaderPlugin } from "vue-loader"
export let  webpack_conf_vue=  {
    mode:'development',
    entry:'./dev/src/vue/app.js',
    output:{
        // path:path.resolve("./dev/assets/vue"),
        // publicPath:'assets/vue/js',
        filename:'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                },
            },
        ],
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};