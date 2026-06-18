# Stage 1: build static assets
FROM node:16-alpine AS build

WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY public ./public
COPY src ./src

ARG REACT_APP_API_URL=http://localhost:8000/api/
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build:ci

# Stage 2: serve with nginx
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
