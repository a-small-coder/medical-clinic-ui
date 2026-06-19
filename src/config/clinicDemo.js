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
    schedule: 'Пн–Вс: 8:00–21:00',
    isSampleCollectionPoint: true,
    officeLabel: 'Пункт сдачи анализов, каб. 204',
  },
  {
    id: 2,
    name: 'Филиал на Арбате',
    address: 'г. Москва, ул. Арбат, д. 12',
    phone: '+7 (495) 120-45-68',
    schedule: 'Пн–Сб: 9:00–20:00',
    isSampleCollectionPoint: false,
  },
];

export const getSampleCollectionOffice = () =>
  BRANCHES.find((branch) => branch.isSampleCollectionPoint);

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
