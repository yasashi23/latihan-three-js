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
with open('D:/ngoding/proyek/pribadi/extension/nyoba-menggunakan-mysql/siapKirim.json', 'r') as file:
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

filenya = f"judul: {jud}\n\nproposal: {prop}\n\npay: {pay}\n\nnegara: {neg}\n\nspendnya: {spend}\n\ndesk: {deskNew}\n\nlink: \033{link}\033"
# filenya = f"{jud} {prop}"

options=webdriver.ChromeOptions()
options.add_argument(CHROME_PROFILE_PATH)
print("=============== BERJALAN 1 ==============")

browser_service = Service(executable_path='C:/Windows/chromedriver.exe')
browser = webdriver.Chrome(service=browser_service, options=options)



browser.maximize_window()
browser.get('https://web.whatsapp.com/')
print("=============== BERJALAN 2 ==============")

target = '"No.2bisnis"'
contact_path = '//span[contains(@title,' + target + ')]'
contact = WebDriverWait(browser, 100).until(
    EC.presence_of_all_elements_located((By.XPATH, contact_path)))
contact[0].click()
time.sleep(1)
text = "udin"

print("=============== input =======")
input = "//div[@class='_3Uu1_']"
input_wait = WebDriverWait(browser, 100).until(
    EC.presence_of_all_elements_located((By.XPATH, input)))

print("=============== contact atas ==============")
input_wait[0].click()
print("=============== conact bawah 3 ==============")
# keyboard.write(filenya)
# keyboard.send("enter")
input_wait[0].send_keys(filenya + Keys.ENTER)

time.sleep(2)
print("=============== FINISH ==============")
