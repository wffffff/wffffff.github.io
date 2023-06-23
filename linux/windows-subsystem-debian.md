# Windows subsystem - debian

Enable the _**`systemd/systemctl`**_ command, only works for wsl2

```
sudo vi /etc/wsl.conf

//add the following
[boot]
systemd=true

save and restart the server
wsl --shutdown
```
