# Relationship Strategy App

Локальное приложение-опросник с несколькими режимами:

- `Семья` для калибровки семейного PRD
- `Отношения` для анализа готовности к отношениям, паттернов близости и compatibility profile
- `Dating` для первых стадий знакомства
- `Recovery` для восстановления после разрыва
- `Two People` для сравнения ответов двух людей

## Запуск

Открой [index.html](/Users/macbookairm2/Documents/Projects/family-survey-app/index.html) в браузере.

Если нужен локальный сервер:

```bash
cd /Users/macbookairm2/Documents/Projects/family-survey-app
python3 -m http.server 4173
```

После этого открой `http://localhost:4173`.

## Что внутри

- пять режимов в одном интерфейсе: `Семья`, `Отношения`, `Dating`, `Recovery`, `Two People`
- 5 тематических блоков в каждом режиме
- дополнительные вопросы, которые появляются по условию
- итоговый экран со всеми вопросами и ответами
- блок со шкалами совместимости / readiness на основе ответов
- автогенерация PRD-черновика, relationship profile, dating profile, recovery plan или compatibility report
- экспорт результатов в `JSON`
- экспорт черновика в `Markdown`
- кнопка сохранения результата в `PDF` через диалог печати браузера
- кнопка копирования итогового summary
