# Habit Kicker PostgreSql Database Information

## Local

## Production

The production version of the database is stored on an EC2 instance in AWS

Currently, it is running on a `t4g.small` instance with 10GiB of storage on an EBS `gp2` volume.

### ToDos

* Enable backups and recovery options.
* Plan for instance failures
* Monitor performance to ensure there are enough resources

### Logging into instance

* Get the IPv4 address of the instance (Available in the AWS EC2 Dashboard)
* Get, store, and `chmod 400` the `.pem` file in the `~/.ssh` directory, if not already there
* Run `ssh -i ~/.ssh/habit-kicker-db ubuntu@<ip_of_instance>`
