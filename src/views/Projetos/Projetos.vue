<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="texto-projetos">
            <h1><span class="h1">&lt;h1&gt;</span>Meus projetos<span class="h1">&lt;h1&gt;</span></h1>
          </div>
        </div>
        <div class="col-md-4" v-for="p in projetos" :key="p.id">
            <div class="card" style="width: 18rem;">
                <img :src="require(`@/assets/${p.imagem}`)" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ p.titulo }}</h5>
                    <div class="text-center">
                        <Modals></Modals>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import Modals from '../../components/Modals/Modals.vue'
  
  export default {

    name: 'Sobre',
    components: {
        Modals
    },
    data: () => ({
        projetos: [
            {id: 1, titulo: 'Eletrônica 420', imagem: 'eletronica420.png'},
            {id: 2, titulo: 'Maragogi', imagem: 'maragogi.png'},
            {id: 3, titulo: 'Espaço Lírio', imagem: 'espaco_lirio.png'},
        ]
    })

  }
  </script>
  
  <style lang="scss">
    @import 'Projetos';
  </style>