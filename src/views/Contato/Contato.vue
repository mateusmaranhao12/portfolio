<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 contatos">
                <h1><span class="h1">&lt;h1&gt;</span>Minhas redes sociais para contato<span class="h1">&lt;h1&gt;</span></h1>
                <div class="d-grid gap-2">
                    <button @click="getWhatsApp()" class="btn btn-success"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                    <button @click="getInstagram()" class="btn btn-instagram"><i class="fa-brands fa-instagram"></i> Instagram</button>
                    <button @click="getGitHub()" class="btn btn-dark"><i class="fa-brands fa-github"></i> GitHub</button>
                    <button @click="getGmail()" class="btn btn-danger"><i class="fa-solid fa-envelope"></i> Gmail</button>
                </div>
            </div>

        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Contato',
    methods: {
        
        getWhatsApp() {
            window.open('https://wa.link/gvqccj')
        },

        getInstagram() {
            window.open('https://www.instagram.com/mateus_maranhao12/')
        },

        getGitHub() {
            window.open('https://github.com/mateusmaranhao12')
        },

        getGmail() {
            window.open('https://mail.google.com/mail/feradourada@gmail.com')
        },

    }
  }
  </script>
  
  <style lang="scss">
    @import 'Contato';
  </style>