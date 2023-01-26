<script>
export default {
    name: 'WelcomeView'
}

</script>

<template>
    <router-link :to="{ name: 'home' }" class="text-decoration-none">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="square border rounded shadow text-center text-white position-relative">
                <h1 class="display-4 mt-3">
                    Welcome In My Space
                </h1>
                <h5>
                    Click For See More
                </h5>
                <img src="../assets/img/logo.png" class="w-100 position-absolute top-50 start-50 translate-middle"
                    alt="logo">
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
}

.square {
    width: 600px;
    height: 200px;
    background-color: black;
    transition: width 1s, height 1s;
    font-family: 'Quicksand', sans-serif;

    &:hover {
        width: 100vw;
        height: 100vh;
    }

}
</style>
