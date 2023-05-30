FROM ruby

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
COPY . .

RUN gem install foreman

EXPOSE 5000
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "5000"]
#CMD ["foreman", "start", "-f", "Procfile.dev", "\"$@\""]