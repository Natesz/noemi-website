/**
 * A jogi oldalak (impresszum, adatkezelés, ÁSZF, süti) innen olvassák a cégadatokat.
 * Éles indulás előtt a [kitöltendő] értékeket kell valós adatokra cserélni – csak itt,
 * a szöveg minden előfordulási helyén automatikusan frissül.
 */
export const provider = {
  name: '[kitöltendő – teljes név]',
  profession: 'logopédus, szomatopedagógus, gyógymasszőr, jógaoktató',
  legalForm: 'egyéni vállalkozó',
  address: '[kitöltendő – székhely: postai cím]',
  email: '[kitöltendő – e-mail cím]',
  phone: '[kitöltendő – telefonszám]',
  taxNumber: '[kitöltendő – adószám]',
  registrationNumber: '[kitöltendő – nyilvántartási szám]',
  bankAccount: '[kitöltendő – bankszámlaszám]',
  website: '[kitöltendő – weboldal címe]',
}

export const host = {
  name: 'Netlify, Inc.',
  address: '512 2nd Street, Suite 200, San Francisco, CA 94107, USA',
  email: 'support@netlify.com',
  website: 'https://www.netlify.com',
}

/** Utolsó módosítás dátuma – dokumentumváltozáskor frissítsd. */
export const effectiveDate = '2026. augusztus 11.'
