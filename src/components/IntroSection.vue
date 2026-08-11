<template>
  <section id="bemutatkozas" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6">

      <div class="text-center mb-14">
        <p class="section-label">Bemutatkozás</p>
        <h2 class="section-title">Örülök, hogy itt vagy</h2>
        <div class="section-divider"></div>
      </div>

      <div class="max-w-3xl mx-auto space-y-5 text-text-main/85 leading-relaxed text-[17px]">
        <p>
          2018-ban végeztem az <strong class="font-semibold text-heading">Eötvös Loránd Tudományegyetem
          Bárczi Gusztáv Gyógypedagógiai Karán</strong> logopédia és szomatopedagógia szakirányon.
        </p>
        <p>
          Szakdolgozatomat a beszédfolyamatosság zavaraiból, a dadogás témaköréből írtam. Nagyon
          megérintett, hogy milyen szinten befolyásolhatja a lelki folyamatokat, a személyiségfejlődést
          egy-egy beszédzavar. Ezért mindig kiemelt figyelmet szentelek az esetlegesen már kialakult
          beszédfélelem (logofóbia) oldására, és a beszéd által adott felhőtlen, örömteli kapcsolódás
          megélésére.
        </p>
      </div>

      <!-- Főbb területek -->
      <div class="mt-16">
        <h3 class="font-serif text-2xl font-semibold text-heading text-center mb-3">
          Főbb területek, amelyekkel foglalkozom
        </h3>
        <div class="section-divider"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div
            v-for="area in areas"
            :key="area.title"
            class="flex items-start gap-4 bg-bg-soft rounded-2xl p-5 ring-1 ring-line"
          >
            <span class="w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-4 h-4 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p class="font-medium text-heading">{{ area.title }}</p>
              <p v-if="area.note" class="text-sm text-muted mt-1">{{ area.note }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const areas = [
  { title: 'Artikulációs terápia' },
  { title: 'Beszédértés, beszédészlelés fejlesztése' },
  { title: 'Nyelvi késés terápiája' },
  { title: 'Nyelvlökéses nyelés terápiája', note: '8–9 éves kortól javasolt' },
]
</script>
