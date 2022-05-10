<template>
    <div>
        <el-upload
            class="upload-demo"
            :action="uploadAction"
            :headers="{Authorization}"
            :on-success="fileSuccess"
            :on-error="fileEerror"
            :show-file-list="false"
            :before-upload="fileBeforeUpload"
        >
            <el-button type="primary">
                <el-icon style="vertical-align: middle;">
                    <Camera />
                </el-icon>
                <span style="vertical-align: middle;">上传视频文件</span>
            </el-button>
        </el-upload>
        <div>
            视频时间10s-60s 视频大小不超100M
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data(){
            return{
                isFileLength:'',
                fileSize:"",
                fileUrl:"",
                Authorization:'',
                uploadAction:'#'
            }
        },
        methods:{
            fileBeforeUpload(file) {
                var url = URL.createObjectURL(file);
                var audioElement = new Audio(url);
                audioElement.addEventListener('loadedmetadta',()=>{
                    const  fileLength = parseInt(audioElement.duration + ''); // 时间为秒 取整
                    if (fileLength < 10 && fileLength > 100) {
                        this.$message.error('视频不可小于10秒或大于100秒');
                        this.isFileLength = false
                    }
                    if ((file.size / 1024 / 1024) > 10 ){
                        this.$message.error('视频不可大于100mb');
                        this.isFileLength = false
                    }
                })
            },
            fileSuccess(res,file){
                if(res.code ===500){
                    this.$message.error(res.msg)
                }
                if(file.raw.type !=='video/mp4'){
                    this.$message.error('请上传视频');
                    return
                }
                this.fileSize = res.data.fileSize;
                this.fileUrl = res.data.fileUrl;
                this.$message.success('上传成功')
            },
            fileEerror() {
                this.$message.error('文件上传失败')
            }
        }
    }
</script>

<style scoped>

</style>
