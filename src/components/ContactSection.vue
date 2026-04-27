<template>
  <section id="kapcsolat" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Keress meg</p>
        <h2 class="section-title">Kapcsolat</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Kérdésed van, vagy szeretnél időpontot foglalni? Írj, és hamarosan visszajelzek!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Elérhetőség -->
        <div>
          <h3 class="font-serif text-2xl font-semibold text-heading mb-8">Elérhetőségeim</h3>
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <component :is="info.icon" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-xs tracking-wider uppercase text-text-main/50 font-medium mb-1">{{ info.label }}</p>
                <p class="text-text-main font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10 p-6 bg-white rounded-2xl shadow-sm">
            <p class="text-sm font-medium text-heading mb-2">Rendelési idő</p>
            <div class="space-y-1.5 text-sm text-text-main/70">
              <div class="flex justify-between"><span>Hétfő – Péntek</span><span>9:00 – 18:00</span></div>
              <div class="flex justify-between"><span>Szombat</span><span>9:00 – 13:00</span></div>
              <div class="flex justify-between"><span>Vasárnap</span><span>Zárva</span></div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <h3 class="font-serif text-2xl font-semibold text-heading mb-6">Üzenj nekem</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-text-main mb-1.5">Neved *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Kovács Anna"
                class="w-full px-4 py-3 rounded-xl border border-primary/20 bg-bg-soft text-text-main placeholder-text-main/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-text-main mb-1.5">Email címed *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="anna@email.hu"
                class="w-full px-4 py-3 rounded-xl border border-primary/20 bg-bg-soft text-text-main placeholder-text-main/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-text-main mb-1.5">Tárgy</label>
              <select
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-3 rounded-xl border border-primary/20 bg-bg-soft text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
              >
                <option value="">Válassz szolgáltatást...</option>
                <option value="logopedia">Logopédia</option>
                <option value="joga">Jóga</option>
                <option value="masszazs">Masszázs</option>
                <option value="egyeb">Egyéb</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-text-main mb-1.5">Üzeneted *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Írd meg, miben segíthetek..."
                class="w-full px-4 py-3 rounded-xl border border-primary/20 bg-bg-soft text-text-main placeholder-text-main/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              class="btn-primary w-full justify-center"
              :disabled="sending"
            >
              {{ sending ? 'Küldés...' : 'Üzenet küldése' }}
            </button>

            <p v-if="sent" class="text-sm text-center text-green-600 font-medium">
              ✓ Köszönöm az üzenetedet! Hamarosan visszajelzek.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)

function submitForm() {
  sending.value = true
  // TODO: EmailJS vagy backend integrációhoz csere szükséges
  setTimeout(() => {
    sending.value = false
    sent.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { sent.value = false }, 5000)
  }, 800)
}

const IconEmail = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
  ])
})

const IconPhone = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
  ])
})

const IconLocation = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
  ])
})

const contactInfo = [
  { label: 'Email', value: 'noemi@pelda.hu', icon: IconEmail },
  { label: 'Telefon', value: '+36 30 000 0000', icon: IconPhone },
  { label: 'Helyszín', value: 'Budapest, XI. kerület', icon: IconLocation },
]
</script>
