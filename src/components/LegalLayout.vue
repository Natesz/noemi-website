<template>
  <NavBar />

  <main>
    <!-- Oldalfejléc -->
    <section
      class="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden"
      style="background: linear-gradient(160deg, #FFFFFF 0%, #EFF6FB 60%, #E7EDF2 100%);"
    >
      <div class="absolute -top-10 right-0 w-72 h-72 rounded-full opacity-40 pointer-events-none"
           style="background: radial-gradient(circle, #C4E2F2, transparent 70%);" />

      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <p class="section-label">Tájékoztatók</p>
        <h1 class="font-serif text-3xl lg:text-4xl font-semibold text-heading mb-4">{{ title }}</h1>
        <div class="section-divider"></div>
        <p v-if="subtitle" class="text-text-main/70 leading-relaxed">{{ subtitle }}</p>
        <p class="text-xs text-muted mt-6">Hatályos: {{ effectiveDate }}</p>
      </div>
    </section>

    <!-- Tartalom -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <article class="legal-prose">
          <slot />
        </article>

        <div class="mt-14 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <RouterLink :to="{ path: '/' }" class="btn-outline text-sm">
            ← Vissza a kezdőlapra
          </RouterLink>
          <nav class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <RouterLink
              v-for="link in otherDocs"
              :key="link.to"
              :to="link.to"
              class="text-primary-dark hover:text-primary transition-colors"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </section>
  </main>

  <FooterSection wave-fill="#FFFFFF" />
  <CookieBanner />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './NavBar.vue'
import FooterSection from './FooterSection.vue'
import CookieBanner from './CookieBanner.vue'
import { effectiveDate } from '../data/impresszumData'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})

const route = useRoute()

const docs = [
  { label: 'Impresszum', to: '/impresszum' },
  { label: 'Adatkezelési tájékoztató', to: '/adatkezelesi-tajekoztato' },
  { label: 'ÁSZF', to: '/aszf' },
  { label: 'Sütikezelés', to: '/suti' },
]

const otherDocs = computed(() => docs.filter(d => d.to !== route.path))
</script>
