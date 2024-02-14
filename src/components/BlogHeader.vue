<template>
    <div class="header-blog">
        <div class="header-blog__container">
            <div class="container-nav">
                <div class="nav-contact">
                    <div class="nav-contact__container">
                        <div class="contact-social">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-threads"></i>
                        </div>
                        <div class="contact-info">
                            <div class="number-phone">
                                +84 123456789
                            </div>
                            <div class="support-email">
                                support@dandev.com
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-logo">
                    <div class="nav-logo__container">
                        <div class="logo">
                            <div class="image-logo"><img src="../../public/image/logo.jpg" alt=""></div>
                            <h3>DANDEV</h3>
                        </div>
                        <div class="ad">
                            729 x 90 PX AD GOES HERE
                        </div>
                    </div>
                </div>
                <div class="nav-bar" :class="{ 'fixed-nav': isFixed }" ref="navBar">
                    <div class="nav-bar__container">
                        <div class="nav-bar__container-list">
                            <router-link class="list-item" to="/blog">HOME</router-link>
                            <router-link class="list-item" to="/blog">ARCHIVE</router-link>
                            <router-link class="list-item" to="/blog">CATEGORY</router-link>
                            <div class="list-item dropdown">
                                <span>POST TYPE <i class="fa-solid fa-chevron-down"></i></span>
                                <div class="dropdown-item">
                                    <router-link class="dropdown-item__child" to="#">Standard Post</router-link>
                                    <router-link class="dropdown-item__child" to="#">Image Post</router-link>
                                    <router-link class="dropdown-item__child" to="#">Gallary Post</router-link>
                                    <router-link class="dropdown-item__child" to="#">Video Post</router-link>
                                    <router-link class="dropdown-item__child" to="#">Audio Post</router-link>
                                </div>
                            </div>
                            <router-link class="list-item" to="/blog">ABOUT</router-link>
                            <router-link class="list-item" to="/blog">CONTACT</router-link>
                        </div>
                        <div class="searching">
                            <input :class="{'show': isShowInput}" type="text" placeholder="Search" class="input">
                            <i v-if="isShowInput === false" @click="isShow()" class="fa-solid fa-search"></i>
                            <i v-if="isShowInput === true" @click="isShow()" class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownVisible: false,
            isFixed: false,
            navBarTop: 0,
            isShowInput: false
        };
    },
    mounted() {
        this.navBarTop = this.$refs.navBar.offsetTop;

        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > this.navBarTop) {
                this.isFixed = true;
            } else {
                this.isFixed = false;
            }
        },

        isShow() {
            this.isShowInput = !this.isShowInput;
        }
    },
}
</script>

<style scoped>
.header-blog__container {
    width: 100%;
}

.container-nav {
    width: 100%;
}

.nav-contact {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #000;
    height: auto;
}

.nav-contact__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 50px;
    color: #fff;
}

.contact-social {
    width: 20%;
}


.contact-social .fa-brands {
    padding: 0 10px;
    font-size: 0.8em;
}

.contact-social .fa-brands:hover{
    color: #f09819;
    cursor: pointer;
}

.contact-info {
    display: flex;
    width: 30%;
    justify-content: end;
    font-size: 0.8em;
}

.contact-info > div {
    padding: 0 10px;
}

.contact-info > div:hover{
    color: #f09819;
}

.nav-logo {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #fff;
}

.nav-logo__container {
    width: 80%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo .logo {
    color: #f09819;
    width: 30%;
    display: flex;
    align-items: center;
}

.nav-logo .logo h3{
    margin: 0 8px;
}

.nav-logo .logo .image-logo{
    width: 50px;
    height: auto;
}

.nav-logo .logo .image-logo img{
    width: 100%;
    height: auto;
}

.nav-logo .ad {
    background-color: whitesmoke;
    width: 728px;
    height: 90px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-bar {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: relative;
    transition: top 0.3s;
}

.nav-bar.fixed-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* Add other styles for the fixed position */
}

.nav-bar__container {
    display: flex;
    width: 80%;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
}

.searching {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: end;
    position: relative;
}

.searching .input {
    width: 85%;
    border: 1px solid #ccc;
    padding: 3px 0px 3px 10px;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    position: absolute;
    opacity: 0;
    right: 50px;
    transform: translateY(-40px);
    transition: opacity 0.3s, transform 0.3s ease-in-out;
}

.searching .input.show {
    transform: translateY(0);
    opacity: 1;
}


.searching i {
    width: 10%;
    font-size: 16;
    text-align: center;
}

.searching i:hover{
    cursor: pointer;
}

.nav-bar__container-list {
    /* padding: 0 20px; */
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
}

.list-item {
    text-decoration: none;
    font-size: 1em;
    font-weight: 500;
    color: #fff;
    padding: 20px 0;
}

.dropdown {
    position: relative;
}

.dropdown span {
    cursor: pointer;
}

.dropdown-item {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: #fff;
    border: 1px solid #d1cece;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.dropdown:hover .dropdown-item {
    display: flex;
    flex-direction: column;
}

.dropdown-item__child {
    text-decoration: none;
    height: 40px;
    padding: 10px;
    color: #000;
    font-weight: 500;
    transition: background-color 0.3s;
    border-bottom: 1px solid #c9c9c9;
}

.dropdown-item__child:hover {
    background-color: #f09819;
    color: #fff;
}
</style>

