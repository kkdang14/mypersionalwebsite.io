<template>
    <div class="study">
        <div class="uni">
            <i class="fa-solid fa-code"></i>
            <span>9/2021 - 12/2025 (expected): Computer Science at Can Tho University</span>
        </div>
        <div class="course">
            <i class="fa-solid fa-code"></i>
            <span>1/2024 - 6/2024: Web Developer Course at Udemy</span>
        </div>
        <div class="other">
            <i class="fa-solid fa-code"></i>
            <span>8/2024 - 12/2024: Data Science Course at Udemy</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .study{
        color: #d88a58;
    }

    .study > div{
        display: flex;
    }

    .study > div i {
        font-size: 18px;
    }

    .study > div span{
        font-size: 17px;
        margin-left: 5px;
        font-weight: 500;
    }

    .fa-code{
        line-height: 30px;
    }
</style>