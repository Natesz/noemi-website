<template>
  <section id="rolam" class="py-24 bg-bg-soft">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

        <!-- Fotó -->
        <div class="flex justify-center md:justify-end order-1 md:order-none">
          <div class="relative">
            <div class="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <!-- Fotó placeholder – cseréld ki: <img src="/kepek/noemi.jpg" alt="Noémi" class="w-full h-full object-cover" /> -->
              <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, #C9E0EC, #B8A9CC);">
                <span class="font-serif text-6xl text-white/80 font-semibold">N</span>
              </div>
            </div>
            <!-- Dekoratív elem -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/50 -z-10" />
            <div class="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-secondary/30 -z-10" />
          </div>
        </div>

        <!-- Szöveg -->
        <div>
          <p class="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Rólam</p>
          <h2 class="font-serif text-3xl lg:text-4xl font-semibold text-heading mb-6 leading-snug">
            Hiszek abban, hogy mindenki megtalálhatja a saját egyensúlyát
          </h2>
          <div class="space-y-4 text-text-main/80 leading-relaxed">
            <p>
              Logopédusként és mozgásterapeuta szakemberként több éve kísérem végig ügyfeleim fejlődési útját. Legyen szó hangképzési nehézségekről, dadogásról, olvasási zavarokról vagy éppen relaxációs igényről – minden esetben személyre szabott megközelítéssel dolgozom.
            </p>
            <p>
              Mellette jógatanárként és masszőrként is dolgozom, mert mélyen hiszem, hogy a test és a lélek egyensúlya összefügg. Az évek során kialakult holisztikus szemléletem segít abban, hogy valóban egészséges és harmonikus életet élhess.
            </p>
            <p>
              Minden foglalkozásom bizalmas, ítéletmentes térben zajlik – ahol csak rád és a fejlődésedre figyelek.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <span v-for="tag in tags" :key="tag" class="text-xs font-medium bg-accent text-heading px-4 py-2 rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const tags = ['Logopédus', 'Jógatanár', 'Masszőr', 'Holisztikus szemlélet', 'Személyre szabott']
</script>
