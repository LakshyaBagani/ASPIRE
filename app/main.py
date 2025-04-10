from fastapi import FastAPI
import psycopg2
from psycopg2.extras import RealDictCursor
import time

from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, ai, strategies
import uvicorn
from loguru import logger

# models.Base.metadata.create_all(bind=engine)

# app = FastAPI()

# while True:
#     try:
#         conn =  psycopg2.connect(host='localhost', database='fastapi', user='postgres', password='anki2030', cursor_factory=RealDictCursor)
#         cursor = conn.cursor
#         print('Database connected!')
#         break
#     except Exception as error:
#         print("Connection failed")
#         print("Error: ", error)
#         time.sleep(2)

@app.get("/")
def home():
    return {"message": "Welcome to Aspire!"}


app = FastAPI(
    title="Aspire - AI Strategy Generator",
    description="API for generating AI-powered business strategies",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

#  CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(ai.router)
app.include_router(strategies.router)

@app.get("/", tags=["Root"])
async def root():
    """Welcome endpoint for Aspire API."""
    return {"message": "Welcome to Aspire AI Strategy Generator API"}

@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

if __name__ == "__main__":
    logger.info("Starting Aspire API server...")
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)