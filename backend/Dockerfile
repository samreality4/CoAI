#from the node server
FROM node

#set up environment variables if you want
#ENV MONGO_KEY1=
#ENV MONGO_KEY2=

#create folder called server
WORKDIR /server

#copy all package.json and package-lock.json "to" the server folder we created in WORKDIR
COPY package*.json .

#run the npm install
RUN npm install

#copy everything where this Dockerfile is at to the server folder that we have created in WORKDIR
COPY . .

#show on localhost 4000
EXPOSE 4000
#Run the commonad node app.js
CMD [ "node", "app.js" ]


#helpful commands
#docker run -it coai_backend sh
