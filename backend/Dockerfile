#from the node server
FROM node

#create directory
WORKDIR /server

#copy all package.json "to" the server folder we created
COPY package*.json ./server/

#run the npm install
RUN npm install

COPY . /server/

EXPOSE 4000
CMD ["node". "app.js"]
