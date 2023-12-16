<template>
    <div class="home">
        <div class="home__present">
            <div class="intro">
                <div>
                    <span>Hi there!</span>
                    <div class="content">I'm {{ currentText }}<span class="cursor" :class="{ 'blink': cursorVisible }"></span></div>
                    <span>I make the complex simple</span>
                </div>
                <div>
                    <button class="btn">Contact me</button>
                </div>
                <div class="info">
                    <div class="gmail">
                        <span>Gmail</span>
                        <p>kkdang2707.dev@gmail.com</p>
                    </div>
                    <div class="phone">
                        <span>Phone</span>
                        <p>0899028513</p>
                    </div>
                    <div class="address">
                        <span>Address</span>
                        <p>Ninh Kieu, Can Tho</p>
                    </div>
                </div>
            </div>
            <div class="img">
                <img src="../../public/image/bear3.jpg" alt="">
            </div>
        </div>

        <div class="about" id="about">
            <div class="about-container">
                <div class="img">
                    <img src="../../public/image/bear3.jpg" alt="">
                </div>
                <div class="overview">
                    <div class="overview__content">
                        <h1 class="overview__content-title">About me</h1>
                        <p class="overview__content-graph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div class="professional">
                        <div class="title">
                            <div 
                                class="title-items skill" 
                                @click="change(0)"
                                :class="{'selected': selectedItem === 0}"
                            >
                                <span>Personal Skills</span>
                            </div>
                            <div 
                                class="title-items study" 
                                @click="change(1)"
                                :class="{'selected': selectedItem === 1}"
                            >
                                <span>Study</span>
                            </div>
                            <div 
                                class="title-items certificate" 
                                @click="change(2)"
                                :class="{'selected': selectedItem === 2}"
                            >
                                <span>Certificate</span>
                            </div>
                            <div 
                                class="title-items favorite" 
                                @click="change(3)"
                                :class="{'selected': selectedItem === 3}"
                            >
                                <span>Favorite</span>
                            </div>
                        </div>
                        <div class="profess__content">
                            <skill v-if="profess_value === 0"></skill>  
                            <knowledge v-if="profess_value === 1"></knowledge>
                            <certificate v-if="profess_value === 2"></certificate>
                            <favorite v-if="profess_value === 3"></favorite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Certificate from '../components/Certificate.vue';
import Favorite from '../components/Favorite.vue';
import Knowledge from '../components/Knowledge.vue';
import Skill from '../components/Skill.vue';
export default {
    components: { Skill, Certificate, Knowledge, Favorite },
    data() {
        return {
            texts: ["Daniel", "a Web Developer"],
            currentIndex: 0,
            currentText: "",
            typingSpeed: 100, // Adjust the typing speed by changing this value
            deletingSpeed: 100, // Adjust the deleting speed by changing this value
            delayBeforeNextText: 1500,
            cursorVisible: true,
            profess_value: 0,
            selectedItem: 0,
        };
    },

    mounted() {
        this.typeWriter();
    },

    methods: {
        change(value) {
            this.profess_value = value;
            this.selectedItem = value;
        },

        typeWriter() {
            let i = 0;

            const type = () => {
                const text = this.texts[this.currentIndex];
                if (i < text.length) {
                    this.currentText += text.charAt(i);
                    i++;
                    setTimeout(type, this.typingSpeed);
                } else {
                    setTimeout(erase, this.delayBeforeNextText);
                }
            };

            const erase = () => {
                const text = this.texts[this.currentIndex];
                if (i > 0) {
                    this.currentText = text.substring(0, i - 1);
                    i--;
                    setTimeout(erase, this.deletingSpeed);
                } else {
                    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                    this.currentText = "";
                    setTimeout(type, this.delayBeforeNextText);
                }
            };
            type();
        },
    },
};
</script>

<style scoped>
.home{
    width: 100%;
    height: auto;
    background-color: #1c1b1b;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.home__present{
    width: 90%;
    height: 80vh;
    margin-top: -20px;
    background-color: #1c1b1b;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d88a58;
}

.intro{
    position: relative;
    width: 50%;
    height: 375px;
    margin: 0 20px 0 20px;
    padding: 0px;
    font-size: 26px;
    color: #d88a58;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    background-color: #1c1b1b;
}

.content{
    font-size: 52px;
    font-weight: 600;
}

.cursor {
    display: inline-block;
    top: 45px;
    width: 2px; 
    height: 52px;
    background-color: #d88a58;
    animation: blink-animation 1s infinite;
}

.info{
    margin-top: 40px;
    width: 100%;
    height: 80px;
    font-size: 18px;
    display: flex;
}

.btn {
    margin-top: 30px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000;
    border-radius: 10px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.btn:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}

.btn:active {
    transform: scale(0.95);
}

.gmail, .phone, .address{
    width: 300px;
    height: 50px;
    padding: 0 10px 0 10px;
    border-left: 2px solid #d88a58;
}

.img{
    width: 400px;
}
.img img{
    width: 350px;
    height: 450px;
    border-radius: 8px;
}

@keyframes blink-animation {
    0%, 50% {
        opacity: 0;
    }
    51%, 100% {
        opacity: 1;
    }
}

.about{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.about-container{
    display: flex;
    width: 90%;
    height: 90vh;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #d88a58;
}

.overview{
    color: #d88a58;
    width: 55%;
}

.professional{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.title{
    display: flex;
    justify-content: space-between;
}

.title > .title-items{
    width: 150px;
    height: 50px;
    border: 1px solid #d88a58;
    font-size: 18px;
    border-radius: 15px;
    text-align: center;
    line-height: 45px;
    font-weight: 500;
}

.title > .title-items:hover{
    cursor: pointer;
}

.title > .title-items.selected {
    background-color: #d88a58;
    color: #000;
}
.profess__content{
    margin-top: 20px;
    height: 140px;
    border: 1px solid #d88a58;
    border-radius: 15px;
    padding: 10px;
}
</style>