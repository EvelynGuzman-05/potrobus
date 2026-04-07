import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        port=3308, #cambiar si el puerto es diferente
        user="root",
        password="", #ingresar contraseña
        database="potrobus",
    )