import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv()

def get_connection():
    #db_url = os.getenv('RAILWAY_DB_URL')
    #if db_url:
        # Parsear URL Railway cuando se tenga lista
        # mysql://user:pass@host:port/db
        #return mysql.connector.connect(**parse_db_url(db_url))
    
    # Fallback local
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"), #ingresar host
        port=os.getenv("DB_PORT"), #cambiar si el puerto es diferente
        user=os.getenv("DB_USER"), #ingresar usuario
        password=os.getenv("DB_PASS"), #ingresar contraseña
        database="potrobus",
    )