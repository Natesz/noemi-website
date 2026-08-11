import { ref, computed } from 'vue'

const STORAGE_KEY = 'noemi-cookie-consent'

/** 'accepted' | 'rejected' | null (még nem döntött) */
const stored = ref(readStored())
const reopened = ref(false)

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected' ? value : null
  } catch {
    // privát mód / letiltott storage esetén ne dőljön el az oldal
    return null
  }
}

function persist(value) {
  stored.value = value
  reopened.value = false
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* ignore */
  }
}

export function useCookieConsent() {
  return {
    /** a döntés értéke, vagy null */
    consent: computed(() => stored.value),
    /** látszódjon-e a sáv */
    bannerVisible: computed(() => stored.value === null || reopened.value),
    /** hozzájárult-e a statisztikai sütikhez */
    analyticsAllowed: computed(() => stored.value === 'accepted'),
    accept: () => persist('accepted'),
    reject: () => persist('rejected'),
    /** újranyitás a láblécből ("Sütibeállítások") */
    reopen: () => { reopened.value = true },
  }
}
