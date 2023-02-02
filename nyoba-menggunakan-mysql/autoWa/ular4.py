from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time


CHROME_PROFILE_PATH="user-data-dir=C:/Users/HP/AppData/Local/Google/Chrome/User Data/Default"

options=webdriver.ChromeOptions()
options.add_argument(CHROME_PROFILE_PATH)
print("=============== BERJALAN 1 ==============")
browser_service = Service(executable_path='C:/Windows/chromedriver.exe')
browser =webdriver.Chrome(service=browser_service) 
browser.maximize_window()
browser.get('https://web.whatsapp.com/')
print("=============== BERJALAN 2 ==============")

# kontak
# search_xpath = '//*[@id="pane-side"]/div[1]/div/div/div[4]'
# search_box = WebDriverWait(browser,500).until(EC.presence_of_all_elements_located((By.XPATH,search_xpath)))
# browser.find_element(
#     "xpath",'//*[@id="pane-side"]/div[1]/div/div/div[4]').click()

target = '"No.2bisnis"'
contact_path = '//span[contains(@title,' + target + ')]'
contact = WebDriverWait(browser, 500).until(
    EC.presence_of_all_elements_located((By.XPATH, contact_path)))
contact[0].click()
print("=============== BERJALAN 3 ==============")


time.sleep(1)
text = "udin"

classnya = "_3Uu1_"
input = '//div[contains(@class,' + classnya + ')]'
input_wait = WebDriverWait(browser, 500).until(
    EC.presence_of_all_elements_located((By.XPATH, input)))
inputnya = browser.find_element("xpath",input)
input_wait[0].click()
print("=============== BERJALAN 4 ==============")
time.sleep(2)
input_wait[0].send_keys(text)
input_wait[0].send_keys(Keys.ENTER)
print("=============== FINISH ==============")
