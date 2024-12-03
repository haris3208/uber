```toml
name = 'register'
method = 'POST'
url = 'http://localhost:4000/users/register'
sortWeight = 1000000
id = '36ffd828-a147-4682-857f-0e1d1d44a4d6'

[body]
type = 'JSON'
raw = '''
{
  fullname: {
    firstname: "Haris",
    lastname: "Ahmad",
  },
  email: "haris@gmail.com",
  password: "haris321",
}'''
```
