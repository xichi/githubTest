<template>
   <div class="app-container">
     <!-- 顶部 header 区域 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
           <router-link to="/home">首页</router-link>
           </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
           <router-link to="/search">发现</router-link>
            </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <router-link to="/message">消息中心</router-link>
          </el-menu-item>
      </el-menu>

      <!-- 中间部分 -->
      <router-view></router-view>

      <!-- 底部 tabber 部分 -->

   </div>
</template>

<script>
export default{
  data(){
     return {
       activeIndex: "1"
     }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>
