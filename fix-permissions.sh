# try getting uid from docker, if it fails, try 33 (should work)
WWW_DATA_UID=33 # plug in your number from previous step
RESULT=$(docker-compose exec -u www-data eara-backend id -u)
COMMAND_SUCCESS=$?
if [ $COMMAND_SUCCESS -eq 0 ]; then
  WWW_DATA_UID=$(echo $RESULT | tr -d '\r')
fi

sudo chown -R $WWW_DATA_UID:$USER ./wordpress/
sudo find ./wordpress/ -type d -exec chmod 775 {} \;
sudo find ./wordpress/ -type f -exec chmod 664 {} \;

