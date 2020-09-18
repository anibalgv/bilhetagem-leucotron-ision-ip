# BILHETAGEM LEUCOTRON

SIMPLES BILHETAGEM PARA EQUIPAMENTOS LEUCONTRON ISION IP

## CONNECT TO LEUCONTRON APPLIANCE 
  + [X] FTP
    + [X] CONNECT TO ISION IP
    + [X] DOWNLOAD BILHET00 FILE
    + [X] DELETE DOWNLOADED FILE
  + [ ] SERIAL PORT

## FILES

* [X] READ LOCAL FILE DOWNLOADED FROM FTP
* [X] DELETE LOCAL FILE IMPORTED TO DATABASE

## CSV´s

* [X] CONVERT TEXT TICKETS FILE TO JSON OBJECT

## TICKETS

* [X] IMPORT CALL TICKETS 
* [X] EXPORT TICKETS TO CSV FILE 
* [X] EXPORT TICKETS TO JSON FILE 
* [X] LIST OBJECTS

## DATABASE/SQLITE

* [X] CREATE SQLITE DATABASE WHITH FOLLOWED ATTRIBUTES:
  + [x] TICKETS
    - equipamento, responsavel, data_inicio, hora_inicio, hora_incio_segmento, tempo_bilhete, tempo_ligacao, tempo_atendimento, reservado, identificacao_linha, numero_rota,numero_externo, ligacao_transferida, atributo_ligacao, password_call, call_stamp, packetloss,jitter_evaluation, rastreador, nome_usuario, email_usuario.
  + [x] CONFIG
    - app_first_run, ftps_connect_host, ftps_connect_user, ftps_connect_password.
## NOTIFICATIONS/EMAIL
  + [ ] SEND E-MAIL WITH CALLS MADE BY USER ON THE MONTH

## PAGES/VIEWS

* [ ] CONFIG APP
* [ ] DASBHOARDS - GENERAL
* [ ] DASHBOARDS - COMPARE MONTHS
* [ ] DASHBOARDS - RAMAL WITH MORE NUMBER OF CALLS
* [X] IMPORT TICKETS
* [ ] SHOW TICKETS BY RAMAL
* [ ] SHOW TICKETS OF TODAY
* [ ] SHOW TICKETS BY DATE INTERVAL
* [ ] SHOW TICKETS BY INTERNAL/EXTERNAL/RECEIVED CALLS

---

# INSTALL

> An electron project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
