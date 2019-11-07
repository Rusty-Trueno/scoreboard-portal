import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instructions:[],
    functions:[],
    registers:[],
  },
  mutations: {
    inputInstruction(state,instructions){
      state.instructions = instructions
    },
    inputFunction(state,functions){
      state.functions = functions
    },
    inputRegister(state,registers){
      state.registers = registers
    }
  },
  actions: {
    uploadStep(context,step){
      axios({
        method:'get',
        url:'/inputStep/' + step
      })
      .then(function(res){
        context.commit('inputInstruction',res.data.instruction);
        context.commit('inputFunction',res.data.function);
        context.commit('inputRegister',res.data.register);
      })
    }
  },
  modules: {
  }
})
