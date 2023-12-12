<template>
    <div class="header">
        <div class="nav">
            <div class="nav__logo">
                <h2>DANDEV</h2>
            </div>
            <div class="nav__lists">
                <router-link class="nav__lists-item" to="/">Home</router-link>
                <router-link class="nav__lists-item" to="#">About me</router-link>
                <router-link class="nav__lists-item" to="#">Blog</router-link>
                <router-link class="nav__lists-item" to="#">Contact</router-link>
            </div>
            <div class="nav__links">
                <a href="https://github.com/dangdev14"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61554474264968"><i class="fa-brands fa-facebook"></i></a>
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
        height: 100px;
        background-color: #1c1b1b;
        display: flex;
        justify-content: center;
    }
    .nav{
        width: 90%;
        height: 100%;
        padding: 40px 0 40px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__logo{
        width: 150px;
        height: auto;
        color: #d88a58;
    }

    .nav__lists{
        width: 40%;
        display: flex;
        justify-content: space-evenly;
        font-size: 24px;
    }

    .nav__lists-item {
        color: #d88a58;
        text-decoration: none;
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
</style>