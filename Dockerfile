FROM node:10-stretch

RUN apt-get update && apt-get install -y \
  build-essential \
  libssl-dev \
  dos2unix \
  wget \
  gzip \
  openssh-server \
  curl \
  python-minimal \
  libelf1 \
  locate \
  bash \
  nano 

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN chmod +x /app/install_yottadb.sh \
  && chmod +x /app/run.sh \
  && chmod +x /app/ydb

RUN npm install

# Install YottaDB & NodeM
RUN ["./install_yottadb.sh"]

EXPOSE 3000

ENTRYPOINT ["./run.sh"]
CMD ["./node_modules/.bin/babel-node", "./src/cli/bin.js", "--host", "0.0.0.0", "--adapter", "ewd-gtm", "db.json", "temp4"]
# ./node_modules/.bin/babel-node ./src/cli/bin.js --host=0.0.0.0 --adapter ewd-gtm db.json temp4

