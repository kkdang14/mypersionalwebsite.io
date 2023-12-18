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
                    <button class="btn"><a href="#contact">Contact me</a></button>
                </div>
                <div class="info">
                    <div class="info-gmail">
                        <span>Gmail</span>
                        <p>kkdang2707.dev@gmail.com</p>
                    </div>
                    <div class="info-phone">
                        <span>Phone</span>
                        <p>0899028513</p>
                    </div>
                    <div class="info-address">
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
        <div class="services" id="services">
            <div class="services-container">
                <div class="title-service">
                    <h2>What I Do?</h2>
                </div>
                <div class="box-services">
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-solid fa-globe"></i></div>
                        <h4>Fullstack Web Developer</h4>
                        <p>
                            Turn your vision into a standout online presence with my expert web development at DanDev. 
                            Unique design, flexible development, SEO optimization, strong security, and easy integration all tailored to your needs. 
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-solid fa-server"></i></div>
                        <h4>Backend Web</h4>
                        <p>
                            Empower your backend with my top-notch development expertise at DanDev. 
                            Our services include robust architecture, efficient database management, seamless API integration, and security-first approach. 
                            Let us optimize your backend for performance and reliability. 
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-brands fa-css3"></i></div>
                        <h4>Frontend Web</h4>
                        <p> 
                            We specialize in creating visually stunning and user-friendly interfaces. 
                            Our services encompass responsive design, intuitive navigation, and seamless integration. 
                            Transform your user interface into a captivating and efficient platform.
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-solid fa-square-share-nodes"></i></div>
                        <h4>Git Version Control</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-solid fa-laptop-code"></i></div>
                        <h4>Tutorial</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                    <div class="box-service__item">
                        <div class="icon"><i class="fa-solid fa-users-gear"></i></div>
                        <h4>Customer Care</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div class="readmore">
                            <button class="rm_btn">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact" id="contact">
            <div class="contact-container">
                <div class="contact-title">
                    <h2>CONTACT ME</h2>
                </div>
                <div class="info-contact">
                    <div class="info-contact__item info-me">
                        <div class="info-contact__item-child"><i class="fa-solid fa-location-dot"></i> Ninh Kieu, Can Tho, Viet Nam</div>
                        <div class="info-contact__item-child"><i class="fa-solid fa-envelope"></i> kkdang2707.dev@gmail.com</div>
                        <div class="info-contact__item-child"><i class="fa-solid fa-phone"></i> 0899028513</div>
                        <div class="info-contact__item-child"><i class="fa-brands fa-facebook"></i> https://www.facebook.com/justdaln</div>
                    </div>
                    <div class="info-contact__item map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.847550227907!2d105.76916295382193!3d10.031020792038023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883d2192b0f1%3A0x4c90a391d232ccce!2zVHLGsOG7nW5nIEPDtG5nIE5naOG7hyBUaMO0bmcgVGluIHbDoCBUcnV54buBbiBUaMO0bmcgKENUVSk!5e0!3m2!1svi!2s!4v1700709535623!5m2!1svi!2s" 
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="form-container">
                    <div class="contact-title">
                        <h4>SEND ME SOME THING</h4>
                    </div>
                    <form class="form-contact" @submit.prevent="">
                        <div class="form-contact__item input-name">
                            <input type="text" class="name" placeholder="Name">
                        </div>
                        <div class="form-contact__item input-email">
                            <input type="text" class="email" placeholder="Email">
                        </div>
                        <div class="form-contact__item input-phone">
                            <input type="number" class="phone" placeholder="Phone number">
                        </div>
                        <div class="form-contact__item input-mess">
                            <textarea name="message" class="message" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="contact-btn">SEND IT</button>
                    </form>
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
            texts: ["White Bear", "a Web Developer"],
            currentIndex: 0,
            currentText: "",
            typingSpeed: 100,
            deletingSpeed: 100, 
            delayBeforeNextText: 1500,
            cursorVisible: true,
            profess_value: 0,
            selectedItem: 0,
            formData:{
                name: "Customer",
                email: "",
                phone: "",
                message: "",
            }
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
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.home__present{
    width: 90%;
    height: 80vh;
    /* margin-top: -20px; */
    background-color:#fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    /* border-bottom: 1px solid #f09819; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.intro{
    position: relative;
    width: 50%;
    height: 375px;
    margin: 0 20px 0 20px;
    padding: 0px;
    font-size: 26px;
    color: #f09819;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
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
    background-color: #f09819;
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

.btn:hover{
    background-position: right center;
    text-decoration: none;
}
.btn:active {
    transform: scale(0.95);
}

.btn a{
    text-decoration: none;
    color: #fff;
}

.info-gmail, .info-phone, .info-address{
    width: 300px;
    height: 50px;
    padding: 0 10px 0 10px;
    border-left: 3px solid #f09819;
}

.img{
    width: 400px;
}
.img img{
    width: 350px;
    height: 450px;
    border-radius: 8px;
    filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
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
    width: 100%;
    margin: 40px 0;
}

.about-container{
    display: flex;
    width: 90%;
    height: auto;
    padding: 20vh 0;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #d88a58;
    border-bottom: 1px solid #f09819;
}

.overview{
    color: #f09819;
    width: 55%;
}

.professional{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
}

.title{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.title > .title-items{
    width: 150px;
    height: 50px;
    border: 1px solid #f09819;
    font-size: 18px;
    border-radius: 15px;
    text-align: center;
    line-height: 45px;
    font-weight: 500;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
}

.title > .title-items:hover{
    cursor: pointer;
}

.title > .title-items.selected {
    background-color: #f09819;
    color: #fff;
}
.profess__content{
    margin-top: 20px;
    height: 140px;
    border: 1px solid #f09819;;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.services{
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
}

.services-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f09819;
    width: 90%;
    height: 100vh;
    padding: 50px 0;
    border-bottom: 1px solid #d88a58;
}

.box-services{
    display: flex;
    justify-content: space-evenly;
    width: 100%;    
    flex-wrap: wrap;
}
.box-service__item{
    width: 30%;
    height: 250px;
    border-radius: 15px;
    margin: 20px;
    border: 1px solid #d88a58;
    padding: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.box-service__item:hover{
    cursor: default;
}

.box-service__item p{
    text-align: justify;
}
.icon{
    font-size: 25px;
}

.readmore{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.9s;
}

.box-service__item:hover .readmore{
    transform: translateY(-100%);
    transition: transform 0.5s;
    opacity: 1;
}
.rm_btn{
    background: transparent;
    color: #f09819;
    border: 2px solid #f09819;
    border-radius: 15px;
    width: 150px;
    height: 50px;
    font-weight: 500;
}

.rm_btn:hover{
    background-color: #f09819;
    color: #fff;    
}

.contact{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    height: auto;
}

.contact-container{
    display: flex;
    margin: 20px 0;
    flex-direction: column;
    width: 90%;
    align-items: center;
    padding: 40px;
}

.contact-title{
    color: #f09819;
}

.info-contact{
    margin-top: 30px;
    display: flex;
    border: 1px solid #f09819;
    border-radius: 15px;
    height: auto;
    padding: 10px;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.info-contact__item{
    color: #f09819;
    font-size: 20px;
}
.info-me{
    border: 1px solid #f09819;
    padding: 25px;
    border-radius: 15px;
}

.form-container{
    margin-top: 20px;
    padding: 30px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 1px solid #f09819;
}

.form-container .form-contact{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
    height: auto;
}

.form-contact > .input-name, .input-email{
    width: 50%;
}

.form-contact > .input-phone, .input-mess{
    width: 100%;
}

.name{
    width: 95%;
    height: 60px;
    padding: 10px;
    border: none;
    outline: none;
    border: 2px solid #f09819;
    border-radius: 15px;
    margin: 8px 0px 8px 0;
}
.email, .phone, .message{
    width: 100%;
    height: 60px;
    padding: 10px;
    border: none;
    outline: none;
    border: 2px solid #f09819;
    border-radius: 15px;
    margin: 8px 0px 8px 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input::placeholder, textarea::placeholder{
    color: #f09819;
}

.contact-btn {
    margin-top: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    width: 60%;
    background-size: 200% auto;
    border-radius: 10px;
    display: block;
    color: #fff;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.contact-btn:hover{
    background-position: right center;
    text-decoration: none;
}
.contact-btn:active {
    transform: scale(0.95);
}

</style>