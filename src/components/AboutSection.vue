<template>
  <section id="rolam" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="section-label">Rólam</p>
        <h2 class="section-title">Ahogyan dolgozom</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Elfogadó, játékos térben, a saját tempódhoz igazodva – mert a fejlődéshez először
          biztonságra van szükség.
        </p>
      </div>

      <!-- Részletesebb leírás -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-start mb-20">
        <!-- Fotó -->
        <div class="md:col-span-2 flex justify-center md:justify-start">
          <div class="relative">
            <img
              src="/noemi.jpg"
              alt="Noémi logopédus"
              class="relative z-10 w-60 h-72 sm:w-64 sm:h-80 object-cover object-top rounded-[2rem] shadow-lg ring-4 ring-white"
            />
            <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary-soft" />
          </div>
        </div>

        <!-- Szöveg -->
        <div class="md:col-span-3 space-y-4 text-text-main/85 leading-relaxed">
          <p>
            A foglalkozásaimat mindig alapos állapotfelméréssel kezdem: megismerem a beszédszervek
            működését, a hangképzést, a beszédészlelést és -értést, és azt is, hogy a mindennapokban
            hol jelent ez nehézséget. Erre épül a személyre szabott terápiás terv, amelyet közösen,
            reális kis lépésekre bontunk.
          </p>
          <p>
            Gyerekeknél a játék a legfontosabb munkaeszközöm – így a gyakorlás nem feladat lesz, hanem
            közös élmény. Felnőtteknél a tudatosításra és az otthon is könnyen beépíthető gyakorlatokra
            helyezem a hangsúlyt. Mindkét esetben szorosan együtt dolgozom a családdal: a látható
            fejlődés kulcsa a következetes, de nyomásmentes otthoni gyakorlás.
          </p>
          <p>
            A szomatopedagógiai, jógás és gyógymasszőri végzettségem miatt a beszédet sosem önmagában
            látom. A légzés, a testtartás, az izomtónus és a feszültségszint mindegyike beleszól abba,
            hogyan szólalunk meg – ezért a terápiába szükség szerint beépítek légzésgyakorlatokat,
            lazító és tartásjavító elemeket is.
          </p>
          <p>
            Ami a legfontosabb: a beszédfélelem oldása. Ha valaki megtapasztalja, hogy nyugodtan,
            ítélkezés nélkül szólalhat meg, onnantól a fejlődés is sokkal könnyebben megy. Minden
            foglalkozásom bizalmas, ítéletmentes térben zajlik.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

        <!-- Továbbképzések -->
        <div class="lg:col-span-3">
          <h3 class="font-serif text-2xl font-semibold text-heading mb-2">Továbbképzések</h3>
          <p class="text-sm text-muted mb-8">Folyamatosan tanulok, hogy a legfrissebb módszerekkel dolgozhassam.</p>

          <ol class="relative border-l border-line ml-2 space-y-7">
            <li v-for="t in visibleTrainings" :key="t.date + t.title" class="relative pl-7">
              <span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-bg-soft" />
              <p class="text-xs font-semibold tracking-wider text-primary-dark mb-1">{{ t.date }}</p>
              <p class="text-text-main/90 leading-snug">
                <span v-if="t.trainer" class="font-medium text-heading">{{ t.trainer }}: </span>{{ t.title }}
              </p>
            </li>
          </ol>

          <button
            v-if="trainings.length > limit"
            @click="expanded = !expanded"
            class="mt-8 ml-2 text-sm font-medium text-primary-dark hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            {{ expanded ? 'Kevesebb mutatása' : `Mind a ${trainings.length} továbbképzés` }}
            <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': expanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Végzettségek -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-line">
            <h3 class="font-serif text-2xl font-semibold text-heading mb-6">Végzettségeim</h3>
            <ul class="space-y-4">
              <li v-for="q in qualifications" :key="q.title" class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <div>
                  <p class="text-text-main font-medium leading-snug">{{ q.title }}</p>
                  <p v-if="q.note" class="text-sm text-muted mt-0.5">{{ q.note }}</p>
                </div>
              </li>
            </ul>

            <div class="mt-8 pt-6 border-t border-line flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="text-xs font-medium bg-primary-soft text-heading px-3 py-1.5 rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const limit = 6
const expanded = ref(false)

const trainings = [
  { date: '2026. 05.', trainer: 'Kelemen Márta', title: 'A hangképzési zavarok holisztikus megközelítése és a félig zárt fonációs technikák (csőfonáció) a logopédiai intervencióban' },
  { date: '2026. 02.', trainer: 'Cseh-Márton Réka', title: 'Nyelvlökéses nyelés a gyakorlatban 1–2.' },
  { date: '2025. 08.', trainer: '', title: 'A bizalom megteremtése a beszélgetésekben' },
  { date: '2025. 06.', trainer: '', title: 'Koragyermekkori dadogás szupervízió – Fehérné Kovács Zsuzsanna vezetésével' },
  { date: '2024. 03.', trainer: 'Bognár Judit', title: 'Dadogásterápia' },
  { date: '2024. 02.', trainer: 'Balás Eszter', title: 'Beszédre-fel: Légzés' },
  { date: '2023. 11.', trainer: 'Kovács Ágnes', title: 'Beszédépítő workshop' },
  { date: '2023. 05.', trainer: 'S. Peternék Magdolna', title: 'Artikulációs praktikák a gyakorlatban' },
  { date: '2023. 03.', trainer: 'Havadi-Nagy Mariann', title: 'BSZM és BHE-képzés (A beszédszervi működés és a beszédhangejtés vizsgálata)' },
  { date: '2023. 02.', trainer: 'S. Peternék Magdolna', title: 'Mindig R-re vágytam' },
  { date: '2023. 02.', trainer: 'Hang-lépcső', title: 'A hangtani tudatosság fejlesztése' },
  { date: '2022. 10.', trainer: 'Banó Zsuzsanna', title: 'Nyelvlökéses nyelés, Állkapocs tréning' },
]

const visibleTrainings = computed(() =>
  expanded.value ? trainings : trainings.slice(0, limit)
)

const qualifications = [
  { title: 'Logopédus', note: 'ELTE Bárczi Gusztáv Gyógypedagógiai Kar, 2018' },
  { title: 'Gyógypedagógus – szomatopedagógus', note: 'ELTE Bárczi Gusztáv Gyógypedagógiai Kar, 2018' },
  { title: 'Gyógymasszőr' },
  { title: 'Hatha jóga oktató' },
  { title: 'Yin jógaoktató' },
  { title: 'Női jógaoktató' },
]

const tags = ['Holisztikus szemlélet', 'Személyre szabott terápia', 'Ítéletmentes tér', 'Játékos gyakorlás']
</script>
