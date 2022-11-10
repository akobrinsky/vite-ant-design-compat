<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <AButton>this is a button</AButton>
    <DatePicker />
  </div>
</template>

<script>
// import { DatePicker, Button } from 'ant-design-vue'
import DatePicker from 'ant-design-vue/es/date-picker'; 
import 'ant-design-vue/es/date-picker/style/css'; 
import Button from 'ant-design-vue/es/button'; 
import 'ant-design-vue/es/button/style/css'; 

export default {
  name: 'App',
  components: {
    DatePicker,
    AButton: Button
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
