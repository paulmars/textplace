FROM ruby:2.3.1

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections
RUN apt-get update -qq && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y nodejs

RUN apt-get install coffeescript

RUN apt-get install -y npm
RUN npm install -g nodemon

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install

ADD . $APP_HOME

EXPOSE 6060

CMD "foreman start"
