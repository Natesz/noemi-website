<template>
  <section id="foglalas" class="py-24 bg-bg-soft scroll-mt-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Időpontfoglalás</p>
        <h2 class="section-title">Foglalj online logopédiai órát</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Válaszd ki, milyen alkalmat szeretnél, majd a napot és a pontos időpontot –
          a visszaigazolást és a videóhívás linkjét e-mailben azonnal megkapod.
        </p>
      </div>

      <!-- Foglalható alkalmak -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        <div
          v-for="option in bookableTypes"
          :key="option.title"
          class="bg-white rounded-2xl p-6 ring-1 ring-line shadow-sm text-center flex flex-col"
        >
          <p class="font-serif text-3xl font-semibold text-heading">
            {{ option.length }}<span class="text-lg"> perc</span>
          </p>
          <p class="text-sm font-medium text-heading mt-1">{{ option.title }}</p>
          <p class="text-sm text-text-main/70 mt-2 leading-relaxed flex-1">{{ option.description }}</p>
          <p class="mt-4 font-semibold text-primary-dark">{{ option.price }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">

        <!-- Naptár -->
        <div class="lg:col-span-3">
          <div
            v-if="calLink"
            class="bg-white rounded-2xl ring-1 ring-line shadow-sm overflow-hidden min-h-[26rem]"
          >
            <!-- Amíg nem kattint rá, nem töltünk be külső szolgáltatót (adatvédelem). -->
            <div v-if="!embedLoaded" class="p-10 text-center">
              <div class="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mx-auto mb-5">
                <svg class="w-7 h-7 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-semibold text-heading mb-2">Szabad időpontok</h3>
              <p class="text-sm text-text-main/70 max-w-sm mx-auto leading-relaxed mb-6">
                A naptárat a Cal.com szolgáltatás jeleníti meg. A betöltéssel a böngésződ
                kapcsolatba lép a Cal.com szervereivel, és sütiket helyezhet el.
                Részletek a
                <RouterLink to="/adatkezelesi-tajekoztato" class="text-primary-dark underline hover:no-underline">
                  adatkezelési tájékoztatóban
                </RouterLink>.
              </p>
              <button class="btn-primary" @click="loadEmbed">
                Naptár betöltése
              </button>
            </div>

            <div v-show="embedLoaded" ref="calContainer" class="min-h-[26rem]" />

            <p v-if="embedFailed" class="p-6 text-sm text-center text-text-main/70">
              A naptárat most nem sikerült betölteni. Írj nyugodtan e-mailben:
              <a :href="`mailto:${contactEmail}`" class="text-primary-dark underline hover:no-underline">{{ contactEmail }}</a>
            </p>
          </div>

          <!-- Ha a Cal.com-fiók még nincs beállítva -->
          <div v-else class="bg-white rounded-2xl ring-1 ring-line shadow-sm p-10 text-center">
            <h3 class="font-serif text-xl font-semibold text-heading mb-2">Az online naptár hamarosan elindul</h3>
            <p class="text-sm text-text-main/70 max-w-sm mx-auto leading-relaxed mb-6">
              Addig is írj nekem e-mailben, és megbeszéljük a neked megfelelő időpontot.
            </p>
            <a :href="`mailto:${contactEmail}`" class="btn-primary">Írok e-mailt</a>
          </div>
        </div>

        <!-- Tudnivalók -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-8 ring-1 ring-line shadow-sm">
            <h3 class="font-serif text-2xl font-semibold text-heading mb-6">Jó, ha tudod</h3>
            <ul class="space-y-5">
              <li v-for="note in notes" :key="note.title" class="flex items-start gap-4">
                <span class="w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p class="font-medium text-heading leading-snug">{{ note.title }}</p>
                  <p class="text-sm text-text-main/70 mt-1 leading-relaxed">{{ note.text }}</p>
                </div>
              </li>
            </ul>
          </div>

          <p class="text-xs text-muted mt-5 leading-relaxed">
            A jóga- és masszázsidőpontokat továbbra is e-mailben egyeztetjük –
            <RouterLink :to="{ path: '/', hash: '#kapcsolat' }" class="text-primary-dark underline hover:no-underline">
              írj nekem
            </RouterLink>.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { email as contactEmail } from '../data/contact'

/**
 * A Cal.com foglalási link. Mivel több eseménytípus közül lehet választani
 * (felmérés / konzultáció / foglalkozás), ide a profil neve kerül – pl. "nyevelka-noemi" –,
 * így a naptárban megjelenik mind. Egyetlen eseményhez: "nyevelka-noemi/felmeres".
 * A Netlify környezeti változói között kell beállítani: VITE_CAL_LINK.
 * Amíg nincs beállítva, e-mailes egyeztetést ajánlunk fel helyette.
 */
const calLink = import.meta.env.VITE_CAL_LINK || ''

const calContainer = ref(null)
const embedLoaded = ref(false)
const embedFailed = ref(false)
let scriptEl = null

const EMBED_SRC = 'https://app.cal.com/embed/embed.js'

/** A Cal.com hivatalos betöltő-snippetje: sorba állítja a hívásokat, amíg a script megérkezik. */
function installCalQueue() {
  if (window.Cal) return
  const cal = function (...args) {
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q || []
      cal.loaded = true
    }
    if (args[0] === 'init') {
      const api = function (...inner) { api.q.push(inner) }
      const namespace = args[1]
      api.q = api.q || []
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api
        cal.ns[namespace].q.push(args)
        cal.q.push(['initNamespace', namespace])
      } else {
        cal.q.push(args)
      }
      return
    }
    cal.q.push(args)
  }
  cal.q = []
  cal.ns = {}
  window.Cal = cal
}

function loadEmbed() {
  embedLoaded.value = true
  embedFailed.value = false

  installCalQueue()

  if (!scriptEl) {
    scriptEl = document.createElement('script')
    scriptEl.src = EMBED_SRC
    scriptEl.async = true
    scriptEl.onerror = () => { embedFailed.value = true }
    document.head.appendChild(scriptEl)
  }

  window.Cal('init', { origin: 'https://app.cal.com' })
  window.Cal('inline', {
    elementOrSelector: calContainer.value,
    calLink,
    config: { layout: 'month_view' },
  })
  window.Cal('ui', {
    layout: 'month_view',
    hideEventTypeDetails: false,
    styles: { branding: { brandColor: '#6A9CBB' } },
  })
}

onBeforeUnmount(() => {
  if (scriptEl?.parentNode) scriptEl.parentNode.removeChild(scriptEl)
})

/**
 * Ugyanezeket az alkalmakat kell külön eseménytípusként felvenni a Cal.com-ban,
 * a lenti hosszakkal. Az árak forrása a díjszabás (PricingSection.vue).
 */
const bookableTypes = [
  {
    length: 60,
    title: 'Logopédiai felmérés',
    description: 'A közös munka első alkalma: felmérjük az aktuális állapotot, és megbeszéljük a terápiás tervet.',
    price: '13 500 Ft',
  },
  {
    length: 30,
    title: 'Konzultáció',
    description: 'Rövid, fókuszált beszélgetés, ha egy konkrét kérdésben szeretnél szakmai véleményt.',
    price: '9 500 Ft',
  },
  {
    length: 45,
    title: 'Foglalkozás',
    description: 'A felmérés után induló rendszeres órák – 30 vagy 45 percben, 4 vagy 8 alkalmas bérlettel.',
    price: 'Bérletből',
  },
]

const notes = [
  {
    title: 'Online, videóhívásban',
    text: 'A foglalás után e-mailben megkapod a videóhívás linkjét – nem kell semmit telepítened.',
  },
  {
    title: 'Azonnali visszaigazolás',
    text: 'A lefoglalt időpontról rögtön kapsz visszaigazoló e-mailt, és emlékeztetőt is küldök az óra előtt.',
  },
  {
    title: 'Lemondás, áthelyezés',
    text: 'Az óra előtt legalább 24 órával a visszaigazoló e-mail linkjén díjmentesen lemondhatod vagy áthelyezheted.',
  },
  {
    title: 'Fizetés',
    text: 'A díjat banki átutalással rendezheted, a számlát e-mailben küldöm. A rendszeres órákra bérlet váltható.',
  },
]
</script>
