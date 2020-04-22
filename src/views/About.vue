<template>
  <div>
    <h1>{{title.name}}</h1>
    <h2>{{count}}</h2>
  </div>
  <div>
    <button @click="add">修改名称</button>
    <button @click="changetitle">修改title</button>
    <!-- // 此处可并列多个div，不再要求一个根元素了 -->
  </div>
</template>
<script>
// reactive
// 作用：创建响应式对象，非包装对象，类似于在2.0的data中声明变量。
// 作用：创建一个包装式对象，含有一个响应式属性value
// 它和reactive的差别，就是前者没有包装属性value
import { reactive, ref, onMounted } from "vue";
export default {
  name: "About",
  setup() {
    const title = reactive({
      name: "欢迎学习Vue3.0"
    });
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const changetitle = () => {
      title.name = "666";
    };
    //生命周期方法
    onMounted(() => {
      console.log("init mounted...");
    });
    //如果需要修改值，可通过value
    return { title, count, add, changetitle,};
  }
};
</script>
<style>
</style>
