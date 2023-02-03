import json

with open('D:/ngoding/proyek/pribadi/extension/nyoba-menggunakan-mysql/siapKirim.json', 'r') as file:
    cont = file.read()
    dat = json.loads(cont)

jud = dat["judul"]
prop = dat["propo"]
pay = dat["paymentnya"]
neg = dat["negara"]
spend = dat["spendnya"]
desk = dat["desk"]
deskNew = desk.replace("\n","")
link = dat["linknya"]

filenya = f"judul: {jud}\n\nproposal: {prop}\n\npay: {pay}\n\nnegara: {neg}\n\nspendnya: {spend}\n\ndesk: {deskNew}\n\nlink: \033{link}\033"

