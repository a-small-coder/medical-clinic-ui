export const CLINIC_NAME = 'Клиника «Здоровье+»';
export const CLINIC_LOGO = 'Здоровье+';
export const CLINIC_CITY = 'Москва';
export const CLINIC_PHONE = '+7 (495) 120-45-67';
export const CLINIC_PHONE_HREF = '+74951204567';
export const CLINIC_ADDRESS = 'г. Москва, ул. Смоленская, д. 24';
export const CLINIC_EMAIL = 'info@zdorovie-plus.demo';
export const CLINIC_SITE = 'zdorovie-plus.demo';
export const CLINIC_SITE_URL = 'https://zdorovie-plus.demo';

export const BRANCHES = [
  {
    id: 1,
    name: 'Главный филиал',
    address: CLINIC_ADDRESS,
    phone: CLINIC_PHONE,
    email: CLINIC_EMAIL,
    schedule: 'Пн–Вс: 8:00–21:00',
    mapCoords: [55.747, 37.583],
    isSampleCollectionPoint: true,
    officeLabel: 'Пункт сдачи анализов, каб. 204',
  },
  {
    id: 2,
    name: 'Филиал на Арбате',
    address: 'г. Москва, ул. Арбат, д. 12',
    phone: '+7 (495) 120-45-68',
    email: CLINIC_EMAIL,
    schedule: 'Пн–Сб: 9:00–20:00',
    mapCoords: [55.752, 37.592],
    isSampleCollectionPoint: false,
  },
];

export const getPrimaryBranch = () => BRANCHES.find((branch) => branch.id === 1) || BRANCHES[0];

export const getSampleCollectionOffice = () =>
  BRANCHES.find((branch) => branch.isSampleCollectionPoint);

export function formatInOfficeAddress(branch) {
  if (!branch) {
    return '';
  }

  if (branch.isSampleCollectionPoint && branch.officeLabel) {
    return `${branch.address} — ${branch.officeLabel}`;
  }

  return branch.address;
}

export function buildYandexMapUrl(branches = BRANCHES) {
  const points = branches.filter((branch) => branch.mapCoords?.length === 2);

  if (!points.length) {
    return '';
  }

  const [centerLat, centerLng] = points[0].mapCoords;
  const markers = points
    .map((branch) => {
      const [lat, lng] = branch.mapCoords;
      const markerStyle = branch.isSampleCollectionPoint ? 'pm2grm' : 'pm2blm';
      return `${lng},${lat},${markerStyle}`;
    })
    .join('~');

  const params = new URLSearchParams({
    ll: `${centerLng},${centerLat}`,
    z: points.length > 1 ? '12' : '16',
    pt: markers,
  });

  return `https://yandex.ru/map-widget/v1/?${params.toString()}`;
}

export const DEMO_CLINIC_OPERATOR = {
  name: 'ООО «Здоровье+»',
  inn: '7704123456',
  ogrn: '1027700123456',
  address: CLINIC_ADDRESS,
  dpoEmail: 'dpo@zdorovie-plus.demo',
  licenseNumber: 'Л041-01137-77/01234567',
};

export const PARTNERS_CONTACT = {
  email: 'partners@zdorovie-plus.demo',
  phone: '+7 (495) 120-45-69',
  schedule: 'пн–пт, 9:00–18:00',
};

export const CLINIC_META_DESCRIPTION =
  'Клиника «Здоровье+»: онлайн-запись на приём, заказ лабораторных анализов, личный кабинет пациента. Москва, ул. Смоленская, 24.';

export const CLINIC_FOOTER_TAGLINE =
  `${CLINIC_NAME} — запись к врачу, диагностика и онлайн-заказ анализов с доставкой результатов в личный кабинет.`;
