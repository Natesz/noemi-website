<template>
  <!-- PHASE: password -->
  <div
    v-if="phase === 'password'"
    class="min-h-screen flex items-center justify-center"
    style="background: linear-gradient(135deg, #1a1025 0%, #0d1520 100%)"
  >
    <div
      class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 w-full max-w-sm"
      style="box-shadow: 0 0 60px rgba(184,169,204,0.2)"
    >
      <h1 class="font-serif text-white text-2xl text-center mb-2">✨</h1>
      <p class="text-white/50 text-sm text-center mb-6 tracking-widest uppercase">titkos oldal</p>
      <form @submit.prevent="checkPassword">
        <input
          v-model="passwordInput"
          type="password"
          placeholder="jelszó"
          class="w-full rounded-lg px-4 py-2.5 mb-3 outline-none text-white placeholder-white/30 bg-white/10 border border-white/20 focus:ring-2 focus:ring-secondary/50"
        />
        <p v-if="wrongPassword" class="text-red-400 text-sm mb-3 text-center">Helytelen jelszó.</p>
        <button
          type="submit"
          class="w-full rounded-lg py-2.5 font-medium transition text-white"
          style="background-color: #B8A9CC"
        >
          Belépés
        </button>
      </form>
    </div>
  </div>

  <!-- PHASE: sex modal -->
  <div
    v-if="phase === 'modal'"
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background: rgba(0,0,0,0.75)"
  >
    <div
      ref="modalCard"
      class="bg-white rounded-2xl p-10 w-full max-w-sm relative overflow-hidden"
      style="min-height: 300px; box-shadow: 0 25px 60px rgba(0,0,0,0.3)"
    >
      <h2 class="font-serif text-4xl text-center mb-2" style="color: #2A3547">ma sex? 😏</h2>
      <p class="text-center text-gray-400 text-sm mb-8">válassz óvatosan</p>

      <div class="flex justify-center">
        <button
          @click="handleIgen"
          class="rounded-full px-8 py-3 text-white font-medium transition hover:scale-105"
          style="background-color: #e879a0"
        >
          Igen ❤️
        </button>
      </div>

      <button
        ref="nemButton"
        @mouseenter="moveNem"
        @touchstart.prevent="moveNem"
        :style="nemStyle"
        class="rounded-full border-2 px-6 py-2 text-sm font-medium"
        style="border-color: #B8A9CC; color: #B8A9CC"
      >
        Nem
      </button>
    </div>
  </div>

  <!-- PHASE: success modal -->
  <div
    v-if="phase === 'success'"
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background: rgba(0,0,0,0.75)"
  >
    <div
      class="bg-white rounded-2xl p-10 w-full max-w-sm text-center"
      style="box-shadow: 0 25px 60px rgba(0,0,0,0.3)"
    >
      <div class="text-5xl mb-5">❤️</div>
      <p class="font-serif text-xl leading-relaxed mb-8" style="color: #2A3547">{{ successMessage }}</p>
      <button
        @click="phase = 'calendar'"
        class="rounded-full px-10 py-3 text-white font-medium transition hover:scale-105"
        style="background-color: #e879a0"
      >
        OK
      </button>
    </div>
  </div>

  <!-- PHASE: calendar -->
  <div
    v-if="phase === 'calendar'"
    class="min-h-screen py-10 px-4"
    style="background: linear-gradient(135deg, #fff0f5 0%, #f5f0ff 50%, #f0f5ff 100%)"
  >
    <CalendarMonth :year="2026" :month="7" :storage="storage" @add="addCustomEvent" @open="openEventModal" @move="moveEvent" />
    <CalendarMonth :year="2026" :month="8" :storage="storage" @add="addCustomEvent" @open="openEventModal" @move="moveEvent" />
  </div>

  <!-- Event detail modal -->
  <div
    v-if="eventModal"
    class="fixed inset-0 flex items-center justify-center z-50 px-4"
    style="background: rgba(0,0,0,0.6)"
    @click.self="closeEventModal"
  >
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
      <!-- Header -->
      <div class="px-6 pt-6 pb-4" style="background: linear-gradient(135deg, #fff0f5 0%, #ede8f9 100%)">
        <h3 class="font-serif text-xl" style="color: #2A3547">{{ eventModal.event.text }}</h3>
        <p class="text-xs mt-1" style="color: #B8A9CC">{{ formatEventDate(eventModal.dateKey) }}</p>
      </div>

      <!-- Body -->
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="text-xs font-semibold uppercase tracking-wide mb-1 block" style="color: #B8A9CC">Leírás</label>
          <textarea
            v-model="modalDesc"
            rows="3"
            placeholder="Adj hozzá leírást..."
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
            style="color: #3D4A5C"
          ></textarea>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wide mb-1 block" style="color: #B8A9CC">Ár (Ft)</label>
          <div class="relative">
            <input
              v-model="modalPrice"
              type="number"
              placeholder="0"
              min="0"
              class="w-full rounded-xl border border-gray-200 px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-secondary/50"
              style="color: #3D4A5C"
            />
            <span class="absolute right-3 top-2 text-sm text-gray-400">Ft</span>
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wide mb-2 block" style="color: #B8A9CC">Kinek szól</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 cursor-pointer text-sm" style="color: #3D4A5C">
              <input type="checkbox" v-model="modalMale" class="w-4 h-4" />
              <svg width="16" height="16" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="4" fill="#000" />
                <path d="M7 21 L7 13 Q7 9 12 9 Q17 9 17 13 L17 21 Z" fill="#000" />
              </svg>
              Atesz
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-sm" style="color: #3D4A5C">
              <input type="checkbox" v-model="modalFemale" class="w-4 h-4" />
              <svg width="16" height="16" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="4" fill="#000" />
                <path d="M12 9 L18 21 L6 21 Z" fill="#000" />
              </svg>
              Noémi
            </label>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-6 pb-6 flex items-center justify-between gap-3">
        <button
          @click="deleteFromModal"
          class="rounded-full px-5 py-2 text-sm font-medium border-2 border-red-300 text-red-400 hover:bg-red-50 transition"
        >
          Törlés
        </button>
        <div class="flex gap-2">
          <button
            @click="closeEventModal"
            class="rounded-full px-5 py-2 text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 transition"
          >
            Mégse
          </button>
          <button
            @click="saveEventModal"
            class="rounded-full px-6 py-2 text-sm font-medium text-white transition hover:scale-105"
            style="background-color: #B8A9CC"
          >
            Mentés
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

// ── Fázis ──────────────────────────────────────────────────────────────────
const phase = ref('password')

// ── Fázis 1 – Jelszó ───────────────────────────────────────────────────────
const passwordInput = ref('')
const wrongPassword = ref(false)

function checkPassword() {
  if (passwordInput.value === 'nyeles2') {
    wrongPassword.value = false
    syncPassword.value = passwordInput.value
    phase.value = 'modal'
    nextTick(() => initNemPosition())
    fetchRemoteStorage()
  } else {
    wrongPassword.value = true
  }
}

// ── Fázis 2 – Sex modal / Nem gomb ─────────────────────────────────────────
const modalCard = ref(null)
const nemButton = ref(null)
const nemX = ref(0)
const nemY = ref(0)

const nemStyle = computed(() => ({
  position: 'absolute',
  left: `${nemX.value}px`,
  top: `${nemY.value}px`,
}))

function initNemPosition() {
  const card = modalCard.value
  const btn = nemButton.value
  if (!card || !btn) return
  nemX.value = card.offsetWidth / 2 + 12
  nemY.value = card.offsetHeight - btn.offsetHeight - 48
}

function moveNem() {
  const card = modalCard.value
  const btn = nemButton.value
  if (!card || !btn) return
  const padding = 12
  const safeMaxX = card.offsetWidth - btn.offsetWidth - padding
  const safeMaxY = card.offsetHeight - btn.offsetHeight - padding
  nemX.value = padding + Math.random() * (safeMaxX - padding)
  nemY.value = padding + Math.random() * (safeMaxY - padding)
}

function handleIgen() {
  phase.value = 'success'
}

// ── Fázis 3 – Success üzenet ───────────────────────────────────────────────
const HUNGARIAN_MONTHS = [
  'január', 'február', 'március', 'április', 'május', 'június',
  'július', 'augusztus', 'szeptember', 'október', 'november', 'december',
]
const NOW = new Date()
const successMessage = computed(() =>
  `Szuper, akkor ${NOW.getFullYear()}. ${HUNGARIAN_MONTHS[NOW.getMonth()]} ${NOW.getDate()}. este sex ❤️`
)

// ── Tárolás (localStorage cache + szerveroldali szinkron) ──────────────────
function loadStorage() {
  try {
    return JSON.parse(localStorage.getItem('titkos-events') || '{}')
  } catch {
    return {}
  }
}

const storage = ref(loadStorage())
const syncPassword = ref('')

async function fetchRemoteStorage() {
  try {
    const res = await fetch(`/api/titkos-events?password=${encodeURIComponent(syncPassword.value)}`)
    if (!res.ok) return
    const remote = await res.json()
    if (remote && Object.keys(remote).length > 0) {
      storage.value = remote
      localStorage.setItem('titkos-events', JSON.stringify(remote))
    } else if (Object.keys(storage.value).length > 0) {
      // Első szinkron: a más eszközön még csak helyben létező adatokat felküldjük.
      pushRemoteStorage(storage.value)
    }
  } catch {
    // Nincs internet / hiba esetén marad a helyi (localStorage) állapot.
  }
}

function pushRemoteStorage(newVal) {
  fetch('/api/titkos-events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: syncPassword.value, data: newVal }),
  }).catch(() => {})
}

function persistStorage(newVal) {
  storage.value = newVal
  localStorage.setItem('titkos-events', JSON.stringify(newVal))
  pushRemoteStorage(newVal)
}

function addCustomEvent(dateKey, text) {
  if (!text.trim()) return
  const s = JSON.parse(JSON.stringify(storage.value))
  if (!s.customEvents) s.customEvents = {}
  if (!s.customEvents[dateKey]) s.customEvents[dateKey] = []
  s.customEvents[dateKey].push({ id: Date.now().toString(36), text: text.trim() })
  persistStorage(s)
}

function removeEvent(dateKey, eventId, isDefault) {
  const s = JSON.parse(JSON.stringify(storage.value))
  if (isDefault) {
    if (!s.removedDefaults) s.removedDefaults = []
    s.removedDefaults.push(eventId)
  } else {
    const list = s.customEvents?.[dateKey] || []
    if (!s.customEvents) s.customEvents = {}
    s.customEvents[dateKey] = list.filter(e => e.id !== eventId)
  }
  persistStorage(s)
}

function moveEvent({ fromKey, toKey, eventId, isDefault }) {
  if (!fromKey || !toKey || fromKey === toKey) return
  const s = JSON.parse(JSON.stringify(storage.value))
  if (isDefault) {
    if (!s.eventDateOverrides) s.eventDateOverrides = {}
    s.eventDateOverrides[eventId] = toKey
  } else {
    const fromList = s.customEvents?.[fromKey] || []
    const idx = fromList.findIndex(e => e.id === eventId)
    if (idx === -1) return
    const [moved] = fromList.splice(idx, 1)
    if (!s.customEvents) s.customEvents = {}
    s.customEvents[fromKey] = fromList
    if (!s.customEvents[toKey]) s.customEvents[toKey] = []
    s.customEvents[toKey].push(moved)
  }
  persistStorage(s)
}

// ── Event detail modal ──────────────────────────────────────────────────────
const eventModal = ref(null)   // { dateKey, event } | null
const modalDesc = ref('')
const modalPrice = ref('')
const modalMale = ref(false)
const modalFemale = ref(false)

const HUNGARIAN_MONTHS_MODAL = HUNGARIAN_MONTHS
const DAY_NAMES = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']

function formatEventDate(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return `${year}. ${HUNGARIAN_MONTHS_MODAL[month - 1]} ${day}. · ${DAY_NAMES[d.getDay()]}`
}

function openEventModal({ dateKey, event }) {
  eventModal.value = { dateKey, event }
  modalDesc.value = event.description || ''
  modalPrice.value = event.price ? String(event.price) : ''
  modalMale.value = !!event.male
  modalFemale.value = !!event.female
}

function closeEventModal() {
  eventModal.value = null
  modalDesc.value = ''
  modalPrice.value = ''
  modalMale.value = false
  modalFemale.value = false
}

function saveEventModal() {
  if (!eventModal.value) return
  const { dateKey, event } = eventModal.value
  const price = modalPrice.value ? parseInt(String(modalPrice.value).replace(/\D/g, ''), 10) || null : null
  const description = modalDesc.value.trim()
  const male = modalMale.value
  const female = modalFemale.value

  const s = JSON.parse(JSON.stringify(storage.value))

  if (event.isDefault) {
    if (!s.eventOverrides) s.eventOverrides = {}
    s.eventOverrides[event.id] = { description, male, female, ...(price ? { price } : {}) }
  } else {
    const list = s.customEvents?.[dateKey] || []
    const idx = list.findIndex(e => e.id === event.id)
    if (idx !== -1) {
      list[idx] = { ...list[idx], description, male, female, ...(price ? { price } : {}) }
      if (!s.customEvents) s.customEvents = {}
      s.customEvents[dateKey] = list
    }
  }

  persistStorage(s)
  closeEventModal()
}

function deleteFromModal() {
  if (!eventModal.value) return
  const { dateKey, event } = eventModal.value
  removeEvent(dateKey, event.id, event.isDefault || false)
  closeEventModal()
}
</script>

<script>
import { defineComponent, ref as vref, h } from 'vue'

const DEFAULT_EVENTS = {
  '2026-07-02': [{ id: 'def-2026-07-02-0', text: 'Salsa este', isDefault: true }],
  '2026-07-05': [{ id: 'def-2026-07-05-0', text: 'Családállítás', isDefault: true }],
  '2026-07-06': [{ id: 'def-2026-07-06-0', text: 'Naplemente nézés + picnic', isDefault: true }],
  '2026-07-09': [{ id: 'def-2026-07-09-0', text: 'Salsa este', isDefault: true }],
  '2026-07-12': [{ id: 'def-2026-07-12-0', text: 'Csúszda pálya – Sátoraljaújhely', isDefault: true }],
  '2026-07-15': [{ id: 'def-2026-07-15-0', text: 'Szülinap', isDefault: true }],
  '2026-07-16': [{ id: 'def-2026-07-16-0', text: 'Salsa este', isDefault: true }],
  '2026-07-18': [{ id: 'def-2026-07-18-0', text: 'Balatonátúszás', isDefault: true }],
  '2026-07-19': [{ id: 'def-2026-07-19-0', text: 'Szülinapi program', isDefault: true }],
  '2026-07-20': [{ id: 'def-2026-07-20-0', text: 'Bicajtúra (Dunakanyar)', isDefault: true }],
  '2026-07-22': [{ id: 'def-2026-07-22-0', text: 'Hangfürdő este', isDefault: true }],
  '2026-07-23': [{ id: 'def-2026-07-23-0', text: 'Salsa este', isDefault: true }],
  '2026-07-26': [{ id: 'def-2026-07-26-0', text: 'Családállítás', isDefault: true }],
  '2026-07-30': [{ id: 'def-2026-07-30-0', text: 'Salsa este', isDefault: true }],
  '2026-08-11': [{ id: 'def-2026-08-11-0', text: 'Hullócsillag nézés – Perseida csúcs!', isDefault: true }],
  '2026-08-22': [{ id: 'def-2026-08-22-0', text: 'Wellness 1. nap', isDefault: true }],
  '2026-08-23': [{ id: 'def-2026-08-23-0', text: 'Wellness 2. nap', isDefault: true }],
  '2026-08-24': [{ id: 'def-2026-08-24-0', text: 'Wellness hazaút', isDefault: true }],
  '2026-08-29': [{ id: 'def-2026-08-29-0', text: 'Naplemente – nyárbúcsúztató', isDefault: true }],
  '2026-08-30': [{ id: 'def-2026-08-30-0', text: 'Születésállítás', isDefault: true }],
}

const ALL_DEFAULT_EVENTS = Object.entries(DEFAULT_EVENTS).flatMap(([defaultKey, evs]) =>
  evs.map(e => ({ ...e, defaultKey }))
)

function iconVNode(kind, size) {
  const s = size || 12
  if (kind === 'male') {
    return h('svg', { width: s, height: s, viewBox: '0 0 24 24', style: 'display:inline-block;vertical-align:middle;flex-shrink:0' }, [
      h('circle', { cx: 12, cy: 6, r: 4, fill: '#000' }),
      h('path', { d: 'M7 21 L7 13 Q7 9 12 9 Q17 9 17 13 L17 21 Z', fill: '#000' }),
    ])
  }
  return h('svg', { width: s, height: s, viewBox: '0 0 24 24', style: 'display:inline-block;vertical-align:middle;flex-shrink:0' }, [
    h('circle', { cx: 12, cy: 6, r: 4, fill: '#000' }),
    h('path', { d: 'M12 9 L18 21 L6 21 Z', fill: '#000' }),
  ])
}

const WEEKDAYS = ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V']
const MONTH_NAMES = ['', 'Január', 'Február', 'Március', 'Április', 'Május', 'Június',
  'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December']
const WELLNESS_KEYS = new Set(['2026-08-22', '2026-08-23', '2026-08-24'])

function buildMonthGrid(year, month) {
  const rawFirst = new Date(year, month - 1, 1).getDay()
  const firstMon = rawFirst === 0 ? 6 : rawFirst - 1
  const days = new Date(year, month, 0).getDate()
  const cells = []
  for (let i = 0; i < firstMon; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)
  return cells
}

function toDateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function getEventsForDay(key, storageVal) {
  const removed = storageVal.removedDefaults || []
  const overrides = storageVal.eventOverrides || {}
  const dateOverrides = storageVal.eventDateOverrides || {}
  const defaults = ALL_DEFAULT_EVENTS
    .filter(e => !removed.includes(e.id))
    .filter(e => (dateOverrides[e.id] || e.defaultKey) === key)
    .map(e => ({ ...e, ...(overrides[e.id] || {}) }))
  const custom = storageVal.customEvents?.[key] || []
  return [...defaults, ...custom]
}

const CalendarMonth = defineComponent({
  name: 'CalendarMonth',
  props: { year: Number, month: Number, storage: Object },
  emits: ['add', 'open', 'move'],
  setup(props, { emit }) {
    const selectedDay = vref(null)
    const newEventText = vref('')
    const dragOverKey = vref(null)
    const todayStr = new Date().toISOString().slice(0, 10)

    function toggleDay(key) {
      selectedDay.value = selectedDay.value === key ? null : key
      newEventText.value = ''
    }

    function confirmAdd(key) {
      if (newEventText.value.trim()) {
        emit('add', key, newEventText.value)
        newEventText.value = ''
        selectedDay.value = null
      }
    }

    function onEventDragStart(e, key, ev) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', JSON.stringify({ fromKey: key, eventId: ev.id, isDefault: !!ev.isDefault }))
    }

    function onDayDrop(e, toKey) {
      e.preventDefault()
      dragOverKey.value = null
      let data
      try {
        data = JSON.parse(e.dataTransfer.getData('text/plain'))
      } catch {
        return
      }
      if (!data || !data.eventId) return
      emit('move', { ...data, toKey })
    }

    return () => {
      const rawFirst = new Date(props.year, props.month - 1, 1).getDay()
      const firstMon = rawFirst === 0 ? 6 : rawFirst - 1
      const grid = buildMonthGrid(props.year, props.month)

      return h('div', { class: 'max-w-3xl mx-auto mb-10 bg-white/60 backdrop-blur rounded-2xl shadow-sm overflow-hidden' }, [
        // Month heading
        h('div', {
          class: 'px-6 py-4 text-center',
          style: 'background: linear-gradient(135deg, #f9e8ef 0%, #ede8f9 100%)'
        }, [
          h('h2', { class: 'font-serif text-2xl', style: 'color: #2A3547' },
            `${MONTH_NAMES[props.month]} ${props.year}`)
        ]),

        // Weekday headers
        h('div', { class: 'grid grid-cols-7 border-b border-gray-100' },
          WEEKDAYS.map(w =>
            h('div', { class: 'text-center font-semibold py-2', style: 'color: #B8A9CC; font-size: 0.95rem' }, w)
          )
        ),

        // Day grid
        h('div', { class: 'grid grid-cols-7' },
          grid.map((day) => {
            if (!day) return h('div', { class: 'border-r border-b border-gray-50 min-h-[91px]' })

            const col = (firstMon + day - 1) % 7
            const key = toDateKey(props.year, props.month, day)
            const isWeekend = col >= 5
            const isToday = key === todayStr
            const isSelected = selectedDay.value === key
            const isWellness = WELLNESS_KEYS.has(key)
            const isDragOver = dragOverKey.value === key
            const events = getEventsForDay(key, props.storage)

            return h('div', {
              key,
              class: [
                'border-r border-b border-gray-100 p-2 min-h-[91px] cursor-pointer transition-colors',
                isWeekend ? 'bg-purple-50/40' : '',
                isWellness ? 'bg-cyan-50/60' : '',
                isDragOver ? 'ring-2 ring-inset ring-pink-300' : '',
                isSelected ? 'bg-pink-50' : 'hover:bg-gray-50',
              ],
              onClick: () => toggleDay(key),
              onDragover: (e) => e.preventDefault(),
              onDragenter: (e) => { e.preventDefault(); dragOverKey.value = key },
              onDragleave: () => { if (dragOverKey.value === key) dragOverKey.value = null },
              onDrop: (e) => onDayDrop(e, key),
            }, [
              // Day number
              h('div', {
                class: ['text-sm font-semibold mb-1 w-[26px] h-[26px] flex items-center justify-center rounded-full',
                  isToday ? 'bg-pink-400 text-white' : 'text-gray-500'],
              }, String(day)),

              // Event badges
              ...events.map(ev =>
                h('div', {
                  key: ev.id,
                  draggable: true,
                  class: 'flex items-start gap-1 rounded px-1 py-0.5 mb-0.5 cursor-grab transition-colors hover:bg-secondary/40',
                  style: 'background: rgba(184,169,204,0.2); color: #2A3547; font-size: 0.75rem; line-height: 1.15',
                  title: ev.text,
                  onDragstart: (e) => onEventDragStart(e, key, ev),
                  onClick: (e) => {
                    e.stopPropagation()
                    emit('open', { dateKey: key, event: ev })
                  }
                }, [
                  ev.male ? iconVNode('male', 12) : null,
                  ev.female ? iconVNode('female', 12) : null,
                  h('span', { style: 'white-space: normal; word-break: break-word' }, ev.text),
                  ev.price ? h('span', { style: 'color: #B8A9CC; margin-left: 3px' }, `· ${ev.price.toLocaleString('hu-HU')} Ft`) : null,
                ])
              ),

              // Inline add input
              isSelected
                ? h('div', { onClick: e => e.stopPropagation() }, [
                    h('input', {
                      class: 'w-full text-sm border border-secondary rounded px-1 py-0.5 mt-1 outline-none focus:ring-1 focus:ring-secondary/50',
                      placeholder: 'program...',
                      value: newEventText.value,
                      autofocus: true,
                      onInput: (e) => { newEventText.value = e.target.value },
                      onKeydown: (e) => {
                        if (e.key === 'Enter') confirmAdd(key)
                        if (e.key === 'Escape') { selectedDay.value = null; newEventText.value = '' }
                      },
                    })
                  ])
                : null,
            ])
          })
        ),

        // Legend
        h('div', { class: 'px-4 py-2 text-xs text-gray-400 text-center border-t border-gray-50' },
          'Kattints egy napra esemény hozzáadásához · Badge kattintás = részletek / törlés · Húzd át egy másik napra a mozgatáshoz'),
      ])
    }
  }
})

export default {
  components: { CalendarMonth }
}
</script>
