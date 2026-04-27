<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(160deg, #EEF2F8 0%, #E8EBF5 40%, #EDE8F4 100%);">

    <!-- Dekoratív körök -->
    <div class="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20" style="background: radial-gradient(circle, #8DBAD4, transparent);" />
    <div class="absolute bottom-32 left-8 w-52 h-52 rounded-full opacity-15" style="background: radial-gradient(circle, #B8A9CC, transparent);" />

    <!-- Tartalom -->
    <div class="relative text-center px-6 pt-24 pb-32 max-w-3xl mx-auto">
      <p class="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">
        Logopédus · Jógatanár · Masszőr
      </p>

      <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-heading leading-tight mb-6">
        Szia, <em class="not-italic text-primary">Noémi</em> vagyok
      </h1>

      <p class="text-lg sm:text-xl text-text-main/70 leading-relaxed max-w-xl mx-auto mb-10">
        Segítek megtalálni az egyensúlyt – a hangodban, a mozgásodban és a testedben.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#kapcsolat" class="btn-primary">
          Időpontot foglalok
        </a>
        <a href="#rolam" class="btn-outline">
          Tudj meg többet
        </a>
      </div>
    </div>

    <!-- Hullám alul -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-16 lg:h-20">
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#F4F4F6" />
      </svg>
    </div>
  </section>
</template>
