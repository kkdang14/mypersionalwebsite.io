<template>
    <div class="home-blog">
        <div class="thumb-container">
            <div class="thumbnail">
                <div class="main-thumb">
                    <img class="img" src="../../public/image/thumb-default.jpg" alt="">
                    <div class="content-thumb">
                        <div class="content-thumb__type">
                            <span>Framework</span>
                        </div>
                        <div class="content-thumb__title">
                            <h3>Vuejs framework is increasingly popular in the Vietnamese front-end community.</h3>
                        </div>
                        <div class="content-thumb__info">
                            <div class="content-thumb__info-item"><i class="fa-regular fa-user"></i> White Bear</div>
                            <div class="content-thumb__info-item"><i class="fa-regular fa-calendar-days"></i> {{ currentDate }} </div>
                            <div class="content-thumb__info-item"><i class="fa-regular fa-comment"></i> {{ comments }}
                                Comments</div>
                        </div>
                    </div>
                </div>

                <div class="sub-thumb">
                    <img class="img" src="../../public/image/thumb-default.jpg" alt="">
                    <img class="img" src="../../public/image/thumb-default.jpg" alt="">
                </div>
            </div>
            <div class="news-tracker">
                <span class="breakingnews">Breaking News: </span>
                <transition name="slideDown">
                    <span class="news-content"> {{ currentBreakingNews }} </span>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: ["A series of new technologies were launched this year.",
                "User interface programming has a high career risk when a series of new technologies are born.",
                "The inconsistency of the PHP programming language is not a joke."],
            currentDate: null,
            comments: 6,
            currentBreakingNewsIndex: 0,
            currentBreakingNews: "",
            intervalId: null,
            // slideDown: false,
        };
    },

    created() {
        this.updatedDate();
        this.startBreakingNewsRotation();
    },

    beforeDestroy() {
        this.stopBreakingNewsRotation();
    },

    methods: {
        updatedDate() {
            const currentDate = new Date();
            this.currentDate = currentDate.toISOString().slice(0, 10);
        },

        startBreakingNewsRotation() {
            this.currentBreakingNews = this.news[this.currentBreakingNewsIndex];
            this.intervalId = setInterval(() => {
                // this.slideDown = true
                // setTimeout(() => {
                    this.currentBreakingNewsIndex = (this.currentBreakingNewsIndex + 1) % this.news.length;
                    this.currentBreakingNews = this.news[this.currentBreakingNewsIndex];
                    // this.slideDown = false
                // }, 500)
            }, 4000); // Change this value to adjust the rotation interval (in milliseconds)
        },

        stopBreakingNewsRotation() {
            clearInterval(this.intervalId);
        },
    },
}
</script>

<style scoped>
.home-blog {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.thumb-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
}

.thumbnail {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.main-thumb {
    display: flex;
    width: 70%;
    position: relative;
}

.main-thumb .img {
    width: 100%;
    height: auto;
    margin-right: 10px;
}

.main-thumb .content-thumb {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 35px;
}

.content-thumb__type {
    background-color: #f09819;
    margin: 10px 0;
    width: 20%;
    text-align: center;
    font-weight: 500;
    padding: 5px;
    font-size: 1.2rem;
}

.content-thumb__title {
    margin: 10px 0;
}

.content-thumb__info {
    display: flex;
    width: 45%;
    justify-content: space-between;
    cursor: pointer;
}

.sub-thumb {
    width: 30%;
}

.sub-thumb .img {
    width: 100%;
    height: calc(50% - 5px);
}

.sub-thumb .img:nth-child(2) {
    margin-top: 10px;
}

.news-tracker {
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    padding: 15px;
}

.news-tracker .breakingnews {
    color: #f09819;
    font-weight: 500;
}

</style>