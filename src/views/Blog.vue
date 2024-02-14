<template>
    <div class="blog">
        <BlogHeader></BlogHeader>
        <HomeBlog></HomeBlog>
    </div>
</template>

<script>
import BlogHeader from "../components/BlogHeader.vue"
import HomeBlog from "../views/HomeBlog.vue";
export default {
    name: "Blog",
    components: {
    BlogHeader,
    HomeBlog
},
};
</script>

<style scoped>
.blog {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    height: 200vh;
}
</style>
