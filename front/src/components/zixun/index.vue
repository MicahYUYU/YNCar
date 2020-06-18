<template>
  <div>
    <div class="zixun" @click="dialogVisible = true">
        <img src="@/assets/img_common/zixun.png" width="100%">
    </div>

    <el-dialog
        style="color:white;text-align:center"
        :visible.sync="dialogVisible"
        width="318px"
        height="1000px">
        <div style="position:relative;top:-65px;left:-20px">
            <span style="font-size:18px;color:white">一诺检测</span>
        </div>

        <div class="duihua">
            <div>
                下午2:34:23
            </div>
            <div class="user">
                <div class="content1">
                    <span style="color:white;">底盘检测吗？怎么检测的？</span>
                </div>
                <div class="photo1">
                    <img src="@/assets/img_common/user.png" width="40px">
                </div>
            </div>

            <div class="robot">
                <div class="photo2">
                    <img src="@/assets/img_common/robot.png" width="40px">
                </div>
                <div class="content2">
                    <span style="color:white;text-align: left;">底盘是检测的，技师会通过手机在汽车底部拍照的方式来进行地盘检测</span>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="jietu">
                <img src="@/assets/img_common/wbcl.png">
            </div>
            <div class="duihuakuang">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
            </div>
            <div class="anniu">
                <el-button type="primary" size="mini" style="float:right;margin-right:5px">发送</el-button>
            </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
        dialogVisible: false,
        textarea: '',
    }
  },

  components: {},

  methods: {

  }
}
</script>

<style>
.zixun{
  width: 100px;
  z-index:999;
  display: block; 
  position: fixed;
  right:0px;
  top:600px;
}

.el-dialog__header{
    background-color: #2174C3;
    height: 15px;
    
}


.el-icon{
    background-color: white;
}

.footer{
    margin-left: -20px;
    width: 318px;
    height: 29px;
}

.duihuakuang{
    width: 318px;
    height: 80px;
}

.el-dialog__body{
    width: 318px;
    height: 290px;
    padding: 0px;
}

.anniu{
    width: 318px;
    height: 30px;
}

.duihua{
    margin-left: -20px;
    margin-top: -50px;
    width: 318px;
    height: 200px;
}

.user{
    width: 318px;
    height: 40px;
}

.content1{
    position: relative;
    float: left;
    width: 180px;
    height: 30px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: #2174C3;
    left: 75px;
}

.photo1{
    position: relative;
    float: left;
    border-radius: 50%;
    margin-top: 0px;
    width: 40px;
    height: 40px;
    left: 80px;
}

.robot{
    width: 318px;
    height: 80px;
}

.photo2{
    position: relative;
    float: left;
    border-radius: 50%;
    margin-top: 10px;
    width: 40px;
    height: 40px;
    left: 5px;
}

.content2{
    position: relative;
    float: left;
    width: 180px;
    height: 60px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: #2174C3;
    left: 15px;
}


</style>