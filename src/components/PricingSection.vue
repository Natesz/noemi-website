<template>
  <section id="arak" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Díjszabás</p>
        <h2 class="section-title">Árak</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Minden ár egyéni foglalkozásra vonatkozik. Csomag vásárlásakor kedvezmény érhető el.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, i) in plans"
          :key="plan.title"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          :class="{ 'ring-2 ring-primary': plan.featured }"
        >
          <!-- Fejléc -->
          <div class="px-8 pt-8 pb-6" :style="{ background: plan.headerBg }">
            <div v-if="plan.featured" class="text-xs font-semibold tracking-widest uppercase text-white/80 mb-2">Legnépszerűbb</div>
            <h3 class="font-serif text-2xl font-semibold mb-1" :class="plan.featured ? 'text-white' : 'text-heading'">{{ plan.title }}</h3>
            <p class="text-sm opacity-75" :class="plan.featured ? 'text-white' : 'text-text-main'">{{ plan.subtitle }}</p>
          </div>

          <!-- Árak és tartalom -->
          <div class="px-8 pb-8 pt-6">
            <div v-for="item in plan.items" :key="item.name" class="flex items-center justify-between py-3 border-b border-primary/8 last:border-0">
              <div>
                <p class="text-sm font-medium text-heading">{{ item.name }}</p>
                <p class="text-xs text-text-main/50 mt-0.5">{{ item.duration }}</p>
              </div>
              <p class="font-semibold text-primary whitespace-nowrap ml-4">{{ item.price }}</p>
            </div>

            <a href="#kapcsolat" class="mt-6 block text-center" :class="plan.featured ? 'btn-primary' : 'btn-outline'">
              Foglalok időpontot
            </a>
          </div>
        </div>
      </div>

      <p class="text-center text-sm text-text-main/50 mt-10">
        * Az árak tájékoztató jellegűek. Bővebb információért írj nekem!
      </p>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    title: 'Logopédia',
    subtitle: 'Egyéni terápiás foglalkozás',
    headerBg: 'linear-gradient(135deg, #C9E0EC, #a8cce0)',
    featured: false,
    items: [
      { name: 'Első konzultáció', duration: '60 perc', price: 'ingyenes' },
      { name: 'Egyéni terápia', duration: '45 perc', price: '10 000 Ft' },
      { name: 'Egyéni terápia', duration: '60 perc', price: '12 000 Ft' },
      { name: 'Csomag (5 alkalom)', duration: '60 perc/alkalom', price: '55 000 Ft' },
    ],
  },
  {
    title: 'Jóga',
    subtitle: 'Egyéni és csoportos óra',
    headerBg: 'linear-gradient(135deg, #8DBAD4, #6aa0bf)',
    featured: true,
    items: [
      { name: 'Csoportos óra', duration: '60 perc', price: '3 500 Ft' },
      { name: 'Egyéni óra', duration: '60 perc', price: '8 000 Ft' },
      { name: 'Bérlet (8 alkalom)', duration: 'csoportos', price: '25 000 Ft' },
    ],
  },
  {
    title: 'Masszázs',
    subtitle: 'Relaxációs és terápiás kezelés',
    headerBg: 'linear-gradient(135deg, #D4C9E8, #b8a9cc)',
    featured: false,
    items: [
      { name: 'Relaxációs masszázs', duration: '60 perc', price: '10 000 Ft' },
      { name: 'Relaxációs masszázs', duration: '90 perc', price: '14 000 Ft' },
      { name: 'Terápiás masszázs', duration: '60 perc', price: '12 000 Ft' },
    ],
  },
]
</script>
