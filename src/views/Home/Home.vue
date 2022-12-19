<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1><span class="h1">&lt;h1&gt;</span>Olá, meu nome é Mateus Maranhão<span class="h1">&lt;h1&gt;</span></h1>
        <h5><span class="function">function</span> <span class="nome_funcao">resumoSobreMim</span>() {</h5>
          <p><span class="return">return</span> <span class="text_return">'Olá, meu nome é Mateus Maranhão, eu sou Front-end VueJS developer'</span></p>
        <h5>}</h5>
      </div>
      <div class="col-md-6">
        <img class="imagem img-fluid" src="../../assets/foto.png" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss">
  @import 'Home';
</style>
