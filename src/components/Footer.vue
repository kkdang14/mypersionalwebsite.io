<template>
    <div class="footer">
        <div class="icon">
            <div class="icon-item"><i class="fa-brands fa-facebook"></i></div>
            <div class="icon-item"><i class="fa-brands fa-instagram"></i></div>
            <div class="icon-item"> <i class="fa-brands fa-youtube"></i></div>
            <div class="icon-item"><i class="fa-brands fa-twitter"></i></div>
        </div>

        <div class="nav">
            <ul>
                <li class="nav-item"><a href="/#contact">Contact Me</a></li>
                <li class="nav-item"><a href="/#services">My Services</a></li>
                <li class="nav-item">Privacy Policy</li>
                <li class="nav-item">Terms & Conditions</li>
                <li class="nav-item">Career</li>
            </ul>
        </div>

        <div class="copyright">
            <p> Personal Website Copyright © 2023 Personal Website - All rights reserved || Designed By: Kim Khanh Dang</p>
        </div>

        <div class="scroll-back">
            <router-link class="scroll-back__icon" to="/"><i class="fa-solid fa-chevron-up"></i></router-link>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #f09819;
    font-family: 'Play', sans-serif;
    text-align: center;
    height: 320px;
    width: 100%;
    position: relative;
}

.footer .icon {
    display: flex;
    justify-content: center;
}

.footer .icon .icon-item {
    color: #fff;
    font-size: 30px;
    padding: 20px;
}

.icon .icon-item:hover {
    cursor: pointer;
}

.footer .nav .nav-item {
    color: #fff;
}

.footer .nav .nav-item:hover {
    cursor: pointer;
}

.footer .nav ul {
    width: 100%;
}

.footer .nav ul li {
    display: inline-block;
    margin: 0px 30px;
}

.footer .nav ul li a {
    text-decoration: none;
    color: #fff;
}

.footer .copyright {
    color: #fff;
}

.scroll-back .scroll-back__icon {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 30px;
    background-color: #f09819;
    color: #fff;
    border: 3px solid #fff;
}
</style>