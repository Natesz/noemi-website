<template>
  <section id="idopontok" class="py-16" style="background: #F4F4F6;">
    <div class="max-w-xl mx-auto px-6">
      <img
        :src="imageUrl"
        @error="imageUrl = '/idopontok1.jpg'"
        alt="Szabad időpontok online logopédiai foglalkozásokra"
        class="mx-auto rounded-2xl shadow-lg w-full"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const imageUrl = ref(cloudName
  ? `https://res.cloudinary.com/${cloudName}/image/upload/noemi-idopontok.jpg`
  : '/idopontok1.jpg')
</script>
