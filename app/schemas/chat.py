from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ChatRequest(BaseModel):
    message: str
    conversation_id: Optional[str] = None

class ChatMessage(BaseModel):
    role: str  # 'user' or 'assistant'
    content: str
    created_at: Optional[datetime] = None

class ChatResponse(BaseModel):
    message: str
    conversation_id: str

class ConversationResponse(BaseModel):
    id: str
    title: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    class Config:
        from_attributes = True

class ConversationDetailResponse(ConversationResponse):
    messages: List[ChatMessage]
    
    class Config:
        from_attributes = True
