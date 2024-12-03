```toml
name = 'getUserProfile'
method = 'GET'
url = 'http://localhost:4000/users/profile'
sortWeight = 3000000
id = '6476a934-e054-437b-a232-102b3ed73338'

[[headers]]
key = 'Authorization'
value = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRhOTk1YTQ4OWY5OTI1NGUwYTM0NzgiLCJpYXQiOjE3MzI5NDQzNjd9.5o6iskmhWZdp0TIv9JSq0D7rSnqokv3xEJGe-IYMH4c'

[body]
type = 'JSON'
raw = '''
{
  email: "haris@gmail.com",
  password: "haris321",
}'''
```
