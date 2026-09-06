<template>
  <section id="arak" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Díjszabás</p>
        <h2 class="section-title">Árak</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          A logopédiai alkalmak díjait alább találod. A jóga- és masszázsárakat
          egyeztetés után, egyedileg beszéljük meg.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-line hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          :class="{ 'ring-2 ring-primary': plan.featured }"
        >
          <!-- Fejléc -->
          <div class="px-8 pt-8 pb-6" :style="{ background: plan.headerBg }">
            <div v-if="plan.featured" class="text-xs font-semibold tracking-widest uppercase text-white/80 mb-2">
              Legnépszerűbb
            </div>
            <h3 class="font-serif text-2xl font-semibold mb-1" :class="plan.featured ? 'text-white' : 'text-heading'">
              {{ plan.title }}
            </h3>
            <p class="text-sm" :class="plan.featured ? 'text-white/80' : 'text-text-main/70'">
              {{ plan.subtitle }}
            </p>
          </div>

          <!-- Árak -->
          <div class="px-8 pb-8 pt-6 flex flex-col flex-1">
            <template v-if="plan.groups">
              <div v-for="(group, gi) in plan.groups" :key="group.label" :class="gi > 0 ? 'mt-6' : ''">
                <p class="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-1">
                  {{ group.label }}
                </p>
                <div
                  v-for="item in group.items"
                  :key="item.name + item.duration"
                  class="flex items-center justify-between py-3 border-b border-line last:border-0"
                >
                  <div>
                    <p class="text-sm font-medium text-heading leading-snug">{{ item.name }}</p>
                    <p v-if="item.duration" class="text-xs text-muted mt-0.5">{{ item.duration }}</p>
                  </div>
                  <p class="font-semibold text-primary-dark whitespace-nowrap ml-4">{{ item.price }}</p>
                </div>
              </div>
            </template>

            <p v-else class="text-sm text-text-main/80 leading-relaxed py-3">
              {{ plan.note }}
            </p>

            <RouterLink
              :to="{ path: '/', hash: plan.ctaHash }"
              class="mt-7 block text-center"
              :class="plan.featured ? 'btn-primary' : 'btn-outline'"
            >
              {{ plan.cta }}
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-6 ring-1 ring-line">
        <p class="text-sm text-text-main/80 leading-relaxed">
          <strong class="text-heading">Jó, ha tudod:</strong> a közös munkát logopédiai
          felméréssel kezdjük, amely alapján kiderül, milyen terápiás terv illik hozzád vagy a
          gyermekedhez. A rendszeres foglalkozások 4 vagy 8 alkalmas bérlettel vehetők igénybe.
          A logopédiai és jógafoglalkozások online zajlanak. Lemondást a foglalkozás
          előtt legalább 24 órával kérek – ilyenkor az alkalom díjmentesen áthelyezhető.
          Fizetés előre, banki átutalással lehetséges.
        </p>
        <p class="text-xs text-muted mt-4">
          * Az árak tájékoztató jellegűek, és nem minősülnek ajánlattételnek.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * A logopédia árak valósak (2026. szeptember). A rendszeres 30/45 perces foglalkozás
 * kizárólag bérlettel vehető igénybe, alkalmankénti díja nincs.
 * A jógánál és a masszázsnál szándékosan nincs ár – ezekre egyeztetés után adunk ajánlatot.
 */
const plans = [
  {
    title: 'Logopédia',
    subtitle: 'Egyéni, online foglalkozás',
    headerBg: 'linear-gradient(135deg, #EAF3F9, #D6E9F5)',
    featured: true,
    cta: 'Időpontot foglalok',
    ctaHash: '#foglalas',
    groups: [
      {
        label: 'Egyedi alkalmak',
        items: [
          { name: 'Logopédiai felmérés', duration: '60 perc', price: '13 500 Ft' },
          { name: 'Konzultáció', duration: '30 perc', price: '9 500 Ft' },
          { name: 'Szakvélemény', duration: 'írásos dokumentum', price: '8 000 Ft' },
        ],
      },
      {
        label: 'Bérletek',
        items: [
          { name: '30 perces foglalkozás', duration: '4 alkalom', price: '34 000 Ft' },
          { name: '30 perces foglalkozás', duration: '8 alkalom', price: '67 000 Ft' },
          { name: '45 perces foglalkozás', duration: '4 alkalom', price: '44 000 Ft' },
          { name: '45 perces foglalkozás', duration: '8 alkalom', price: '87 000 Ft' },
        ],
      },
    ],
  },
  {
    title: 'Jógaoktatás',
    subtitle: 'Egyéni és kis csoportos óra',
    headerBg: 'linear-gradient(135deg, #8DBAD4, #6A9CBB)',
    featured: false,
    cta: 'Érdeklődöm',
    ctaHash: '#kapcsolat',
    note: 'Hatha, yin és női jóga – egyéni és kis csoportos órákban. Az óra díját és időpontját egyeztetés után, a létszám és az óratípus alapján beszéljük meg. Írj nekem, és megtaláljuk a hozzád illő formát.',
  },
  {
    title: 'Masszőr',
    subtitle: 'Relaxációs és gyógymasszázs',
    headerBg: 'linear-gradient(135deg, #EDF0F3, #DDE3E8)',
    featured: false,
    cta: 'Érdeklődöm',
    ctaHash: '#kapcsolat',
    note: 'A masszázs személyes jelenlétet igényel, ezért az időpontot és a díjat egyeztetés után, egyedileg beszéljük meg. Írj nekem, és megkeressük a hozzád illő megoldást.',
  },
]
</script>
