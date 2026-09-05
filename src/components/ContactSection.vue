<template>
  <section id="kapcsolat" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Keress meg</p>
        <h2 class="section-title">Kapcsolat</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Kérdésed van, vagy szeretnél időpontot foglalni? Írj, és néhány napon belül visszajelzek!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Elérhetőség -->
        <div>
          <h3 class="font-serif text-2xl font-semibold text-heading mb-8">Elérhetőségeim</h3>
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    v-for="(d, i) in info.paths"
                    :key="i"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    :d="d"
                  />
                </svg>
              </div>
              <div>
                <p class="text-xs tracking-wider uppercase text-muted font-medium mb-1">{{ info.label }}</p>
                <a
                  v-if="info.href"
                  :href="info.href"
                  :target="info.external ? '_blank' : undefined"
                  :rel="info.external ? 'noopener noreferrer' : undefined"
                  class="text-text-main font-medium hover:text-primary-dark transition-colors"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-text-main font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Munkaidő -->
          <div id="munkaido" class="mt-10 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-line scroll-mt-28">
            <p class="text-sm font-semibold text-heading mb-3">Munkaidő</p>
            <div class="space-y-1.5 text-sm text-text-main/80">
              <div v-for="row in openingHours" :key="row.day" class="flex justify-between gap-4">
                <span>{{ row.day }}</span>
                <span :class="row.closed ? 'text-muted' : 'font-medium text-heading'">{{ row.hours }}</span>
              </div>
            </div>
            <p class="text-xs text-muted mt-4">
              A foglalkozások előre egyeztetett időpontban, online zajlanak.
            </p>
          </div>
        </div>

        <!-- Űrlap -->
        <div class="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-line">
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
                class="input-field"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-text-main mb-1.5">E-mail címed *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="anna@email.hu"
                class="input-field"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-text-main mb-1.5">Miben segíthetek?</label>
              <select id="subject" v-model="form.subject" class="input-field">
                <option value="">Válassz szolgáltatást…</option>
                <option value="logopedia">Logopédia</option>
                <option value="joga">Jógaoktatás</option>
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
                placeholder="Írd meg, miben segíthetek…"
                class="input-field resize-none"
              />
            </div>

            <label class="flex items-start gap-3 text-sm text-text-main/80">
              <input
                v-model="form.consent"
                type="checkbox"
                required
                class="mt-0.5 w-4 h-4 rounded border-line text-primary focus:ring-primary/40"
              />
              <span>
                Elolvastam és elfogadom az
                <RouterLink to="/adatkezelesi-tajekoztato" class="text-primary-dark underline hover:no-underline">
                  adatkezelési tájékoztatót
                </RouterLink>. *
              </span>
            </label>

            <button type="submit" class="btn-primary w-full text-center" :disabled="sending">
              {{ sending ? 'Küldés…' : 'Üzenet küldése' }}
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
import { ref } from 'vue'
import { openingHoursRows } from '../data/openingHours'
import { email as contactEmail, facebook } from '../data/contact'

const form = ref({ name: '', email: '', subject: '', message: '', consent: false })
const sending = ref(false)
const sent = ref(false)

function submitForm() {
  sending.value = true
  // TODO: éles indulás előtt bekötni (Netlify Forms / EmailJS / saját backend)
  setTimeout(() => {
    sending.value = false
    sent.value = true
    form.value = { name: '', email: '', subject: '', message: '', consent: false }
    setTimeout(() => { sent.value = false }, 5000)
  }, 800)
}

const contactInfo = [
  {
    label: 'E-mail',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    paths: ['M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
  },
  {
    label: 'Facebook',
    value: facebook.label,
    href: facebook.url,
    external: true,
    paths: ['M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.24-1.5 1.5-1.5H16.7V3.9A21 21 0 0014.3 3.8C12 3.8 10.5 5.2 10.5 7.8V10H7.8v3h2.7v8h3z'],
  },
  {
    label: 'Hogyan',
    value: 'Online, videóhívásban',
    paths: [
      'M15 10l4.55-2.28A1 1 0 0121 8.6v6.8a1 1 0 01-1.45.89L15 14',
      'M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    ],
  },
]

const openingHours = openingHoursRows
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-text-main
         placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30
         focus:border-primary transition-colors text-sm;
}
</style>
