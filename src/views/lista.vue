<template>
    <div class="lista">
      <div class="lista-topo">
        <h2 class="lista-titulo">Atividades</h2>
        <input placeholder="Digite aqui sua pesquisa..." class="lista-input" v-model="pesquisaInput" type="text">
      </div>

      <div class="listaCards">
        <div class="listaCards-item" v-for="(item, i) in opcoesAtiva" :key="i" @click="abrirModal(i)">
          <h4 class="listaCards-item-text1">{{item.nome}}</h4>
          <span class="listaCards-item-text2" >{{item.valores.length}} termos</span>
        </div>
      </div>

      <!-- modal -->
      <section class="modal" v-if="modalShow" @click="fecharModal">
        <div class="modal_container">
          <div class="modalChoice">
            <router-link :to="`/flip/${modalId}`" class="listaCards-item-link">
              Memorizar
            </router-link>
          </div>
          <div class="modalChoice">
            <router-link :to="`/card/${modalId}`" class="listaCards-item-link">
              Praticar
            </router-link>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
import inglesLista from '@/components/ingles/data.js'

export default {
  name: 'App',
  data() {
    return {
      pesquisaInput: "",  
      modalShow: false,
      modalId: 0
    }
  },
  computed: {
    lista(){
      return inglesLista.conteudos;
    },
    opcoesAtiva() {
      return this.lista.filter(opcao => {
      return opcao.nome.toLowerCase().includes(this.pesquisaInput.toLowerCase());
      });
    }
  },
  methods: {
    abrirModal(i) {
      this.modalShow = true;
      this.modalId = i;
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.modalShow = false;
    }
  }
}
</script>

<style>
 .lista-titulo{
  margin: 30px 0 15px;
 }
 .listaCards{
  max-width: 1300px;
 }
 .listaCards-item-text1{
  margin-bottom: 10px;
 }
 .listaCards-item-text2{
  color: #2e3856;
 }
 
 .listaCards-item-link, .listaCards-item-link:visited{
  color: #282e3e;
 }
 .lista-topo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1237px;
 }
 .lista-input{
  max-width: 554px;
  width: 100%;
  height: 38px;
  background: #EDEFF4;
  border: none;
  padding-left: 20px;
  border-radius: 10px;
  font-size: 18px;
 }
 @media(max-width: 1023px){
  .lista-topo{
    flex-direction: column;
  }
  .lista-input{
    margin-bottom: 20px;
  }
 }
 /* MODAL */

.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.5);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 80px;
}

.modal_container {
  position: relative;
  background: #fff;
  width: 80vw;
  max-width: 600px;
  height: 300px;
  border-radius: 5px;
  z-index: 1;
  animation: fadeIn .3s forwards;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modalChoice{
  width: 132px;
  height: 68px;
  box-shadow: 0 .0625rem .1875rem 0 #282e3e1f;
  background: #f6f7fb;;
  border-bottom: .25rem solid #0000;
  border-radius: .5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: 600;
  color: #282e3e;;
}

.modalChoice:hover{
  box-shadow: 0 .25rem 1rem 0 #282e3e1f;
  border-bottom-color: #42b6ff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}

</style>
