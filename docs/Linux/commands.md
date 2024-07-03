---
sidebar_position: 1
---

# 常用的配置

1. Setting up ssh multiplexing to reuse SSH connection:

```shell
mkdir ~/.ssh/sockets
vi ~/.ssh/config

## cp the below code, and save

Host xxrelay  ## set this, then you can ssh mirelay to login
HostName relay.xx.com
User user_name
Host *
  ServerAliveInterval 1200
  ServerAliveCountMax 20
  ControlMaster auto
  ControlPath ~/.ssh/sockets/%r@%h-%p
  ControlPersist 6000
```

2. trzsz download files： https://trzsz.github.io/

