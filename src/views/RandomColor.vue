<template>
    <div>
        <el-button :style="{ 'background-color': bgColor }" @click="onBg()"
        >颜色</el-button
        >
        <div
                :class="{ active: isActive }"
                :style="{ 'background-color': isActive ? bgColor : '' }"
        ></div>
    </div>
</template>

<script>
    export default {
        name: "RandomColor",
        data(){
            return{
                bgColor: "",
                isActive: true,
            }
        },
        methods: {
            onBg() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                this.bgColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                return this.bgColor;
            }
        }
    }
</script>

<style scoped>
.active{
    width: 200px;
    height: 200px;
    border: 1px solid darkorange;
}
</style>
