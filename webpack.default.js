import TerserPlugin from "terser-webpack-plugin";

export let  webpack_conf_default= {
    performance: {hints: false},
    mode:'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["babel-plugin-root-import", '@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {format: {comments: false}},
                extractComments: false,
            }),
        ],
    }
};