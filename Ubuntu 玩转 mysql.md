### 卸载命令
```
sudo service mysql stop

sudo apt-get remove --purge mysql-server mysql-client mysql-common

sudo apt-get remove --purge mysql-server-core-*

sudo rm -rf /etc/mysql /var/lib/mysql

sudo apt-get autoremove

sudo apt-get autoclean
```

### 安装命令
```
sudo apt-get install mysql-server

设置密码
sudo mysql

use mysql;

alter user 'root'@'localhost' identified with mysql_native_password by '123456';
```

### 查看服务命令
```
service mysql status

service mysql restart

service mysql start

service mysql stop
```
