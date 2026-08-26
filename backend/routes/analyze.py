from fastapi import APIRouter;
from pydantic import BaseModel;

from services.ai_service import troubleshoot_error

router = APIRouter();

class ErrorRequest(BaseModel):
    error: str


@router.post('/analyze')
def analyze_error(request : ErrorRequest):
    print("printing input from frontend",request);
    print("printing input from frontend",request.error);
    result = troubleshoot_error(request.error)
    print("result from vackend",result);
    print(type(result));
    return { 
        "result" : result
    }