import requests

API_URL = "https://api.yourwebsite.com/tenders"
API_KEY = "your-api-key"

headers = {
    "X-API-Key": API_KEY
}

response = requests.get(API_URL, headers=headers)

if response.status_code == 200:
    print("Tender Data:", response.json())
else:
    print("Error:", response.status_code)
