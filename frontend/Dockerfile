#from a node server
FROM node

#create a directory
WORKDIR /client

#copy the package json to the client directory
COPY package*.json /client/

#run the npm install as usually to update everything
RUN npm install

#copy everything "to" client folder that we created
COPY . /client/

EXPOSE 3000
#run the npm project
CMD [ "npm", "start"]