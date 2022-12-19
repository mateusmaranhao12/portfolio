<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><i class="fa-sharp fa-solid fa-house"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="Sobre" class="nav-link"><i class="fa-solid fa-question"></i> Sobre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="Servicos" class="nav-link"><i class="fa-solid fa-circle-info"></i> Serviços</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="Portfolio" class="nav-link"><i class="fa-solid fa-code"></i> Portfólio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="Contato" class="nav-link"><i class="fa-solid fa-user"></i> Contato</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    @import 'Header';
</style>