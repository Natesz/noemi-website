<template>
  <LegalLayout
    title="Sütikezelési tájékoztató"
    subtitle="Milyen sütiket és tárolt adatokat használ a weboldal, és hogyan tudod ezeket bármikor módosítani."
  >
    <h2>Mi az a süti?</h2>
    <p>
      A süti (cookie) egy kis adatfájl, amelyet a weboldal a böngésződben tárol. Segítségével az
      oldal „emlékezik” bizonyos beállításokra, illetve névtelen statisztika készíthető arról,
      hogyan használják a látogatók az oldalt. A weboldalam a sütikhez hasonló technológiát,
      a böngésző helyi tárolóját (localStorage) is használja.
    </p>

    <h2>Milyen sütiket használ ez az oldal?</h2>

    <h3>Feltétlenül szükséges (mindig aktív)</h3>
    <p>
      Ezek nélkül az oldal nem tud rendeltetésszerűen működni, ezért a tárolásukhoz nem kell
      hozzájárulás.
    </p>
    <table>
      <thead>
        <tr><th>Név</th><th>Cél</th><th>Tárolás módja / ideje</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><code>noemi-cookie-consent</code></td>
          <td>Eltárolja a sütikkel kapcsolatos döntésedet, hogy ne kérdezzen rá újra minden látogatásnál.</td>
          <td>localStorage – amíg nem törlöd</td>
        </tr>
      </tbody>
    </table>

    <h3>Statisztikai sütik (csak a hozzájárulásoddal)</h3>
    <p>
      Ezek a sütik névtelen, összesített adatot gyűjtenek arról, hogy mely oldalak a leghasznosabbak
      a látogatóknak. Csak akkor kerülnek elhelyezésre, ha a sütisávon az
      <strong>„Elfogadom”</strong> lehetőséget választottad, és a hozzájárulásodat bármikor
      visszavonhatod. Ha a <strong>„Csak a szükségeset”</strong> lehetőséget választod, statisztikai
      süti nem kerül elhelyezésre.
    </p>
    <p class="text-sm">
      <em>Jelen tájékoztató kiadásakor statisztikai mérőkód nincs bekötve az oldalon; ha ez
      megváltozik, ez a táblázat a konkrét sütik nevével és megőrzési idejével frissül.</em>
    </p>

    <h3>Marketing sütik</h3>
    <p>Marketing- és hirdetési célú sütiket nem használok, és harmadik félnek nem adok át adatot ilyen célból.</p>

    <h3>Beágyazott, harmadik féltől származó tartalom</h3>
    <p>
      Az oldal betűtípusokat a Google Fonts szolgáltatásából, a szabad időpontok képét pedig a
      Cloudinary tartalomkiszolgálójáról tölti be. Ezek a szolgáltatók a tartalom kiszolgálása
      során technikai adatokat (pl. IP-cím, böngészőtípus) ismerhetnek meg, sütit azonban ehhez
      nem helyeznek el a böngésződben.
    </p>

    <h2>A beállításod módosítása</h2>
    <p>A döntésedet itt bármikor felülírhatod. A jelenlegi beállításod:</p>
    <p>
      <span
        class="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
        :class="consent === 'accepted'
          ? 'bg-primary-soft text-heading'
          : consent === 'rejected' ? 'bg-bg-soft text-heading ring-1 ring-line' : 'bg-bg-soft text-muted ring-1 ring-line'"
      >
        <span class="w-2 h-2 rounded-full" :class="consent === 'accepted' ? 'bg-primary-dark' : 'bg-muted'" />
        {{ statusLabel }}
      </span>
    </p>

    <div class="flex flex-wrap gap-3 mt-5 mb-2">
      <button @click="accept" class="btn-primary text-sm py-2.5 px-6">Statisztikai sütik engedélyezése</button>
      <button @click="reject" class="btn-outline text-sm py-2 px-5">Csak a szükségesek</button>
    </div>

    <h2>Sütik törlése a böngészőben</h2>
    <p>
      A már eltárolt sütiket és helyi tárolót a böngésződ beállításaiban is törölheted, illetve
      letilthatod az újak elhelyezését. Ne lepődj meg, ha ezután az oldal ismét rákérdez a
      sütibeállításokra – a döntésedet tároló bejegyzés is törlődik. A leggyakoribb böngészők
      súgója:
    </p>
    <ul>
      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
      <li><a href="https://support.mozilla.org/hu/kb/sutik-informacio-amelyet-weboldalak-tarolnak" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
      <li><a href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
      <li><a href="https://support.microsoft.com/hu-hu/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
    </ul>

    <h2>További információ</h2>
    <p>
      A személyes adatok kezeléséről, a jogaidról és a jogorvoslati lehetőségekről az
      <RouterLink to="/adatkezelesi-tajekoztato">adatkezelési tájékoztatóban</RouterLink> olvashatsz
      részletesen. Kérdés esetén írj a
      <strong>{{ provider.email }}</strong> címre.
    </p>
    <p>Jelen tájékoztató hatályos: {{ effectiveDate }}</p>
  </LegalLayout>
</template>

<script setup>
import { computed } from 'vue'
import LegalLayout from '../components/LegalLayout.vue'
import { useCookieConsent } from '../composables/useCookieConsent'
import { provider, effectiveDate } from '../data/impresszumData'

const { consent, accept, reject } = useCookieConsent()

const statusLabel = computed(() => {
  if (consent.value === 'accepted') return 'Statisztikai sütik engedélyezve'
  if (consent.value === 'rejected') return 'Csak a feltétlenül szükséges sütik'
  return 'Még nem döntöttél'
})
</script>
