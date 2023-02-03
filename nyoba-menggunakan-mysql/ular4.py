from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import json
import time


CHROME_PROFILE_PATH="user-data-dir=C:/Users/HP/AppData/Local/Google/Chrome/User Data/Default"
# open file
with open('D:/ngoding/proyek/pribadi/extension/nyoba-menggunakan-mysql/data.json', 'r') as file:
    cont = file.read()
    dat = json.loads(cont)

jud = dat["judul"]
prop = dat["propo"]
pay = dat["paymentnya"]
neg = dat["negara"]
spend = dat["spendnya"]
desk = dat["desk"]
deskNew = desk.replace("\n", "")
link = dat["linknya"]

# filenya = f"judul: {jud}\n\nproposal: {prop}\n\npay: {pay}\n\nnegara: {neg}\n\nspendnya: {spend}\n\ndesk: {deskNew}\n\nlink: \033{link}\033"
filenya = f"*judul*: {jud} || *proposal*: {prop} || *pay*: {pay} || *negara*: {neg} || *spendnya*: {spend} || *link*: {link}\n*desk*: {deskNew}"

# filenya = f"{jud} {prop}"

options=webdriver.ChromeOptions()
options.add_argument(CHROME_PROFILE_PATH)


browser_service = Service(executable_path='C:/Windows/chromedriver.exe')
browser = webdriver.Chrome(service=browser_service, options=options)



browser.maximize_window()
browser.get('https://web.whatsapp.com/')


target = '"Yashi"'
contact_path = '//span[contains(@title,' + target + ')]'
contact = WebDriverWait(browser, 50).until(
    EC.presence_of_all_elements_located((By.XPATH, contact_path)))
contact[0].click()
text = "udin"


input = "//div[@class='_3Uu1_']"
input_wait = WebDriverWait(browser, 50).until(
    EC.presence_of_all_elements_located((By.XPATH, input)))


input_wait[0].click()

# keyboard.write(filenya)
# keyboard.send("enter")
input_wait[0].send_keys(filenya + Keys.ENTER)

time.sleep(5)
print("berhasil")
