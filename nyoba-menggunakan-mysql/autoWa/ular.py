import json

#open file
with open('../data.json', 'r') as file:
    contents = file.read()
    data = json.loads(contents)

print(data["judul"])    