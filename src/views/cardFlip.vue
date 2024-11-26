<template>
  <section class="card-flip">
    <div class="card-item" ref="myCard" @click="flipCard()">
      <div class="card-front">{{lista[id].valores[contador].portugues || []}}</div>
      <div class="card-back">{{lista[id].valores[contador].ingles || []}} </div>
    </div>
  </section>

  <div class="cardFlip-btns">
    <button class="btnNext" @click="prev">Anterior</button>
    <button class="btnNext" @click="next">Próximo</button>
  </div>
</template>

<script>
import inglesLista from '@/components/ingles/data.js'

export default {
  name: 'App',
  components: {

  },
  props: ['id'],
  data() {
    return {
      flip: false,
      contador: 0,
      index: 0,
      show: false,
    }
  },
  computed: {
    lista(){
      return inglesLista.conteudos;
    }
  },
  methods: {
    flipCard(){
      this.$refs.myCard.classList.toggle('flip');
    },
    prev() {
      this.show = false;

      if (this.contador > 0) {
        this.contador--;
      }

      this.$refs.myCard.classList.remove('flip');
    },
    next() {
      this.show = false;

      if (this.contador < this.lista[this.id].valores.length - 1) {
        this.contador++;
      }

      this.$refs.myCard.classList.remove('flip');
    }
  }
}
</script>

<style scoped>

.card-item{
  max-width: 640px;
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


.card-item {
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform .5s;
  display: flex;
  justify-content: center;
}
.card-item:active {
  transform: scale(0.97);
  transition: transform .2s;
 }
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  padding-top: 100px;
  align-items: flex-start;

  /* max-width: 500px; */
}
.card-front {
  transform: rotateY(180deg);
}
.card-back{
 left: 0;
}
.card-item.flip {
  transform: rotateY(180deg);
}
.cardFlip-btns{
  display: flex;
  justify-content: center;
  gap: 15px;
}
.cardFlip-btns button:hover{
  background: #edeff4;
}
</style>
