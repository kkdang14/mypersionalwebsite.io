<template>
    <div class="header">
        <div class="nav">
            <div class="nav__logo">
                <h2>DANDEV</h2>
            </div>
            <div class="nav__lists">
                <router-link class="nav__lists-item" to="/">Home</router-link>
                <router-link class="nav__lists-item" to="/#about">About me</router-link>
                <router-link class="nav__lists-item" to="/#services">My Service</router-link>
                <router-link class="nav__lists-item" to="#">Contact</router-link>
                <router-link class="nav__lists-item" to="#">My Blog</router-link>
            </div>
            <div class="nav__links">
                <a href="https://github.com/kkdang14"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/justdaln/"><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</template>

<script>

</script>
    
<style scoped>
    .header{
        width: 100%;
        height: 120px;
        background-color: #1c1b1b;
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
        color: #d88a58;
    }

    .nav__lists{
        width: 55%;
        display: flex;
        justify-content: space-between;
        font-size: 22px;
    }

    .nav__lists-item {
        color: #d88a58;
        width: 150px;
        text-align: center;
        text-decoration: none;
        font-weight: 600;
    }

    .nav__lists-item:hover {
        color: #eba884;
    }

    .nav__links {
        font-size: 28px;
        display: flex;
        width: 10%;
        justify-content: space-around;
    }

    .nav__links a{
        color: #d88a58;
    }

    .nav__links a:hover{
        color: #eba884;
    }
</style>