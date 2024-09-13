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

```
‌启动和停止MySQL服务‌：
启动服务：net start mysql80
停止服务：net stop mysql80
‌连接到MySQL客户端‌：
使用命令行客户端连接：mysql -u root -p
‌数据库管理‌：
创建数据库：CREATE DATABASE database_name;
删除数据库：DROP DATABASE database_name;
切换数据库：USE database_name;
‌表管理‌：
创建表：CREATE TABLE table_name (column1 datatype, column2 datatype, ...);
删除表：DROP TABLE table_name;
查看表状态：SHOW TABLE STATUS LIKE '%tablename%';
‌数据操作‌：
插入数据：INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
更新数据：UPDATE table_name SET column_name = new_value WHERE condition;
删除数据：DELETE FROM table_name WHERE condition;
‌用户管理‌：
创建用户：CREATE USER 'username'@'host' IDENTIFIED BY 'password';
删除用户：DROP USER 'username'@'host';
修改密码：ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';
‌其他命令‌：
查看所有数据库：SHOW DATABASES;
查看当前数据库中的表：SHOW TABLES;
查看表结构：DESCRIBE table_name;
```
