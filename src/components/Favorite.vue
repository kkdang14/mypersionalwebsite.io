<template>
    <div class="favorite">
        <div class="sport">
            <i class="fa-solid fa-code"></i>
            <span>Sport: Babminton, Football,...</span>
        </div>
        <div class="Other">
            <i class="fa-solid fa-code"></i>
            <span>Listen to music, read books, play games, travel.</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .favorite{
        color: #f09819;
    }

    .favorite > div{
        display: flex;
    }

    .favorite > div i {
        font-size: 18px;
    }

    .favorite > div span{
        font-size: 17px;
        margin-left: 5px;
        font-weight: 500;
    }

    .fa-code{
        line-height: 30px;
    }
</style>