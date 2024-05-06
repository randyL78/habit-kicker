# Habit Kicker Rails API Information

## Local

## Staging

The staging version of the API is hosted on an AWS EC2 instance.

Currently, that instance is a `t3.nano` with 8 GB of EBS attached to it

### Logging into the instance

* Get the IPv4 address of the instance (Available in the AWS EC2 Dashboard)
* Get, store, and `chmod 400` the `.pem` file in the `~/.ssh` directory, if not already there
* Run `ssh -i ~/.ssh/hk_api.pem ubuntu@<ip_of_instance>`

## Production

