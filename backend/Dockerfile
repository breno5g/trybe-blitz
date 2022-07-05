FROM node:16

WORKDIR /back

COPY . .

RUN npm install

EXPOSE 3001

# Não iniciarei o server pois pretendo dar atach no container, mas tenho que lembrar disso quando subir para o heroku
# CMD ["npm", "start"]
