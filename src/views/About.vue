<template>
  <div id="about">
    <div id="fonter">
      调度演示
      <br><br>
      请输入想要执行的指令步数：<input type="text" id="step" v-model="step"> 
      &#12288;
      <button type="button" id="confrim" @click="confirm">确认</button>
    </div>
    <div id="content">
      <div id="top">
        指令状态：
        <br>
        <table>
          <thead>
            <tr>
              <td>指令名</td>
              <td>Issue</td>
              <td>Read operand</td>
              <td>Execution completed</td>
              <td>Write Result</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for='instruction in instructions' :key="instruction.name">
              <td>{{instruction.name}}</td>
              <td >{{instruction.IS}}</td>
              <td >{{instruction.RO}}</td>
              <td >{{instruction.EX}}</td>
              <td >{{instruction.WR}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="middle">
        功能部件状态：
        <br>
        <table>
          <thead>
            <tr>
              <td>功能部件名</td>
              <td>Busy</td>
              <td>Op</td>
              <td>Fi</td>
              <td>Fj</td>
              <td>Fk</td>
              <td>Qj</td>
              <td>Qk</td>
              <td>Rj</td>
              <td>Rk</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for='func in functions' :key="func.name">
              <td>{{func.name}}</td>
              <td >{{func.Busy}}</td>
              <td >{{func.Op}}</td>
              <td >{{func.Fi}}</td>
              <td >{{func.Fj}}</td>
              <td >{{func.Fk}}</td>
              <td >{{func.Qj}}</td>
              <td >{{func.Qk}}</td>
              <td >{{func.Rj}}</td>
              <td >{{func.Rk}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="bottom">
        结果寄存器：
        <br>
        <table>
          <thead>
            <tr>
              <td v-for='reg in registers' :key="reg.name">{{reg.name}}</td>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td v-for='reg in registers' :key="reg.name">{{reg.OpName}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="footer">
      <button type="button" id="return" @click="backToHome">返回指令集输入页面</button>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name:'about',
  data:{
    step:0,
    instructions:[]
  },
  computed:{
    ...mapState(['instructions','functions','registers'])
  },
  methods:{
    ...mapMutations(['inputInstruction']),
    backToHome(){
      this.$router.push("/")
    },
    confirm(){
      this.$store.dispatch('uploadStep',this.step);
    }
  }
}
</script>
<style>
#content{
  padding:30px;
}
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#fonter {
  padding: 30px;
}
table{
  width:600px;
  border:2px solid greenyellow
}
thead{
  background-color: aqua;
  color: rgb(187, 188, 189);
}
#top{
  text-align: center
}
#footer{
  padding:240px;
}
</style>