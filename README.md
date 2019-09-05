# Требования
`node -v` -> 8.9.4
`npm -v` -> 6.0.0

# Установка пакетов
`npm install`

# Вызов справки
`node index.js -?` или `node index.js --help`

# Шаблоны
[Большой QR без подписи с футером (template1)](https://dev-api.hubex.ru/tool/QrRenderer/template1?scale=1&LogoPath=https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg)
[Маленький QR без подписи с футером (template2)](https://dev-api.hubex.ru/tool/QrRenderer/template2?scale=1&LogoPath=https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg)

[Большой QR с подписью и без футера (template3)](https://dev-api.hubex.ru/tool/QrRenderer/template3?scale=1&LogoPath=https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg&label=Test)
[Маленький QR с подписью и без футера (template4)](https://dev-api.hubex.ru/tool/QrRenderer/template4?scale=1&LogoPath=https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg&label=Test)

[Большой QR с отверстиями для крепления (template5)](https://dev-api.hubex.ru/tool/QrRenderer/template5?scale=1&LogoPath=https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg&label=Test)

# Примеры
## Генерация 3 разных QR-кодов по шаблону template1
```node index.js --scale 3 --logoPath "https://239911.selcdn.ru/Metadata/Tenant000017/logo.svg" --template template1 --count 3 --width 99 --height 110```
В результате в папке out появится 3 изображения-png с QR-кодами

