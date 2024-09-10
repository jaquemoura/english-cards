<template>
    <div class="card" v-if="lista.length > 0 && !showWrong">
      <div>
        <p class="card-text1">{{lista[id].valores[contador].portugues || []}}</p>
        <input class="input" type="text" v-model="answer" @keyup.enter="resposta" placeholder="Insira a resposta em Inglês" />

        <div v-if="show">
          <div>
            <div v-if="answer.toLowerCase() === lista[id].valores[contador].ingles.toLowerCase()">
              <p>resposta certa</p>
            </div>
            <div v-else>
              <p>{{lista[id].valores[contador].ingles}}</p>
              <p>Tente outra vez</p>
            </div>
          </div>
        </div>
      
        <button  class="btn"  @click="check">Responder</button>
        <button v-if="this.contador < this.lista[id].valores.length - 1" class="btnNext" @click="next">Próximo</button>
        <button v-if="this.arrayWrong.length > 0 && this.contador == this.lista[id].valores.length - 1" class="btnNext" @click="remake">Refazer</button>
        <button v-if="this.arrayWrong.length == 0 && this.contador == this.lista[id].valores.length - 1" class="btnNext" @click="restart">Reiniciar</button>

        <router-link v-if="this.answer && this.contador == this.lista[id].valores.length - 1" to="/" class="btnNext finish">Finalizar</router-link>
      </div>
      
    </div>
  

      <card v-if="this.showWrong" :arrayWrong="this.arrayWrong"/>
</template>

<script>
import card from './card.vue'
import inglesLista from '@/components/ingles/data.js'


export default {
  name: 'App',
  components: {
    // HelloWorld
    card
  },
  props: ['id'],
  data() {
    return {
      contador: 0,
      index: 0,
      answer: '',
      show: false,
      wrongAnswers: 0,
      arrayWrong: [],
      showWrong: false,
      remakeSign: false,
      listaTeste: [],
    }
  },
  computed: {
    lista(){
      return inglesLista.conteudos;
    }
  },
  methods: {
    teste() {
      if(this.remakeSign){
        this.listaTeste = this.arrayWrong;
        this.contador = 0;
      } else {
        this.listaTeste = inglesLista.conteudos;
      }
    },
    level(){
      this.remakeSign = true;
      this.listaTeste = this.arrayWrong;
      this.contador = 0;
      return this.listaTeste;
    },
    check() {
      this.show = true;
    
      if(this.answer !== this.lista[this.id].valores[this.contador].ingles){
        this.wrongAnswers++; 
        this.arrayWrong.push(this.lista[this.id].valores[this.contador])
      }  
    },
    next() {
      this.show = false;

      this.answer = '';
      if (this.contador < this.lista[this.id].valores.length - 1) {
        this.contador++;
      }
    },
    restart() {
      this.contador = 0;
      this.answer = '';
    },
    remake() {
      if(this.arrayWrong.length > 0){
        this.showWrong = true;
      }
    }
  }
}
</script>

<style>

.card {
  max-width: 840px;
  width: 100%;
  margin: 30px auto;
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
@media(min-width: 1024px){
  .card{
    width: 840px;
  }
}
</style>
