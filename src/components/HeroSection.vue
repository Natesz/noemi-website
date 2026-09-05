<template>
  <section
    class="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32"
    style="background: linear-gradient(160deg, #FFFFFF 0%, #EFF6FB 45%, #E7EDF2 100%);"
  >
    <!-- Dekoratív körök -->
    <div class="absolute -top-10 right-0 w-80 h-80 rounded-full opacity-40 pointer-events-none"
         style="background: radial-gradient(circle, #C4E2F2, transparent 70%);" />
    <div class="absolute bottom-24 -left-10 w-64 h-64 rounded-full opacity-40 pointer-events-none"
         style="background: radial-gradient(circle, #DDE4EA, transparent 70%);" />

    <div class="relative max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Szöveg -->
        <div class="text-center md:text-left order-2 md:order-1">
          <p class="section-label">Logopédus · Szomatopedagógus · Jógaoktató · Masszőr</p>

          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading leading-tight mb-6">
            Szia, <em class="not-italic text-primary">Noémi</em> vagyok
          </h1>

          <p class="text-lg text-text-main/75 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Hiszek benne, hogy a beszéd örömteli kapcsolódás. Logopédusként, jógaoktatóként és
            gyógymasszőrként abban segítek, hogy a hangod és a tested is megtalálja az egyensúlyát.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <RouterLink :to="{ path: '/', hash: '#foglalas' }" class="btn-primary">
              Időpontot foglalok
            </RouterLink>
            <a href="#bemutatkozas" class="btn-outline">
              Bemutatkozás
            </a>
          </div>
        </div>

        <!-- Fotó -->
        <div class="flex justify-center md:justify-end order-1 md:order-2">
          <div class="relative">
            <img
              src="/noemi.jpg"
              alt="Noémi, logopédus és szomatopedagógus"
              class="relative z-10 w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[25rem] object-cover object-top rounded-[2rem] shadow-xl ring-4 ring-white"
            />
            <!-- Dekoratív elemek -->
            <div class="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-primary-soft" />
            <div class="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-line" />
          </div>
        </div>

      </div>
    </div>

    <!-- Hullám alul -->
    <div class="absolute bottom-0 left-0 right-0 leading-none">
      <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12 lg:h-16 block">
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#FFFFFF" />
      </svg>
    </div>
  </section>
</template>
