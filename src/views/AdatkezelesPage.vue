<template>
  <LegalLayout
    title="Adatkezelési tájékoztató"
    subtitle="Hogyan kezelem a személyes adataidat, és milyen jogok illetnek meg ezzel kapcsolatban."
  >
    <p>
      Ez a tájékoztató azt írja le, hogy a weboldalam használata, a kapcsolatfelvétel és a
      foglalkozásaim során milyen személyes adatokat kezelek, milyen célból és mennyi ideig.
      A tájékoztató az Európai Parlament és a Tanács (EU) 2016/679 rendelete
      (<strong>GDPR</strong>) és az információs önrendelkezési jogról szóló 2011. évi CXII. törvény
      (<strong>Infotv.</strong>) alapján készült.
    </p>

    <h2>1. Az adatkezelő</h2>
    <ul>
      <li><strong>Név:</strong> {{ provider.name }} ({{ provider.legalForm }})</li>
      <li><strong>Székhely:</strong> {{ provider.address }}</li>
      <li><strong>E-mail:</strong> {{ provider.email }}</li>
      <li><strong>Telefon:</strong> {{ provider.phone }}</li>
    </ul>
    <p>
      Adatvédelmi tisztviselő kijelölésére nem vagyok köteles, az adatkezeléssel kapcsolatos
      kérdéseiddel közvetlenül hozzám fordulhatsz.
    </p>

    <h2>2. Milyen adatokat kezelek, és miért?</h2>

    <h3>2.1. Kapcsolatfelvétel (űrlap, e-mail, telefon)</h3>
    <ul>
      <li><strong>Kezelt adatok:</strong> név, e-mail cím, telefonszám (ha megadod), az üzenet tartalma.</li>
      <li><strong>Cél:</strong> a megkeresésed megválaszolása, időpont egyeztetése.</li>
      <li><strong>Jogalap:</strong> a hozzájárulásod – GDPR 6. cikk (1) a) pont.</li>
      <li><strong>Megőrzés:</strong> a megkeresés lezárásától számított 1 év, vagy amíg a hozzájárulást visszavonod.</li>
    </ul>

    <h3>2.2. Foglalkozások, terápia dokumentációja</h3>
    <ul>
      <li>
        <strong>Kezelt adatok:</strong> név, születési év, elérhetőség, kiskorú kliens esetén a
        törvényes képviselő adatai; az állapotfelmérés eredménye, terápiás terv, a foglalkozásokon
        készült feljegyzések, fejlődési napló. Ezek egészségi állapotra vonatkozó adatok, azaz a
        GDPR szerinti <strong>különös kategóriába</strong> tartozó adatok.
      </li>
      <li><strong>Cél:</strong> a szolgáltatás szakszerű nyújtása, a terápia dokumentálása és nyomon követése.</li>
      <li>
        <strong>Jogalap:</strong> a szolgáltatás nyújtására kötött szerződés teljesítése
        – GDPR 6. cikk (1) b) pont –, az egészségi állapotra vonatkozó adatok esetében a
        <strong>kifejezett hozzájárulásod</strong> – GDPR 9. cikk (2) a) pont. Kiskorú kliens
        esetén a hozzájárulást a törvényes képviselő adja meg.
      </li>
      <li><strong>Megőrzés:</strong> a terápia befejezésétől számított 5 év, illetve amíg jogszabály hosszabb megőrzést ír elő.</li>
    </ul>

    <h3>2.3. Online időpontfoglalás</h3>
    <ul>
      <li>
        <strong>Kezelt adatok:</strong> név, e-mail cím, a választott időpont és óratípus,
        időzóna, valamint amit a foglalás megjegyzés mezőjébe írsz. Kérlek, ide
        <strong>ne írj egészségi állapotra vonatkozó adatot</strong> – ezeket az első
        foglalkozáson beszéljük át.
      </li>
      <li><strong>Cél:</strong> a foglalás rögzítése, visszaigazolása, emlékeztető küldése, a videóhívás létrehozása.</li>
      <li><strong>Jogalap:</strong> a szolgáltatás nyújtására irányuló szerződés teljesítése, illetve a szerződéskötést megelőző lépések – GDPR 6. cikk (1) b) pont.</li>
      <li><strong>Megőrzés:</strong> a foglalás időpontjától számított 1 év, ezt követően a foglalási rendszerből törlöm.</li>
      <li>
        <strong>Fontos:</strong> a foglalási naptárat külső szolgáltató jeleníti meg, és csak akkor
        töltődik be, ha erre a weboldalon külön rákattintasz. Addig a böngésződ nem lép kapcsolatba vele.
      </li>
    </ul>

    <h3>2.4. Számlázás, könyvelés</h3>
    <ul>
      <li><strong>Kezelt adatok:</strong> név, számlázási cím, a szolgáltatás adatai, fizetett összeg.</li>
      <li><strong>Cél:</strong> a jogszabályi számlaadási és bizonylat-megőrzési kötelezettség teljesítése.</li>
      <li><strong>Jogalap:</strong> jogi kötelezettség teljesítése – GDPR 6. cikk (1) c) pont.</li>
      <li>
        <strong>Megőrzés:</strong> a számviteli törvény (2000. évi C. tv. 169. §) szerint
        8 év. Ez az adatkezelés a hozzájárulás visszavonásával nem szüntethető meg.
      </li>
    </ul>

    <h3>2.5. A weboldal használata, sütik</h3>
    <p>
      A weboldal működéséhez feltétlenül szükséges technikai adatokat, illetve – kizárólag a
      hozzájárulásoddal – statisztikai célú adatokat kezelek. A részleteket a
      <RouterLink to="/suti">sütikezelési tájékoztatóban</RouterLink> találod.
    </p>

    <h2>3. Kinek adom át az adataidat?</h2>
    <p>
      Az adataidat nem adom el, és marketing célból nem adom át harmadik félnek. A szolgáltatás
      működtetéséhez az alábbi adatfeldolgozókat veszem igénybe:
    </p>
    <table>
      <thead>
        <tr><th>Adatfeldolgozó</th><th>Tevékenység</th><th>Érintett adatok</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ host.name }}<br /><span class="text-muted">{{ host.address }}</span></td>
          <td>a weboldal tárhelyszolgáltatása</td>
          <td>a weboldal használata során keletkező technikai adatok</td>
        </tr>
        <tr>
          <td>Cloudinary Ltd.</td>
          <td>a weboldalon megjelenő képek tárolása és kiszolgálása</td>
          <td>technikai adatok (személyes adatot nem tárol)</td>
        </tr>
        <tr>
          <td>Cal.com, Inc.</td>
          <td>online időpontfoglaló rendszer üzemeltetése</td>
          <td>név, e-mail cím, a foglalás időpontja és adatai</td>
        </tr>
        <tr>
          <td>Google Ireland Ltd.</td>
          <td>naptárkezelés (Google Calendar) és videóhívás (Google Meet)</td>
          <td>név, e-mail cím, a foglalkozás időpontja</td>
        </tr>
        <tr>
          <td>[kitöltendő – e-mail szolgáltató]</td>
          <td>e-mailes levelezés</td>
          <td>a levelezés során megadott adatok</td>
        </tr>
        <tr>
          <td>[kitöltendő – könyvelő]</td>
          <td>könyvelés, számlázás</td>
          <td>számlázási adatok</td>
        </tr>
      </tbody>
    </table>
    <p>
      Az Európai Unión kívülre történő adattovábbítás esetén az adatfeldolgozó megfelelő
      garanciákat (pl. az Európai Bizottság által jóváhagyott általános adatvédelmi kikötéseket)
      alkalmaz.
    </p>

    <h2>4. Adatbiztonság</h2>
    <p>
      Az adataidat titkosított kapcsolaton (HTTPS) keresztül fogadom, jelszóval védett
      eszközökön és fiókokban tárolom, és csak a szolgáltatás nyújtásához szükséges mértékben
      kezelem. A terápiás dokumentációhoz kizárólag én férek hozzá; azt harmadik személynek –
      a te kifejezett kérésed vagy jogszabályi kötelezettség kivételével – nem adom ki.
    </p>

    <h2>5. Milyen jogok illetnek meg?</h2>
    <ul>
      <li><strong>Tájékoztatáshoz és hozzáféréshez való jog:</strong> kérheted, hogy tájékoztassalak arról, milyen adataidat kezelem, és másolatot kérhetsz róluk.</li>
      <li><strong>Helyesbítéshez való jog:</strong> kérheted a pontatlan adatok javítását, a hiányos adatok kiegészítését.</li>
      <li><strong>Törléshez való jog („elfeledtetés”):</strong> kérheted az adataid törlését, ha az adatkezelés célja megszűnt, vagy visszavonod a hozzájárulásodat – kivéve, ha jogszabály a megőrzést előírja (pl. számlák).</li>
      <li><strong>Az adatkezelés korlátozásához való jog:</strong> kérheted, hogy az adataidat csak tároljam, de más módon ne kezeljem.</li>
      <li><strong>Adathordozhatósághoz való jog:</strong> kérheted, hogy a hozzájárulás vagy szerződés alapján kezelt adataidat géppel olvasható formában megkapd.</li>
      <li><strong>Tiltakozáshoz való jog:</strong> tiltakozhatsz az adataid kezelése ellen, ha az jogos érdeken alapul.</li>
      <li><strong>A hozzájárulás visszavonásának joga:</strong> a hozzájárulásodat bármikor, indoklás nélkül visszavonhatod. Ez nem érinti a visszavonás előtti adatkezelés jogszerűségét.</li>
    </ul>
    <p>
      Kérésedet a fenti e-mail címen vagy postai címen jelezheted. A megkeresésre legkésőbb
      <strong>1 hónapon belül</strong> válaszolok; összetett kérés esetén ez a határidő további
      2 hónappal kiterjeszthető, amiről tájékoztatlak.
    </p>

    <h2>6. Jogorvoslat</h2>
    <p>
      Ha úgy érzed, hogy az adatkezelésem jogaidat sérti, kérlek, először engem keress meg – a
      legtöbb kérdés így oldható meg leggyorsabban. Emellett panaszt tehetsz a felügyeleti
      hatóságnál, vagy bírósághoz fordulhatsz:
    </p>
    <ul>
      <li>
        <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br />
        1055 Budapest, Falk Miksa utca 9–11. · Postacím: 1363 Budapest, Pf. 9.<br />
        E-mail: ugyfelszolgalat@naih.hu ·
        <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">naih.hu</a>
      </li>
      <li>
        <strong>Bíróság:</strong> a pert a lakóhelyed vagy tartózkodási helyed szerinti
        törvényszék előtt is megindíthatod.
      </li>
    </ul>

    <h2>7. A tájékoztató módosítása</h2>
    <p>
      Fenntartom a jogot, hogy ezt a tájékoztatót egyoldalúan módosítsam – például jogszabályi
      változás vagy új szolgáltatás bevezetése esetén. A módosított tájékoztató a weboldalon való
      közzététellel lép hatályba. Jelen tájékoztató hatályos: {{ effectiveDate }}
    </p>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { provider, host, effectiveDate } from '../data/impresszumData'
</script>
