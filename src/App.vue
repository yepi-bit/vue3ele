<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/addGoods">AddGoods</router-link> |
    <router-link to="/goods">Goods</router-link> |
    <router-link to="/screenShort">ScreenShort</router-link> |
    <router-link to="/cropper">Cropper</router-link> |
    <router-link to="/countUp">CountUp</router-link> |
    <router-link to="/qrCode">QrCode</router-link> |
    <router-link to="/copy">Copy</router-link> |
    <router-link to="/drag">Drag</router-link> |
    <router-link to="/video">Video</router-link> |
    <router-link to="/pdf">Pdf</router-link> |
    <router-link to="/chartDouble">ChartDouble</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/html2canvas">Html2Canvas</router-link> |
    <router-link to="/screenCapture">ScreenCapture</router-link> |
    <router-link to="/copyTo">CopyTo</router-link> |
    <router-link to="/randomColor">RandomColor</router-link> |
    <router-link to="/vue-codemirror">Vue-codemirror</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
