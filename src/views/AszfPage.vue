<template>
  <LegalLayout
    title="Általános szerződési feltételek"
    subtitle="A foglalkozásaim igénybevételének feltételei: foglalás, díjak, lemondás, panaszkezelés."
  >
    <p>
      Kérlek, a foglalkozás igénybevétele előtt olvasd el ezt a dokumentumot. Az időpont
      lefoglalásával az itt leírt feltételeket elfogadod.
    </p>

    <h2>1. A szolgáltató</h2>
    <ul>
      <li><strong>Név:</strong> {{ provider.name }} ({{ provider.legalForm }})</li>
      <li><strong>Székhely:</strong> {{ provider.address }}</li>
      <li><strong>Nyilvántartási szám:</strong> {{ provider.registrationNumber }}</li>
      <li><strong>Adószám:</strong> {{ provider.taxNumber }}</li>
      <li><strong>E-mail:</strong> {{ provider.email }} · <strong>Telefon:</strong> {{ provider.phone }}</li>
    </ul>
    <p>
      A további üzemeltetési adatokat az <RouterLink to="/impresszum">impresszum</RouterLink>
      tartalmazza.
    </p>

    <h2>2. A szolgáltatás tárgya</h2>
    <p>Az alábbi szolgáltatásokat nyújtom, előre egyeztetett időpontban:</p>
    <ul>
      <li>logopédiai állapotfelmérés és egyéni logopédiai terápia (artikulációs terápia, beszédértés és beszédészlelés fejlesztése, nyelvi késés terápiája, nyelvlökéses nyelés terápiája, dadogásterápia);</li>
      <li>egyéni és kis csoportos jógaórák (hatha, yin, női jóga);</li>
      <li>relaxációs masszázs és gyógymasszázs.</li>
    </ul>
    <p>
      A szolgáltatás nem minősül orvosi ellátásnak, és nem helyettesíti az orvosi vizsgálatot,
      diagnózist vagy kezelést. Ha egészségi állapotod indokolja, kérlek, előzetesen konzultálj
      orvossal.
    </p>

    <h2>3. A szerződés létrejötte</h2>
    <ol>
      <li>Időpontot a weboldal kapcsolati űrlapján, e-mailben vagy telefonon kérhetsz.</li>
      <li>A megkeresésedre visszajelzek: megerősítem az időpontot, vagy alternatívát ajánlok.</li>
      <li>
        A szerződés az időpont írásos (e-mailes, üzenetben történő) visszaigazolásával jön létre.
        A weboldalon feltüntetett szabad időpontok tájékoztató jellegűek, foglalás csak
        visszaigazolással válik véglegessé.
      </li>
      <li>
        <strong>Kiskorú kliens</strong> esetén a szerződést a törvényes képviselő köti meg, és ő
        adja meg a szükséges hozzájárulásokat is.
      </li>
    </ol>

    <h2>4. Díjak és fizetés</h2>
    <ul>
      <li>
        A mindenkor érvényes díjakat a weboldal <RouterLink :to="{ path: '/', hash: '#arak' }">Árak</RouterLink>
        pontja tartalmazza. A feltüntetett árak tájékoztató jellegűek; az adott foglalkozásra
        vonatkozó díjat a visszaigazolásban rögzítjük.
      </li>
      <li>A díj a foglalkozás alkalmával, készpénzben vagy előre banki átutalással fizethető.</li>
      <li>A teljesítésről a jogszabályoknak megfelelő számlát vagy nyugtát adok.</li>
      <li>
        A csomagok és bérletek a megvásárlástól számítva a visszaigazolásban megjelölt ideig
        érvényesek; ez alapesetben <strong>3 hónap</strong>. A fel nem használt alkalmak
        pénzben nem téríthetők vissza, de indokolt esetben (pl. hosszabb betegség) az
        érvényességi idő kérésre meghosszabbítható.
      </li>
      <li>A díjak módosításának jogát fenntartom; a már visszaigazolt időpontok díja nem változik.</li>
    </ul>

    <h2>5. Lemondás, időpont áthelyezése</h2>
    <ul>
      <li>
        A lefoglalt időpontot a foglalkozás megkezdése előtt <strong>legalább 24 órával</strong>
        díjmentesen lemondhatod vagy áthelyezheted.
      </li>
      <li>
        A 24 órán belüli lemondás, illetve a meg nem jelenés esetén a foglalkozás díja
        felszámításra kerül, csomag esetén az alkalom felhasználtnak minősül. Váratlan
        betegség vagy egyéb méltányolható ok esetén ettől eltekintek.
      </li>
      <li>
        Ha a foglalkozás <strong>az én oldalamon</strong> felmerült ok miatt marad el, a legrövidebb
        időn belül új időpontot ajánlok, vagy – ha ez nem megoldható – a már megfizetett díjat
        visszatérítem.
      </li>
      <li>
        Kérlek, a foglalkozásra pontosan érkezz. A késés idejével a foglalkozás időtartama rövidül,
        a díj ilyenkor nem csökken.
      </li>
    </ul>

    <h2>6. A résztvevő kötelezettségei</h2>
    <ul>
      <li>
        A foglalkozás előtt tájékoztass minden olyan körülményről (betegség, sérülés, terhesség,
        gyógyszeres kezelés, korábbi diagnózis), amely a szolgáltatás módját vagy biztonságát
        érinti. Masszázs esetén ez az ellenjavallatok kizárása miatt különösen fontos.
      </li>
      <li>Lázas, fertőző betegség esetén kérlek, mondd le az időpontot – ilyenkor a 24 órás szabályt nem alkalmazom.</li>
      <li>A terápia eredményessége nagymértékben függ a rendszeres részvételtől és az otthoni gyakorlástól.</li>
      <li>Az általam adott gyakorlatokat és tanácsokat a saját felelősségedre végzed, a megbeszélt módon.</li>
    </ul>

    <h2>7. A szolgáltató kötelezettségei és felelősség</h2>
    <ul>
      <li>
        A szolgáltatást a végzettségemnek és a szakma szabályainak megfelelően, legjobb
        tudásom szerint nyújtom. A foglalkozásokon elhangzottakat és a rólad kezelt adatokat
        bizalmasan kezelem.
      </li>
      <li>
        A terápia jellegéből következően konkrét eredményt, illetve annak határidejét nem tudom
        garantálni, mert az számos egyéni tényezőtől függ.
      </li>
      <li>
        Nem vállalok felelősséget az abból eredő károkért, hogy a kliens a szükséges egészségügyi
        információt elhallgatta, illetve a kapott tanácsokat nem az útmutatás szerint alkalmazta.
      </li>
      <li>A helyszínre magaddal hozott értéktárgyakért nem tudok felelősséget vállalni.</li>
    </ul>

    <h2>8. Adatkezelés</h2>
    <p>
      A szolgáltatás során kezelt személyes adatokról – ideértve a terápiás dokumentációt is – az
      <RouterLink to="/adatkezelesi-tajekoztato">adatkezelési tájékoztató</RouterLink> ad
      részletes felvilágosítást. A weboldal sütikezeléséről a
      <RouterLink to="/suti">sütikezelési tájékoztatóban</RouterLink> olvashatsz.
    </p>

    <h2>9. Panaszkezelés, jogorvoslat</h2>
    <p>
      Panaszodat a fenti e-mail címen vagy telefonszámon jelezheted. A panaszt beérkezésétől
      számított 30 napon belül kivizsgálom, és az álláspontomról írásban tájékoztatlak. Ha a
      panasz kezelésével nem vagy elégedett, a lakóhelyed szerint illetékes fogyasztóvédelmi
      hatósághoz vagy békéltető testülethez
      (<a href="https://bekeltetes.hu" target="_blank" rel="noopener noreferrer">bekeltetes.hu</a>)
      fordulhatsz, illetve bírósági eljárást indíthatsz.
    </p>

    <h2>10. Webáruház</h2>
    <p>
      A weboldalon jelenleg nem működik webáruház, online megrendelést nem fogadok. A webáruház
      indulásakor az arra vonatkozó feltételeket – köztük a fogyasztói elállási jogról szóló
      tájékoztatást – ebben a dokumentumban közzéteszem.
    </p>

    <h2>11. Záró rendelkezések</h2>
    <ul>
      <li>A jelen feltételekre és a szerződésre a magyar jog, különösen a Polgári Törvénykönyv (2013. évi V. törvény) rendelkezései az irányadók.</li>
      <li>
        A feltételek egyoldalú módosításának jogát fenntartom. A módosítás a weboldalon való
        közzététellel lép hatályba, és a már visszaigazolt foglalásokra nem hat ki.
      </li>
      <li>Jelen általános szerződési feltételek hatályos: {{ effectiveDate }}</li>
    </ul>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { provider, effectiveDate } from '../data/impresszumData'
</script>
