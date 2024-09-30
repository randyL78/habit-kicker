# Habit Kicker

An open source app to help users quit, or at least reduce the frequency of, a
bad habit. This is accomplished by users creating a journal entry whenever they
think about or commit the bad habit. Details about time, location, and severity
are also stored.

## Local Setup and Development

Doing a full nuke and rewrite since it wasn't far along and I want to change the stack
being used just a bit. Moving from Ruby on Rails to Spring Boot for the API, and using
the newest version of React Router in a Vite set up React project. Keeping PostgresSQL 
as the default database, but using RDS instead of straight EC2 so that backups and 
failovers are one less thing I have to worry about.
