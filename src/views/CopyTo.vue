<template>
    <div>
        <el-input v-model="text"></el-input>
        <el-button @click="copyText()">点我复制</el-button>
    </div>
</template>

<script>
    import copy from 'copy-to-clipboard';
    export default {
        name: "CopyTo",
        data(){
            return{
                text:''
        }
        },
        methods:{
            copyText(){
                this.$message({
                    message: `恭喜你，复制成功-> ${this.text}`,
                    type: 'success'
                });
                copy(`我在面试鸭发现了这道题『 😔 ${this.text}』💎 快来看看 `);
                }
            }
    }
</script>

<style scoped>

</style>
