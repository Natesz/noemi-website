<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-line transition-shadow duration-300"
    :class="{ 'shadow-sm': scrolled }"
  >
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

      <!-- Logó -->
      <RouterLink :to="{ path: '/' }" class="flex items-center gap-3 shrink-0">
        <LogoMark class="w-10 h-10" />
        <span class="flex flex-col leading-none">
          <span class="font-serif text-2xl font-semibold text-heading tracking-wide">Noémi</span>
          <span class="text-[11px] sm:text-xs tracking-[0.14em] uppercase text-primary-dark font-semibold mt-1">Logopédus · Jógaoktató · Masszőr</span>
        </span>
      </RouterLink>

      <!-- Desktop menü -->
      <nav class="hidden xl:flex items-center gap-5">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm font-medium text-text-main hover:text-primary-dark transition-colors duration-200"
        >
          {{ link.label }}
        </RouterLink>
        <span
          class="text-sm font-medium text-muted/60 cursor-default"
          title="Hamarosan elérhető"
        >
          Webáruház
        </span>
        <RouterLink :to="{ path: '/', hash: '#foglalas' }" class="btn-primary text-sm py-2 px-5">
          Időpontfoglalás
        </RouterLink>
      </nav>

      <!-- Hamburger -->
      <button
        @click="menuOpen = !menuOpen"
        class="xl:hidden p-2 text-text-main hover:text-primary-dark transition-colors"
        :aria-expanded="menuOpen"
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

    <!-- Mobil menü -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="xl:hidden bg-white/95 backdrop-blur-sm border-t border-line px-6 pb-5 pt-3">
        <nav class="flex flex-col gap-1">
          <RouterLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            @click="menuOpen = false"
            class="py-2.5 text-sm font-medium text-text-main hover:text-primary-dark transition-colors border-b border-line"
          >
            {{ link.label }}
          </RouterLink>
          <span class="py-2.5 text-sm font-medium text-muted/60 border-b border-line">
            Webáruház <span class="text-[10px] uppercase tracking-wider">– hamarosan</span>
          </span>
          <RouterLink
            :to="{ path: '/', hash: '#foglalas' }"
            @click="menuOpen = false"
            class="btn-primary text-sm text-center mt-3"
          >
            Időpontfoglalás
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LogoMark from './LogoMark.vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'Kezdőlap',       to: { path: '/' } },
  { label: 'Rólam',          to: { path: '/', hash: '#rolam' } },
  { label: 'Szolgáltatások', to: { path: '/', hash: '#szolgaltatasok' } },
  { label: 'Árak',           to: { path: '/', hash: '#arak' } },
  { label: 'Foglalás',       to: { path: '/', hash: '#foglalas' } },
  { label: 'Aktualitások',   to: { path: '/', hash: '#aktualitasok' } },
  { label: 'Kapcsolat',      to: { path: '/', hash: '#kapcsolat' } },
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
  max-height: 500px;
  opacity: 1;
}
</style>
