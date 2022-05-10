<template>
  <el-table
      ref="multipleTable"
      :data="tableData"
      :highlight-current-row=true
      stripe
      tooltip-effect="dark"
      style="width: 100%;"
      @row-click="rowClick">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        label="日期"
        align="center"
        width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="120">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        align="center"
        show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    rowClick(row) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    toggleSelection() {
      this.$refs.multipleTable.clearSelection();
    },
  }
}
</script>

<style scoped>
  /deep/el-table el-table-column {
    border-bottom-width: 0;
    border-bottom-style: none;
    border-bottom-color: #ff0000 !important;
  }
</style>
