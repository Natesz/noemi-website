<template>
  <section id="aktualitasok" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="section-label">Aktualitások</p>
        <h2 class="section-title">Szabad időpontok</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Itt mindig a legfrissebb szabad időpontjaimat találod. Ha egyik sem felel meg,
          írj rám – igyekszem alkalmazkodni.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

        <!-- Időpontok képe -->
        <div class="lg:col-span-3">
          <img
            :src="imageUrl"
            @error="imageUrl = '/idopontok1.jpg'"
            alt="Szabad időpontok logopédiai foglalkozásokra"
            class="w-full rounded-2xl shadow-md ring-1 ring-line"
          />
          <p class="text-xs text-muted mt-3 text-center">
            A táblázat tájékoztató jellegű, a foglalás visszaigazolás után válik véglegessé.
          </p>
        </div>

        <!-- Időpontkérés menete -->
        <div class="lg:col-span-2">
          <div id="idopontkeres" class="bg-bg-soft rounded-2xl p-8 ring-1 ring-line scroll-mt-28">
            <h3 class="font-serif text-2xl font-semibold text-heading mb-6">Így tudsz időpontot kérni</h3>

            <ol class="space-y-5">
              <li v-for="(step, i) in steps" :key="step.title" class="flex items-start gap-4">
                <span class="w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  {{ i + 1 }}
                </span>
                <div>
                  <p class="font-medium text-heading leading-snug">{{ step.title }}</p>
                  <p class="text-sm text-text-main/70 mt-1 leading-relaxed">{{ step.text }}</p>
                </div>
              </li>
            </ol>

            <RouterLink :to="{ path: '/', hash: '#foglalas' }" class="btn-primary w-full text-center mt-8">
              Időpontot foglalok
            </RouterLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const imageUrl = ref(cloudName
  ? `https://res.cloudinary.com/${cloudName}/image/upload/noemi-idopontok.jpg`
  : '/idopontok1.jpg')

const steps = [
  {
    title: 'Válassz időpontot',
    text: 'Nézd meg a szabad időpontokat, és jelöld meg, melyik lenne a legjobb neked.',
  },
  {
    title: 'Írj nekem',
    text: 'Töltsd ki a kapcsolati űrlapot, vagy keress e-mailben – írd le pár szóban, miben szeretnél segítséget.',
  },
  {
    title: 'Visszajelzek',
    text: 'Néhány napon belül válaszolok, és véglegesítjük a foglalkozás időpontját.',
  },
]
</script>
