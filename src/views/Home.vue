<template>
    <div class="home">
        <div class="home__present">
            <div class="intro">
                <div>
                    <span>Hi there!</span>
                    <div class="content">I'm {{ currentText }}<span class="cursor" :class="{ 'blink': cursorVisible }"></span></div>
                    <span>I make the complex simple</span>
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
                <img src="../../public/image/bear2.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.home{
    width: 100%;
    height: 90vh;
    background-color: #1c1b1b;
    display: flex;
    justify-content: center;
}

.home__present{
    width: 90%;
    height: 70vh;
    background-color: #1c1b1b;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.intro{
    position: relative;
    width: 50%;
    height: 300px;
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
    margin-top: 30px;
    width: 100%;
    height:auto;
    font-size: 18px;
    display: flex;
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
}

@keyframes blink-animation {
    0%, 50% {
        opacity: 0;
    }
    51%, 100% {
        opacity: 1;
    }
}
</style>

<script>
export default {
    data() {
        return {
            texts: ["Kim Khanh Dang", "a Web Developer"],
            currentIndex: 0,
            currentText: "",
            typingSpeed: 100, // Adjust the typing speed by changing this value
            deletingSpeed: 100, // Adjust the deleting speed by changing this value
            delayBeforeNextText: 1500,
            cursorVisible: true,
        };
    },
    methods: {
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
    mounted() {
        this.typeWriter();
    },
};
</script>
