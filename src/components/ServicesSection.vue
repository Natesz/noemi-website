<template>
  <section id="szolgaltatasok" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Amit kínálok</p>
        <h2 class="section-title">Szolgáltatások</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Három területen segítem ügyfeleim fejlődését – mindegyikben teljes figyelemmel és szakértelemmel.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="card text-center group"
        >
          <!-- Ikon -->
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
               :style="{ background: service.iconBg }">
            <component :is="service.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="font-serif text-xl font-semibold text-heading mb-3">{{ service.title }}</h3>
          <p class="text-text-main/70 text-sm leading-relaxed mb-6">{{ service.description }}</p>

          <a :href="service.href" class="btn-outline text-sm">Részletek</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const IconSpeech = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
  ])
})

const IconYoga = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
  ])
})

const IconMassage = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11' })
  ])
})

const services = [
  {
    title: 'Logopédia',
    description: 'Hangképzési zavarok, dadogás, olvasási és írási nehézségek kezelése gyermekeknek és felnőtteknek egyaránt. Egyéni, személyre szabott terápiás tervvel dolgozom.',
    icon: IconSpeech,
    iconBg: 'linear-gradient(135deg, #8DBAD4, #6aa0bf)',
    href: '#arak',
  },
  {
    title: 'Jóga',
    description: 'Kis csoportos és egyéni jógaórák, ahol a légzés, a mozgás és a jelenlét összefonódik. Kezdőknek és haladóknak egyaránt ajánlott, testhez és lélekhez szóló gyakorlás.',
    icon: IconYoga,
    iconBg: 'linear-gradient(135deg, #B8A9CC, #9d8bba)',
    href: '#arak',
  },
  {
    title: 'Masszázs',
    description: 'Relaxációs és terápiás masszázs, amely segít az izomfeszülések oldásában, a stressz levezetésében és a test természetes egyensúlyának visszaállításában.',
    icon: IconMassage,
    iconBg: 'linear-gradient(135deg, #A8CCBD, #7db3a0)',
    href: '#arak',
  },
]
</script>
