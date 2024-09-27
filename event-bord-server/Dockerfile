# Используем Node.js как базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в контейнер
COPY . .

COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it
# Сборка TypeScript кода
RUN npm run build



# Указываем команду по умолчанию для запуска приложения
CMD ["npm", "run", "start"]
