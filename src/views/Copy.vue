<template>
    <div id="printRref">
        <el-card shadow="hover" header="复制剪切演示">
            <el-alert
                    title="感谢优秀的 `vue-clipboard3`，项目地址：https://github.com/JamieCurnow/vue-clipboard3`"
                    type="success"
                    :closable="false"
                    class="mb15"
            ></el-alert>
            <el-input class="input" placeholder="请输入内容" v-model="copyVal">
            </el-input>
            <el-button @click="copyText(copyVal)">复制链接</el-button>
            <el-input placeholder="先点击上方 `复制链接` 按钮，然后 `Ctrl + V` 进行粘贴！ " v-model="shearVal" class="mt15"></el-input>
        </el-card>
    </div>
</template>

<script>
    import {reactive, toRefs, onMounted} from 'vue';
    import {ElMessage} from 'element-plus'
    import useClipboard from 'vue-clipboard3';

    export default {
        name: 'funClipboard',
        setup() {
            const {toClipboard} = useClipboard();
            const copyText = (text) => {
                return new Promise((resolve, reject) => {
                    try {
                        //复制
                        toClipboard(text);
                        //下面可以设置复制成功的提示框等操作
                        ElMessage.success('复制成功');
                        resolve(text);
                    } catch (e) {
                        //复制失败
                        ElMessage.error('复制失败');
                        reject(e);
                    }
                });
            };
            const state = reactive({
                copyVal: 'https://gitee.com/lyt-top/vue-next-admin',
                shearVal: '',
            });
            // 页面加载时
            onMounted(() => {
            });
            return {
                copyText,
                ...toRefs(state),
            };
        },
    };
</script>
<style>
    .input {
        margin: 20px;
    }
</style>
