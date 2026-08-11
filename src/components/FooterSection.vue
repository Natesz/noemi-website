<template>
  <footer class="bg-heading text-white/70">
    <!-- Hullám fent -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 lg:h-16 block" style="margin-bottom: -1px;">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" :fill="waveFill" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        <!-- Márka -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <LogoMark class="w-10 h-10" />
            <div>
              <p class="font-serif text-xl font-semibold text-white leading-none">Noémi</p>
              <p class="text-[10px] tracking-[0.18em] uppercase text-white/40 mt-1">Logopédus · Jóga · Masszázs</p>
            </div>
          </div>
          <p class="text-sm text-white/50 leading-relaxed">
            Logopédus, szomatopedagógus, gyógymasszőr és jógaoktató. Abban segítek, hogy a beszéd
            örömteli kapcsolódás legyen.
          </p>

          <div class="flex items-center gap-3 mt-6">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
            >
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.path" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Oldalak -->
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-white mb-5">Oldal</p>
          <nav class="flex flex-col gap-2.5 text-sm">
            <RouterLink
              v-for="link in pageLinks"
              :key="link.label"
              :to="link.to"
              class="hover:text-white transition-colors duration-200 w-fit"
            >
              {{ link.label }}
            </RouterLink>
            <span class="text-white/30 cursor-default">Webáruház – hamarosan</span>
          </nav>
        </div>

        <!-- Munkaidő + időpontkérés -->
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-white mb-5">Munkaidő</p>
          <div class="space-y-2 text-sm">
            <div v-for="row in openingHours" :key="row.day" class="flex justify-between gap-3">
              <span>{{ row.day }}</span>
              <span :class="row.closed ? 'text-white/35' : 'text-white/90 font-medium'">{{ row.hours }}</span>
            </div>
          </div>

          <RouterLink
            :to="{ path: '/', hash: '#kapcsolat' }"
            class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Időpontkérés
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>

        <!-- Jogi -->
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-white mb-5">Dokumentumok</p>
          <nav class="flex flex-col gap-2.5 text-sm">
            <RouterLink
              v-for="link in legalLinks"
              :key="link.label"
              :to="link.to"
              class="hover:text-white transition-colors duration-200 w-fit"
            >
              {{ link.label }}
            </RouterLink>
            <button
              @click="reopen"
              class="text-left hover:text-white transition-colors duration-200 w-fit"
            >
              Sütibeállítások
            </button>
          </nav>
        </div>

      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
        <p>© {{ new Date().getFullYear() }} Noémi. Minden jog fenntartva.</p>
        <p>Az oldalon szereplő árak tájékoztató jellegűek.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoMark from './LogoMark.vue'
import { useCookieConsent } from '../composables/useCookieConsent'

const { reopen } = useCookieConsent()

// A fenti hullám a megelőző szekció háttérszínét folytatja.
defineProps({
  waveFill: { type: String, default: '#F5F7F9' },
})

const pageLinks = [
  { label: 'Kezdőlap',       to: { path: '/' } },
  { label: 'Rólam',          to: { path: '/', hash: '#rolam' } },
  { label: 'Szolgáltatások', to: { path: '/', hash: '#szolgaltatasok' } },
  { label: 'Árak',           to: { path: '/', hash: '#arak' } },
  { label: 'Aktualitások',   to: { path: '/', hash: '#aktualitasok' } },
  { label: 'Kapcsolat',      to: { path: '/', hash: '#kapcsolat' } },
]

const legalLinks = [
  { label: 'Impresszum',                to: '/impresszum' },
  { label: 'Adatkezelési tájékoztató',  to: '/adatkezelesi-tajekoztato' },
  { label: 'Általános szerződési feltételek', to: '/aszf' },
  { label: 'Sütikezelés',               to: '/suti' },
]

const openingHours = [
  { day: 'Hétfő – Péntek', hours: '9:00 – 18:00' },
  { day: 'Szombat', hours: '9:00 – 13:00' },
  { day: 'Vasárnap', hours: 'Zárva', closed: true },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]
</script>
