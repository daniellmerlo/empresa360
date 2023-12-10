<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function navegarPara() {
    //console.log(router)
    
    //coletar os dados de e-mail e senha
    //realizar uma requisição http de autenticação
    //receber o token de autorização
    
    router.push("/home")
    //router.push({ path: '/home' })
    
    //router.replace('/home')
    //router.replace({ path: '/home' })
    
    //router.forward() //avançar no histórico de rotas do navegador
    //router.back() //retornar no histórico de rotas do navegador
    
    //router.go(2) //avançar ou retornar no histórico de rotas do navegador
    //router.go(-2) //avançar ou retornar no histórico de rotas do navegador
}
</script>

<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Acessar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="destaque">
                        <h4 class="text-primary text-center">Descubra as vantagens em utilizar o Empresa 360 para gerenciar seus negócios!</h4>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center">Inscreva-se e veja a nossa demonstração</p>
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Nome">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <button class="btn btn-primary" @click="navegarPara">Me inscrever</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-superior {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.destaque {
    padding: 60px 15px;
}
</style>
