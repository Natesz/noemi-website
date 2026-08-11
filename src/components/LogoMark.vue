<template>
  <!--
    Logó: hullám + száj.
    A felső vonal a hang/levegő hullámát, az alsó ív a mosolygó szájat rajzolja ki.
  -->
  <svg
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Noémi logó"
  >
    <defs>
      <linearGradient id="noemi-logo-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#C4E2F2" />
        <stop offset="100%" stop-color="#8DBAD4" />
      </linearGradient>
    </defs>

    <circle cx="22" cy="22" r="21" :fill="filled ? 'url(#noemi-logo-grad)' : 'none'" />
    <circle v-if="!filled" cx="22" cy="22" r="20.5" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".35" />

    <!-- hullám -->
    <path
      d="M8 17 C11 12.5 14.5 21.5 18 17 S24.5 12.5 28 17 S34 21.5 36.5 17"
      fill="none"
      :stroke="filled ? '#ffffff' : 'currentColor'"
      stroke-width="2"
      stroke-linecap="round"
      opacity=".9"
    />

    <!-- száj / mosoly -->
    <path
      d="M13 25 C16.5 31.5 27.5 31.5 31 25"
      fill="none"
      :stroke="filled ? '#ffffff' : 'currentColor'"
      stroke-width="2.6"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  /** true: babakék korong fehér vonalakkal · false: körvonalas, currentColor-ral */
  filled: { type: Boolean, default: true },
})
</script>
