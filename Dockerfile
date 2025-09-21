# 1. Базовый образ с Node.js для сборки
FROM node:22 AS build

# 2. Рабочая директория внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь проект
COPY . .

# 6. Сборка фронтенда (в prod)
RUN npm run build

# 7. Образ для запуска (Nginx как сервер)
FROM nginx:alpine

# 8. Копируем билд React в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Пробросим порт
EXPOSE 80

# 10. Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
