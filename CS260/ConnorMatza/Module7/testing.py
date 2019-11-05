import cx_Oracle
import os

userpwd = os.getenv("RDS_DB_PASSWORD")
hostname = os.getenv("RDS_HOSTNAME")
username = os.getenv("RDS_DB_USERNAME")

print (userpwd, hostname, username)
connection = cx_Oracle.connect(os.getenv("RDS_DB_USERNAME"), userpwd, os.getenv("RDS_HOSTNAME"), encoding="UTF-8")
