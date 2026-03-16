const familyBlocks = {
  vision: "Block 1 · Product Vision",
  founder: "Block 2 · Founder Profile",
  constraints: "Block 3 · Known Constraints",
  resources: "Block 4 · Resource Allocation",
  cofounder: "Block 5 · Co-Founder Requirements",
};

const relationshipBlocks = {
  orientation: "Block 1 · Relationship Intent",
  style: "Block 2 · Attachment & Emotional Style",
  dynamics: "Block 3 · Communication & Conflict",
  lifestyle: "Block 4 · Availability & Lifestyle Fit",
  partner: "Block 5 · Attraction & Compatibility",
};

const datingBlocks = {
  intent: "Block 1 · Dating Intent",
  pacing: "Block 2 · Early-Stage Pace",
  signals: "Block 3 · Communication Signals",
  filters: "Block 4 · Green Flags & Red Flags",
  design: "Block 5 · First-Stage Design",
};

const breakupBlocks = {
  rupture: "Block 1 · Breakup Context",
  grief: "Block 2 · Emotional Recovery",
  habits: "Block 3 · Boundaries & Contact",
  support: "Block 4 · Support & Regulation",
  reentry: "Block 5 · Future Readiness",
};

const compatibilityBlocks = {
  intent: "Block 1 · Intent & Pace",
  communication: "Block 2 · Communication & Repair",
  closeness: "Block 3 · Space, Autonomy, Rhythm",
  lifestyle: "Block 4 · Lifestyle & Future Shape",
  values: "Block 5 · Values & Deal-Breakers",
};

const trackContent = {
  family: {
    eyebrow: "Strategic Family Design",
    heroTitle: "Интервью для построения семейного PRD",
    heroCopy:
      "Ответь на вопросы в удобном темпе. Если какая-то тема требует детализации, приложение автоматически задаст дополнительные вопросы. В финале ты получишь полный список вопросов и своих ответов.",
    resultsTitle: "Твоя карта семейных ответов",
    resultsCopy: "Ниже собраны все вопросы, на которые ты ответил, включая уточняющие ветки.",
    draftTitle: "PRD-черновик",
    draftIntro:
      "Это автогенерируемый рабочий документ на основе твоих ответов. Его можно скачать в Markdown и доработать вручную.",
    draftButton: "Скачать PRD",
    copyButton: "Скопировать ответы",
    jsonFilename: "family-project-results.json",
    draftFilename: "family-project-prd-draft.md",
    printableTitle: "Family Project Report",
    evidence:
      "Семейный режим опирается на прикладную логику совместимости, роли, ресурса и долгого семейного дизайна.",
  },
  relationship: {
    eyebrow: "Relationship Readiness Design",
    heroTitle: "Интервью для калибровки отношений",
    heroCopy:
      "Этот режим не про семью и не про жену как обязательную цель. Он помогает понять, как ты входишь в отношения, сколько близости и свободы тебе реально нужно и какой формат связи тебе подходит на текущем жизненном этапе.",
    resultsTitle: "Твоя карта отношений",
    resultsCopy:
      "Ниже собраны ответы о том, как ты строишь близость, переживаешь конфликт, держишь границы и что вообще ищешь в отношениях сейчас.",
    draftTitle: "Черновик relational profile",
    draftIntro:
      "Это автогенерируемый профиль отношений на основе твоих ответов. Его можно скачать в Markdown и использовать как личный brief, фильтр знакомств или основу для разговора с терапевтом.",
    draftButton: "Скачать профиль",
    copyButton: "Скопировать ответы",
    jsonFilename: "relationship-profile-results.json",
    draftFilename: "relationship-profile-draft.md",
    printableTitle: "Relationship Readiness Report",
    evidence:
      "Режим про отношения опирается на исследования по adult attachment, perceived partner responsiveness, conflict repair и commitment.",
  },
  dating: {
    eyebrow: "Dating & First Stages Design",
    heroTitle: "Интервью для early-stage dating profile",
    heroCopy:
      "Этот режим нужен для первых этапов знакомств: как ты заходишь в контакт, какой темп для тебя нормален, как ты считываешь интерес и что быстро усиливает или убивает притяжение.",
    resultsTitle: "Твоя карта dating-паттернов",
    resultsCopy:
      "Здесь собраны ответы о темпе, сигналах интереса, tolerance к неопределенности и правилах первых стадий отношений.",
    draftTitle: "Черновик dating profile",
    draftIntro:
      "Это рабочий dating profile для первых стадий. Его можно использовать как личный brief, набор фильтров и опору для более честных знакомств.",
    draftButton: "Скачать dating profile",
    copyButton: "Скопировать ответы",
    jsonFilename: "dating-first-stages-results.json",
    draftFilename: "dating-first-stages-profile.md",
    printableTitle: "Dating And First Stages Report",
    evidence:
      "Dating-режим опирается на исследования раннего self-disclosure, romantic uncertainty, signaling interest и early-stage pacing.",
  },
  breakup: {
    eyebrow: "Breakup Recovery Design",
    heroTitle: "Интервью для восстановления после разрыва",
    heroCopy:
      "Этот режим помогает понять, насколько разрыв еще держит тебя в эмоциональной системе, где именно утечка ресурса и как безопасно возвращаться к себе, а не просто глушить боль новыми людьми.",
    resultsTitle: "Твоя карта восстановления",
    resultsCopy:
      "Ниже собраны ответы о боли, контакте с бывшим партнером, регуляции, опорах и готовности к следующему этапу.",
    draftTitle: "Черновик recovery plan",
    draftIntro:
      "Это автогенерируемый recovery profile. Его можно использовать как личный план восстановления, материал для терапии или чеклист безопасного re-entry в dating.",
    draftButton: "Скачать recovery plan",
    copyButton: "Скопировать ответы",
    jsonFilename: "breakup-recovery-results.json",
    draftFilename: "breakup-recovery-plan.md",
    printableTitle: "Breakup Recovery Report",
    evidence:
      "Recovery-режим опирается на исследования grief, post-breakup adjustment, boundary stability и emotion regulation after dissolution.",
  },
  compatibility: {
    eyebrow: "Compatibility For Two",
    heroTitle: "Сравнение двух людей без магического мышления",
    heroCopy:
      "Этот режим сравнивает ответы двух людей по зонам совпадения и потенциального трения. Он не объявляет пару обреченной или идеальной, а показывает, где высока легкость, где нужен разговор и где компромисс может быть дорогим.",
    resultsTitle: "Карта совместимости двух людей",
    resultsCopy:
      "Ниже собраны ответы обоих людей, сравнительные шкалы и зоны согласования, напряжения и переговоров.",
    draftTitle: "Черновик compatibility report",
    draftIntro:
      "Это структурированный compatibility report по ответам двух людей. Его можно скачать в Markdown и использовать как основу для честного разговора о темпе, ценностях, пространстве и конфликте.",
    draftButton: "Скачать compatibility report",
    copyButton: "Скопировать сравнение",
    jsonFilename: "compatibility-for-two-results.json",
    draftFilename: "compatibility-for-two-report.md",
    printableTitle: "Compatibility For Two Report",
    evidence:
      "Сравнение двух людей опирается на исследования similarity/mismatch, conflict repair и то, что различия не фатальны сами по себе, но повышают цену переговоров.",
  },
};

const questions = [
  {
    id: "vision_drivers",
    block: "vision",
    type: "priorityMatrix",
    title: 'Что в первую очередь драйвит запуск проекта "Семья"?',
    help: "Оцени каждый мотив по шкале от 0 до 5, где 5 — критически важный приоритет.",
    required: true,
    items: [
      {
        key: "healthy_generation",
        label: "Здоровое следующее поколение",
        description: "Генетическая, воспитательная и культурная преемственность.",
      },
      {
        key: "operational_rear",
        label: "Стабильный тыл для масштабирования бизнеса",
        description: "Семья как надежная база, снижающая хаос и бытовую турбулентность.",
      },
      {
        key: "cultural_code",
        label: "Сохранение культурного или религиозного кода",
        description: "Передача ценностей, традиций, языка, ритуалов и правил жизни.",
      },
      {
        key: "emotional_fulfillment",
        label: "Эмоциональная близость и companionship",
        description: "Партнерство, привязанность, забота и чувство команды.",
      },
      {
        key: "social_status",
        label: "Социальный статус или сигнал окружающим",
        description: "Укрепление репутации, социальной роли и внешнего образа.",
      },
      {
        key: "legacy",
        label: "Наследие и длинная траектория",
        description: "Создание семьи как проекта длиннее личной карьеры.",
      },
    ],
    hasOther: true,
  },
  {
    id: "vision_success_20y",
    block: "vision",
    type: "textarea",
    title: "Как выглядит успех через 20 лет?",
    help: "Опиши финальное состояние семьи в 2–3 предложениях: образ жизни, отношения, дети, масштаб, атмосфера.",
    required: true,
    placeholder: "Например: у нас крепкая семья, 2–3 ребенка, стабильная домашняя культура, спокойная атмосфера и ясные правила...",
  },
  {
    id: "vision_family_mode",
    block: "vision",
    type: "singleChoice",
    title: "Какой формат семейной системы тебе ближе?",
    help: "Выбери модель, которая интуитивно кажется правильной на старте.",
    required: true,
    options: [
      {
        value: "traditional",
        label: "Традиционная",
        description: "Четкое разделение ролей, выраженная иерархия и устойчивые ритуалы.",
      },
      {
        value: "partner_equal",
        label: "Партнерская",
        description: "Высокая симметрия в решениях, обязанностях и темпе развития.",
      },
      {
        value: "hybrid",
        label: "Гибридная",
        description: "Есть лидерство, но роли адаптируются под контекст и этап семьи.",
      },
      {
        value: "undecided",
        label: "Еще формирую позицию",
        description: "Нужна дальнейшая калибровка, а не жесткая модель заранее.",
      },
    ],
  },
  {
    id: "vision_family_mode_followup",
    block: "vision",
    type: "textarea",
    title: "Какие роли и зоны ответственности обязательно должны быть ясны в этой модели?",
    help: "Например: деньги, воспитание, быт, духовная жизнь, переезды, принятие решений.",
    required: true,
    placeholder: "Опиши ключевые роли и где нужен один лидер, а где совместное решение.",
    showIf: (answers) => {
      const mode = answers.vision_family_mode;
      return mode && mode !== "undecided";
    },
  },
  {
    id: "founder_hard_skills",
    block: "founder",
    type: "multiChoice",
    title: "В каких профессиональных доменах ты силен?",
    help: "Отметь все области, которые реально дают тебе рычаг в жизни и работе.",
    required: true,
    minSelections: 1,
    options: [
      { value: "finance", label: "Финансы", description: "Деньги, инвестиции, бюджетирование, капитал." },
      { value: "tech", label: "Технологии", description: "Разработка, архитектура, AI, системное мышление." },
      { value: "operations", label: "Операции", description: "Процессы, контроль качества, исполнение и масштабирование." },
      { value: "sales", label: "Продажи", description: "Переговоры, влияние, сделки, построение выручки." },
      { value: "marketing", label: "Маркетинг", description: "Позиционирование, бренд, growth, коммуникация." },
      { value: "management", label: "Управление", description: "Люди, ответственность, структура и приоритеты." },
      { value: "creative", label: "Креатив", description: "Контент, дизайн, storytelling, вкус и концепции." },
      { value: "law", label: "Право / комплаенс", description: "Договоры, риски, регуляторная логика." },
      { value: "health", label: "Здоровье / спорт", description: "Практики долголетия, дисциплина тела, восстановление." },
      { value: "education", label: "Обучение / менторство", description: "Передача знаний, наставничество, развитие людей." },
      { value: "other", label: "Другое", description: "Если твоя ключевая сила не попала в список." },
    ],
  },
  {
    id: "founder_hard_skills_other",
    block: "founder",
    type: "text",
    title: "Какая еще сильная профессиональная область у тебя есть?",
    help: "Укажи домен, в котором ты особенно силен.",
    required: true,
    placeholder: "Например: строительство, логистика, медиа, госуправление...",
    showIf: (answers) => Array.isArray(answers.founder_hard_skills) && answers.founder_hard_skills.includes("other"),
  },
  {
    id: "founder_soft_style",
    block: "founder",
    type: "multiChoice",
    title: "Как близкие коллеги описали бы твой стиль взаимодействия?",
    help: "Выбери 3–6 пунктов, которые больше всего на тебя похожи.",
    required: true,
    minSelections: 3,
    options: [
      { value: "calm", label: "Спокоен под давлением", description: "Не паникуешь в кризисе, держишь ритм." },
      { value: "direct", label: "Прямой коммуникатор", description: "Говоришь по сути, не любишь туманность." },
      { value: "warm", label: "Теплый и поддерживающий", description: "Создаешь ощущение безопасности и уважения." },
      { value: "high_energy", label: "Высокоэнергичный", description: "Заряжаешь людей скоростью и амбициями." },
      { value: "conflict_avoidant", label: "Избегаешь конфликта", description: "Склонен откладывать острые разговоры." },
      { value: "dominant", label: "Доминирующий", description: "Любишь держать курс и принимать решения сам." },
      { value: "analytical", label: "Аналитичный", description: "Сначала понимаешь систему, потом действуешь." },
      { value: "sensitive", label: "Чувствительный к атмосфере", description: "Сильно считываешь тон и эмоциональный фон." },
      { value: "structured", label: "Структурный", description: "Любишь ясность ролей, сроков и правил." },
      { value: "adaptive", label: "Гибкий", description: "Легко перенастраиваешься под людей и ситуацию." },
    ],
  },
  {
    id: "founder_age",
    block: "founder",
    type: "number",
    title: "Сколько тебе лет?",
    help: "Возраст сильно влияет на тайминг брака, детей и уровень допустимого риска.",
    required: true,
    min: 18,
    max: 90,
    placeholder: "Например: 33",
  },
  {
    id: "founder_life_stage",
    block: "founder",
    type: "singleChoice",
    title: "На каком жизненном этапе ты сейчас находишься?",
    help: "Это помогает настроить реалистичную траекторию по срокам и ожиданиям.",
    required: true,
    options: [
      { value: "building", label: "Интенсивно строю карьеру / бизнес", description: "Фокус на росте, результатах и создании базы." },
      { value: "stabilized", label: "Уже стабилизировал базу", description: "Есть ресурс, хочется строить систему вдолгую." },
      { value: "transition", label: "В переходе", description: "Идет смена этапа, роли, географии или образа жизни." },
      { value: "recovery", label: "После сильной перезагрузки", description: "Восстановление после развода, выгорания, потери или другого перелома." },
    ],
  },
  {
    id: "founder_culture",
    block: "founder",
    type: "singleChoice",
    title: "Есть ли культурный или религиозный каркас, внутри которого семья должна жить?",
    help: "Выбери ближайший вариант. Если рамка гибридная, уточним ее дальше.",
    required: true,
    options: [
      { value: "strict_religious", label: "Да, строгий религиозный", description: "Есть четкие нормы, обязательные практики и границы." },
      { value: "moderate_religious", label: "Да, умеренно религиозный", description: "Вера важна, но возможна адаптация под реальность." },
      { value: "cultural", label: "Да, культурный / национальный", description: "Ключевы язык, происхождение, традиции и среда." },
      { value: "hybrid", label: "Гибридный", description: "Несколько кодов одновременно: например, вера + современный городской уклад." },
      { value: "no", label: "Нет, важнее личная совместимость", description: "Главный критерий — качества человека, а не принадлежность к коду." },
    ],
  },
  {
    id: "founder_culture_followup",
    block: "founder",
    type: "textarea",
    title: "Какие элементы этого кода для тебя обязательны, а где возможна гибкость?",
    help: "Укажи язык, ритуалы, праздники, роли, одежду, практики, круг общения, воспитание детей.",
    required: true,
    placeholder: "Например: обязательны венчание, воскресная служба и определенная среда для детей, но стиль одежды и карьера партнера обсуждаемы.",
    showIf: (answers) => answers.founder_culture && answers.founder_culture !== "no",
  },
  {
    id: "constraints_energy_type",
    block: "constraints",
    type: "singleChoice",
    title: "Какой у тебя энергетический тип?",
    help: "Это влияет на бытовой ритм, формат общения и риск перегруза.",
    required: true,
    options: [
      { value: "introvert", label: "Интроверт", description: "Восстанавливаюсь в одиночестве или в очень узком круге." },
      { value: "ambivert", label: "Амбиверт", description: "Могу долго взаимодействовать, если есть баланс и перерывы." },
      { value: "extrovert", label: "Экстраверт", description: "Люди и динамика скорее заряжают, чем истощают." },
    ],
  },
  {
    id: "constraints_social_limit",
    block: "constraints",
    type: "singleChoice",
    title: "Сколько часов плотного социального взаимодействия в день для тебя устойчиво?",
    help: "Оцени, после какого объема общения ты обычно перегружаешься.",
    required: true,
    options: [
      { value: "1_2", label: "1–2 часа", description: "Дальше нужен ощутимый откат и тишина." },
      { value: "3_4", label: "3–4 часа", description: "Базовый лимит, после которого хочется снизить стимуляцию." },
      { value: "5_6", label: "5–6 часов", description: "Могу выдерживать плотный день, но не бесконечно." },
      { value: "7_8", label: "7–8 часов", description: "Нормально живу в постоянном взаимодействии." },
      { value: "9_plus", label: "9+ часов", description: "Высокая социальная емкость, особенно если есть цель." },
    ],
  },
  {
    id: "constraints_recharge",
    block: "constraints",
    type: "textarea",
    title: "Что обязательно должно быть в твоем режиме восстановления?",
    help: "Опиши, без чего ты начинаешь раздражаться, закрываться или терять качество.",
    required: true,
    placeholder: "Например: час тишины утром, спорт, прогулка без телефона, один вечер в неделю без людей...",
  },
  {
    id: "constraints_workload",
    block: "constraints",
    type: "inlineNumbers",
    title: "Как выглядит твой рабочий режим сейчас?",
    help: "Укажи приблизительные рабочие часы в неделю и число рабочих поездок в месяц.",
    required: true,
    fields: [
      { key: "hours", label: "Часов работы в неделю", min: 0, max: 120, placeholder: "Например: 55" },
      { key: "travel", label: "Поездок / командировок в месяц", min: 0, max: 31, placeholder: "Например: 2" },
    ],
  },
  {
    id: "constraints_work_format",
    block: "constraints",
    type: "singleChoice",
    title: "В каком формате ты работаешь большую часть времени?",
    help: "Нужно понять, насколько гибок твой быт и сколько живого присутствия дома вообще возможно.",
    required: true,
    options: [
      { value: "remote", label: "В основном удаленно", description: "Больше контроля над графиком и домашней логистикой." },
      { value: "hybrid", label: "Гибридно", description: "Есть часть времени в офисе и часть дома." },
      { value: "office", label: "В основном офлайн / офис", description: "Ритм задается внешним графиком и дорогой." },
      { value: "field", label: "Полевой / разъездной режим", description: "Много перемещений, объектов, встреч и непредсказуемости." },
    ],
  },
  {
    id: "constraints_travel_followup",
    block: "constraints",
    type: "textarea",
    title: "Какой формат поддержки от партнера нужен, если у тебя напряженный график или поездки?",
    help: "Опиши, что для тебя критично: эмоциональная устойчивость, автономность партнера, готовность к переездам, управление бытом.",
    required: true,
    placeholder: "Например: важна высокая автономность, без драматизации при командировках и готовность держать дом в ритме.",
    showIf: (answers) => {
      const load = answers.constraints_workload;
      return load && (Number(load.hours) >= 55 || Number(load.travel) >= 2);
    },
  },
  {
    id: "constraints_routines",
    block: "constraints",
    type: "multiChoice",
    title: "Какие личные ритуалы партнер обязан уважать?",
    help: "Отметь все, что для тебя действительно не обсуждается.",
    required: true,
    minSelections: 1,
    options: [
      { value: "morning_solitude", label: "Уединение утром", description: "Нужен спокойный старт дня без давления и разговоров." },
      { value: "gym", label: "Спорт / зал", description: "Тренировки нельзя постоянно жертвовать ради быта." },
      { value: "deep_work", label: "Глубокая работа", description: "Нужны блоки без прерываний и бытовых вмешательств." },
      { value: "sleep", label: "Сон и восстановление", description: "Режим сна критичен для адекватности и здоровья." },
      { value: "friends", label: "Отдельное время с друзьями / кругом", description: "Нужен свой внешний контур общения." },
      { value: "faith", label: "Практики веры / духовности", description: "Регулярные ритуалы или посещения обязательны." },
      { value: "study", label: "Обучение / чтение", description: "Есть регулярное время на интеллектуальный апгрейд." },
      { value: "family_of_origin", label: "Контакт с родителями / семьей происхождения", description: "Важно не отрезать этот контур." },
      { value: "other", label: "Другое", description: "Есть собственный ритуал, который не попал в список." },
    ],
  },
  {
    id: "constraints_routines_other",
    block: "constraints",
    type: "text",
    title: "Какой еще не обсуждаемый личный ритуал у тебя есть?",
    help: "Назови его коротко и ясно.",
    required: true,
    placeholder: "Например: субботняя баня, еженедельная терапия, шахматы...",
    showIf: (answers) => Array.isArray(answers.constraints_routines) && answers.constraints_routines.includes("other"),
  },
  {
    id: "constraints_failure_history",
    block: "constraints",
    type: "singleChoice",
    title: "Есть ли у тебя история серьезных отношений, которые закончились неудачно?",
    help: "Это поможет выявить повторяющиеся паттерны, а не строить абстрактный портрет.",
    required: true,
    options: [
      { value: "none", label: "Нет", description: "Серьезных отношений почти не было или они не успели дойти до кризиса." },
      { value: "one", label: "Да, один важный кейс", description: "Был один значимый опыт, который стоит разобрать." },
      { value: "multiple", label: "Да, несколько кейсов", description: "Есть повторяющиеся паттерны или серия схожих сбоев." },
    ],
  },
  {
    id: "constraints_failure_patterns",
    block: "constraints",
    type: "textarea",
    title: "Что конкретно ломало прошлые отношения?",
    help: "Опиши причины честно и на уровне механики: конфликт, холодность, контроль, измены, разные цели, темп, ценности, деньги.",
    required: true,
    placeholder: "Например: я уходил в работу и оставлял мало эмоционального присутствия, а партнер начинал давить и копить обиды.",
    showIf: (answers) => answers.constraints_failure_history && answers.constraints_failure_history !== "none",
  },
  {
    id: "resources_financial_model",
    block: "resources",
    type: "singleChoice",
    title: "Какую финансовую архитектуру семьи ты считаешь базовой?",
    help: "Выбери модель, которая кажется устойчивой именно для тебя.",
    required: true,
    options: [
      { value: "sole_provider", label: "Я основной или единственный добытчик", description: "Главная ответственность за доход на мне." },
      { value: "dual_income", label: "Партнерство двух доходов", description: "Оба вносят существенный вклад в финансовую систему." },
      { value: "flex", label: "Гибрид по этапам", description: "На разных этапах модель может меняться." },
      { value: "undecided", label: "Пока не решил", description: "Нужно уточнять через реальные цели и этапы семьи." },
    ],
  },
  {
    id: "resources_partner_contribution",
    block: "resources",
    type: "singleChoice",
    title: "Какой вклад партнера в общий доход для тебя комфортен?",
    help: "Выбери диапазон, который не вызывает внутреннего сопротивления.",
    required: true,
    options: [
      { value: "0_10", label: "0–10%", description: "Финансовый вклад необязателен, важнее другие функции." },
      { value: "10_30", label: "10–30%", description: "Базовая самостоятельность желательна, но не критична." },
      { value: "30_50", label: "30–50%", description: "Хочется ощутимого участия, но без жесткой симметрии." },
      { value: "50_plus", label: "50%+", description: "Партнер должен быть сильным финансовым игроком." },
      { value: "context", label: "Зависит от этапа", description: "Вклад может меняться после детей, переезда или роста капитала." },
    ],
  },
  {
    id: "resources_provider_followup",
    block: "resources",
    type: "textarea",
    title: "Что должен брать на себя партнер, если финансовая нагрузка в основном на тебе?",
    help: "Опиши, какой обмен ты считаешь справедливым: быт, эмоциональная среда, дети, социальная дипломатия, поддержка ритма.",
    required: true,
    placeholder: "Например: высокий уровень домашней организации, теплый фон, уважение к моему ритму и качественная среда для детей.",
    showIf: (answers) => {
      const model = answers.resources_financial_model;
      const contribution = answers.resources_partner_contribution;
      return model === "sole_provider" || contribution === "0_10";
    },
  },
  {
    id: "resources_housing",
    block: "resources",
    type: "singleChoice",
    title: "Как сейчас устроен жилищный вопрос?",
    help: "Это влияет на скорость старта семьи и допустимую географическую гибкость.",
    required: true,
    options: [
      { value: "own", label: "Есть собственное жилье", description: "Уже есть физическая база для семейного контура." },
      { value: "rent", label: "Снимаю", description: "База гибкая, но не закрепленная." },
      { value: "multiple", label: "Несколько локаций / активов", description: "Есть вариативность между городами или домами." },
      { value: "with_family", label: "Живу с семьей / родственниками", description: "Переход к автономной системе еще впереди." },
    ],
  },
  {
    id: "resources_location_flex",
    block: "resources",
    type: "singleChoice",
    title: "Насколько ты гибок по городу и стране проживания?",
    help: "Выбери реальную, а не теоретическую гибкость.",
    required: true,
    options: [
      { value: "fixed_city", label: "Привязан к текущему городу", description: "Переезд маловероятен или очень дорог по последствиям." },
      { value: "same_country", label: "Могу переехать внутри страны", description: "Есть гибкость, но в знакомой культурной среде." },
      { value: "international", label: "Готов к международному переезду", description: "География может быть частью стратегии семьи." },
      { value: "unknown", label: "Решу по кандидату и возможностям", description: "Локация вторична относительно человека и перспектив." },
    ],
  },
  {
    id: "resources_partnership_time",
    block: "resources",
    type: "singleChoice",
    title: "Сколько качественного времени в неделю ты реально можешь инвестировать в отношения?",
    help: "Не считая просто совместного проживания, бытового фона или сна в одном доме.",
    required: true,
    options: [
      { value: "0_5", label: "0–5 часов", description: "Сейчас ресурса мало, нужен очень автономный формат." },
      { value: "6_10", label: "6–10 часов", description: "Есть ограниченный, но реальный слот на отношения." },
      { value: "11_15", label: "11–15 часов", description: "Можно строить нормальную эмоциональную связку." },
      { value: "16_20", label: "16–20 часов", description: "Есть серьезный ресурс на совместную жизнь и развитие." },
      { value: "20_plus", label: "20+ часов", description: "Отношения сейчас могут быть одним из ключевых фокусов." },
    ],
  },
  {
    id: "resources_time_gap_followup",
    block: "resources",
    type: "textarea",
    title: "Как ты планируешь компенсировать ограниченный ресурс на отношения?",
    help: "Если времени мало, важно заранее понимать механику: качество контакта, ритуалы, делегирование, ожидания партнера.",
    required: true,
    placeholder: "Например: фиксированные свидания, прозрачный календарь, минимум хаотичных отмен и отдельные совместные ритуалы.",
    showIf: (answers) => ["0_5", "6_10"].includes(answers.resources_partnership_time),
  },
  {
    id: "cofounder_age_range",
    block: "cofounder",
    type: "singleChoice",
    title: "Какой возрастной диапазон партнера для тебя реалистичен?",
    help: "Выбери диапазон, который соответствует твоим целям по зрелости, химии и срокам детей.",
    required: true,
    options: [
      { value: "18_24", label: "18–24", description: "Максимум пластичности, но часто меньше зрелости и ясности." },
      { value: "25_29", label: "25–29", description: "Часто оптимум между молодостью, фертильностью и самостоятельностью." },
      { value: "30_34", label: "30–34", description: "Выше зрелость и ясность, но уже важен тайминг по детям." },
      { value: "35_plus", label: "35+", description: "Критерии смещаются в сторону высокой осознанности и скорости решений." },
      { value: "depends", label: "Зависит от человека", description: "Возраст вторичен относительно ценностей и динамики." },
    ],
  },
  {
    id: "cofounder_education",
    block: "cofounder",
    type: "singleChoice",
    title: "Какой интеллектуальный baseline партнера тебе нужен?",
    help: "Речь не только про диплом, а про способность понимать сложность, учиться и разговаривать на твоем уровне.",
    required: true,
    options: [
      { value: "degree_required", label: "Нужен хороший формальный бэкграунд", description: "Образование и академическая база важны как фильтр." },
      { value: "smart_no_degree", label: "Диплом не обязателен, но интеллект обязателен", description: "Сильная голова важнее статуса учебного заведения." },
      { value: "values_first", label: "Характер и ценности важнее интеллекта", description: "Ум желателен, но не ядро решения." },
      { value: "high_ambition", label: "Нужен высокий уровень амбиции и развития", description: "Важно, чтобы она росла и тянулась вверх." },
    ],
  },
  {
    id: "cofounder_children_timeline",
    block: "cofounder",
    type: "singleChoice",
    title: "Когда ты хочешь первого ребенка?",
    help: "Выбери не идеальную, а реалистичную траекторию.",
    required: true,
    options: [
      { value: "within_1", label: "В течение 1 года", description: "Высокая срочность, нужна быстрая калибровка и готовность." },
      { value: "1_2", label: "Через 1–2 года", description: "Нужно быстрое сближение, но есть немного времени на проверку." },
      { value: "3_5", label: "Через 3–5 лет", description: "Можно строить фундамент дольше и аккуратнее." },
      { value: "not_sure", label: "Пока не уверен", description: "Сначала хочется понять саму модель семьи." },
    ],
  },
  {
    id: "cofounder_children_readiness",
    block: "cofounder",
    type: "textarea",
    title: "Что сейчас главный блокер для быстрого старта с детьми?",
    help: "Если тайминг ранний, важно понять, что отделяет тебя от готовности прямо сейчас.",
    required: true,
    placeholder: "Например: нет подходящего партнера, нужно укрепить доход, решить вопрос с жильем, перестроить график...",
    showIf: (answers) => ["within_1", "1_2"].includes(answers.cofounder_children_timeline),
  },
  {
    id: "cofounder_children_count",
    block: "cofounder",
    type: "singleChoice",
    title: "Сколько детей ты хочешь в идеале?",
    help: "Выбери желаемую мощность семейной системы.",
    required: true,
    options: [
      { value: "1", label: "1 ребенок", description: "Фокус на качестве и управляемости." },
      { value: "2", label: "2 ребенка", description: "Классический сбалансированный вариант." },
      { value: "3", label: "3 ребенка", description: "Семья становится более сложной, но и более наполненной." },
      { value: "4_plus", label: "4+", description: "Нужна особенно сильная система и ресурсная база." },
      { value: "unknown", label: "Пока не знаю", description: "Хочу отталкиваться от партнера, здоровья и реальности." },
    ],
  },
  {
    id: "cofounder_partner_role",
    block: "cofounder",
    type: "singleChoice",
    title: "Какой рабочий сценарий партнера для тебя предпочтителен после появления детей?",
    help: "Не как должно быть в теории, а как тебе действительно кажется устойчивым.",
    required: true,
    options: [
      { value: "home_primary", label: "В основном дома с детьми", description: "Семейный контур важнее карьеры в ранние годы." },
      { value: "part_time", label: "Частичная занятость", description: "Баланс между семьей и самореализацией." },
      { value: "full_time", label: "Полноценная карьера допустима", description: "Система должна выдерживать два сильных трека." },
      { value: "depends", label: "Зависит от этапа и человека", description: "Решение должно быть адаптивным." },
    ],
  },
  {
    id: "cofounder_dealbreakers",
    block: "cofounder",
    type: "multiChoice",
    title: "Какие deal-breakers для тебя уже очевидны?",
    help: "Выбери все автоматические дисквалификаторы, даже если по остальным параметрам человек привлекателен.",
    required: true,
    minSelections: 1,
    options: [
      { value: "substance_abuse", label: "Зависимости", description: "Алкоголь, вещества, азартные игры или хроническая самодеструкция." },
      { value: "infidelity", label: "Неверность / нормализация измен", description: "Низкая ценность эксклюзивности и верности." },
      { value: "disrespect", label: "Неуважение и токсичный стиль", description: "Унижение, манипуляции, постоянная агрессия." },
      { value: "different_children", label: "Разные взгляды на детей", description: "Не совпадает желание иметь детей или сроки критично расходятся." },
      { value: "different_faith", label: "Несовместимый культурный или религиозный код", description: "Ключевые правила жизни не совпадают." },
      { value: "financial_chaos", label: "Финансовый хаос", description: "Импульсивные траты, долги, избегание ответственности." },
      { value: "career_conflict", label: "Несовместимый карьерный вектор", description: "Ее стиль жизни разрушает желаемую семейную архитектуру." },
      { value: "health_refusal", label: "Игнорирование здоровья", description: "Нежелание заботиться о психическом и физическом состоянии." },
      { value: "low_respect_family", label: "Неуважение к семье происхождения", description: "Невозможность встраиваться в важный для тебя контур." },
      { value: "other", label: "Другое", description: "Есть дополнительный стоп-фактор." },
    ],
  },
  {
    id: "cofounder_dealbreakers_other",
    block: "cofounder",
    type: "text",
    title: "Какой еще стоп-фактор для тебя критичен?",
    help: "Сформулируй коротко.",
    required: true,
    placeholder: "Например: жесткая ревность, политическая несовместимость, отказ жить вне мегаполиса...",
    showIf: (answers) => Array.isArray(answers.cofounder_dealbreakers) && answers.cofounder_dealbreakers.includes("other"),
  },
  {
    id: "cofounder_nonnegotiables",
    block: "cofounder",
    type: "textarea",
    title: "Какие 3 качества партнера для тебя обязательны, если убрать весь шум?",
    help: "Сфокусируйся на самом ядре: характер, вера, дисциплина, интеллект, теплота, зрелость, лояльность и т.д.",
    required: true,
    placeholder: "Например: уважение, эмоциональная зрелость, готовность строить долгую систему и быть в одной ценностной рамке.",
  },
];

const relationshipQuestions = [
  {
    id: "relationship_goal_now",
    block: "orientation",
    type: "singleChoice",
    title: "Что ты на самом деле ищешь в отношениях сейчас?",
    help: "Не выбирай социально правильный ответ. Выбери тот сценарий, который реалистичен именно сейчас.",
    required: true,
    options: [
      { value: "casual", label: "Легкое знакомство без жестких ожиданий", description: "Хочется контакта и опыта, но без быстрой фиксации формата." },
      { value: "meaningful", label: "Содержательные отношения без спешки", description: "Нужна глубина, но не обязательно быстрый formal commitment." },
      { value: "exclusive", label: "Эксклюзивные отношения", description: "Хочется устойчивой пары и понятной взаимности." },
      { value: "long_term", label: "Долгий серьезный союз", description: "Даже если не думаешь о семье, нужен человек для длинной траектории." },
      { value: "unclear", label: "Пока не до конца понимаю", description: "Есть интерес к отношениям, но сама цель еще формируется." },
    ],
  },
  {
    id: "relationship_goal_followup",
    block: "orientation",
    type: "textarea",
    title: "Что должно произойти, чтобы отношения стали для тебя более серьезным приоритетом?",
    help: "Опиши триггеры, после которых ты сможешь входить в отношения осознаннее: возраст, карьера, стабильность, эмоциональная готовность.",
    required: true,
    placeholder: "Например: закрыть вопрос с карьерной неопределенностью, пройти период восстановления, почувствовать, что я готов делить время и рутину.",
    showIf: (answers) => ["casual", "unclear"].includes(answers.relationship_goal_now),
  },
  {
    id: "relationship_success_3y",
    block: "orientation",
    type: "textarea",
    title: "Как выглядит успешная личная жизнь через 3 года?",
    help: "Опиши желаемое состояние без привязки к семье: тип связи, уровень близости, стиль жизни, эмоциональный фон.",
    required: true,
    placeholder: "Например: у меня есть устойчивая пара, много доверия, хороший секс, уважение к личному пространству и ясность по будущему.",
  },
  {
    id: "relationship_life_stage",
    block: "orientation",
    type: "singleChoice",
    title: "На каком этапе ты сейчас по отношению к любви и близости?",
    help: "Это важно, потому что романтическая стратегия сильно зависит от текущего контекста, а не только от ценностей.",
    required: true,
    options: [
      { value: "career", label: "Собираю карьеру / бизнес", description: "Энергия в основном уходит в рост, а не в эмоциональную систему." },
      { value: "exploration", label: "Исследую себя и людей", description: "Хочется опыта, понимания себя и расширения диапазона." },
      { value: "healing", label: "Восстанавливаюсь после боли", description: "Есть след прошлых отношений, выгорания или внутренней турбулентности." },
      { value: "stable", label: "Уже стабилен, но без семейного фокуса", description: "Есть ресурс на отношения, даже если семья пока не в приоритете." },
      { value: "mixed", label: "Смешанный этап", description: "Есть и амбиция, и желание близости, но между ними нет полного баланса." },
    ],
  },
  {
    id: "relationship_attachment_matrix",
    block: "style",
    type: "priorityMatrix",
    title: "Насколько эти реакции похожи на тебя в близости?",
    help: "Оцени каждый пункт от 0 до 5, где 5 — это очень про тебя. Пункты адаптированы из исследований adult attachment.",
    required: true,
    items: [
      {
        key: "worry_replaced",
        label: "Я переживаю, что для партнера могу стать менее важным",
        description: "Тонкая тревога за значимость и устойчивость связи.",
      },
      {
        key: "need_reassurance",
        label: "Мне нужно заметное подтверждение, что меня выбирают",
        description: "Важно слышать и видеть, что связь живая и взаимная.",
      },
      {
        key: "pull_away",
        label: "Когда человек становится слишком близким, мне хочется отойти",
        description: "Сильная близость может ощущаться как давление.",
      },
      {
        key: "hard_to_depend",
        label: "Мне сложно по-настоящему опираться на другого человека",
        description: "Проще оставаться автономным, чем пускать кого-то в уязвимость.",
      },
    ],
  },
  {
    id: "relationship_space_need",
    block: "style",
    type: "textarea",
    title: "Что помогает тебе не задыхаться в отношениях, когда близость становится высокой?",
    help: "Опиши, какие формы личного пространства, темпа и автономии нужны, чтобы ты не уходил в дистанцию.",
    required: true,
    placeholder: "Например: не писать весь день без пауз, иметь свои вечера, не требовать мгновенных решений после конфликта.",
    showIf: (answers) => {
      const matrix = answers.relationship_attachment_matrix ?? {};
      return Number(matrix.pull_away ?? 0) >= 4 || Number(matrix.hard_to_depend ?? 0) >= 4;
    },
  },
  {
    id: "relationship_responsiveness",
    block: "style",
    type: "singleChoice",
    title: "От чего ты сильнее всего чувствуешь, что тебя действительно видят в отношениях?",
    help: "Вопрос опирается на исследования perceived partner responsiveness.",
    required: true,
    options: [
      { value: "listening", label: "Внимательное слушание", description: "Когда человек реально понимает, а не просто ждет своей очереди говорить." },
      { value: "consistency", label: "Последовательные действия", description: "Важнее поступки и стабильность, чем красивые слова." },
      { value: "warmth", label: "Тепло и эмоциональная мягкость", description: "Тон, забота и психологическая безопасность важнее логики." },
      { value: "autonomy", label: "Уважение к моей автономии", description: "Меня видно тогда, когда меня не поглощают и не переделывают." },
      { value: "curiosity", label: "Интеллектуальный интерес ко мне", description: "Связь усиливается, когда меня изучают и искренне хотят понять." },
    ],
  },
  {
    id: "relationship_conflict_style",
    block: "dynamics",
    type: "singleChoice",
    title: "Как ты чаще всего ведешь себя, когда в отношениях появляется напряжение?",
    help: "Выбери тот паттерн, который случается чаще всего, а не тот, который тебе нравится о себе думать.",
    required: true,
    options: [
      { value: "direct_repair", label: "Иду в разговор и repair довольно быстро", description: "Стараюсь не затягивать и чинить связь по горячим следам." },
      { value: "pause_return", label: "Беру паузу, но возвращаюсь", description: "Мне важно остыть и потом уже говорить качественно." },
      { value: "withdraw", label: "Закрываюсь и дистанцируюсь", description: "Тянет уйти в молчание, работу, одиночество или холод." },
      { value: "escalate", label: "Эмоционально эскалирую", description: "Могу резко реагировать, а потом жалеть о форме." },
      { value: "people_please", label: "Подстраиваюсь и заминаю", description: "Часто стараюсь сохранить мир ценой собственных границ." },
    ],
  },
  {
    id: "relationship_repair_tools",
    block: "dynamics",
    type: "multiChoice",
    title: "Что лучше всего помогает тебе восстановить связь после конфликта?",
    help: "Отметь минимум два варианта, которые реально работают, а не просто звучат красиво.",
    required: true,
    minSelections: 2,
    options: [
      { value: "apology", label: "Искреннее извинение", description: "Мне важно услышать признание вреда и ответственности." },
      { value: "change_plan", label: "Конкретный план изменения поведения", description: "Без этого слова ощущаются пустыми." },
      { value: "cooling", label: "Время на остывание", description: "Нужен промежуток, чтобы не продолжать разрушение." },
      { value: "affection", label: "Физическое тепло / контакт", description: "Нежность и телесная регуляция помогают быстрее вернуться в связь." },
      { value: "clarity", label: "Прояснение смысла и намерений", description: "Важно понять, что человек на самом деле имел в виду." },
      { value: "humor", label: "Мягкий юмор и легкость", description: "Напряжение спадает, когда исчезает жесткая серьезность." },
      { value: "therapy", label: "Внешняя помощь / терапия", description: "Если паттерн повторяется, нужен внешний контейнер." },
    ],
  },
  {
    id: "relationship_boundary_norms",
    block: "dynamics",
    type: "multiChoice",
    title: "Какие правила взаимодействия для тебя базово обязательны?",
    help: "Отметь нормы, без которых отношения быстро начинают ощущаться небезопасными.",
    required: true,
    minSelections: 2,
    options: [
      { value: "honesty", label: "Честность", description: "Не искажаем факты и не живем в намеках." },
      { value: "no_ghosting", label: "Не исчезать без объяснений", description: "Даже сложный разговор лучше, чем размытое растворение." },
      { value: "no_contempt", label: "Без унижения и презрения", description: "Нельзя нормализовать сарказм, насмешку и обесценивание." },
      { value: "sexual_respect", label: "Уважение к сексуальным границам", description: "Никакого давления, манипуляции и чувства долга." },
      { value: "calendar_respect", label: "Уважение к времени и договоренностям", description: "Постоянные хаотичные отмены разрушают доверие." },
      { value: "emotional_honesty", label: "Эмоциональная ясность", description: "Лучше называть чувства, чем играть в угадайку." },
      { value: "repair_attempts", label: "Обязательные попытки repair", description: "Связь нельзя просто бросать после первого сбоя." },
    ],
  },
  {
    id: "relationship_time_capacity",
    block: "lifestyle",
    type: "singleChoice",
    title: "Сколько качественного времени в неделю ты реально можешь дать отношениям сейчас?",
    help: "Не идеальный сценарий, а реальная доступность на текущем этапе жизни.",
    required: true,
    options: [
      { value: "0_4", label: "0–4 часа", description: "Ресурс очень ограничен, отношения будут вторичным контуром." },
      { value: "5_8", label: "5–8 часов", description: "Есть место для отношений, но они конкурируют с другими приоритетами." },
      { value: "9_12", label: "9–12 часов", description: "Можно строить нормальную связку без ощущения крошек." },
      { value: "13_18", label: "13–18 часов", description: "Есть устойчивый слот для близости и совместного ритма." },
      { value: "18_plus", label: "18+ часов", description: "Отношения могут быть одним из ключевых фокусов жизни." },
    ],
  },
  {
    id: "relationship_time_followup",
    block: "lifestyle",
    type: "textarea",
    title: "Как ты собираешься не превращать отношения в крошки внимания?",
    help: "Если времени мало или жизнь перегружена, нужен честный operating model контакта.",
    required: true,
    placeholder: "Например: прозрачный календарь, отдельные вечера, честное предупреждение о загруженных периодах и без breadcrumbing.",
    showIf: (answers) => {
      const lowTime = ["0_4", "5_8"].includes(answers.relationship_time_capacity);
      const heavyStage = ["career", "exploration"].includes(answers.relationship_life_stage);
      return lowTime || heavyStage;
    },
  },
  {
    id: "relationship_exclusivity",
    block: "lifestyle",
    type: "singleChoice",
    title: "Какой формат эксклюзивности тебе сейчас ближе?",
    help: "Здесь важна ясность дизайна отношений, а не социальная норма.",
    required: true,
    options: [
      { value: "monogamy", label: "Моногамия обязательна", description: "Эксклюзивность — базовая рамка безопасности." },
      { value: "soft_monogamy", label: "Скорее моногамия, но с обсуждением", description: "Нужна одна пара, но важны нюансы ожиданий и этапов." },
      { value: "non_monogamy", label: "Открыт к немоногамным моделям", description: "Форма отношений должна обсуждаться, а не предполагаться." },
      { value: "undecided", label: "Еще не определился", description: "Пока важнее человек и контекст, чем фиксированная схема." },
    ],
  },
  {
    id: "relationship_lifestyle_flex",
    block: "lifestyle",
    type: "singleChoice",
    title: "Насколько ты гибок под стиль жизни другого человека?",
    help: "Это про расписание, город, ритм общения, спонтанность и бытовые привычки.",
    required: true,
    options: [
      { value: "low", label: "Низкая гибкость", description: "У меня уже есть сильный ритм, и перестраиваться тяжело." },
      { value: "medium", label: "Умеренная гибкость", description: "Могу адаптироваться, если связь того стоит." },
      { value: "high", label: "Высокая гибкость", description: "С удовольствием перестраиваюсь под живой контакт и рост пары." },
    ],
  },
  {
    id: "relationship_attraction_axes",
    block: "partner",
    type: "multiChoice",
    title: "Что чаще всего создает у тебя настоящее притяжение к человеку?",
    help: "Отметь минимум три фактора, без которых химия обычно не складывается.",
    required: true,
    minSelections: 3,
    options: [
      { value: "intellect", label: "Интеллектуальная искра", description: "Нужны интересные разговоры и ощущение живого ума." },
      { value: "safety", label: "Эмоциональная безопасность", description: "Тянет к тем, рядом с кем не приходится защищаться." },
      { value: "chemistry", label: "Сексуальная химия", description: "Телесное притяжение и эротическая энергия важны как ядро." },
      { value: "drive", label: "Амбиция и внутренний драйв", description: "Хочется быть рядом с человеком, у которого есть вектор." },
      { value: "humor", label: "Юмор и игра", description: "Легкость и смех для тебя не украшение, а важная часть связи." },
      { value: "values", label: "Совпадение ценностей", description: "Даже сильная химия не спасает без общего внутреннего языка." },
      { value: "kindness", label: "Доброта и мягкость", description: "Нравятся люди, в которых мало жесткости и много человечности." },
      { value: "lifestyle", label: "Похожий стиль жизни", description: "Важно совпадение по энергии, телу, ритму и повседневности." },
    ],
  },
  {
    id: "relationship_red_flags",
    block: "partner",
    type: "multiChoice",
    title: "Какие red flags ты уже хорошо знаешь и больше не хочешь игнорировать?",
    help: "Отметь все паттерны, которые для тебя быстро разрушают интерес или доверие.",
    required: true,
    minSelections: 1,
    options: [
      { value: "dishonesty", label: "Нечестность", description: "Скрытность, двойные стандарты, манипуляции фактами." },
      { value: "contempt", label: "Презрение / токсичный тон", description: "Сарказм, насмешка, пассивная агрессия и обесценивание." },
      { value: "inconsistency", label: "Непоследовательность", description: "Сегодня сильно вовлечен, завтра пропадает без ясности." },
      { value: "emotionally_unavailable", label: "Эмоциональная недоступность", description: "Нельзя дотянуться до живого контакта и уязвимости." },
      { value: "control", label: "Ревность / контроль", description: "Партнер хочет владеть, а не строить связь." },
      { value: "no_accountability", label: "Отсутствие ответственности", description: "Человек всегда прав и ничего не чинит после сбоев." },
      { value: "substances", label: "Зависимости", description: "Вещества, азарт или хроническая самодеструкция." },
      { value: "speed_pressure", label: "Давление по скорости", description: "Человеку нужно слишком быстро назвать статус или, наоборот, слишком долго тянуть резину." },
      { value: "other", label: "Другое", description: "Есть личный стоп-фактор, который не попал в список." },
    ],
  },
  {
    id: "relationship_red_flags_other",
    block: "partner",
    type: "text",
    title: "Какой еще red flag для тебя критичен?",
    help: "Сформулируй коротко.",
    required: true,
    placeholder: "Например: неспособность быть одному, постоянный хаос, вражда к терапии, политическая агрессия...",
    showIf: (answers) => Array.isArray(answers.relationship_red_flags) && answers.relationship_red_flags.includes("other"),
  },
  {
    id: "relationship_offer",
    block: "partner",
    type: "textarea",
    title: "Что ты можешь дать партнеру уже сейчас в хорошем сценарии?",
    help: "Опиши не идеальную версию себя, а реальный value proposition: внимание, надежность, секс, честность, глубину, драйв, стабильность.",
    required: true,
    placeholder: "Например: много честности, сильный ум, хорошую эмоциональную поддержку, телесное тепло и уважение к личным границам.",
  },
  {
    id: "relationship_sabotage",
    block: "partner",
    type: "textarea",
    title: "Что обычно мешает тебе удерживать здоровую близость?",
    help: "Назови свои повторяющиеся паттерны: закрываюсь, теряю интерес, иду в работу, ревную, выбираю недоступных людей и т.д.",
    required: true,
    placeholder: "Например: когда мне страшно стать зависимым, я начинаю охлаждаться и рационализировать дистанцию.",
  },
  {
    id: "relationship_growth",
    block: "partner",
    type: "singleChoice",
    title: "Насколько ты готов реально работать со своими паттернами ради хороших отношений?",
    help: "Это про готовность к reflection, обратной связи, терапии и изменению поведения, а не про красивые слова.",
    required: true,
    options: [
      { value: "high", label: "Высокая готовность", description: "Я готов учиться, смотреть на себя и менять привычные сбои." },
      { value: "medium", label: "Скорее готов", description: "Если связь ценная, я могу включаться в работу над собой." },
      { value: "low", label: "Слабая готовность", description: "Сейчас у меня мало ресурса на глубокую перестройку." },
      { value: "avoidant", label: "Не хочу, чтобы отношения стали проектом по исправлению", description: "Готовность к росту ограничена и это важно честно признавать." },
    ],
  },
];

const datingQuestions = [
  {
    id: "dating_intent_now",
    block: "intent",
    type: "singleChoice",
    title: "Какой сценарий знакомств тебе реально нужен сейчас?",
    help: "Вопрос про фактический запрос, а не про красивую идею о себе.",
    required: true,
    options: [
      { value: "light", label: "Легкие знакомства", description: "Контакт, флирт и опыт без жесткой конструкции." },
      { value: "selective", label: "Избирательный dating", description: "Нужны интересные люди, но без спешки к статусу." },
      { value: "serious", label: "Серьезный dating", description: "Ищу человека с реальным потенциалом долгой связи." },
      { value: "paused", label: "Скорее на паузе", description: "Знакомства возможны, но не являются реальным фокусом." },
    ],
  },
  {
    id: "dating_pace_preference",
    block: "pacing",
    type: "singleChoice",
    title: "Какой темп развития связи кажется тебе здоровым в первые 6–8 недель?",
    help: "Это опирается на логику раннего self-disclosure и постепенного снижения неопределенности.",
    required: true,
    options: [
      { value: "slow", label: "Медленный", description: "Хочу много наблюдать и не ускорять сближение." },
      { value: "steady", label: "Плавный", description: "Нужна постепенная, но заметная динамика и ясность." },
      { value: "fast", label: "Быстрый", description: "Если есть химия, не люблю искусственно тормозить." },
      { value: "variable", label: "Зависит от человека", description: "Темп должен собираться из chemistry и контекста." },
    ],
  },
  {
    id: "dating_uncertainty",
    block: "pacing",
    type: "singleChoice",
    title: "Сколько романтической неопределенности ты нормально выдерживаешь в начале?",
    help: "Ранние стадии почти всегда содержат ambiguity; вопрос в том, насколько она тебе переносима.",
    required: true,
    options: [
      { value: "low", label: "Плохо выдерживаю", description: "Мне быстро нужна ясность и считываемая взаимность." },
      { value: "medium", label: "Умеренно", description: "Могу выдерживать ambiguity, если вижу движение." },
      { value: "high", label: "Хорошо выдерживаю", description: "Мне комфортно разворачивать связь без спешки к labels." },
    ],
  },
  {
    id: "dating_signal_interest",
    block: "signals",
    type: "multiChoice",
    title: "Какие сигналы интереса для тебя самые убедительные на старте?",
    help: "Отметь минимум два признака, по которым ты реально понимаешь, что человек вовлечен.",
    required: true,
    minSelections: 2,
    options: [
      { value: "initiative", label: "Инициатива", description: "Человек сам пишет, зовет и двигает связь вперед." },
      { value: "consistency", label: "Последовательность", description: "Нет качелей между жаром и исчезновением." },
      { value: "curiosity", label: "Искренний интерес", description: "Человеку действительно хочется узнавать меня." },
      { value: "time", label: "Инвестиция времени", description: "Он/она встраивает меня в реальный график." },
      { value: "clarity", label: "Ясность намерений", description: "Есть прямые сигналы, а не только флирт и намеки." },
      { value: "affection", label: "Теплота", description: "Есть мягкость, внимание и эмоциональный отклик." },
    ],
  },
  {
    id: "dating_texting",
    block: "signals",
    type: "singleChoice",
    title: "Какой стиль общения между встречами для тебя комфортен?",
    help: "Это важный early-stage friction point, который часто недооценивают.",
    required: true,
    options: [
      { value: "minimal", label: "Минимальный", description: "Лучше мало сообщений, но хорошие встречи." },
      { value: "regular", label: "Регулярный", description: "Нужен ощутимый, но не навязчивый контакт." },
      { value: "high", label: "Интенсивный", description: "Люблю много общения и живой поток между встречами." },
      { value: "adaptive", label: "Адаптивный", description: "Подстраиваюсь под конкретного человека и динамику." },
    ],
  },
  {
    id: "dating_first_dates",
    block: "design",
    type: "multiChoice",
    title: "Что для тебя особенно важно понять на первых 2–3 встречах?",
    help: "Отметь минимум три темы, без которых ты не можешь честно калибровать интерес.",
    required: true,
    minSelections: 3,
    options: [
      { value: "chemistry", label: "Есть ли химия", description: "Телесное и энергетическое притяжение." },
      { value: "safety", label: "Есть ли чувство безопасности", description: "С человеком спокойно и не надо играть роль." },
      { value: "mind", label: "Интересен ли ум", description: "Разговоры живые, не пустые и не утомляющие." },
      { value: "values", label: "Совпадают ли базовые ценности", description: "Не обязательно полное совпадение, но есть общий язык." },
      { value: "pace", label: "Совпадает ли темп", description: "Никто не давит и не тормозит искусственно." },
      { value: "sexuality", label: "Есть ли сексуальный потенциал", description: "Важно понять erotic fit, а не только дружелюбие." },
      { value: "humor", label: "Есть ли легкость и юмор", description: "Насколько приятно просто быть рядом." },
    ],
  },
  {
    id: "dating_green_flags",
    block: "filters",
    type: "multiChoice",
    title: "Какие green flags ты ценишь особенно высоко в начале?",
    help: "Отметь все признаки, которые быстро усиливают доверие и интерес.",
    required: true,
    minSelections: 2,
    options: [
      { value: "kind", label: "Доброта", description: "Много человечности и мало жесткости." },
      { value: "clear", label: "Ясность", description: "Человек умеет говорить прямо и не играет в дым." },
      { value: "stable", label: "Стабильность", description: "Есть внутренний каркас и предсказуемость." },
      { value: "curious", label: "Любопытство к тебе", description: "Не монолог, а живой интерес." },
      { value: "respectful", label: "Уважение границ", description: "Нет давления и эмоционального захвата." },
      { value: "selfaware", label: "Саморефлексия", description: "Человек понимает свои паттерны хотя бы в базовом виде." },
    ],
  },
  {
    id: "dating_red_flags",
    block: "filters",
    type: "multiChoice",
    title: "Какие early-stage red flags ты больше не хочешь игнорировать?",
    help: "Отметь все, что уже показало себя как дорогая ошибка.",
    required: true,
    minSelections: 1,
    options: [
      { value: "lovebomb", label: "Love-bombing", description: "Слишком много интенсивности без реального основания." },
      { value: "ghosting", label: "Пропадания и breadcrumbing", description: "Нестабильное внимание и хаотичная вовлеченность." },
      { value: "contempt", label: "Токсичный тон", description: "Насмешка, грубость, обесценивание." },
      { value: "pressure", label: "Давление по темпу", description: "Форсирование секса, статуса или постоянного контакта." },
      { value: "ambiguity", label: "Хроническая неясность", description: "Человек избегает любой определенности слишком долго." },
      { value: "dishonesty", label: "Нечестность", description: "Скрытность, путаница, двойные стандарты." },
      { value: "other", label: "Другое", description: "Есть личный сильный стоп-фактор." },
    ],
  },
  {
    id: "dating_red_flags_other",
    block: "filters",
    type: "text",
    title: "Какой еще early-stage red flag для тебя критичен?",
    help: "Сформулируй коротко и по сути.",
    required: true,
    placeholder: "Например: постоянные разговоры про бывших, хаос с деньгами, чрезмерный cynicism...",
    showIf: (answers) => Array.isArray(answers.dating_red_flags) && answers.dating_red_flags.includes("other"),
  },
  {
    id: "dating_exclusivity_stage",
    block: "design",
    type: "singleChoice",
    title: "Когда для тебя уместно поднимать тему exclusivity?",
    help: "Это про timing conversation, а не про моральный приговор.",
    required: true,
    options: [
      { value: "very_early", label: "Очень рано", description: "После нескольких встреч мне нужна ясность направления." },
      { value: "after_momentum", label: "После устойчивой динамики", description: "Сначала нужно увидеть реальное движение и контакт." },
      { value: "late", label: "Скорее позже", description: "Не люблю ставить label до заметной истории." },
      { value: "depends", label: "Сильно зависит от chemistry", description: "Разговор должен возникать по естественной динамике." },
    ],
  },
  {
    id: "dating_self_sabotage",
    block: "design",
    type: "textarea",
    title: "Что чаще всего мешает тебе хорошо проходить первые стадии знакомства?",
    help: "Назови свои реальные паттерны: идеализация, скука после chase, избегание, тревога, перегруз работой и т.д.",
    required: true,
    placeholder: "Например: когда человек начинает мне нравиться, я становлюсь более тревожным и хочу слишком быстро определенности.",
  },
  {
    id: "dating_offer",
    block: "design",
    type: "textarea",
    title: "Что ты умеешь приносить в early-stage dating, когда ты в хорошем контакте с собой?",
    help: "Опиши свой реальный плюс для другого человека на старте.",
    required: true,
    placeholder: "Например: интересные разговоры, теплое присутствие, инициативу, ясность, хороший юмор и уважение темпа.",
  },
];

const breakupQuestions = [
  {
    id: "breakup_recency",
    block: "rupture",
    type: "singleChoice",
    title: "Как давно произошел разрыв, который сейчас сильнее всего влияет на тебя?",
    help: "Это не соревнование по скорости восстановления; важно понять фазу системы.",
    required: true,
    options: [
      { value: "under_1m", label: "Меньше месяца", description: "Острая фаза, нервная система еще под высокой нагрузкой." },
      { value: "1_3m", label: "1–3 месяца", description: "Боль часто еще активна, но уже появляется наблюдение." },
      { value: "3_6m", label: "3–6 месяцев", description: "Острая волна снижается, но паттерны могут держать." },
      { value: "6_12m", label: "6–12 месяцев", description: "Есть больше дистанции, но не всегда есть завершение." },
      { value: "over_1y", label: "Больше года", description: "Если тема все еще жива, возможно, дело уже не только во времени." },
    ],
  },
  {
    id: "breakup_initiation",
    block: "rupture",
    type: "singleChoice",
    title: "Кто в основном был инициатором разрыва?",
    help: "Это влияет на динамику контроля, отвержения и sense-making.",
    required: true,
    options: [
      { value: "me", label: "Скорее я", description: "Я в основном принял решение завершать." },
      { value: "them", label: "Скорее другой человек", description: "Разрыв в большей степени пришел извне." },
      { value: "mutual", label: "Обоюдно", description: "Формально решение было совместным." },
      { value: "messy", label: "Сложно сказать", description: "История была запутанной, цикличной или растянутой." },
    ],
  },
  {
    id: "breakup_current_pain",
    block: "grief",
    type: "singleChoice",
    title: "Насколько разрыв все еще влияет на твое состояние сейчас?",
    help: "Отвечай по реальному телесному и эмоциональному влиянию, а не по рациональному рассказу.",
    required: true,
    options: [
      { value: "very_high", label: "Очень сильно", description: "Тема регулярно выбивает меня из ресурса." },
      { value: "high", label: "Заметно", description: "Разрыв остается эмоционально активным." },
      { value: "medium", label: "Умеренно", description: "Есть влияние, но оно не управляет всей жизнью." },
      { value: "low", label: "Слабо", description: "Это уже не центральная ось моего состояния." },
      { value: "very_low", label: "Почти не влияет", description: "Тема в основном интегрирована." },
    ],
  },
  {
    id: "breakup_dominant_state",
    block: "grief",
    type: "multiChoice",
    title: "Какие состояния ты замечаешь чаще всего после разрыва?",
    help: "Отметь все заметные состояния, даже если некоторые из них кажутся противоречивыми.",
    required: true,
    minSelections: 1,
    options: [
      { value: "grief", label: "Горе / тоска", description: "Сильная печаль, потеря, пустота." },
      { value: "anger", label: "Злость", description: "Раздражение, обида, ярость или чувство несправедливости." },
      { value: "relief", label: "Облегчение", description: "Как будто тяжелая система наконец закончилась." },
      { value: "shame", label: "Стыд", description: "Есть много самокритики и ощущения личного провала." },
      { value: "rumination", label: "Зацикленность", description: "Постоянно прокручиваю историю и альтернативные сценарии." },
      { value: "numb", label: "Онемение", description: "Скорее тупость и выключение, чем живая боль." },
    ],
  },
  {
    id: "breakup_contact_status",
    block: "habits",
    type: "singleChoice",
    title: "Как сейчас выглядит твой контакт с бывшим партнером?",
    help: "Контакт после разрыва может и помогать, и удерживать систему в зависании.",
    required: true,
    options: [
      { value: "no_contact", label: "Нет контакта", description: "Есть дистанция и хотя бы базовая граница." },
      { value: "minimal", label: "Минимальный контакт", description: "Только по необходимости или редко." },
      { value: "ongoing", label: "Регулярный контакт", description: "Общение продолжается заметно." },
      { value: "on_off", label: "Качели контакта", description: "То сближение, то дистанция, без устойчивой границы." },
    ],
  },
  {
    id: "breakup_contact_followup",
    block: "habits",
    type: "textarea",
    title: "Что держит этот контакт живым?",
    help: "Опиши честно: дети, работа, надежда, вина, одиночество, сексуальная связь, привычка или незавершенность.",
    required: true,
    placeholder: "Например: есть надежда на возврат, и поэтому я не могу выдерживать полную дистанцию.",
    showIf: (answers) => ["minimal", "ongoing", "on_off"].includes(answers.breakup_contact_status),
  },
  {
    id: "breakup_regulation",
    block: "support",
    type: "multiChoice",
    title: "Что реально помогает тебе регулировать состояние после разрыва?",
    help: "Отметь только то, что действительно поддерживает, а не просто выглядит правильным.",
    required: true,
    minSelections: 2,
    options: [
      { value: "friends", label: "Друзья / близкие", description: "Есть живые люди, с которыми можно быть честным." },
      { value: "therapy", label: "Терапия / коуч / группа", description: "Есть внешний контейнер для переработки истории." },
      { value: "exercise", label: "Спорт / тело", description: "Физическая регуляция реально помогает нервной системе." },
      { value: "writing", label: "Письмо / рефлексия", description: "Структурирование мыслей снижает хаос." },
      { value: "faith", label: "Духовная опора", description: "Вера, смысл, ритуалы или молитва." },
      { value: "work", label: "Работа", description: "Иногда помогает собраться, но может быть и избеганием." },
      { value: "new_people", label: "Новые знакомства", description: "Свежий контакт временно возвращает энергию жизни." },
    ],
  },
  {
    id: "breakup_meaning",
    block: "support",
    type: "textarea",
    title: "Какой главный урок или смысл ты сейчас видишь в этой истории?",
    help: "Вопрос не про красивую мораль, а про реальное изменение внутренней модели.",
    required: true,
    placeholder: "Например: я понял, что долго игнорировал собственные границы и выбирал партнера, рядом с которым жил в тревоге.",
  },
  {
    id: "breakup_functioning",
    block: "reentry",
    type: "singleChoice",
    title: "Насколько разрыв сейчас мешает твоей повседневной жизни и работе?",
    help: "Важно оценить операционное влияние, а не только эмоциональную насыщенность.",
    required: true,
    options: [
      { value: "severe", label: "Сильно мешает", description: "Падает концентрация, сон, аппетит или общий functioning." },
      { value: "moderate", label: "Умеренно мешает", description: "Есть заметные провалы, но система еще держится." },
      { value: "mild", label: "Слабо мешает", description: "Иногда накрывает, но жизнь в целом работает." },
      { value: "minimal", label: "Почти не мешает", description: "Система уже в основном стабилизировалась." },
    ],
  },
  {
    id: "breakup_date_readiness",
    block: "reentry",
    type: "singleChoice",
    title: "Насколько ты готов входить в новые знакомства без использования людей как анестезии?",
    help: "Это вопрос про readiness, а не про запрет на любые новые контакты.",
    required: true,
    options: [
      { value: "not_ready", label: "Пока не готов", description: "Новая близость сейчас скорее запутает, чем поддержит." },
      { value: "careful", label: "Осторожно готов", description: "Могу знакомиться, но нужен очень бережный режим." },
      { value: "ready", label: "Скорее готов", description: "Есть достаточно завершения и самоконтакта для новых людей." },
      { value: "very_ready", label: "Полностью готов", description: "Разрыв в основном интегрирован и не управляет выбором." },
    ],
  },
  {
    id: "breakup_plan",
    block: "reentry",
    type: "textarea",
    title: "Какой следующий здоровый шаг в восстановлении ты видишь для себя?",
    help: "Опиши один конкретный шаг, который реально сократит застревание.",
    required: true,
    placeholder: "Например: 30 дней no-contact, возврат в спорт, две встречи с терапевтом и отказ от слежки за соцсетями бывшего.",
  },
];

const compatibilityQuestions = [
  {
    id: "compatibility_intent",
    block: "intent",
    type: "singleChoice",
    title: "Какой формат связи тебе нужен сейчас?",
    help: "Лучше отвечать по фактическому запросу, а не по тому, что звучит взрослым или правильным.",
    required: true,
    options: [
      { value: "casual", label: "Легкий формат", description: "Без жесткого долгого плана." },
      { value: "developing", label: "Развивающаяся связь", description: "Хочу смотреть, куда это идет, без спешки." },
      { value: "exclusive", label: "Эксклюзивная пара", description: "Нужна четкая взаимность и понятный вектор." },
      { value: "long_term", label: "Долгий союз", description: "Интересует длинная траектория и высокий commitment." },
    ],
  },
  {
    id: "compatibility_pace",
    block: "intent",
    type: "singleChoice",
    title: "Какой темп развития отношений тебе комфортен?",
    help: "Сравнение темпа часто важнее поверхностной chemistry.",
    required: true,
    options: [
      { value: "slow", label: "Медленный", description: "Много наблюдения и постепенного сближения." },
      { value: "steady", label: "Плавный", description: "Есть движение, но без форсирования." },
      { value: "fast", label: "Быстрый", description: "Если нравится, не люблю долгую неопределенность." },
    ],
  },
  {
    id: "compatibility_contact",
    block: "communication",
    type: "singleChoice",
    title: "Какой уровень контакта между встречами для тебя комфортен?",
    help: "Сюда входит переписка, созвоны и чувство живого присутствия.",
    required: true,
    options: [
      { value: "light", label: "Немного контакта", description: "Главное происходящее — во встречах." },
      { value: "regular", label: "Регулярный контакт", description: "Нужен заметный, но не непрерывный поток." },
      { value: "high", label: "Плотный контакт", description: "Люблю много общения и частый отклик." },
    ],
  },
  {
    id: "compatibility_conflict",
    block: "communication",
    type: "singleChoice",
    title: "Что ты чаще делаешь при напряжении в отношениях?",
    help: "Здесь важно выбрать доминирующий паттерн, а не лучшую версию себя.",
    required: true,
    options: [
      { value: "repair", label: "Иду в repair", description: "Стараюсь быстро чинить контакт." },
      { value: "pause", label: "Беру паузу и возвращаюсь", description: "Сначала регуляция, потом разговор." },
      { value: "withdraw", label: "Закрываюсь", description: "Ухожу в дистанцию и тишину." },
      { value: "escalate", label: "Эскалирую", description: "Могу резко реагировать и накручивать конфликт." },
    ],
  },
  {
    id: "compatibility_repair",
    block: "communication",
    type: "multiChoice",
    title: "Что лучше всего помогает тебе восстановить связь после конфликта?",
    help: "Отметь минимум два работающих механизма.",
    required: true,
    minSelections: 2,
    options: [
      { value: "apology", label: "Извинение", description: "Важно признание вреда и ответственности." },
      { value: "time", label: "Время на остывание", description: "Без паузы разговор только ухудшается." },
      { value: "clarity", label: "Прояснение смысла", description: "Нужно понять, что именно произошло." },
      { value: "touch", label: "Физическое тепло", description: "Контакт помогает быстрее вернуть безопасность." },
      { value: "plan", label: "План изменения", description: "Нужен конкретный следующий шаг." },
      { value: "humor", label: "Легкость и юмор", description: "Снижение жесткости помогает вернуться в связь." },
    ],
  },
  {
    id: "compatibility_space",
    block: "closeness",
    type: "singleChoice",
    title: "Сколько личного пространства тебе нужно в устойчивых отношениях?",
    help: "Это не про холодность, а про реальный порог перегруза.",
    required: true,
    options: [
      { value: "low", label: "Немного", description: "Мне комфортна довольно плотная связь." },
      { value: "medium", label: "Умеренно", description: "Нужен баланс между togetherness и autonomy." },
      { value: "high", label: "Много", description: "Без ощутимой автономии я быстро задыхаюсь." },
    ],
  },
  {
    id: "compatibility_time",
    block: "closeness",
    type: "singleChoice",
    title: "Сколько качественного времени в неделю ты реально можешь отдавать отношениям?",
    help: "Не идеальный сценарий, а текущая операционная реальность.",
    required: true,
    options: [
      { value: "0_5", label: "0–5 часов", description: "Сейчас ресурс сильно ограничен." },
      { value: "6_10", label: "6–10 часов", description: "Есть место для связи, но умеренное." },
      { value: "11_15", label: "11–15 часов", description: "Можно строить устойчивый контур." },
      { value: "16_plus", label: "16+ часов", description: "Есть серьезный ресурс на отношения." },
    ],
  },
  {
    id: "compatibility_lifestyle",
    block: "lifestyle",
    type: "singleChoice",
    title: "Насколько ты гибок под чужой образ жизни и ритм?",
    help: "Речь про географию, график, спонтанность, бытовые привычки и social rhythm.",
    required: true,
    options: [
      { value: "low", label: "Низкая гибкость", description: "Мой ритм уже довольно закреплен." },
      { value: "medium", label: "Умеренная гибкость", description: "Могу адаптироваться, если связь ценная." },
      { value: "high", label: "Высокая гибкость", description: "Легко перестраиваюсь под пару." },
    ],
  },
  {
    id: "compatibility_exclusivity",
    block: "lifestyle",
    type: "singleChoice",
    title: "Какой формат exclusivity тебе ближе?",
    help: "Важно выбрать не социальную норму, а свой реальный формат.",
    required: true,
    options: [
      { value: "monogamy", label: "Моногамия", description: "Эксклюзивность — важная базовая рамка." },
      { value: "soft", label: "Скорее моногамия", description: "Обычно да, но некоторые нюансы обсуждаемы." },
      { value: "open", label: "Открыт к немоногамии", description: "Формат можно обсуждать шире." },
    ],
  },
  {
    id: "compatibility_future",
    block: "lifestyle",
    type: "singleChoice",
    title: "Как ты смотришь на тему семьи и детей в будущем?",
    help: "Даже если это не план на завтра, вектор часто важнее сроков.",
    required: true,
    options: [
      { value: "want", label: "Скорее хочу", description: "В длинной траектории это для меня значимо." },
      { value: "maybe", label: "Возможно", description: "Открыт, но без жесткой позиции." },
      { value: "no", label: "Скорее не хочу", description: "Это не похоже на мой желаемый future shape." },
      { value: "unknown", label: "Пока не знаю", description: "Позиция еще не сформирована." },
    ],
  },
  {
    id: "compatibility_values",
    block: "values",
    type: "multiChoice",
    title: "Какие ценности в паре для тебя почти не обсуждаются?",
    help: "Отметь минимум три опоры, без которых связь быстро теряет смысл.",
    required: true,
    minSelections: 3,
    options: [
      { value: "honesty", label: "Честность", description: "Без игр и искажения реальности." },
      { value: "loyalty", label: "Лояльность", description: "Человек не бросает связь при первой сложности." },
      { value: "growth", label: "Рост", description: "Оба готовы развиваться и смотреть на себя." },
      { value: "kindness", label: "Доброта", description: "Много человечности, мало жесткости." },
      { value: "freedom", label: "Свобода", description: "Уважение автономии и личного пространства." },
      { value: "ambition", label: "Амбиция", description: "Нужен живой вектор и энергия роста." },
      { value: "family", label: "Семейность", description: "Важна идея долгого союза и близкого контура." },
    ],
  },
  {
    id: "compatibility_dealbreakers",
    block: "values",
    type: "multiChoice",
    title: "Какие deal-breakers для тебя уже очевидны?",
    help: "Отметь все автоматические стоп-сигналы.",
    required: true,
    minSelections: 1,
    options: [
      { value: "dishonesty", label: "Нечестность", description: "Скрытность, манипуляции, двойная игра." },
      { value: "contempt", label: "Презрение", description: "Унижение, насмешка, токсичный тон." },
      { value: "control", label: "Контроль / ревность", description: "Стремление владеть вместо строить связь." },
      { value: "chaos", label: "Хронический хаос", description: "Нестабильность, которую приходится постоянно тянуть на себе." },
      { value: "no_repair", label: "Нежелание repair", description: "Человек не умеет чинить после напряжения." },
      { value: "different_future", label: "Несовместимый вектор будущего", description: "Кардинально разные представления о жизни дальше." },
      { value: "other", label: "Другое", description: "Есть личный критический стоп-фактор." },
    ],
  },
  {
    id: "compatibility_dealbreakers_other",
    block: "values",
    type: "text",
    title: "Какой еще deal-breaker для тебя критичен?",
    help: "Коротко и конкретно.",
    required: true,
    placeholder: "Например: жесткая финансовая безответственность, зависимость, политическая агрессия...",
    showIf: (answers) => Array.isArray(answers.compatibility_dealbreakers) && answers.compatibility_dealbreakers.includes("other"),
  },
];

const state = {
  track: "family",
  answers: initializeAnswersForTrack("family"),
  currentIndex: 0,
  participant: "personA",
};

const form = document.getElementById("survey-form");
const heroEyebrow = document.getElementById("hero-eyebrow");
const heroTitle = document.getElementById("hero-title");
const heroCopy = document.getElementById("hero-copy");
const evidenceNote = document.getElementById("evidence-note");
const familyTrackButton = document.getElementById("family-track-button");
const relationshipTrackButton = document.getElementById("relationship-track-button");
const datingTrackButton = document.getElementById("dating-track-button");
const breakupTrackButton = document.getElementById("breakup-track-button");
const compatibilityTrackButton = document.getElementById("compatibility-track-button");
const questionTitle = document.getElementById("question-title");
const blockLabel = document.getElementById("block-label");
const questionHelp = document.getElementById("question-help");
const questionBody = document.getElementById("question-body");
const participantShell = document.getElementById("participant-shell");
const participantTitle = document.getElementById("participant-title");
const participantSubtitle = document.getElementById("participant-subtitle");
const participantAButton = document.getElementById("participant-a-button");
const participantBButton = document.getElementById("participant-b-button");
const validationMessage = document.getElementById("validation-message");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const stepCounter = document.getElementById("step-counter");
const resultsView = document.getElementById("results-view");
const resultsTitle = document.getElementById("results-title");
const resultsCopy = document.getElementById("results-copy");
const resultsSummary = document.getElementById("results-summary");
const insightsView = document.getElementById("insights-view");
const draftTitle = document.getElementById("draft-title");
const draftIntro = document.getElementById("draft-intro");
const prdPreview = document.getElementById("prd-preview");
const restartButton = document.getElementById("restart-button");
const copyButton = document.getElementById("copy-button");
const jsonButton = document.getElementById("json-button");
const pdfButton = document.getElementById("pdf-button");
const prdButton = document.getElementById("prd-button");

function getQuestionSet() {
  return {
    family: questions,
    relationship: relationshipQuestions,
    dating: datingQuestions,
    breakup: breakupQuestions,
    compatibility: compatibilityQuestions,
  }[state.track];
}

function getBlocks() {
  return {
    family: familyBlocks,
    relationship: relationshipBlocks,
    dating: datingBlocks,
    breakup: breakupBlocks,
    compatibility: compatibilityBlocks,
  }[state.track];
}

function getTrackContent() {
  return trackContent[state.track];
}

function isPairTrack() {
  return state.track === "compatibility";
}

function getAnswerStore(participant = state.participant) {
  if (!isPairTrack()) {
    return state.answers;
  }
  return state.answers[participant] ?? {};
}

function setAnswerStore(nextAnswers, participant = state.participant) {
  if (!isPairTrack()) {
    state.answers = nextAnswers;
    return;
  }
  state.answers = {
    ...state.answers,
    [participant]: nextAnswers,
  };
}

function initializeAnswersForTrack(track = state.track) {
  if (track === "compatibility") {
    return {
      personA: {},
      personB: {},
    };
  }
  return {};
}

function renderTrackChrome() {
  const content = getTrackContent();
  heroEyebrow.textContent = content.eyebrow;
  heroTitle.textContent = content.heroTitle;
  heroCopy.textContent = content.heroCopy;
  resultsTitle.textContent = content.resultsTitle;
  resultsCopy.textContent = content.resultsCopy;
  draftTitle.textContent = content.draftTitle;
  draftIntro.textContent = content.draftIntro;
  prdButton.textContent = content.draftButton;
  copyButton.textContent = content.copyButton;
  prdButton.dataset.originalLabel = content.draftButton;
  copyButton.dataset.originalLabel = content.copyButton;
  familyTrackButton.classList.toggle("is-active", state.track === "family");
  relationshipTrackButton.classList.toggle("is-active", state.track === "relationship");
  datingTrackButton.classList.toggle("is-active", state.track === "dating");
  breakupTrackButton.classList.toggle("is-active", state.track === "breakup");
  compatibilityTrackButton.classList.toggle("is-active", state.track === "compatibility");
  evidenceNote.hidden = false;
  evidenceNote.textContent = content.evidence;

  participantShell.classList.toggle("hidden", !isPairTrack());
  if (isPairTrack()) {
    const personLabel = state.participant === "personA" ? "Человек A" : "Человек B";
    participantTitle.textContent = personLabel;
    participantSubtitle.textContent =
      state.participant === "personA"
        ? "Сейчас мы заполняем ответы для первого человека."
        : "Сейчас мы заполняем ответы для второго человека.";
    participantAButton.classList.toggle("is-active", state.participant === "personA");
    participantBButton.classList.toggle("is-active", state.participant === "personB");
  }
}

function getVisibleQuestions() {
  return getQuestionSet().filter((question) => {
    if (!question.showIf) {
      return true;
    }
    return question.showIf(getAnswerStore());
  });
}

function getVisibleQuestionsForParticipant(participant) {
  if (!isPairTrack()) {
    return getVisibleQuestions();
  }

  return getQuestionSet().filter((question) => {
    if (!question.showIf) {
      return true;
    }
    return question.showIf(getAnswerStore(participant));
  });
}

function getResultQuestions() {
  if (!isPairTrack()) {
    return getVisibleQuestions();
  }

  const map = new Map();
  [...getVisibleQuestionsForParticipant("personA"), ...getVisibleQuestionsForParticipant("personB")].forEach((question) => {
    map.set(question.id, question);
  });
  return getQuestionSet().filter((question) => map.has(question.id));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTextInput(question) {
  const value = getAnswerStore()[question.id] ?? "";
  return `
    <div class="input-shell">
      <label class="label" for="${question.id}">${escapeHtml(question.title)}</label>
      <input
        id="${question.id}"
        name="${question.id}"
        type="text"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(question.placeholder ?? "")}"
      />
    </div>
  `;
}

function renderNumberInput(question) {
  const value = getAnswerStore()[question.id] ?? "";
  return `
    <div class="input-shell">
      <label class="label" for="${question.id}">${escapeHtml(question.title)}</label>
      <input
        id="${question.id}"
        name="${question.id}"
        type="number"
        min="${question.min ?? ""}"
        max="${question.max ?? ""}"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(question.placeholder ?? "")}"
      />
    </div>
  `;
}

function renderTextarea(question) {
  const value = getAnswerStore()[question.id] ?? "";
  return `
    <div class="input-shell">
      <label class="label" for="${question.id}">${escapeHtml(question.title)}</label>
      <textarea
        id="${question.id}"
        name="${question.id}"
        placeholder="${escapeHtml(question.placeholder ?? "")}"
      >${escapeHtml(value)}</textarea>
    </div>
  `;
}

function renderSingleChoice(question) {
  const value = getAnswerStore()[question.id] ?? "";
  return question.options
    .map(
      (option) => `
        <div class="choice-card" data-type="radio">
          <label for="${question.id}_${option.value}">
            <span class="choice-indicator"></span>
            <span class="choice-copy">
              <strong>${escapeHtml(option.label)}</strong>
              <span>${escapeHtml(option.description)}</span>
            </span>
            <input
              id="${question.id}_${option.value}"
              type="radio"
              name="${question.id}"
              value="${escapeHtml(option.value)}"
              ${value === option.value ? "checked" : ""}
            />
          </label>
        </div>
      `
    )
    .join("");
}

function renderMultiChoice(question) {
  const answerStore = getAnswerStore();
  const values = Array.isArray(answerStore[question.id]) ? answerStore[question.id] : [];
  return question.options
    .map(
      (option) => `
        <div class="choice-card" data-type="checkbox">
          <label for="${question.id}_${option.value}">
            <span class="choice-indicator"></span>
            <span class="choice-copy">
              <strong>${escapeHtml(option.label)}</strong>
              <span>${escapeHtml(option.description)}</span>
            </span>
            <input
              id="${question.id}_${option.value}"
              type="checkbox"
              name="${question.id}"
              value="${escapeHtml(option.value)}"
              ${values.includes(option.value) ? "checked" : ""}
            />
          </label>
        </div>
      `
    )
    .join("");
}

function renderPriorityMatrix(question) {
  const values = getAnswerStore()[question.id] ?? {};
  const rows = question.items
    .map((item) => {
      const selected = values[item.key];
      const options = Array.from({ length: 6 }, (_, number) => number)
        .map(
          (number) => `
            <label for="${question.id}_${item.key}_${number}">
              ${number}
              <input
                id="${question.id}_${item.key}_${number}"
                type="radio"
                name="${question.id}_${item.key}"
                value="${number}"
                ${String(selected) === String(number) ? "checked" : ""}
              />
            </label>
          `
        )
        .join("");

      return `
        <div class="matrix-row">
          <div class="matrix-header">
            <strong>${escapeHtml(item.label)}</strong>
            <span>${escapeHtml(item.description)}</span>
          </div>
          <div class="scale-options">${options}</div>
        </div>
      `;
    })
    .join("");

  const otherValue = values.otherText ?? "";

  return `
    <p class="matrix-help">0 — совсем не драйвит, 5 — ключевой мотив.</p>
    ${rows}
    ${
      question.hasOther
        ? `
      <div class="input-shell">
        <label class="label" for="${question.id}_other_text">Другой мотив, если он есть</label>
        <input
          id="${question.id}_other_text"
          name="${question.id}_other_text"
          type="text"
          value="${escapeHtml(otherValue)}"
          placeholder="Например: желание построить дом, семейный фонд, закрыть личную пустоту..."
        />
      </div>
    `
        : ""
    }
  `;
}

function renderInlineNumbers(question) {
  const values = getAnswerStore()[question.id] ?? {};
  const fields = question.fields
    .map(
      (field) => `
        <div class="input-shell">
          <label class="label" for="${question.id}_${field.key}">${escapeHtml(field.label)}</label>
          <input
            id="${question.id}_${field.key}"
            name="${question.id}_${field.key}"
            type="number"
            min="${field.min ?? ""}"
            max="${field.max ?? ""}"
            value="${escapeHtml(values[field.key] ?? "")}"
            placeholder="${escapeHtml(field.placeholder ?? "")}"
          />
        </div>
      `
    )
    .join("");

  return `<div class="inline-grid">${fields}</div>`;
}

function renderQuestion(question) {
  switch (question.type) {
    case "text":
      return renderTextInput(question);
    case "number":
      return renderNumberInput(question);
    case "textarea":
      return renderTextarea(question);
    case "singleChoice":
      return renderSingleChoice(question);
    case "multiChoice":
      return renderMultiChoice(question);
    case "priorityMatrix":
      return renderPriorityMatrix(question);
    case "inlineNumbers":
      return renderInlineNumbers(question);
    default:
      return `<p>Неподдерживаемый тип вопроса.</p>`;
  }
}

function syncCurrentIndex() {
  const visible = getVisibleQuestions();
  if (state.currentIndex >= visible.length) {
    state.currentIndex = Math.max(visible.length - 1, 0);
  }
}

function renderSurvey() {
  renderTrackChrome();
  syncCurrentIndex();
  const visibleQuestions = getResultQuestions();
  const current = visibleQuestions[state.currentIndex];

  if (!current) {
    renderResults();
    return;
  }

  form.classList.remove("hidden");
  resultsView.classList.add("hidden");

  blockLabel.textContent = getBlocks()[current.block];
  questionTitle.textContent = current.title;
  questionHelp.textContent = current.help ?? "";
  questionBody.innerHTML = renderQuestion(current);
  validationMessage.textContent = "";
  stepCounter.textContent = isPairTrack()
    ? `${state.participant === "personA" ? "A" : "B"} · ${state.currentIndex + 1} / ${visibleQuestions.length}`
    : `${state.currentIndex + 1} / ${visibleQuestions.length}`;
  const pairOffset = isPairTrack() ? (state.participant === "personA" ? 0 : visibleQuestions.length) : 0;
  const pairTotal = isPairTrack() ? visibleQuestions.length * 2 : visibleQuestions.length;
  progressBar.style.width = `${((pairOffset + state.currentIndex + 1) / pairTotal) * 100}%`;
  backButton.disabled = state.currentIndex === 0 && (!isPairTrack() || state.participant === "personA");
  if (isPairTrack() && state.currentIndex === visibleQuestions.length - 1) {
    nextButton.textContent = state.participant === "personA" ? "Перейти к человеку B" : "Показать результат";
  } else {
    nextButton.textContent = state.currentIndex === visibleQuestions.length - 1 ? "Показать результат" : "Дальше";
  }
}

function readAnswer(question) {
  if (question.type === "text" || question.type === "number" || question.type === "textarea") {
    const input = document.getElementById(question.id);
    return input?.value.trim() ?? "";
  }

  if (question.type === "singleChoice") {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    return selected?.value ?? "";
  }

  if (question.type === "multiChoice") {
    return Array.from(form.querySelectorAll(`input[name="${question.id}"]:checked`)).map((input) => input.value);
  }

  if (question.type === "priorityMatrix") {
    const value = {};
    question.items.forEach((item) => {
      const selected = form.querySelector(`input[name="${question.id}_${item.key}"]:checked`);
      if (selected) {
        value[item.key] = selected.value;
      }
    });

    if (question.hasOther) {
      const otherText = document.getElementById(`${question.id}_other_text`)?.value.trim() ?? "";
      if (otherText) {
        value.otherText = otherText;
      }
    }

    return value;
  }

  if (question.type === "inlineNumbers") {
    const value = {};
    question.fields.forEach((field) => {
      const input = document.getElementById(`${question.id}_${field.key}`);
      value[field.key] = input?.value.trim() ?? "";
    });
    return value;
  }

  return null;
}

function validateAnswer(question, value) {
  if (!question.required) {
    return "";
  }

  if (question.type === "text" || question.type === "textarea") {
    if (!value) {
      return "Это поле обязательно. Нужен хотя бы короткий ответ.";
    }
    return "";
  }

  if (question.type === "number") {
    if (value === "") {
      return "Укажи число, чтобы мы могли калибровать тайминг.";
    }

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) {
      return "Нужно ввести корректное число.";
    }

    if (question.min != null && numericValue < question.min) {
      return `Минимальное допустимое значение: ${question.min}.`;
    }

    if (question.max != null && numericValue > question.max) {
      return `Максимальное допустимое значение: ${question.max}.`;
    }

    return "";
  }

  if (question.type === "singleChoice") {
    return value ? "" : "Выбери один вариант, который ближе всего к твоей реальности.";
  }

  if (question.type === "multiChoice") {
    if (!value.length) {
      return "Выбери хотя бы один вариант.";
    }
    if (question.minSelections && value.length < question.minSelections) {
      return `Выбери минимум ${question.minSelections} варианта(ов).`;
    }
    return "";
  }

  if (question.type === "priorityMatrix") {
    const missing = question.items.some((item) => value[item.key] == null);
    if (missing) {
      return "Поставь оценку от 0 до 5 для каждого мотива.";
    }
    return "";
  }

  if (question.type === "inlineNumbers") {
    const missing = question.fields.some((field) => value[field.key] === "");
    if (missing) {
      return "Заполни оба числовых поля.";
    }

    const invalidField = question.fields.find((field) => {
      const numericValue = Number(value[field.key]);
      return Number.isNaN(numericValue) || numericValue < field.min || numericValue > field.max;
    });

    if (invalidField) {
      return `Проверь поле "${invalidField.label}".`;
    }

    return "";
  }

  return "";
}

function clearHiddenAnswers() {
  const visibleIds = new Set(getVisibleQuestions().map((question) => question.id));
  const nextAnswers = { ...getAnswerStore() };
  getQuestionSet().forEach((question) => {
    if (!visibleIds.has(question.id)) {
      delete nextAnswers[question.id];
    }
  });
  setAnswerStore(nextAnswers);
}

function optionLabel(question, value) {
  return question.options.find((option) => option.value === value)?.label ?? value;
}

function getQuestionById(id) {
  return getQuestionSet().find((question) => question.id === id);
}

function getFormattedAnswerById(id) {
  const question = getQuestionById(id);
  if (!question) {
    return "Нет ответа";
  }
  return formatAnswer(question, getAnswerStore()[id]);
}

function formatAnswer(question, value) {
  if (value == null || value === "") {
    return "Нет ответа";
  }

  if (question.type === "singleChoice") {
    return optionLabel(question, value);
  }

  if (question.type === "multiChoice") {
    return value.map((entry) => optionLabel(question, entry)).join(", ");
  }

  if (question.type === "priorityMatrix") {
    const lines = question.items.map((item) => `${item.label}: ${value[item.key]}/5`);
    if (value.otherText) {
      lines.push(`Другой мотив: ${value.otherText}`);
    }
    return lines.join("\n");
  }

  if (question.type === "inlineNumbers") {
    return question.fields
      .map((field) => `${field.label}: ${value[field.key]}`)
      .join("\n");
  }

  return String(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalize(value, min, max) {
  if (max === min) {
    return 0;
  }
  const ratio = (value - min) / (max - min);
  return clamp(ratio, 0, 1);
}

function getPriorityValue(key, answers = getAnswerStore()) {
  const matrix = answers.vision_drivers ?? {};
  return Number(matrix[key] ?? 0);
}

function getMultiCount(id, answers = getAnswerStore()) {
  const value = answers[id];
  return Array.isArray(value) ? value.length : 0;
}

function getNumericAnswer(id, answers = getAnswerStore()) {
  const value = Number(answers[id]);
  return Number.isFinite(value) ? value : 0;
}

function getInlineNumber(id, key, answers = getAnswerStore()) {
  const value = Number(answers[id]?.[key]);
  return Number.isFinite(value) ? value : 0;
}

function scoreLevel(score) {
  if (score >= 75) {
    return "Высоко";
  }
  if (score >= 45) {
    return "Средне";
  }
  return "Низко";
}

function computeFamilyCompatibilityScales() {
  const answers = getAnswerStore();
  const culture = answers.founder_culture;
  const familyMode = answers.vision_family_mode;
  const childrenTimeline = answers.cofounder_children_timeline;
  const partnerRole = answers.cofounder_partner_role;
  const financialModel = answers.resources_financial_model;
  const partnerContribution = answers.resources_partner_contribution;
  const housing = answers.resources_housing;
  const partnershipTime = answers.resources_partnership_time;
  const lifeStage = answers.founder_life_stage;
  const workFormat = answers.constraints_work_format;
  const workloadHours = getInlineNumber("constraints_workload", "hours", answers);
  const workloadTravel = getInlineNumber("constraints_workload", "travel", answers);
  const age = getNumericAnswer("founder_age", answers);
  const routinesCount = getMultiCount("constraints_routines", answers);
  const dealbreakersCount = getMultiCount("cofounder_dealbreakers", answers);
  const failureHistory = answers.constraints_failure_history;
  const failurePatterns = String(answers.constraints_failure_patterns ?? "");

  let valuesAlignment = getPriorityValue("cultural_code", answers) * 7 + getPriorityValue("healthy_generation", answers) * 3;
  valuesAlignment += {
    strict_religious: 28,
    moderate_religious: 22,
    cultural: 18,
    hybrid: 20,
    no: 4,
  }[culture] ?? 0;
  if ((answers.cofounder_dealbreakers ?? []).includes("different_faith")) {
    valuesAlignment += 16;
  }

  let autonomyNeed = normalize(workloadHours, 35, 80) * 34;
  autonomyNeed += normalize(workloadTravel, 0, 6) * 22;
  autonomyNeed += {
    "0_5": 24,
    "6_10": 18,
    "11_15": 10,
    "16_20": 5,
    "20_plus": 0,
  }[partnershipTime] ?? 8;
  autonomyNeed += {
    field: 16,
    office: 10,
    hybrid: 8,
    remote: 4,
  }[workFormat] ?? 0;
  autonomyNeed += financialModel === "sole_provider" ? 10 : 4;

  let structurePreference = {
    traditional: 26,
    hybrid: 18,
    partner_equal: 10,
    undecided: 8,
  }[familyMode] ?? 8;
  structurePreference += Math.min(routinesCount * 4, 18);
  structurePreference += Math.min(dealbreakersCount * 3, 18);
  structurePreference += {
    home_primary: 18,
    part_time: 13,
    full_time: 6,
    depends: 10,
  }[partnerRole] ?? 8;
  structurePreference += {
    "0_10": 15,
    "10_30": 11,
    "30_50": 8,
    "50_plus": 14,
    context: 9,
  }[partnerContribution] ?? 7;

  let launchUrgency = {
    within_1: 36,
    "1_2": 28,
    "3_5": 14,
    not_sure: 5,
  }[childrenTimeline] ?? 6;
  launchUrgency += getPriorityValue("healthy_generation", answers) * 5;
  launchUrgency += getPriorityValue("legacy", answers) * 4;
  launchUrgency += age >= 38 ? 16 : age >= 33 ? 10 : age >= 28 ? 5 : 2;
  launchUrgency += {
    stabilized: 10,
    building: 5,
    transition: 6,
    recovery: 4,
  }[lifeStage] ?? 5;

  let operationalReadiness = {
    own: 20,
    multiple: 22,
    rent: 12,
    with_family: 6,
  }[housing] ?? 8;
  operationalReadiness += {
    "20_plus": 24,
    "16_20": 20,
    "11_15": 16,
    "6_10": 10,
    "0_5": 4,
  }[partnershipTime] ?? 8;
  operationalReadiness += workloadHours <= 40 ? 20 : workloadHours <= 55 ? 14 : workloadHours <= 70 ? 8 : 2;
  operationalReadiness += workloadTravel === 0 ? 14 : workloadTravel === 1 ? 12 : workloadTravel === 2 ? 9 : workloadTravel === 3 ? 6 : 3;
  operationalReadiness += {
    sole_provider: 10,
    dual_income: 10,
    flex: 8,
    undecided: 4,
  }[financialModel] ?? 4;
  operationalReadiness += failureHistory === "none" ? 6 : failurePatterns.length > 60 ? 10 : 5;

  const scales = [
    {
      key: "values_alignment",
      title: "Требовательность к совпадению ценностей",
      score: clamp(Math.round(valuesAlignment), 0, 100),
      description:
        "Насколько критично, чтобы у партнера совпадали мировоззрение, культурный код и базовые правила жизни.",
      insight:
        valuesAlignment >= 75
          ? "Почти наверняка нужен человек из очень близкой ценностной рамки, иначе трение будет системным."
          : valuesAlignment >= 45
            ? "Общий код важен, но возможна настройка и гибридная модель при зрелой коммуникации."
            : "Ты можешь допустить более широкий диапазон backgrounds, если совпадают характер и стратегические цели.",
    },
    {
      key: "autonomy_requirement",
      title: "Нужда в автономном партнере",
      score: clamp(Math.round(autonomyNeed), 0, 100),
      description:
        "Насколько партнеру важно быть самодостаточным, устойчивым и способным держать быт и эмоции без постоянной опоры на тебя.",
      insight:
        autonomyNeed >= 75
          ? "Лучше всего подойдет очень самостоятельный человек, который хорошо выдерживает твой график и периоды низкой доступности."
          : autonomyNeed >= 45
            ? "Нужна умеренная автономность: партнерство должно держаться на ритуалах, а не на постоянном контакте."
            : "У тебя достаточно пространства для более тесной, эмоционально плотной модели отношений.",
    },
    {
      key: "structure_preference",
      title: "Потребность в четкой семейной архитектуре",
      score: clamp(Math.round(structurePreference), 0, 100),
      description:
        "Показывает, насколько тебе нужны ясные роли, правила, ритм и предсказуемая модель распределения ответственности.",
      insight:
        structurePreference >= 75
          ? "Тебе будет легче в отношениях с заранее согласованной архитектурой ролей и минимальной двусмысленностью."
          : structurePreference >= 45
            ? "Структура важна, но ты можешь выдерживать адаптивность, если базовые рамки ясны."
            : "Ты можешь строить более гибкую систему и договариваться на ходу без сильной потери устойчивости.",
    },
    {
      key: "launch_urgency",
      title: "Срочность запуска семьи",
      score: clamp(Math.round(launchUrgency), 0, 100),
      description:
        "Насколько быстро нужно переходить от знакомства к архитектуре брака и детей, если встречается подходящий кандидат.",
      insight:
        launchUrgency >= 75
          ? "Тайминг играет критичную роль: медленные сценарии с долгой неопределенностью будут тебя истощать."
          : launchUrgency >= 45
            ? "Есть заметная срочность, но ты еще можешь позволить себе аккуратную калибровку."
            : "У тебя есть запас времени на более постепенную проверку совместимости и формата жизни.",
    },
    {
      key: "operational_readiness",
      title: "Операционная готовность к старту",
      score: clamp(Math.round(operationalReadiness), 0, 100),
      description:
        "Сводная оценка того, насколько текущий ритм, ресурсы и быт уже позволяют переходить к семейному строительству.",
      insight:
        operationalReadiness >= 75
          ? "База уже довольно сильная: дальше важнее точный выбор человека, чем фундаментальные перестройки системы."
          : operationalReadiness >= 45
            ? "Старт возможен, но потребует точных договоренностей и усиления пары слабых зон."
            : "Перед активным семейным запуском стоит сначала укрепить ритм, время или базовую инфраструктуру.",
    },
  ];

  return scales;
}

function buildAnswerLines(visibleQuestions = getResultQuestions()) {
  if (isPairTrack()) {
    return visibleQuestions.map((question) => {
      const comparison = compareQuestionAnswers(question);
      const blockTitle = getBlocks()[question.block];
      return `${blockTitle}\n${question.title}\nЧеловек A: ${comparison.formattedA}\nЧеловек B: ${comparison.formattedB}\nКомментарий: ${comparison.note}`;
    });
  }

  return visibleQuestions.map((question) => {
    const blockTitle = getBlocks()[question.block];
    return `${blockTitle}\n${question.title}\n${formatAnswer(question, getAnswerStore()[question.id])}`;
  });
}

function buildStructuredResults(visibleQuestions = getResultQuestions()) {
  if (isPairTrack()) {
    return visibleQuestions.map((question) => ({
      block: getBlocks()[question.block],
      questionId: question.id,
      question: question.title,
      answerPersonA: getAnswerStore("personA")[question.id],
      answerPersonB: getAnswerStore("personB")[question.id],
      formattedPersonA: formatAnswer(question, getAnswerStore("personA")[question.id]),
      formattedPersonB: formatAnswer(question, getAnswerStore("personB")[question.id]),
    }));
  }

  return visibleQuestions.map((question) => ({
    block: getBlocks()[question.block],
    questionId: question.id,
    question: question.title,
    answer: getAnswerStore()[question.id],
    formattedAnswer: formatAnswer(question, getAnswerStore()[question.id]),
  }));
}

function generateFamilyPRDMarkdown(scales = computeFamilyCompatibilityScales(), visibleQuestions = getResultQuestions()) {
  const generatedAt = new Date().toLocaleString("ru-RU");
  const structure = buildStructuredResults(visibleQuestions);
  const byId = (id) => getFormattedAnswerById(id);

  const scaleLines = scales
    .map((scale) => `- ${scale.title}: ${scale.score}/100 (${scoreLevel(scale.score)}). ${scale.insight}`)
    .join("\n");

  const allAnswers = structure
    .map((entry) => `### ${entry.block}\n**${entry.question}**\n${entry.formattedAnswer}`)
    .join("\n\n");

  return `# Family Project PRD Draft

Сгенерировано: ${generatedAt}

## 1. Product Vision

- Основные драйверы: ${byId("vision_drivers").replaceAll("\n", "; ")}
- Успех через 20 лет: ${byId("vision_success_20y")}
- Предпочтительная модель семьи: ${byId("vision_family_mode")}
- Ключевые роли и зоны ответственности: ${byId("vision_family_mode_followup")}

## 2. Founder Baseline

- Профессиональные сильные стороны: ${byId("founder_hard_skills")}
- Дополнительный сильный домен: ${byId("founder_hard_skills_other")}
- Межличностный стиль: ${byId("founder_soft_style")}
- Возраст: ${byId("founder_age")}
- Жизненный этап: ${byId("founder_life_stage")}
- Культурный / религиозный каркас: ${byId("founder_culture")}
- Обязательные элементы кода: ${byId("founder_culture_followup")}

## 3. Constraints And Risks

- Энергетический тип: ${byId("constraints_energy_type")}
- Устойчивый лимит общения: ${byId("constraints_social_limit")}
- Режим восстановления: ${byId("constraints_recharge")}
- Рабочая нагрузка: ${byId("constraints_workload")}
- Формат работы: ${byId("constraints_work_format")}
- Нужная поддержка при нагрузке: ${byId("constraints_travel_followup")}
- Необсуждаемые ритуалы: ${byId("constraints_routines")}
- Дополнительный ритуал: ${byId("constraints_routines_other")}
- История сбоев в прошлых отношениях: ${byId("constraints_failure_history")}
- Паттерны сбоев: ${byId("constraints_failure_patterns")}

## 4. Resource Architecture

- Финансовая модель: ${byId("resources_financial_model")}
- Ожидаемый вклад партнера в доход: ${byId("resources_partner_contribution")}
- Эквивалентный обмен при низком финансовом вкладе партнера: ${byId("resources_provider_followup")}
- Жилищная база: ${byId("resources_housing")}
- Географическая гибкость: ${byId("resources_location_flex")}
- Время на отношения в неделю: ${byId("resources_partnership_time")}
- План компенсации дефицита времени: ${byId("resources_time_gap_followup")}

## 5. Co-Founder Persona

- Возрастной диапазон: ${byId("cofounder_age_range")}
- Интеллектуальный baseline: ${byId("cofounder_education")}
- Тайминг первого ребенка: ${byId("cofounder_children_timeline")}
- Главный блокер для старта с детьми: ${byId("cofounder_children_readiness")}
- Желаемое число детей: ${byId("cofounder_children_count")}
- Рабочий сценарий партнера после появления детей: ${byId("cofounder_partner_role")}
- Deal-breakers: ${byId("cofounder_dealbreakers")}
- Дополнительный стоп-фактор: ${byId("cofounder_dealbreakers_other")}
- Три ключевых качества партнера: ${byId("cofounder_nonnegotiables")}

## 6. Compatibility Scales

${scaleLines}

## 7. Initial Product Hypotheses

- Цель проекта: построить устойчивую семейную систему, которая поддерживает длинную жизненную и репродуктивную стратегию основателя.
- Критерий успеха: партнерство выдерживает одновременно ценностное совпадение, бытовую операционность, эмоциональную стабильность и согласованный тайминг детей.
- Основной риск: несовпадение между желаемой семейной архитектурой и реальным временным, эмоциональным или географическим ресурсом.
- Рекомендуемый следующий шаг: перевести этот документ в фильтр для знакомств, сценарий первых разговоров и чеклист проверки совместимости.

## 8. Full Answer Log

${allAnswers}
`;
}

function getRelationshipAttachmentValue(key, answers = getAnswerStore()) {
  const matrix = answers.relationship_attachment_matrix ?? {};
  return Number(matrix[key] ?? 0);
}

function computeRelationshipScales() {
  const answers = getAnswerStore();
  const goal = answers.relationship_goal_now;
  const lifeStage = answers.relationship_life_stage;
  const timeCapacity = answers.relationship_time_capacity;
  const conflictStyle = answers.relationship_conflict_style;
  const growth = answers.relationship_growth;
  const exclusivity = answers.relationship_exclusivity;
  const lifestyleFlex = answers.relationship_lifestyle_flex;
  const repairCount = getMultiCount("relationship_repair_tools", answers);
  const boundaryCount = getMultiCount("relationship_boundary_norms", answers);
  const attractionCount = getMultiCount("relationship_attraction_axes", answers);
  const redFlagCount = getMultiCount("relationship_red_flags", answers);
  const offerLength = String(answers.relationship_offer ?? "").trim().length;
  const sabotageLength = String(answers.relationship_sabotage ?? "").trim().length;

  const anxiousAverage =
    (getRelationshipAttachmentValue("worry_replaced", answers) + getRelationshipAttachmentValue("need_reassurance", answers)) / 2;
  const avoidantAverage =
    (getRelationshipAttachmentValue("pull_away", answers) + getRelationshipAttachmentValue("hard_to_depend", answers)) / 2;

  let readiness = {
    "0_4": 6,
    "5_8": 12,
    "9_12": 18,
    "13_18": 23,
    "18_plus": 28,
  }[timeCapacity] ?? 10;
  readiness += {
    career: 8,
    exploration: 10,
    healing: 6,
    stable: 18,
    mixed: 12,
  }[lifeStage] ?? 10;
  readiness += {
    high: 28,
    medium: 20,
    low: 10,
    avoidant: 6,
  }[growth] ?? 10;
  readiness += offerLength > 100 ? 16 : offerLength > 40 ? 10 : 5;
  readiness += sabotageLength > 90 ? 12 : sabotageLength > 35 ? 8 : 3;

  let intimacyComfort = 100 - normalize(anxiousAverage + avoidantAverage, 0, 10) * 72;
  intimacyComfort += {
    listening: 6,
    consistency: 8,
    warmth: 8,
    autonomy: 4,
    curiosity: 6,
  }[answers.relationship_responsiveness] ?? 0;
  intimacyComfort -= conflictStyle === "withdraw" ? 8 : conflictStyle === "escalate" ? 10 : 0;

  let commitmentClarity = {
    casual: 18,
    meaningful: 44,
    exclusive: 70,
    long_term: 84,
    unclear: 24,
  }[goal] ?? 20;
  commitmentClarity += {
    monogamy: 12,
    soft_monogamy: 9,
    non_monogamy: 7,
    undecided: 2,
  }[exclusivity] ?? 0;
  commitmentClarity += String(answers.relationship_success_3y ?? "").trim().length > 80 ? 10 : 4;
  commitmentClarity += ["stable", "mixed"].includes(lifeStage) ? 6 : 0;

  let conflictResilience = {
    direct_repair: 24,
    pause_return: 22,
    withdraw: 10,
    escalate: 8,
    people_please: 12,
  }[conflictStyle] ?? 10;
  conflictResilience += Math.min(repairCount * 7, 24);
  conflictResilience += Math.min(boundaryCount * 3, 18);
  conflictResilience += {
    high: 18,
    medium: 12,
    low: 4,
    avoidant: 2,
  }[growth] ?? 4;
  conflictResilience += sabotageLength > 60 ? 10 : sabotageLength > 25 ? 6 : 2;

  let autonomyBalance = {
    low: 18,
    medium: 30,
    high: 22,
  }[lifestyleFlex] ?? 20;
  autonomyBalance += timeCapacity === "13_18" || timeCapacity === "18_plus" ? 24 : timeCapacity === "9_12" ? 18 : 10;
  autonomyBalance += avoidantAverage >= 4 ? 8 : 16;
  autonomyBalance += getRelationshipAttachmentValue("worry_replaced", answers) <= 2 ? 14 : 8;
  autonomyBalance += Math.min(attractionCount * 3, 12);
  autonomyBalance -= redFlagCount >= 6 ? 6 : 0;

  return [
    {
      key: "relationship_readiness",
      title: "Готовность к отношениям сейчас",
      score: clamp(Math.round(readiness), 0, 100),
      description:
        "Насколько твой текущий этап жизни, временной ресурс и готовность к self-work позволяют строить неслучайную связь.",
      insight:
        readiness >= 75
          ? "У тебя уже есть хорошая база для качественных отношений: дальше важнее выбор человека и ясный формат."
          : readiness >= 45
            ? "Потенциал для отношений есть, но его придется защищать от хаоса графика, неясности целей или старых паттернов."
            : "Сейчас отношения могут быстро наткнуться на нехватку ресурса или внутренней ясности; лучше сначала укрепить основу.",
    },
    {
      key: "intimacy_comfort",
      title: "Комфорт с близостью",
      score: clamp(Math.round(intimacyComfort), 0, 100),
      description:
        "Показывает, насколько тебе в целом доступна уязвимость и устойчивый эмоциональный контакт без перегруза и отступления.",
      insight:
        intimacyComfort >= 75
          ? "Ты в целом способен выдерживать близость без резкого ухода в тревогу или дистанцию."
          : intimacyComfort >= 45
            ? "Близость тебе доступна, но нужны понятные правила безопасности и качественный партнерский отклик."
            : "Вероятно, высокий уровень тревоги или избегания может мешать удерживать контакт, когда связь становится значимой.",
    },
    {
      key: "commitment_clarity",
      title: "Ясность по commitment",
      score: clamp(Math.round(commitmentClarity), 0, 100),
      description:
        "Насколько у тебя уже сформирован внятный ответ на вопрос, что именно ты хочешь от отношений на этом этапе.",
      insight:
        commitmentClarity >= 75
          ? "Ты довольно ясно понимаешь формат, скорость и рамки отношений, которые тебе подходят."
          : commitmentClarity >= 45
            ? "Есть базовая направленность, но часть параметров еще придется прояснять в процессе знакомства."
            : "Пока у тебя много открытых переменных, и это может создавать смешанные сигналы для другого человека.",
    },
    {
      key: "conflict_resilience",
      title: "Устойчивость к конфликту",
      score: clamp(Math.round(conflictResilience), 0, 100),
      description:
        "Насколько ты способен оставаться в связи во время напряжения, не разрушая контакт и не уходя в хронический разрыв repair.",
      insight:
        conflictResilience >= 75
          ? "У тебя уже есть неплохой набор repair-механик и готовность чинить связь, а не только переживать ее."
          : conflictResilience >= 45
            ? "Конфликт можно выдерживать, но качество восстановления будет зависеть от зрелости обоих людей и темпа разговора."
            : "Напряжение может быстро обнулять контакт; здесь особенно полезны осознанные практики паузы, repair и обратной связи.",
    },
    {
      key: "autonomy_balance",
      title: "Баланс автономии и связи",
      score: clamp(Math.round(autonomyBalance), 0, 100),
      description:
        "Показывает, насколько у тебя получается сочетать личную свободу, собственный ритм и настоящую вовлеченность в другого человека.",
      insight:
        autonomyBalance >= 75
          ? "Ты ближе к здоровому балансу: отношения не обязаны уничтожать твою автономию и не сводятся к эмоциональной слиянию."
          : autonomyBalance >= 45
            ? "Баланс достижим, но потребуется честно договариваться о времени, темпе и личном пространстве."
            : "Есть риск качелей между дистанцией и притяжением; здесь особенно важны границы, ясность ожиданий и самонаблюдение.",
    },
  ];
}

function generateRelationshipProfileMarkdown(scales = computeRelationshipScales(), visibleQuestions = getResultQuestions()) {
  const generatedAt = new Date().toLocaleString("ru-RU");
  const structure = buildStructuredResults(visibleQuestions);
  const byId = (id) => getFormattedAnswerById(id);

  const scaleLines = scales
    .map((scale) => `- ${scale.title}: ${scale.score}/100 (${scoreLevel(scale.score)}). ${scale.insight}`)
    .join("\n");

  const allAnswers = structure
    .map((entry) => `### ${entry.block}\n**${entry.question}**\n${entry.formattedAnswer}`)
    .join("\n\n");

  return `# Relationship Readiness Profile

Сгенерировано: ${generatedAt}

## 1. Current Romantic Intent

- Что ищу сейчас: ${byId("relationship_goal_now")}
- Что сделает отношения более серьезным приоритетом: ${byId("relationship_goal_followup")}
- Успешная личная жизнь через 3 года: ${byId("relationship_success_3y")}
- Текущий жизненный этап: ${byId("relationship_life_stage")}

## 2. Attachment And Emotional Style

- Профиль близости: ${byId("relationship_attachment_matrix").replaceAll("\n", "; ")}
- Что помогает не задыхаться в близости: ${byId("relationship_space_need")}
- Что дает чувство, что меня видят: ${byId("relationship_responsiveness")}

## 3. Communication And Repair

- Мой типичный стиль в конфликте: ${byId("relationship_conflict_style")}
- Что помогает восстанавливать связь: ${byId("relationship_repair_tools")}
- Базовые нормы взаимодействия: ${byId("relationship_boundary_norms")}

## 4. Availability And Lifestyle Fit

- Реальная недельная доступность: ${byId("relationship_time_capacity")}
- Как не превращать отношения в крошки внимания: ${byId("relationship_time_followup")}
- Предпочтительная модель эксклюзивности: ${byId("relationship_exclusivity")}
- Гибкость под чужой стиль жизни: ${byId("relationship_lifestyle_flex")}

## 5. Attraction And Compatibility

- Что создает притяжение: ${byId("relationship_attraction_axes")}
- Мои red flags: ${byId("relationship_red_flags")}
- Дополнительный red flag: ${byId("relationship_red_flags_other")}
- Что я могу дать партнеру: ${byId("relationship_offer")}
- Что обычно саботирует близость: ${byId("relationship_sabotage")}
- Готовность работать с паттернами: ${byId("relationship_growth")}

## 6. Relationship Scales

${scaleLines}

## 7. Working Hypotheses

- Сейчас тебе важна не семейная архитектура, а честная настройка формата близости под текущий этап жизни.
- Ключевой критерий качества отношений: способность держать одновременно контакт, автономию, ясность ожиданий и repair после напряжения.
- Главный риск: заходить в отношения быстрее, чем появляется внутренняя ясность по commitment, времени и своему конфликтному стилю.
- Рекомендуемый следующий шаг: использовать этот профиль как фильтр для знакомств, self-checklist и основу для честных early-stage разговоров.

## 8. Full Answer Log

${allAnswers}
`;
}

function computeDatingScales() {
  const answers = getAnswerStore();
  const intent = answers.dating_intent_now;
  const pace = answers.dating_pace_preference;
  const uncertainty = answers.dating_uncertainty;
  const texting = answers.dating_texting;
  const exclusivity = answers.dating_exclusivity_stage;
  const signals = getMultiCount("dating_signal_interest", answers);
  const greenFlags = getMultiCount("dating_green_flags", answers);
  const redFlags = getMultiCount("dating_red_flags", answers);
  const firstDates = getMultiCount("dating_first_dates", answers);
  const sabotageLength = String(answers.dating_self_sabotage ?? "").trim().length;
  const offerLength = String(answers.dating_offer ?? "").trim().length;

  let pacingClarity = {
    light: 36,
    selective: 58,
    serious: 78,
    paused: 28,
  }[intent] ?? 30;
  pacingClarity += {
    slow: 14,
    steady: 18,
    fast: 12,
    variable: 10,
  }[pace] ?? 10;
  pacingClarity += {
    very_early: 16,
    after_momentum: 18,
    late: 10,
    depends: 12,
  }[exclusivity] ?? 10;

  let ambiguityTolerance = {
    low: 30,
    medium: 58,
    high: 82,
  }[uncertainty] ?? 50;
  ambiguityTolerance += pace === "slow" ? 8 : pace === "steady" ? 6 : 2;
  ambiguityTolerance -= intent === "serious" && uncertainty === "low" ? 6 : 0;

  let communicationFit = {
    minimal: 42,
    regular: 76,
    high: 66,
    adaptive: 80,
  }[texting] ?? 55;
  communicationFit += Math.min(signals * 4, 18);
  communicationFit += offerLength > 80 ? 8 : offerLength > 40 ? 5 : 2;

  let filterSharpness = Math.min(greenFlags * 5, 24) + Math.min(redFlags * 6, 26) + Math.min(firstDates * 4, 20);
  filterSharpness += intent === "selective" || intent === "serious" ? 18 : 8;

  let selfSabotageRisk = 100 - clamp((sabotageLength > 120 ? 78 : sabotageLength > 50 ? 60 : 42) + (offerLength > 80 ? 10 : 0), 0, 100);
  selfSabotageRisk = 100 - selfSabotageRisk;

  return [
    {
      key: "dating_pacing_clarity",
      title: "Ясность по темпу первых стадий",
      score: clamp(Math.round(pacingClarity), 0, 100),
      description: "Насколько у тебя уже есть внятное понимание здорового темпа сближения и разговора о статусе.",
      insight:
        pacingClarity >= 75
          ? "Ты неплохо понимаешь, как должен разворачиваться early-stage contact, и меньше рискуешь путать химию с хаосом."
          : pacingClarity >= 45
            ? "Базовое понимание темпа есть, но часть решений будет зависеть от конкретного человека и chemistry."
            : "Здесь еще много неясности, поэтому ранние стадии могут чаще уходить либо в спешку, либо в зависание.",
    },
    {
      key: "dating_ambiguity_tolerance",
      title: "Переносимость неопределенности",
      score: clamp(Math.round(ambiguityTolerance), 0, 100),
      description: "Насколько тебе ок выдерживать раннюю неопределенность без лишней тревоги, давления или бегства.",
      insight:
        ambiguityTolerance >= 75
          ? "Ты достаточно устойчив к ambiguity и можешь узнавать человека без немедленного захвата контроля."
          : ambiguityTolerance >= 45
            ? "Нормальный диапазон, но при сильной симпатии неопределенность может становиться заметно тяжелее."
            : "Низкая переносимость ambiguity может ускорять pressure, overthinking или выбор людей, которые дают фальшивую ясность.",
    },
    {
      key: "dating_signal_alignment",
      title: "Чувствительность к сигналам интереса",
      score: clamp(Math.round(communicationFit), 0, 100),
      description: "Насколько у тебя настроена система распознавания вовлеченности, ясности и живого контакта на старте.",
      insight:
        communicationFit >= 75
          ? "Ты хорошо считываешь и ценишь здоровые сигналы интереса, а не только интенсивность."
          : communicationFit >= 45
            ? "У тебя есть рабочие ориентиры, но часть сигналов все еще может путаться с chemistry или тревогой."
            : "Есть риск либо недополучать ясность, либо переоценивать отдельные жесты без общей стабильности.",
    },
    {
      key: "dating_filter_sharpness",
      title: "Резкость фильтров",
      score: clamp(Math.round(filterSharpness), 0, 100),
      description: "Насколько четко у тебя сформированы green flags, red flags и критерии первых встреч.",
      insight:
        filterSharpness >= 75
          ? "Фильтры выглядят достаточно ясными: тебе проще не застревать в заведомо дорогих сценариях."
          : filterSharpness >= 45
            ? "Есть рабочая фильтрация, но часть критериев может еще быть ситуативной."
            : "Фильтры пока расплывчаты, и это повышает риск заходить в неподходящие истории слишком далеко.",
    },
    {
      key: "dating_self_sabotage_awareness",
      title: "Осознанность своих early-stage сбоев",
      score: clamp(Math.round(selfSabotageRisk), 0, 100),
      description: "Показывает, насколько ты замечаешь свои повторяющиеся паттерны в первых стадиях знакомства.",
      insight:
        selfSabotageRisk >= 75
          ? "Ты уже достаточно хорошо видишь свои repeating patterns, а значит, их проще не бессознательно воспроизводить."
          : selfSabotageRisk >= 45
            ? "Осознанность есть, но в моменте некоторые старые привычки все еще могут брать верх."
            : "Если паттерн слабо назван, он чаще управляет поведением сам по себе; здесь особенно полезна рефлексия после дат и короткие self-checks.",
    },
  ];
}

function generateDatingProfileMarkdown(scales = computeDatingScales(), visibleQuestions = getResultQuestions()) {
  const generatedAt = new Date().toLocaleString("ru-RU");
  const structure = buildStructuredResults(visibleQuestions);
  const byId = (id) => getFormattedAnswerById(id);
  const scaleLines = scales.map((scale) => `- ${scale.title}: ${scale.score}/100 (${scoreLevel(scale.score)}). ${scale.insight}`).join("\n");
  const allAnswers = structure.map((entry) => `### ${entry.block}\n**${entry.question}**\n${entry.formattedAnswer}`).join("\n\n");

  return `# Dating And First Stages Profile

Сгенерировано: ${generatedAt}

## 1. Current Dating Intent

- Запрос на знакомства: ${byId("dating_intent_now")}
- Предпочтительный темп: ${byId("dating_pace_preference")}
- Переносимость неопределенности: ${byId("dating_uncertainty")}

## 2. Signals And Communication

- Какие сигналы интереса наиболее убедительны: ${byId("dating_signal_interest")}
- Предпочтительный стиль общения между встречами: ${byId("dating_texting")}

## 3. Filters And First Meetings

- Что важно понять на первых 2–3 встречах: ${byId("dating_first_dates")}
- Green flags: ${byId("dating_green_flags")}
- Red flags: ${byId("dating_red_flags")}
- Дополнительный red flag: ${byId("dating_red_flags_other")}

## 4. Early-Stage Design

- Когда уместно говорить про exclusivity: ${byId("dating_exclusivity_stage")}
- Что мешает хорошо проходить первые стадии: ${byId("dating_self_sabotage")}
- Что я приношу в early-stage dating: ${byId("dating_offer")}

## 5. Dating Scales

${scaleLines}

## 6. Working Hypotheses

- Тебе нужен не просто набор свиданий, а более точный operating model раннего сближения.
- Главный риск на первых стадиях: путать интенсивность, тревогу и реальный интерес.
- Следующий полезный шаг: превратить этот профиль в правила первых 6 недель знакомства и чеклист post-date reflection.

## 7. Full Answer Log

${allAnswers}
`;
}

function computeBreakupScales() {
  const answers = getAnswerStore();
  const recency = answers.breakup_recency;
  const pain = answers.breakup_current_pain;
  const contact = answers.breakup_contact_status;
  const functioning = answers.breakup_functioning;
  const readiness = answers.breakup_date_readiness;
  const statesCount = getMultiCount("breakup_dominant_state", answers);
  const regulationCount = getMultiCount("breakup_regulation", answers);
  const meaningLength = String(answers.breakup_meaning ?? "").trim().length;
  const planLength = String(answers.breakup_plan ?? "").trim().length;
  const contactFollowupLength = String(answers.breakup_contact_followup ?? "").trim().length;

  let acuteLoad = {
    under_1m: 86,
    "1_3m": 74,
    "3_6m": 58,
    "6_12m": 40,
    over_1y: 30,
  }[recency] ?? 40;
  acuteLoad += {
    very_high: 12,
    high: 8,
    medium: 2,
    low: -6,
    very_low: -10,
  }[pain] ?? 0;

  let boundaryStability = {
    no_contact: 78,
    minimal: 62,
    ongoing: 34,
    on_off: 18,
  }[contact] ?? 40;
  boundaryStability += planLength > 70 ? 10 : 4;
  boundaryStability -= contactFollowupLength > 50 ? 6 : 0;

  let regulation = Math.min(regulationCount * 10, 40) + (meaningLength > 100 ? 24 : meaningLength > 40 ? 16 : 8);
  regulation += {
    severe: 6,
    moderate: 12,
    mild: 18,
    minimal: 24,
  }[functioning] ?? 12;

  let closure = (meaningLength > 100 ? 30 : meaningLength > 45 ? 20 : 10) + {
    me: 16,
    them: 10,
    mutual: 18,
    messy: 8,
  }[answers.breakup_initiation] ?? 8;
  closure += contact === "no_contact" ? 20 : contact === "minimal" ? 14 : 4;
  closure += statesCount >= 3 ? 8 : 4;

  let reentryReadiness = {
    not_ready: 18,
    careful: 44,
    ready: 70,
    very_ready: 84,
  }[readiness] ?? 40;
  reentryReadiness += {
    severe: -16,
    moderate: -8,
    mild: 4,
    minimal: 10,
  }[functioning] ?? 0;
  reentryReadiness += contact === "on_off" ? -14 : contact === "ongoing" ? -8 : 0;

  return [
    {
      key: "breakup_acute_load",
      title: "Острота recovery-нагрузки",
      score: clamp(Math.round(acuteLoad), 0, 100),
      description: "Насколько разрыв сейчас активно нагружает нервную систему и внутренний ресурс.",
      insight:
        acuteLoad >= 75
          ? "Система еще в острой фазе: сейчас особенно важны базовая стабилизация, сон, границы и снижение лишних триггеров."
          : acuteLoad >= 45
            ? "Нагрузка заметна, но уже появляется пространство не только чувствовать, но и осмыслять происходящее."
            : "Острая волна в основном схлынула, и работа смещается в сторону интеграции и новых опор.",
    },
    {
      key: "breakup_boundary_stability",
      title: "Стабильность границ после разрыва",
      score: clamp(Math.round(boundaryStability), 0, 100),
      description: "Насколько четко сейчас защищен контур между прошлой связью и твоим восстановлением.",
      insight:
        boundaryStability >= 75
          ? "Границы после разрыва выглядят достаточно устойчивыми, а значит, recovery не так легко утекает назад в старую систему."
          : boundaryStability >= 45
            ? "Есть базовые границы, но уязвимость к обратному втягиванию еще сохраняется."
            : "Слабые границы могут держать тебя в подвешенном процессе; здесь особенно важен честный выбор по контакту.",
    },
    {
      key: "breakup_self_regulation",
      title: "Способность регулировать себя",
      score: clamp(Math.round(regulation), 0, 100),
      description: "Насколько у тебя уже есть рабочие способы выдерживать боль и возвращать себе устойчивость.",
      insight:
        regulation >= 75
          ? "У тебя уже есть хороший контур восстановления: не только время, но и рабочие практики поддержки."
          : regulation >= 45
            ? "Опоры есть, но они еще не всегда побеждают тяжелые волны или импульсы к регрессу."
            : "Системе не хватает устойчивых способов восстановления; здесь особенно полезны внешние контейнеры и телесная регуляция.",
    },
    {
      key: "breakup_closure",
      title: "Степень внутреннего завершения",
      score: clamp(Math.round(closure), 0, 100),
      description: "Насколько история уже получила смысл, форму и внутреннее завершение, а не только временную дистанцию.",
      insight:
        closure >= 75
          ? "Есть ощущение, что история все больше становится опытом, а не незавершенной воронкой."
          : closure >= 45
            ? "Часть завершения уже собрана, но некоторые узлы еще держат внимание и эмоциональную энергию."
            : "Похоже, история все еще очень жива внутри; без смысловой интеграции время само по себе может не решить задачу.",
    },
    {
      key: "breakup_reentry_readiness",
      title: "Готовность к новому входу в dating",
      score: clamp(Math.round(reentryReadiness), 0, 100),
      description: "Насколько безопасно для тебя уже сейчас входить в новые знакомства без использования их как обезболивания.",
      insight:
        reentryReadiness >= 75
          ? "Новый контакт уже может быть не бегством, а реальным следующим этапом."
          : reentryReadiness >= 45
            ? "Осторожный re-entry возможен, но ему нужны честные границы и самонаблюдение."
            : "Сейчас новые знакомства могут скорее спутать recovery, чем поддержать его; сначала стоит укрепить базу.",
    },
  ];
}

function generateBreakupRecoveryMarkdown(scales = computeBreakupScales(), visibleQuestions = getResultQuestions()) {
  const generatedAt = new Date().toLocaleString("ru-RU");
  const structure = buildStructuredResults(visibleQuestions);
  const byId = (id) => getFormattedAnswerById(id);
  const scaleLines = scales.map((scale) => `- ${scale.title}: ${scale.score}/100 (${scoreLevel(scale.score)}). ${scale.insight}`).join("\n");
  const allAnswers = structure.map((entry) => `### ${entry.block}\n**${entry.question}**\n${entry.formattedAnswer}`).join("\n\n");

  return `# Breakup Recovery Profile

Сгенерировано: ${generatedAt}

## 1. Breakup Context

- Давность разрыва: ${byId("breakup_recency")}
- Кто был инициатором: ${byId("breakup_initiation")}

## 2. Current Emotional State

- Текущее влияние разрыва: ${byId("breakup_current_pain")}
- Доминирующие состояния: ${byId("breakup_dominant_state")}

## 3. Boundaries And Contact

- Текущий контакт с бывшим партнером: ${byId("breakup_contact_status")}
- Что держит этот контакт живым: ${byId("breakup_contact_followup")}

## 4. Regulation And Meaning

- Что помогает регулироваться: ${byId("breakup_regulation")}
- Главный смысл / урок: ${byId("breakup_meaning")}

## 5. Future Readiness

- Насколько разрыв мешает функционированию: ${byId("breakup_functioning")}
- Готовность к новым знакомствам: ${byId("breakup_date_readiness")}
- Следующий здоровый шаг: ${byId("breakup_plan")}

## 6. Recovery Scales

${scaleLines}

## 7. Working Hypotheses

- Тебе нужен не просто календарный “проход времени”, а более точная архитектура восстановления.
- Основной риск: спутать уменьшение боли с реальным завершением истории.
- Следующий полезный шаг: использовать этот профиль как weekly recovery checklist и основу для границ по контакту.

## 8. Full Answer Log

${allAnswers}
`;
}

function getCompatibilityAnswerValue(id, participant) {
  return getAnswerStore(participant)[id];
}

function compatibilityDistance(valueA, valueB, orderedValues) {
  const indexA = orderedValues.indexOf(valueA);
  const indexB = orderedValues.indexOf(valueB);
  if (indexA === -1 || indexB === -1) {
    return 0.5;
  }
  return Math.abs(indexA - indexB) / Math.max(orderedValues.length - 1, 1);
}

function overlapScore(listA = [], listB = []) {
  const setA = new Set(listA);
  const setB = new Set(listB);
  const intersection = [...setA].filter((item) => setB.has(item)).length;
  const union = new Set([...setA, ...setB]).size;
  if (!union) {
    return 0;
  }
  return intersection / union;
}

function computeCompatibilityForTwoScales() {
  const a = getAnswerStore("personA");
  const b = getAnswerStore("personB");

  const intentScore = 100 - compatibilityDistance(a.compatibility_intent, b.compatibility_intent, ["casual", "developing", "exclusive", "long_term"]) * 100;
  const paceScore = 100 - compatibilityDistance(a.compatibility_pace, b.compatibility_pace, ["slow", "steady", "fast"]) * 100;
  const contactScore = 100 - compatibilityDistance(a.compatibility_contact, b.compatibility_contact, ["light", "regular", "high"]) * 100;
  const conflictScore =
    ((a.compatibility_conflict === b.compatibility_conflict ? 1 : 0.55) * 50) +
    overlapScore(a.compatibility_repair, b.compatibility_repair) * 50;
  const closenessScore =
    (100 - compatibilityDistance(a.compatibility_space, b.compatibility_space, ["low", "medium", "high"]) * 100) * 0.55 +
    (100 - compatibilityDistance(a.compatibility_time, b.compatibility_time, ["0_5", "6_10", "11_15", "16_plus"]) * 100) * 0.45;
  const lifestyleScore =
    (100 - compatibilityDistance(a.compatibility_lifestyle, b.compatibility_lifestyle, ["low", "medium", "high"]) * 100) * 0.4 +
    (100 - compatibilityDistance(a.compatibility_exclusivity, b.compatibility_exclusivity, ["monogamy", "soft", "open"]) * 100) * 0.3 +
    (100 - compatibilityDistance(a.compatibility_future, b.compatibility_future, ["no", "unknown", "maybe", "want"]) * 100) * 0.3;
  const valuesScore = overlapScore(a.compatibility_values, b.compatibility_values) * 60 + overlapScore(a.compatibility_dealbreakers, b.compatibility_dealbreakers) * 40;

  return [
    {
      key: "compatibility_intent_alignment",
      title: "Совпадение по намерению и темпу",
      score: clamp(Math.round(intentScore * 0.55 + paceScore * 0.45), 0, 100),
      description: "Насколько два человека хотят от связи примерно одно и то же и в сопоставимом темпе.",
      insight:
        intentScore * 0.55 + paceScore * 0.45 >= 75
          ? "По намерению и скорости у пары хороший шанс двигаться без постоянного ощущения, что один тянет, а другой тормозит."
          : intentScore * 0.55 + paceScore * 0.45 >= 45
            ? "Есть частичное совпадение, но темп и смысл связи стоит проговорить как можно раньше."
            : "Разница по намерению или скорости может быстро превратиться в системное трение, даже если chemistry высокая.",
    },
    {
      key: "compatibility_communication",
      title: "Совместимость по коммуникации и repair",
      score: clamp(Math.round(contactScore * 0.35 + conflictScore * 0.65), 0, 100),
      description: "Сводная оценка по частоте контакта, реакции на напряжение и способам восстановления после конфликта.",
      insight:
        contactScore * 0.35 + conflictScore * 0.65 >= 75
          ? "Есть хорошая база для communication fit: люди, вероятно, смогут чинить связь без постоянного чувства непонятости."
          : contactScore * 0.35 + conflictScore * 0.65 >= 45
            ? "Некоторые элементы fit есть, но без явных договоренностей тут могут легко появиться обиды и неверные чтения."
            : "Здесь высок риск регулярного misattunement: разный темп контакта или разные repair-механики могут сильно усложнять пару.",
    },
    {
      key: "compatibility_closeness_balance",
      title: "Баланс близости и автономии",
      score: clamp(Math.round(closenessScore), 0, 100),
      description: "Насколько сходятся потребности людей в пространстве, времени вместе и плотности связи.",
      insight:
        closenessScore >= 75
          ? "Похоже, двум людям будет легче найти живой баланс между togetherness и автономией."
          : closenessScore >= 45
            ? "Баланс возможен, но его нужно будет не предполагать, а осознанно конструировать."
            : "Разница в потребности в пространстве или времени может быстро переживаться как отвержение с одной стороны и захват — с другой.",
    },
    {
      key: "compatibility_lifestyle_future",
      title: "Совместимость по образу жизни и future shape",
      score: clamp(Math.round(lifestyleScore), 0, 100),
      description: "Показывает, насколько люди совпадают по гибкости, exclusivity и общему вектору будущего.",
      insight:
        lifestyleScore >= 75
          ? "По жизненной конструкции и правилам игры у пары хороший базовый fit."
          : lifestyleScore >= 45
            ? "Есть рабочий диапазон совместимости, но часть тем надо обсуждать до углубления связи."
            : "Даже при сильной симпатии именно lifestyle-архитектура может стать дорогим местом конфликта.",
    },
    {
      key: "compatibility_values_filters",
      title: "Совпадение ценностей и стоп-факторов",
      score: clamp(Math.round(valuesScore), 0, 100),
      description: "Насколько пересекаются ценности в паре и насколько люди одинаково чувствительны к deal-breakers.",
      insight:
        valuesScore >= 75
          ? "Внутренний язык пары и критические границы выглядят довольно согласованными."
          : valuesScore >= 45
            ? "Есть важные точки пересечения, но не все ключевые ценности и фильтры совпадают."
            : "Здесь возможны не только разные предпочтения, но и разные моральные интуиции о том, что в отношениях вообще допустимо.",
    },
  ];
}

function compareQuestionAnswers(question) {
  const answerA = getAnswerStore("personA")[question.id];
  const answerB = getAnswerStore("personB")[question.id];
  const formattedA = formatAnswer(question, answerA);
  const formattedB = formatAnswer(question, answerB);

  let note = "Нужен разговор.";
  if (question.type === "singleChoice") {
    note = answerA === answerB ? "Полное совпадение." : "Ответы различаются, здесь важна проговоренность.";
  } else if (question.type === "multiChoice") {
    const score = overlapScore(answerA, answerB);
    note = score >= 0.66 ? "Высокое пересечение." : score >= 0.34 ? "Частичное пересечение." : "Низкое пересечение.";
  }

  return { formattedA, formattedB, note };
}

function generateCompatibilityReportMarkdown(scales = computeCompatibilityForTwoScales(), visibleQuestions = getResultQuestions()) {
  const generatedAt = new Date().toLocaleString("ru-RU");
  const scaleLines = scales.map((scale) => `- ${scale.title}: ${scale.score}/100 (${scoreLevel(scale.score)}). ${scale.insight}`).join("\n");
  const answerLog = visibleQuestions
    .map((question) => {
      const comparison = compareQuestionAnswers(question);
      return `### ${getBlocks()[question.block]}\n**${question.title}**\nЧеловек A: ${comparison.formattedA}\nЧеловек B: ${comparison.formattedB}\nКомментарий: ${comparison.note}`;
    })
    .join("\n\n");

  return `# Compatibility For Two Report

Сгенерировано: ${generatedAt}

## 1. Comparison Logic

- Этот отчет не считает, что “похожие люди всегда лучше сочетаются”.
- Он показывает, где совпадение облегчает отношения, а где различие потребует явных договоренностей.
- Низкий score не равен приговору: он означает более дорогую переговорную зону.

## 2. Compatibility Scales

${scaleLines}

## 3. Working Hypotheses

- Если у пары высокие баллы по intent, repair и values, различия по ритму и стилю жизни часто можно перевести в договоренности.
- Если низки intent alignment, conflict fit и values/filters одновременно, chemistry сама по себе вряд ли удержит качество связи.
- Следующий полезный шаг: использовать этот отчет как сценарий структурированного разговора, а не как автоматический verdict.

## 4. Side-By-Side Answer Log

${answerLog}
`;
}

function computeTrackScales() {
  return {
    family: computeFamilyCompatibilityScales,
    relationship: computeRelationshipScales,
    dating: computeDatingScales,
    breakup: computeBreakupScales,
    compatibility: computeCompatibilityForTwoScales,
  }[state.track]();
}

function generateTrackDraftMarkdown(scales = computeTrackScales(), visibleQuestions = getResultQuestions()) {
  return {
    family: generateFamilyPRDMarkdown,
    relationship: generateRelationshipProfileMarkdown,
    dating: generateDatingProfileMarkdown,
    breakup: generateBreakupRecoveryMarkdown,
    compatibility: generateCompatibilityReportMarkdown,
  }[state.track](scales, visibleQuestions);
}

function buildExportPayload(scales = computeTrackScales(), visibleQuestions = getResultQuestions()) {
  return {
    generatedAt: new Date().toISOString(),
    track: state.track,
    questionCount: visibleQuestions.length,
    respondents: isPairTrack() ? ["personA", "personB"] : ["self"],
    answers: buildStructuredResults(visibleQuestions),
    compatibilityScales: scales.map((scale) => ({
      key: scale.key,
      title: scale.title,
      score: scale.score,
      level: scoreLevel(scale.score),
      description: scale.description,
      insight: scale.insight,
    })),
    draftMarkdown: generateTrackDraftMarkdown(scales, visibleQuestions),
  };
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function setTemporaryButtonState(button, successLabel, fallbackLabel) {
  const original = button.dataset.originalLabel || button.textContent;
  button.dataset.originalLabel = original;
  button.textContent = successLabel;
  window.setTimeout(() => {
    button.textContent = fallbackLabel || original;
  }, 1600);
}

function renderInsights(scales) {
  insightsView.innerHTML = "";

  scales.forEach((scale) => {
    const card = document.createElement("article");
    card.className = "score-card";

    const meta = document.createElement("div");
    meta.className = "score-meta";

    const titleGroup = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = scale.title;
    const level = document.createElement("div");
    level.className = "score-label";
    level.textContent = scoreLevel(scale.score);
    titleGroup.append(title, level);

    const value = document.createElement("div");
    value.className = "score-value";
    value.textContent = `${scale.score}`;

    meta.append(titleGroup, value);

    const track = document.createElement("div");
    track.className = "score-track";
    const fill = document.createElement("div");
    fill.className = "score-fill";
    fill.style.width = `${scale.score}%`;
    track.appendChild(fill);

    const description = document.createElement("p");
    description.textContent = scale.description;

    const insight = document.createElement("p");
    insight.style.marginTop = "10px";
    insight.textContent = scale.insight;

    card.append(meta, track, description, insight);
    insightsView.appendChild(card);
  });
}

function renderPRDPreview(prdMarkdown) {
  prdPreview.textContent = prdMarkdown;
}

function buildPrintableHtml(scales, prdMarkdown, visibleQuestions) {
  const content = getTrackContent();
  const resultsHtml = visibleQuestions
    .map((question) => {
      const blockTitle = getBlocks()[question.block];
      const answerMarkup = isPairTrack()
        ? (() => {
            const comparison = compareQuestionAnswers(question);
            return `<p style="margin:0 0 4px; white-space:pre-wrap; color:#54453a; line-height:1.6;"><strong>Человек A:</strong> ${escapeHtml(comparison.formattedA)}</p>
          <p style="margin:0 0 4px; white-space:pre-wrap; color:#54453a; line-height:1.6;"><strong>Человек B:</strong> ${escapeHtml(comparison.formattedB)}</p>
          <p style="margin:0; white-space:pre-wrap; color:#382b22; line-height:1.6;"><strong>Комментарий:</strong> ${escapeHtml(comparison.note)}</p>`;
          })()
        : `<p style="margin:0; white-space:pre-wrap; color:#54453a; line-height:1.6;">${escapeHtml(
            formatAnswer(question, getAnswerStore()[question.id])
          )}</p>`;
      return `
        <section style="margin-bottom:24px;">
          <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:0.12em; color:#8b3f23;">${escapeHtml(blockTitle)}</p>
          <h3 style="margin:0 0 8px; font-size:18px;">${escapeHtml(question.title)}</h3>
          ${answerMarkup}
        </section>
      `;
    })
    .join("");

  const scalesHtml = scales
    .map(
      (scale) => `
        <section style="margin-bottom:18px; padding:16px; border:1px solid #e6d9c8; border-radius:16px;">
          <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; letter-spacing:0.12em; color:#8b3f23;">${scoreLevel(scale.score)} · ${scale.score}/100</p>
          <h3 style="margin:0 0 8px; font-size:18px;">${escapeHtml(scale.title)}</h3>
          <p style="margin:0 0 8px; color:#54453a; line-height:1.6;">${escapeHtml(scale.description)}</p>
          <p style="margin:0; color:#382b22; line-height:1.6;"><strong>Вывод:</strong> ${escapeHtml(scale.insight)}</p>
        </section>
      `
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(content.printableTitle)}</title>
  </head>
  <body style="margin:0; padding:40px; font-family:Georgia, serif; background:#fffaf4; color:#201c18;">
    <main style="max-width:900px; margin:0 auto;">
      <header style="margin-bottom:32px;">
        <p style="margin:0 0 8px; text-transform:uppercase; letter-spacing:0.18em; color:#8b3f23; font-size:12px;">${escapeHtml(content.eyebrow)}</p>
        <h1 style="margin:0; font-size:38px; line-height:1;">${escapeHtml(content.printableTitle)}</h1>
        <p style="margin:14px 0 0; color:#54453a; line-height:1.7;">Сводный отчет по интервью, включая шкалы, черновик документа и полный журнал ответов.</p>
      </header>
      <section style="margin-bottom:32px;">
        <h2 style="font-size:28px; margin:0 0 18px;">Compatibility Scales</h2>
        ${scalesHtml}
      </section>
      <section style="margin-bottom:32px;">
        <h2 style="font-size:28px; margin:0 0 18px;">PRD Draft</h2>
        <pre style="white-space:pre-wrap; padding:18px; border-radius:18px; background:#fff; border:1px solid #e6d9c8; font-family:'Courier New', monospace; font-size:13px; line-height:1.65;">${escapeHtml(
          prdMarkdown
        )}</pre>
      </section>
      <section>
        <h2 style="font-size:28px; margin:0 0 18px;">Answer Log</h2>
        ${resultsHtml}
      </section>
    </main>
  </body>
</html>`;
}

function renderResults() {
  form.classList.add("hidden");
  resultsView.classList.remove("hidden");
  resultsSummary.innerHTML = "";

  const visibleQuestions = getVisibleQuestions();
  const scales = computeTrackScales();
  const prdMarkdown = generateTrackDraftMarkdown(scales, visibleQuestions);

  renderInsights(scales);
  renderPRDPreview(prdMarkdown);

  const grouped = visibleQuestions.reduce((accumulator, question) => {
    const blockItems = accumulator[question.block] ?? [];
    blockItems.push(question);
    accumulator[question.block] = blockItems;
    return accumulator;
  }, {});

  Object.entries(grouped).forEach(([blockKey, blockQuestions]) => {
    const section = document.createElement("section");
    section.className = "result-block";

    const title = document.createElement("h3");
    title.textContent = getBlocks()[blockKey];
    section.appendChild(title);

    blockQuestions.forEach((question) => {
      const item = document.createElement("article");
      item.className = "result-item";

      const questionNode = document.createElement("p");
      questionNode.className = "result-question";
      questionNode.textContent = question.title;

      if (isPairTrack()) {
        const comparison = compareQuestionAnswers(question);
        const answerNodeA = document.createElement("p");
        answerNodeA.className = "result-answer";
        answerNodeA.textContent = `Человек A: ${comparison.formattedA}`;
        const answerNodeB = document.createElement("p");
        answerNodeB.className = "result-answer";
        answerNodeB.textContent = `Человек B: ${comparison.formattedB}`;
        const noteNode = document.createElement("p");
        noteNode.className = "result-answer";
        noteNode.textContent = `Комментарий: ${comparison.note}`;
        item.append(questionNode, answerNodeA, answerNodeB, noteNode);
      } else {
        const answerNode = document.createElement("p");
        answerNode.className = "result-answer";
        answerNode.textContent = formatAnswer(question, getAnswerStore()[question.id]);
        item.append(questionNode, answerNode);
      }
      section.appendChild(item);
    });

    resultsSummary.appendChild(section);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const visibleQuestions = getVisibleQuestions();
  const current = visibleQuestions[state.currentIndex];
  if (!current) {
    return;
  }

  const value = readAnswer(current);
  const error = validateAnswer(current, value);
  if (error) {
    validationMessage.textContent = error;
    return;
  }

  const nextAnswers = {
    ...getAnswerStore(),
    [current.id]: value,
  };
  setAnswerStore(nextAnswers);
  clearHiddenAnswers();

  const updatedVisible = getVisibleQuestions();
  if (state.currentIndex >= updatedVisible.length - 1 && isPairTrack() && state.participant === "personA") {
    state.participant = "personB";
    state.currentIndex = 0;
    renderSurvey();
    return;
  }

  if (state.currentIndex >= updatedVisible.length - 1) {
    renderResults();
    return;
  }

  state.currentIndex += 1;
  renderSurvey();
});

backButton.addEventListener("click", () => {
  if (state.currentIndex === 0 && (!isPairTrack() || state.participant === "personA")) {
    return;
  }
  if (isPairTrack() && state.participant === "personB" && state.currentIndex === 0) {
    state.participant = "personA";
    state.currentIndex = Math.max(getVisibleQuestions().length - 1, 0);
    renderSurvey();
    return;
  }
  state.currentIndex -= 1;
  renderSurvey();
});

function switchTrack(track) {
  if (state.track === track) {
    return;
  }
  state.track = track;
  state.answers = initializeAnswersForTrack(track);
  state.currentIndex = 0;
  state.participant = "personA";
  renderSurvey();
}

familyTrackButton.addEventListener("click", () => {
  switchTrack("family");
});

relationshipTrackButton.addEventListener("click", () => {
  switchTrack("relationship");
});

datingTrackButton.addEventListener("click", () => {
  switchTrack("dating");
});

breakupTrackButton.addEventListener("click", () => {
  switchTrack("breakup");
});

compatibilityTrackButton.addEventListener("click", () => {
  switchTrack("compatibility");
});

participantAButton.addEventListener("click", () => {
  if (!isPairTrack()) {
    return;
  }
  state.participant = "personA";
  renderSurvey();
});

participantBButton.addEventListener("click", () => {
  if (!isPairTrack()) {
    return;
  }
  state.participant = "personB";
  renderSurvey();
});

restartButton.addEventListener("click", () => {
  state.answers = initializeAnswersForTrack();
  state.currentIndex = 0;
  state.participant = "personA";
  renderSurvey();
});

copyButton.addEventListener("click", async () => {
  const payload = buildAnswerLines().join("\n\n");

  try {
    await navigator.clipboard.writeText(payload);
    setTemporaryButtonState(copyButton, "Скопировано", getTrackContent().copyButton);
  } catch (error) {
    setTemporaryButtonState(copyButton, "Не удалось", getTrackContent().copyButton);
  }
});

jsonButton.addEventListener("click", () => {
  const visibleQuestions = getResultQuestions();
  const scales = computeTrackScales();
  const payload = buildExportPayload(scales, visibleQuestions);
  downloadTextFile(getTrackContent().jsonFilename, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
  setTemporaryButtonState(jsonButton, "JSON готов", "Скачать JSON");
});

prdButton.addEventListener("click", () => {
  const visibleQuestions = getResultQuestions();
  const scales = computeTrackScales();
  const prdMarkdown = generateTrackDraftMarkdown(scales, visibleQuestions);
  downloadTextFile(getTrackContent().draftFilename, prdMarkdown, "text/markdown;charset=utf-8");
  setTemporaryButtonState(prdButton, state.track === "family" ? "PRD скачан" : "Профиль скачан", getTrackContent().draftButton);
});

pdfButton.addEventListener("click", () => {
  const visibleQuestions = getResultQuestions();
  const scales = computeTrackScales();
  const prdMarkdown = generateTrackDraftMarkdown(scales, visibleQuestions);
  const printableWindow = window.open("", "_blank");

  if (!printableWindow) {
    setTemporaryButtonState(pdfButton, "Разреши popup", "Сохранить PDF");
    return;
  }

  printableWindow.document.open();
  printableWindow.document.write(buildPrintableHtml(scales, prdMarkdown, visibleQuestions));
  printableWindow.document.close();
  printableWindow.focus();

  window.setTimeout(() => {
    printableWindow.print();
  }, 250);

  setTemporaryButtonState(pdfButton, "Открыта печать", "Сохранить PDF");
});

renderSurvey();
