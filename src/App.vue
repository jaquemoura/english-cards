<template>
  <div class="page">
    <header class="header">
      <router-link to="/" class="logo"><h1>english cards</h1></router-link>
    </header>
    <div class="home">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  padding: 0;
}

 body {
  background: #f6f7fb;
  font-family: hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;
  color: #2e3856;
}
.header {
  /* background-color: #fff; */
  display: block;
  max-width: 1920px;
  width: 100%;
}
.logo{
  max-width: 1000px;
}
.lista{
  margin: 0 auto;
}
 h1{
  font-size: 30px;
  color: #42b6ff;
  padding: 20px 0;
 }
.listaCards{
  display: flex;
  grid-gap: 15px;
  flex-wrap: wrap;
}
.listaCards-item{
  width: 300px;
  height: 156px;
  border-radius: 25px;
  background: #fff;
  box-shadow:  0.125rem 0.25rem #00000014;
  cursor: pointer;
  padding: 15px;
}
.listaCards-item:hover{
  border-bottom: 0.3125rem solid #dbdfff;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
}
@media(max-width: 1023px){
  .page{
    padding: 15px;
  }
  h1{
    font-size: 25px;
  }
  .listaCards {
    justify-content: center;
  }
  .lista-titulo {
    text-align: center;
  }
}
</style>
