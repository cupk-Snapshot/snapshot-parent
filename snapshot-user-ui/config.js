// 应用全局配置
module.exports = {
  baseUrl: 'http://localhost:9955',
  // devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://82.156.156.143:9955',
  //         changeOrigin: true
  //       }
  //     }
  //   },
  // 应用信息
  appInfo: {
    // 应用名称
    name: "ruoyi-app",
    // 应用版本
    version: "1.1.0",
    // 应用logo
    logo: "/static/logo.png",
    // 官方网站
    site_url: "http://ruoyi.vip",
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "https://ruoyi.vip/protocol.html"
      },
      {
        title: "用户服务协议",
        url: "https://ruoyi.vip/protocol.html"
      }
    ]
  }
}
