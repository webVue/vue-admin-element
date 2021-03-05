module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // element-ui 按需加载
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
