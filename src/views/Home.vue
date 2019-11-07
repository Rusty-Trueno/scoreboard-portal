<template>
  <div id="home">
    <div id="nav">
      记分牌动态调度算法演示
    </div>
    <div id="content">
      <form>
        第一条指令：<input type="text" id="instruction1" v-model="instruction1.name"><br><br>
        第二条指令：<input type="text" id="instruction2" v-model="instruction2.name"><br><br>
        第三条指令：<input type="text" id="instruction3" v-model="instruction3.name"><br><br>
        第四条指令：<input type="text" id="instruction4" v-model="instruction4.name"><br><br>
        第五条指令：<input type="text" id="instruction5" v-model="instruction5.name"><br><br>
        第六条指令：<input type="text" id="instruction6" v-model="instruction6.name"><br><br>
      </form>
    </div>
    <div id="footer">
      <button type="button" id="submit" @click="inputStep">Submit</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name:"home",
  methods:{
    ...mapMutations(['inputInstruction']),
    inputStep(){
      if(this.instruction1.name == ""||this.instruction2.name == ""||this.instruction3.name == ""||this.instruction4.name == ""||this.instruction5.name == ""||this.instruction6.name == ""){
        alert("请输入完整指令！")
      }else{
        this.$axios({
          method:'post',
          url:'/inputInstructions',
          data:{instructions:[
              this.instruction1.name,
              this.instruction2.name,
              this.instruction3.name,
              this.instruction4.name,
              this.instruction5.name,
              this.instruction6.name
          ]}
        })
        .then(function(res){
          console.log(res)
        })
        .catch(function(err){
          console.log(err)
        })
        this.inputInstruction([this.instruction1,this.instruction2,this.instruction3,this.instruction4,this.instruction5,this.instruction6])
        this.$router.push({path:'/about'})
      }
    }
  },
  data(){
    return{
      instruction1:{'name':"LD F6,34(R2)","IS":'',"RO":'',"EX":'',"WR":''},
      instruction2:{'name':"LD F2,45(R3)","IS":'',"RO":'',"EX":'',"WR":''},
      instruction3:{'name':"MULTD F0,F2,F4","IS":'',"RO":'',"EX":'',"WR":''},
      instruction4:{'name':"SUBD F8,F6,F2","IS":'',"RO":'',"EX":'',"WR":''},
      instruction5:{'name':"DIVD F10,F0,F6","IS":'',"RO":'',"EX":'',"WR":''},
      instruction6:{'name':"ADDD F6,F8,F2","IS":'',"RO":'',"EX":'',"WR":''}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#content{
  margin: 0 auto;
  max-width: 800px;
  height: 200px;
  padding: 100px;
}

#submit{
  background-color: chartreuse;
  border:none;
  color:white;
  padding:15px,32px;
  font-size: 16px;
}
</style>
