---
sidebar_position: 1
---

# 常用的配置

1. 配置ssh登陆多窗口的功能：

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

2. trzsz下载大型日志： <https://trzsz.github.io/>

