<template>
    <div class="header">
        <div class="nav">
            <div class="nav__logo">
                <router-link to="/"><h2>DANDEV</h2></router-link>
            </div>
            <div class="nav__lists">
                <router-link class="nav__lists-item" to="/">Home</router-link>
                <router-link class="nav__lists-item" to="/#about">About me</router-link>
                <router-link class="nav__lists-item" to="/#services">My Service</router-link>
                <router-link class="nav__lists-item" to="/#contact">Contact</router-link>
                <router-link class="nav__lists-item" to="/blog">My Blog</router-link>
            </div>
            <div class="nav__links">
                <a href="https://github.com/kkdang14" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/justdaln/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-linkedin" target="_blank"></i></a>
            </div>
        </div>
    </div>
</template>

<script>

</script>
    
<style scoped>
    .header{
        width: 100%;
        height: 110px;
        background-color: #fff;
        display: flex;
        justify-content: center;
    }
    .nav{
        width: 90%;
        height: 90%;
        padding: 10px;
        /* margin: 20px 0 20px 0; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
    }

    .nav__logo{
        width: 150px;
        height: auto;
    }

    .nav__logo a{
        text-decoration: none;
        color: #f09819;
    }

    .nav__lists{
        width: 55%;
        display: flex;
        justify-content: space-between;
        font-size: 22px;
    }

    .nav__lists-item {
        color: #f09819;
        width: 150px;
        text-align: center;
        text-decoration: none;
        font-weight: 600;
    }

    .nav__lists-item:hover {
        color: #f09819;
    }

    .nav__links {
        font-size: 28px;
        display: flex;
        width: 10%;
        justify-content: space-around;
    }

    .nav__links a{
        color: #f09819;
    }

    .nav__links a:hover{
        color: #f09819;
    }
</style>