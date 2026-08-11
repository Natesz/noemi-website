<template>
  <LegalLayout
    title="Impresszum"
    subtitle="A weboldal üzemeltetőjének és a szolgáltatás nyújtójának adatai."
  >
    <h2>A szolgáltató adatai</h2>
    <table>
      <tbody>
        <tr><th>Név</th><td>{{ provider.name }}</td></tr>
        <tr><th>Tevékenység</th><td>{{ provider.profession }}</td></tr>
        <tr><th>Jogi forma</th><td>{{ provider.legalForm }}</td></tr>
        <tr><th>Székhely</th><td>{{ provider.address }}</td></tr>
        <tr><th>Nyilvántartási szám</th><td>{{ provider.registrationNumber }}</td></tr>
        <tr><th>Adószám</th><td>{{ provider.taxNumber }}</td></tr>
        <tr><th>E-mail</th><td>{{ provider.email }}</td></tr>
        <tr><th>Telefon</th><td>{{ provider.phone }}</td></tr>
        <tr><th>Bankszámlaszám</th><td>{{ provider.bankAccount }}</td></tr>
        <tr><th>Weboldal</th><td>{{ provider.website }}</td></tr>
      </tbody>
    </table>

    <h2>A tárhelyszolgáltató adatai</h2>
    <table>
      <tbody>
        <tr><th>Név</th><td>{{ host.name }}</td></tr>
        <tr><th>Cím</th><td>{{ host.address }}</td></tr>
        <tr><th>E-mail</th><td>{{ host.email }}</td></tr>
        <tr><th>Weboldal</th><td><a :href="host.website" target="_blank" rel="noopener noreferrer">{{ host.website }}</a></td></tr>
      </tbody>
    </table>

    <h2>Felügyeleti szervek, panaszkezelés</h2>
    <p>
      A szolgáltatással kapcsolatos panaszodat elsősorban közvetlenül nálam jelezheted a fenti
      e-mail címen vagy telefonszámon. A panaszt annak beérkezésétől számított 30 napon belül
      kivizsgálom, és írásban válaszolok.
    </p>
    <p>Ha a panasz kezelésével nem vagy elégedett, az alábbi szervekhez fordulhatsz:</p>
    <ul>
      <li>
        <strong>Fogyasztóvédelem:</strong> a lakóhelyed szerint illetékes kormányhivatal
        fogyasztóvédelmi osztálya.
      </li>
      <li>
        <strong>Békéltető testület:</strong> a lakóhelyed szerint illetékes megyei (fővárosi)
        kereskedelmi és iparkamara mellett működő békéltető testület
        (<a href="https://bekeltetes.hu" target="_blank" rel="noopener noreferrer">bekeltetes.hu</a>).
      </li>
      <li>
        <strong>Adatvédelem:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH),
        1055 Budapest, Falk Miksa utca 9–11.,
        <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">naih.hu</a>.
      </li>
    </ul>

    <h2>Szerzői jogok</h2>
    <p>
      A weboldalon megjelenő szövegek, fotók, grafikai elemek és egyéb tartalmak szerzői jogi
      védelem alatt állnak. Ezek felhasználása, másolása, terjesztése – a szokásos, nem
      kereskedelmi célú, forrásmegjelöléssel történő idézésen túl – kizárólag előzetes írásos
      engedélyemmel lehetséges.
    </p>

    <h2>Fontos tudnivaló a tartalomról</h2>
    <p>
      A weboldalon található információk tájékoztató jellegűek, és nem helyettesítik a személyes
      szakmai konzultációt, vizsgálatot vagy orvosi diagnózist. A megjelenített árak tájékoztató
      jellegűek, és nem minősülnek a Ptk. szerinti ajánlattételnek.
    </p>

    <h2>Kapcsolódó dokumentumok</h2>
    <ul>
      <li><RouterLink to="/adatkezelesi-tajekoztato">Adatkezelési tájékoztató</RouterLink></li>
      <li><RouterLink to="/aszf">Általános szerződési feltételek</RouterLink></li>
      <li><RouterLink to="/suti">Sütikezelési tájékoztató</RouterLink></li>
    </ul>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { provider, host } from '../data/impresszumData'
</script>
