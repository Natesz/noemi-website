<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-primary/10 transition-shadow duration-300" :class="{ 'shadow-sm': scrolled }">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <a href="#" class="flex flex-col leading-none">
        <span class="font-serif text-2xl font-semibold text-heading tracking-wide">Noémi</span>
        <span class="text-[10px] tracking-[0.2em] uppercase text-text-main/50 mt-0.5">Logopédus · Jóga · Masszázs</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-7">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-text-main hover:text-primary transition-colors duration-200"
        >
          {{ link.label }}
        </a>
        <a href="#kapcsolat" class="btn-primary text-sm py-2 px-5">
          Írj nekem
        </a>
      </nav>

      <!-- Hamburger -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden p-2 text-text-main hover:text-primary transition-colors"
        aria-label="Menü"
      >
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden bg-white/95 backdrop-blur-sm border-t border-primary/10 px-6 pb-5 pt-3">
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="py-2.5 text-sm font-medium text-text-main hover:text-primary transition-colors border-b border-primary/5 last:border-0"
          >
            {{ link.label }}
          </a>
          <a href="#kapcsolat" @click="menuOpen = false" class="btn-primary text-sm text-center mt-3">
            Írj nekem
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#rolam', label: 'Rólam' },
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#arak', label: 'Árak' },
  { href: '#velemenyek', label: 'Vélemények' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>
