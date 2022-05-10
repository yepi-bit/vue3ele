<template>
    <div>
        <el-button @click="openDialog()">预览PDF</el-button>
        <el-dialog
                title="简历"
                v-model:visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <iframe src="https://www.lilnong.top/static/pdf/B-4-RxJS%E5%9C%A8React%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8-%E9%BE%99%E9%80%B8%E6%A5%A0_.pdf"></iframe>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: "Pdf",
        data(){
            return{
                dialogVisible: false
            }
        },
        methods:{
            openDialog(){
                this.dialogVisible = true
            },
            handleClose() {
                this.dialogVisible = false
            }
        }
    }
</script>
