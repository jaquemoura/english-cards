<template>
    <div class="lista">
      <h2 class="lista-titulo">Atividades</h2>
      <div class="listaCards">
        <div class="listaCards-item" v-for="(item, i) in lista" :key="i">
          <router-link :to="`/card/${item.id}`" class="listaCards-item-link">
            <h4 class="listaCards-item-text1">{{item.nome}}</h4>
            <span class="listaCards-item-text2" >{{item.valores.length}} termos</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import inglesLista from '@/components/ingles/data.js'

export default {
  name: 'App',
  computed: {
    lista(){
      return inglesLista.conteudos;
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
 .listaCards-item-link{
  display: block;
  height: 100%;
 }
 .listaCards-item-link:visited{
  color: #4255ff;
 }
</style>
