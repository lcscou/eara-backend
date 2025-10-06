FROM wordpress:latest

RUN apt-get update && apt-get install -y \
    vim \
    less \
    unzip \
    git \
    redis-tools \
    msmtp \
    && docker-php-ext-install mysqli pdo pdo_mysql

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY msmtprc /etc/msmtprc
