# Habit Kicker

An open source app to help users quit, or at least reduce the frequency of, a
bad habit. This is accomplished by users creating a journal entry whenever they
think about or commit the bad habit. Details about time, location, and severity
are also stored.

## Local Setup and Development

### Dependencies:

* Docker
* Ruby (see habit-kicker-rails/.ruby-version for which Ruby to have installed)
* Postgres SQL (Actual DB run through Docker, but helpful to have local version)

### Setup

From a terminal in the directory you want to install, run:

```bash
git clone git@github.com:randyL78/habit-kicker.git
cd habit-kicker
```

### Running

From a terminal at the root directory of the repository

```bash
docker compose up
```

### Visiting site locally

Habit-Kicker uses Nginx to handle request routing between the client and the
API. This is to make sure that the local environment matches production as 
close as possible Nginx is configured to run on port 8080.

In a browser, visit http://localhost:8080
