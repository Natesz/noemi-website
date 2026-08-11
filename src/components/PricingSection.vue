<template>
  <section id="arak" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Díjszabás</p>
        <h2 class="section-title">Árak</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Minden ár egyéni foglalkozásra vonatkozik. Csomag vásárlásakor kedvezmény érhető el.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-line hover:shadow-md transition-shadow duration-300 flex flex-col"
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
            <div
              v-for="item in plan.items"
              :key="item.name + item.duration"
              class="flex items-center justify-between py-3 border-b border-line last:border-0"
            >
              <div>
                <p class="text-sm font-medium text-heading">{{ item.name }}</p>
                <p class="text-xs text-muted mt-0.5">{{ item.duration }}</p>
              </div>
              <p class="font-semibold text-primary-dark whitespace-nowrap ml-4">{{ item.price }}</p>
            </div>

            <RouterLink
              :to="{ path: '/', hash: '#kapcsolat' }"
              class="mt-6 block text-center"
              :class="plan.featured ? 'btn-primary' : 'btn-outline'"
            >
              Időpontot kérek
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-6 ring-1 ring-line">
        <p class="text-sm text-text-main/80 leading-relaxed">
          <strong class="text-heading">Jó, ha tudod:</strong> az első konzultáció alkalmával felmérem
          az aktuális állapotot, és közösen kitaláljuk, milyen terápiás terv illik hozzád vagy a
          gyermekedhez. Lemondást a foglalkozás előtt legalább 24 órával kérek – ilyenkor az alkalom
          díjmentesen áthelyezhető. Fizetés készpénzben vagy előre utalással lehetséges.
        </p>
        <p class="text-xs text-muted mt-4">
          * Az árak tájékoztató jellegűek, és nem minősülnek ajánlattételnek.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    title: 'Logopédia',
    subtitle: 'Egyéni terápiás foglalkozás',
    headerBg: 'linear-gradient(135deg, #EAF3F9, #D6E9F5)',
    featured: false,
    items: [
      { name: 'Első konzultáció, állapotfelmérés', duration: '60 perc', price: '12 000 Ft' },
      { name: 'Egyéni terápia', duration: '45 perc', price: '10 000 Ft' },
      { name: 'Egyéni terápia', duration: '60 perc', price: '12 000 Ft' },
      { name: 'Csomag (5 alkalom)', duration: '60 perc / alkalom', price: '55 000 Ft' },
    ],
  },
  {
    title: 'Jóga',
    subtitle: 'Egyéni és csoportos óra',
    headerBg: 'linear-gradient(135deg, #8DBAD4, #6A9CBB)',
    featured: true,
    items: [
      { name: 'Csoportos óra', duration: '60 perc', price: '3 500 Ft' },
      { name: 'Egyéni óra', duration: '60 perc', price: '8 000 Ft' },
      { name: 'Bérlet (8 alkalom)', duration: 'csoportos órákra', price: '25 000 Ft' },
    ],
  },
  {
    title: 'Gyógymasszázs',
    subtitle: 'Relaxációs és gyógymasszázs',
    headerBg: 'linear-gradient(135deg, #EDF0F3, #DDE3E8)',
    featured: false,
    items: [
      { name: 'Relaxációs masszázs', duration: '60 perc', price: '10 000 Ft' },
      { name: 'Relaxációs masszázs', duration: '90 perc', price: '14 000 Ft' },
      { name: 'Gyógymasszázs', duration: '60 perc', price: '12 000 Ft' },
    ],
  },
]
</script>
