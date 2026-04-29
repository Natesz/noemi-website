<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">

    <div v-if="!authenticated" class="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
      <h1 class="text-xl font-semibold text-gray-800 mb-6 text-center">Admin belépés</h1>
      <form @submit.prevent="checkPassword">
        <input
          v-model="password"
          type="password"
          placeholder="Jelszó"
          class="w-full border rounded-lg px-4 py-2 mb-3 outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p v-if="wrongPassword" class="text-red-500 text-sm mb-3">Hibás jelszó.</p>
        <button type="submit" class="w-full bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 transition">
          Belépés
        </button>
      </form>
    </div>

    <div v-else class="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
      <h1 class="text-xl font-semibold text-gray-800 mb-1 text-center">Időpontok frissítése</h1>
      <p class="text-gray-500 text-sm text-center mb-6">Tölts fel egy új képet az időpontokról</p>

      <div v-if="!uploadSuccess">
        <div
          class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-4 cursor-pointer hover:border-blue-400 transition"
          @click="fileInput.click()"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <p v-if="!selectedFile" class="text-gray-400 text-sm">Kattints vagy húzd ide a képet</p>
          <p v-else class="text-gray-700 font-medium text-sm">{{ selectedFile.name }}</p>
        </div>
        <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleFileSelect" />

        <p v-if="errorMessage" class="text-red-500 text-sm mb-3">{{ errorMessage }}</p>

        <button
          @click="uploadImage"
          :disabled="!selectedFile || uploading"
          class="w-full bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ uploading ? 'Feltöltés folyamatban...' : 'Feltöltés' }}
        </button>
      </div>

      <div v-else class="text-center">
        <div class="text-green-500 text-5xl mb-3">✓</div>
        <p class="text-gray-700 font-medium">Kép sikeresen feltöltve!</p>
        <p class="text-gray-500 text-sm mt-1">Néhány percen belül megjelenik az oldalon.</p>
        <button @click="reset" class="mt-4 text-blue-500 text-sm hover:underline">Újabb feltöltés</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')
const authenticated = ref(false)
const wrongPassword = ref(false)

const fileInput = ref(null)
const selectedFile = ref(null)
const uploading = ref(false)
const uploadSuccess = ref(false)
const errorMessage = ref('')

function checkPassword() {
  if (password.value === import.meta.env.VITE_ADMIN_PASSWORD) {
    authenticated.value = true
    wrongPassword.value = false
  } else {
    wrongPassword.value = true
  }
}

function handleFileSelect(e) {
  selectedFile.value = e.target.files[0] || null
  errorMessage.value = ''
}

function handleDrop(e) {
  selectedFile.value = e.dataTransfer.files[0] || null
  errorMessage.value = ''
}

async function uploadImage() {
  if (!selectedFile.value) return
  uploading.value = true
  errorMessage.value = ''

  const formData = new FormData()
  formData.append('file', selectedFile.value)
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
  formData.append('public_id', 'noemi-idopontok')
  formData.append('overwrite', 'true')

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    )
    if (!res.ok) throw new Error('Upload failed')
    uploadSuccess.value = true
  } catch {
    errorMessage.value = 'Feltöltési hiba. Ellenőrizd az internet-kapcsolatot és próbáld újra.'
  } finally {
    uploading.value = false
  }
}

function reset() {
  selectedFile.value = null
  uploadSuccess.value = false
  errorMessage.value = ''
}
</script>
