<template>
  <div class="add">
    <el-card class="add-container">
      <el-form ref="goodRef" :model="state.good" :rules="state.rules" label-width="100px" class="good">
        <el-form-item required label="商品分类">
          <el-cascader style="width: 300px"
                       @change="handleChangeCate"></el-cascader>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsName">
          <el-input style="width: 300px" v-model="state.good.goodsName" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品简介" prop="goodsIntro">
          <el-input style="width: 300px" type="textarea" v-model="state.good.goodsIntro"
                    placeholder="请输入商品简介(100字)"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="originalPrice">
          <el-input type="number" min="0" style="width: 300px" v-model="state.good.originalPrice"
                    placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="stockNum">
          <el-input type="number" min="0" style="width: 300px" v-model="state.good.stockNum"
                    placeholder="请输入商品库存"></el-input>
        </el-form-item>
        <el-form-item label="上架状态" prop="goodsSellStatus">
          <el-radio-group v-model="state.good.goodsSellStatus">
            <el-radio label="0">上架</el-radio>
            <el-radio label="1">下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item required label="商品主图" prop="goodsCoverImg">
          <el-upload
              class="avatar-uploader"
              action="#"
              accept="jpg,jpeg,png"
              :headers="{
                                token: '123'
                            }"
              :show-file-list="false"
              :before-upload="handleBeforeUpload"
              :on-success="handleUrlSuccess"
          >
            <img style="width: 100px; height: 100px; border: 1px solid #e9e9e9;"
                 v-if="state.good.goodsCoverImg" :src="state.good.goodsCoverImg" class="avatar"/>
            <i v-else class="el-icon-plus avatar-uploader-icon">
            </i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情内容">
          <div ref='editor'></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {reactive, ref, onMounted, onBeforeUnmount} from 'vue'
import WangEditor from 'wangeditor'
import {ElMessage} from 'element-plus'

export default {
  name: 'AddGoods',
  setup() {
    const editor = ref(null);
    const goodRef = ref(null);
    const state = reactive({
      token: '123' || '',
      good: {
        goodsName: '',
        goodsIntro: '',
        originalPrice: '',
        stockNum: '',
        goodsSellStatus: '0',
        goodsCoverImg: '',
      },
      rules: {
        goodsCoverImg: [
          {required: 'true', message: '请上传主图', trigger: ['change']}
        ],
        goodsName: [
          {required: 'true', message: '请填写商品名称', trigger: ['change']}
        ],
        originalPrice: [
          {required: 'true', message: '请填写商品价格', trigger: ['change']}
        ],
        stockNum: [
          {required: 'true', message: '请填写商品库存', trigger: ['change']}
        ],
      },
      categoryId: '',
    });
    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      instance.config.showLinkImg = false;
      instance.config.showLinkImgAlt = false;
      instance.config.showLinkImgHref = false;
      instance.config.uploadImgMaxSize = 2 * 1024 * 1024; // 2M
      instance.config.uploadFileName = 'file';
      instance.config.uploadImgHeaders = {
        token: state.token
      }
      // 图片返回格式不同，需要自定义返回格式
      instance.config.uploadImgHooks = {
        // 图片上传并返回了结果，想要自己把图片插入到编辑器中
        // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
        customInsert: function (insertImgFn, result) {
          console.log('result', result);
          // result 即服务端返回的接口
          // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
          if (result.data && result.data.length) {
            result.data.forEach(item => insertImgFn(item))
          }
        }
      };
      Object.assign(instance.config, {
        onchange() {
          console.log('change')
        },
      });
      instance.create();
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null
    });
    const submitAdd = () => {
      goodRef.value.validate((vaild) => {
        if (vaild) {
          let params = {
            goodsCategoryId: state.categoryId,
            goodsCoverImg: state.good.goodsCoverImg,
            goodsDetailContent: instance.txt.html(),
            goodsIntro: state.good.goodsIntro,
            goodsName: state.good.goodsName,
            goodsSellStatus: state.good.goodsSellStatus,
            originalPrice: state.good.originalPrice,
            stockNum: state.good.stockNum,
          };
          if ((params.goodsIntro) || (params.goodsName) || (params.goodsDetailContent)) {
            ElMessage.error('不要输入表情包');
            return
          }
          if (params.goodsName.length > 128) {
            ElMessage.error('商品名称不能超过128个字符');
            return
          }
          if (params.goodsIntro.length > 200) {
            ElMessage.error('商品简介不能超过200个字符');
            return
          }
        }
      })
    };
    const handleBeforeUpload = (file) => {
      const sufix = file.name.split('.')[1] || '';
      if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
        ElMessage.error('请上传 jpg、jpeg、png 格式的图片');
        return false
      }
    };
    const handleUrlSuccess = (val) => {
      state.good.goodsCoverImg = val.data || ''
    };
    const handleChangeCate = (val) => {
      state.categoryId = val[2] || 0
    };
    return {
      state,
      goodRef,
      submitAdd,
      handleBeforeUpload,
      handleUrlSuccess,
      editor,
      handleChangeCate
    }
  }
}
</script>

<style scoped>

.add {
  display: flex;
  text-align: left;
}

.add-container {
  flex: 1;
  height: 100%;
}

.avatar-uploader {
  width: 100px;
  height: 100px;
  color: #dddddd;
  font-size: 30px;
}

.avatar-uploader-icon {
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid #dddddd;
  padding: 32px 17px;
}


</style>
