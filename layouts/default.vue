<template>
    <div class="justify-center max-w-full mx-auto ">
        <transition enter-active-class="transition-opacity duration-300 ease-linear" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-linear" leave-class="opacity-100" leave-to-class="opacity-0">
            <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
        </transition>
        <MainHeader @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
        <div class="grid grid-flow-col grid-cols-2 ">
            <div class="row-span-2 md:flex">
                <DesktopSidebar class="hidden" />
            </div>
            <div class="md:min-w-3/4">
                <Nuxt />
            </div>
            <div>3</div>
        </div>
    </div>
</template>

<script>
export default {
    transition: {
        name: 'page',
        mode: 'out-in'
    },
    watch: {
        '$route' () {
            this.showMobileMenu = false
        }
    },
    data() {
        return {
            showMobileMenu: false
        }
    }
}
</script>

<style>
.prose code {
    color: orange;
}

.prose a {
    color: #2563EB;
    text-decoration: none;
}

.prose a:hover {
    color: #3B82F6;
    text-decoration: none;
}
</style>
