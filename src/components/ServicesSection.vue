<template>
  <section id="szolgaltatasok" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Amit kínálok</p>
        <h2 class="section-title">Szolgáltatások</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Három területen segítem az ügyfeleimet – mindegyikben teljes figyelemmel,
          személyre szabott tervvel.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-line
                 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <!-- Kép (ha még nincs feltöltve, színátmenetes ikonos háttér marad) -->
          <div class="relative h-52 w-full overflow-hidden" :style="{ background: service.iconBg }">
            <img
              v-if="!service.imageFailed"
              :src="service.image"
              :alt="service.imageAlt"
              class="w-full h-full object-cover"
              @error="service.imageFailed = true"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg class="w-14 h-14 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  v-for="(d, i) in service.paths"
                  :key="i"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="d"
                />
              </svg>
            </div>
          </div>

          <div class="p-8 flex flex-col flex-1">
            <h3 class="font-serif text-xl font-semibold text-heading mb-3">{{ service.title }}</h3>
            <p class="text-text-main/75 text-sm leading-relaxed mb-5">{{ service.description }}</p>

            <ul class="space-y-2 mb-7">
              <li v-for="item in service.items" :key="item" class="flex items-start gap-2.5 text-sm text-text-main/85">
                <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[7px]" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <RouterLink
              :to="{ path: '/', hash: service.ctaHash }"
              class="btn-outline text-sm text-center mt-auto"
            >
              {{ service.cta }}
            </RouterLink>
          </div>
        </div>
      </div>

      <p class="text-center text-sm text-muted mt-12">
        Nem tudod, melyik lenne neked a legjobb?
        <RouterLink :to="{ path: '/', hash: '#kapcsolat' }" class="text-primary-dark font-medium underline hover:no-underline">
          Írj nekem
        </RouterLink>, és közösen kitaláljuk.
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

// A képeket a public/ mappába kell tenni ezekkel a nevekkel.
// Amíg nincsenek ott, a kártya tetején a színátmenetes ikon jelenik meg.
const services = reactive([
  {
    title: 'Logopédus',
    image: '/szolgaltatas-logopedia.jpg',
    imageAlt: 'Logopédiai foglalkozás',
    imageFailed: false,
    description:
      'Egyéni terápia gyermekeknek és felnőtteknek, alapos állapotfelmérésre épülő, személyre szabott terápiás tervvel.',
    iconBg: 'linear-gradient(135deg, #A6CBE0, #6A9CBB)',
    paths: ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'],
    items: [
      'Artikulációs terápia',
      'Beszédértés, beszédészlelés fejlesztése',
      'Nyelvi késés terápiája',
      'Nyelvlökéses nyelés terápiája (8–9 éves kortól)',
      'Dadogás, beszédfélelem (logofóbia) oldása',
    ],
    cta: 'Árak megtekintése',
    ctaHash: '#arak',
  },
  {
    title: 'Jógaoktató',
    image: '/szolgaltatas-joga.jpg',
    imageAlt: 'Jógaóra',
    imageFailed: false,
    description:
      'Egyéni és kis csoportos órák, ahol a légzés, a mozgás és a jelenlét összefonódik – kezdőknek és haladóknak egyaránt.',
    iconBg: 'linear-gradient(135deg, #C4E2F2, #8DBAD4)',
    paths: [
      'M12 6.5a2 2 0 100-4 2 2 0 000 4z',
      'M12 6.5V13m0 0l-4.5 8M12 13l4.5 8M4.5 9.5L12 11l7.5-1.5',
    ],
    items: [
      'Hatha jóga',
      'Yin jóga',
      'Női jóga',
      'Légzésgyakorlatok (pránajáma)',
      'Relaxáció, feszültségoldás',
    ],
    cta: 'Érdeklődöm',
    ctaHash: '#kapcsolat',
  },
  {
    title: 'Masszőr',
    image: '/szolgaltatas-masszazs.jpg',
    imageAlt: 'Gyógymasszázs',
    imageFailed: false,
    description:
      'Relaxációs és gyógymasszázs, amely oldja az izomfeszüléseket, és visszaadja a test természetes egyensúlyát.',
    iconBg: 'linear-gradient(135deg, #B7C4CE, #7A8794)',
    paths: ['M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'],
    items: [
      'Relaxációs masszázs',
      'Gyógymasszázs',
      'Nyak- és vállmasszázs',
      'Hátfájdalom, izomfeszülés oldása',
    ],
    cta: 'Érdeklődöm',
    ctaHash: '#kapcsolat',
  },
])
</script>
