CREATE DATABASE IF NOT EXISTS tasksnativedb;

USE tasksnativedb;

CREATE TABLE IF NOT EXISTS tasks(
  id NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT;
  PRIMARY KEY (id)
)

INSERT INTO tasks(title, description) VALUES ('task1','update cv')
                                              ('task2','upload cv')