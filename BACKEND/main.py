from fastapi import FastAPI
import psycopg2
from psycopg2.extras import RealDictCursor
import time

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

while True:
    try:
        conn =  psycopg2.connect(host='localhost', database='fastapi', user='postgres', password='anki2030', cursor_factory=RealDictCursor)
        cursor = conn.cursor
        print('Database connected!')
        break
    except Exception as error:
        print("Connection failed")
        print("Error: ", error)
        time.sleep(2)

@app.get("/")
def home():
    return {"message": "Welcome to Aspire!"}