const themeConfig = require("./config/theme/");

module.exports = {
  title: "SanseBlog",
  description: "你像风来了又走了，我心满了又空",
  // dest: "docs/.vuepress/dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  theme: "reco",
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins: ["@vuepress/medium-zoom", "flowchart"],
};
