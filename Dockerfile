FROM node:20.11.1-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the application files into the working directory
COPY . .

ENV PORT 3000

# Install the application dependencies
RUN npm install --omit=dev && apk add nano curl

EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]