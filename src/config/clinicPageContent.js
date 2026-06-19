export const DEMO_DOCTORS = [
  {
    id: 1,
    firstName: 'Елена',
    lastName: 'Соколова',
    patronymic: 'Андреевна',
    specialization: 'Терапевт',
    experienceYears: 14,
    education: [
      'Российский национальный исследовательский медицинский университет им. Н.И. Пирогова, лечебный факультет.',
      'Ординатура по терапии, сертификат специалиста.',
    ],
    serviceSlugs: ['primary-appointment', 'checkup-basic', 'checkup-extended'],
  },
  {
    id: 2,
    firstName: 'Дмитрий',
    lastName: 'Кравцов',
    patronymic: 'Игоревич',
    specialization: 'Кардиолог',
    experienceYears: 18,
    education: [
      'Первый Московский государственный медицинский университет им. И.М. Сеченова.',
      'Ординатура по кардиологии, повышение квалификации по функциональной диагностике.',
    ],
    serviceSlugs: ['cardiologist-appointment', 'ecg', 'checkup-extended'],
  },
  {
    id: 3,
    firstName: 'Марина',
    lastName: 'Белова',
    patronymic: 'Сергеевна',
    specialization: 'Педиатр',
    experienceYears: 11,
    education: [
      'Московский государственный медико-стоматологический университет, педиатрический факультет.',
      'Сертификат по педиатрии, курсы по вакцинопрофилактике.',
    ],
    serviceSlugs: ['pediatric-appointment', 'vaccination-consultation', 'checkup-basic'],
  },
  {
    id: 4,
    firstName: 'Алексей',
    lastName: 'Новиков',
    patronymic: 'Петрович',
    specialization: 'Врач УЗИ',
    experienceYears: 9,
    education: [
      'Российский университет дружбы народов, лечебный факультет.',
      'Специализация по ультразвуковой диагностике.',
    ],
    serviceSlugs: ['ultrasound-abdomen', 'ultrasound-thyroid', 'checkup-extended'],
  },
  {
    id: 5,
    firstName: 'Ольга',
    lastName: 'Морозова',
    patronymic: 'Викторовна',
    specialization: 'Стоматолог-терапевт',
    experienceYears: 12,
    education: [
      'Московский государственный медико-стоматологический университет.',
      'Сертификат стоматолога-терапевта, курсы по эндодонтии.',
    ],
    serviceSlugs: ['dental-consultation', 'dental-treatment', 'checkup-basic'],
  },
  {
    id: 6,
    firstName: 'Игорь',
    lastName: 'Волков',
    patronymic: 'Николаевич',
    specialization: 'Эндокринолог',
    experienceYears: 16,
    education: [
      'Российский национальный исследовательский медицинский университет им. Н.И. Пирогова.',
      'Ординатура по эндокринологии.',
    ],
    serviceSlugs: ['endocrinologist-appointment', 'checkup-extended', 'primary-appointment'],
  },
];

export const DEMO_CLINIC_SERVICES = [
  {
    id: 1,
    slug: 'primary-appointment',
    title: 'Приём терапевта',
    description:
      'Первичный или повторный приём врача-терапевта: сбор анамнеза, осмотр, назначение обследований и лечения.',
    priceFrom: 2500,
    durationMin: 30,
    preparation: 'Принесите результаты предыдущих обследований и список принимаемых препаратов.',
    direction: 'Терапия',
    isPackage: false,
  },
  {
    id: 2,
    slug: 'cardiologist-appointment',
    title: 'Приём кардиолога',
    description:
      'Консультация кардиолога, оценка факторов риска, назначение обследований и схемы лечения.',
    priceFrom: 3200,
    durationMin: 40,
    preparation: 'За сутки до приёма по возможности не принимать кофеин. Возьмите результаты ЭКГ и анализов.',
    direction: 'Терапия',
    isPackage: false,
  },
  {
    id: 3,
    slug: 'endocrinologist-appointment',
    title: 'Приём эндокринолога',
    description:
      'Диагностика и ведение заболеваний эндокринной системы, коррекция терапии.',
    priceFrom: 3000,
    durationMin: 40,
    preparation: 'Рекомендуется сдавать анализы натощак в день приёма или заранее по направлению врача.',
    direction: 'Терапия',
    isPackage: false,
  },
  {
    id: 4,
    slug: 'pediatric-appointment',
    title: 'Приём педиатра',
    description:
      'Осмотр ребёнка, оценка развития, назначение лечения и профилактических мероприятий.',
    priceFrom: 2800,
    durationMin: 30,
    preparation: 'Возьмите медицинскую карту ребёнка и календарь прививок.',
    direction: 'Педиатрия',
    isPackage: false,
  },
  {
    id: 5,
    slug: 'vaccination-consultation',
    title: 'Консультация по вакцинации',
    description:
      'Подбор схемы вакцинации, разбор противопоказаний и составление индивидуального календаря прививок.',
    priceFrom: 2000,
    durationMin: 20,
    preparation: 'Принесите имеющийся календарь прививок и результаты последних анализов при наличии.',
    direction: 'Педиатрия',
    isPackage: false,
  },
  {
    id: 6,
    slug: 'ultrasound-abdomen',
    title: 'УЗИ органов брюшной полости',
    description:
      'Ультразвуковое исследование печени, желчного пузыря, поджелудочной железы, селезёнки и почек.',
    priceFrom: 3500,
    durationMin: 30,
    preparation: 'Исследование проводится натощак. За 2–3 дня исключить газообразующие продукты.',
    direction: 'УЗИ-диагностика',
    isPackage: false,
  },
  {
    id: 7,
    slug: 'ultrasound-thyroid',
    title: 'УЗИ щитовидной железы',
    description:
      'Оценка структуры и размеров щитовидной железы, выявление узловых образований.',
    priceFrom: 2800,
    durationMin: 20,
    preparation: 'Специальной подготовки не требуется.',
    direction: 'УЗИ-диагностика',
    isPackage: false,
  },
  {
    id: 8,
    slug: 'ecg',
    title: 'Электрокардиография (ЭКГ)',
    description:
      'Регистрация электрической активности сердца, первичная оценка ритма и проводимости.',
    priceFrom: 1500,
    durationMin: 15,
    preparation: 'Специальной подготовки не требуется. Избегайте физической нагрузки перед процедурой.',
    direction: 'Диагностика',
    isPackage: false,
  },
  {
    id: 9,
    slug: 'dental-consultation',
    title: 'Консультация стоматолога',
    description:
      'Осмотр полости рта, составление плана лечения, рекомендации по профилактике.',
    priceFrom: 1800,
    durationMin: 30,
    preparation: 'Почистите зубы перед визитом. Сообщите врачу о аллергиях на анестетики.',
    direction: 'Стоматология',
    isPackage: false,
  },
  {
    id: 10,
    slug: 'dental-treatment',
    title: 'Лечение кариеса',
    description:
      'Лечение кариеса с использованием современных пломбировочных материалов.',
    priceFrom: 4500,
    durationMin: 60,
    preparation: 'По рекомендации врача после первичной консультации.',
    direction: 'Стоматология',
    isPackage: false,
  },
  {
    id: 11,
    slug: 'checkup-basic',
    title: 'Check-up «Базовый»',
    description:
      'Пакет базового обследования: приём терапевта, общий анализ крови, биохимия, ЭКГ.',
    priceFrom: 8900,
    durationMin: 90,
    preparation: 'Анализы сдаются натощак. Запланируйте 2 визита в клинику.',
    direction: 'Check-up пакеты',
    isPackage: true,
  },
  {
    id: 12,
    slug: 'checkup-extended',
    title: 'Check-up «Расширенный»',
    description:
      'Расширенный пакет: приёмы специалистов, УЗИ, ЭКГ, расширенная лабораторная диагностика.',
    priceFrom: 18900,
    durationMin: 180,
    preparation: 'Подробный чек-лист подготовки высылается после записи. Анализы — натощак.',
    direction: 'Check-up пакеты',
    isPackage: true,
  },
  {
    id: 13,
    slug: 'checkup-cardio',
    title: 'Check-up «Сердце и сосуды»',
    description:
      'Пакет кардиологического обследования: приём кардиолога, ЭКГ, УЗИ сердца, липидный профиль.',
    priceFrom: 12500,
    durationMin: 120,
    preparation: 'За сутки исключить алкоголь и интенсивные нагрузки. Анализ крови — натощак.',
    direction: 'Check-up пакеты',
    isPackage: true,
  },
];

export const DOCTOR_SPECIALIZATIONS = [
  ...new Set(DEMO_DOCTORS.map((doctor) => doctor.specialization)),
];

export const CLINIC_SERVICE_DIRECTIONS = [
  ...new Set(DEMO_CLINIC_SERVICES.map((service) => service.direction)),
];

export function getDoctorFullName(doctor) {
  return `${doctor.lastName} ${doctor.firstName} ${doctor.patronymic}`;
}

export function getDoctorById(id) {
  const numericId = Number(id);
  return DEMO_DOCTORS.find((doctor) => doctor.id === numericId) || null;
}

export function getServiceBySlug(slug) {
  return DEMO_CLINIC_SERVICES.find((service) => service.slug === slug) || null;
}

export function getServicesByDoctor(doctor) {
  if (!doctor?.serviceSlugs?.length) {
    return [];
  }

  return doctor.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
}

export function filterDoctorsBySpecialization(specialization) {
  if (!specialization || specialization === 'all') {
    return DEMO_DOCTORS;
  }

  return DEMO_DOCTORS.filter((doctor) => doctor.specialization === specialization);
}

export function getServicesGroupedByDirection(services) {
  const groups = {};

  services.forEach((service) => {
    if (!groups[service.direction]) {
      groups[service.direction] = [];
    }
    groups[service.direction].push(service);
  });

  return CLINIC_SERVICE_DIRECTIONS.filter((direction) => groups[direction]?.length).map(
    (direction) => ({
      direction,
      services: groups[direction],
    })
  );
}

export function filterServicesByPackagesMode(services, packagesOnly) {
  if (!packagesOnly) {
    return services;
  }

  return services.filter((service) => service.isPackage);
}
