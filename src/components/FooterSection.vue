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
              <p class="text-[11px] tracking-[0.14em] uppercase text-white/80 font-semibold mt-1">Logopédus · Jógaoktató · Masszőr</p>
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
            <div v-for="row in openingHours" :key="row.day" class="flex justify-between items-baseline gap-3">
              <span class="whitespace-nowrap">{{ row.day }}</span>
              <span class="text-right" :class="row.closed ? 'text-white/35' : 'text-white/90 font-medium'">{{ row.hours }}</span>
            </div>
          </div>

          <RouterLink
            :to="{ path: '/', hash: '#foglalas' }"
            class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Időpontfoglalás
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
import { openingHoursRows } from '../data/openingHours'
import { facebook } from '../data/contact'

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
  { label: 'Foglalás',       to: { path: '/', hash: '#foglalas' } },
  { label: 'Aktualitások',   to: { path: '/', hash: '#aktualitasok' } },
  { label: 'Kapcsolat',      to: { path: '/', hash: '#kapcsolat' } },
]

const legalLinks = [
  { label: 'Impresszum',                to: '/impresszum' },
  { label: 'Adatkezelési tájékoztató',  to: '/adatkezelesi-tajekoztato' },
  { label: 'Általános szerződési feltételek', to: '/aszf' },
  { label: 'Sütikezelés',               to: '/suti' },
]

const openingHours = openingHoursRows

const socials = [
  {
    label: facebook.label,
    href: facebook.url,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]
</script>
