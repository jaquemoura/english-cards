<template>
    <div class="card">
      <p class="card-text1">{{arrayWrong[contador].portugues}}</p>
      <input class="input" type="text" v-model="answer" @keyup.enter="resposta" placeholder="Insira a resposta em Inglês" />

      <div v-if="show">
        <div>
          <div v-if="answer === arrayWrong[contador].ingles">
            <p>resposta certa</p>
          </div>
          <div v-else>
            <p>{{arrayWrong[contador].ingles}}</p>
            <p>Tente outra vez</p>
          </div>
        </div>
      </div>
      <button  class="btn"  @click="check">Responder</button> 
      <button v-if="this.contador < this.arrayWrong.length - 1" class="btnNext" @click="next">Próximo</button> 
      <router-link v-else to="/" class="btnNext finish">Finalizar</router-link>

    </div>
</template>

<script>


export default {
  name: 'App',
  props: ['arrayWrong'],
  data() {
    return {
      contador: 0,
      index: 0,
      answer: '',
      show: false,
      wrongAnswers: 0,
      showWrong: false
    }
  },
  methods: {
    check() {
      this.show = true;
    
      if(this.answer !== this.arrayWrong[this.contador].ingles){
        this.wrongAnswers++; 
      }  
      
    },
    next() {
      this.show = false;

      this.answer = '';
      if (this.contador < this.arrayWrong.length - 1) {
        this.contador++;
      }
    },
    restart() {
      this.contador = 0;
    }
  }
}
</script>

<style>
body {
  background: #f6f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  margin: 30px auto;
  max-width: 840px;
  width: 100%;
  height: 300px;
  background: #fff;
  font-size: 20px;
  border-radius: 5px;
  padding: 40px;
}
.card-text1{
  margin-bottom: 15px;
}
.input{
  width: 100%;
  height: 40px;
  background: #f6f7fb;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 16px;
  font-weight: 600;
}
.btn, .btnNext {
  padding: 5px;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  margin-top: 40px;
  cursor: pointer;
}
.btn{
  background: #4255ff;
  color: #fff;
  margin-right: 20px;
  border: none;
}
.btnNext{
  background: #fff;
  border: 1px solid #d9dde8;
  color: #586380;
}
.finish{
  display: inline-flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
}
@media(min-width: 1024px){
  .card{
    width: 840px;
  }
}
</style>
