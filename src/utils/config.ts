/*
    dotenv: añade a process.env las variables del archivo .env
    envalid: valida las variables de .env
*/
require('dotenv/config')
import { cleanEnv, str, port } from 'envalid';

cleanEnv(process.env, {
    MYSQL_USER: str(),
    MYSQL_PASSWORD: str(),
    MYSQL_PATH: str(),
    MYSQL_PORT: port(),
    APP_PORT: port({ default: 3000 })
});
