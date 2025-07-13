from fastapi import FastAPI
from typing import List
from starlette.middleware.cors import CORSMiddleware
from app.database import session
from app.models import UserTable, User

app = FastAPI()

# CORSを回避するために設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

# テーブルにいる全ユーザ情報を取得 GET
@app.get("/users")
def read_users():
    users = session.query(UserTable).all()
    return users
