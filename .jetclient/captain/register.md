```toml
name = 'register'
method = 'POST'
url = 'http://localhost:8000/captains/register'
sortWeight = 1000000
id = 'f5d78c33-12cf-45f7-813d-71bce3882f8c'

[body]
type = 'JSON'
raw = '''
{
  "fullname": {
    "firstname": "captin",
    "lastname": "King",
  },
  "email": "captain@gmail.com",
  "password": "captain",
  "vehicle": {
    "color":"red", 
    "plate":"MP 04  XY 6203", 
    "capacity": 3,
    "vehicleType": "car"
  },
}'''
```
