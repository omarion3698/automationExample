# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR C:\Users\hp\Desktop\Spring24\APP4035A\CodeExamples\codeexamples\src

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]