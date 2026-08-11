<template>
  <Transition name="cookie-fade">
    <div
      v-if="bannerVisible"
      class="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
      role="dialog"
      aria-label="Sütikezelés"
      aria-live="polite"
    >
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl ring-1 ring-line p-6 sm:p-7">
        <div class="flex flex-col sm:flex-row sm:items-start gap-5">
          <div class="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M21 12a9 9 0 11-9-9c0 1.5 1 2 2 2s1 2 2.5 2S18 6 18 7.5s2 1.5 3 1.5c0 1 0 2 0 3z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 10h.01M13 15h.01M8 15.5h.01M15.5 10.5h.01" />
            </svg>
          </div>

          <div class="flex-1">
            <h2 class="font-serif text-lg font-semibold text-heading mb-2">Sütikezelés</h2>
            <p class="text-sm text-text-main/80 leading-relaxed">
              Az oldal működéséhez feltétlenül szükséges sütiket használok, illetve – a
              hozzájárulásoddal – statisztikai sütiket, hogy lássam, mely tartalmak hasznosak
              a látogatóknak. A döntésedet később a lábléc
              <span class="font-medium text-heading">„Sütibeállítások”</span> pontjában módosíthatod.
              Részletek a
              <RouterLink to="/suti" class="text-primary-dark underline hover:no-underline">
                sütikezelési tájékoztatóban
              </RouterLink>.
            </p>
          </div>

          <div class="flex flex-col gap-2.5 sm:w-44 flex-shrink-0">
            <button @click="accept" class="btn-primary text-sm py-2.5 px-4 text-center">
              Elfogadom
            </button>
            <button @click="reject" class="btn-outline text-sm py-2 px-4 text-center">
              Csak a szükségeset
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useCookieConsent } from '../composables/useCookieConsent'

const { bannerVisible, accept, reject } = useCookieConsent()
</script>

<style scoped>
.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
