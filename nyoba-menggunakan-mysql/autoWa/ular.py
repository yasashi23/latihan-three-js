from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys




option = webdriver.ChromeOptions()
option.add_argument(
    "-session-override=C:/Users/HP/AppData/Local/Google/Chrome/User Data/Default")
driver = webdriver.Chrome('chromedriver.exe',chrome_options=option)
driver.get("https://web.whatsapp.com")
wait = WebDriverWait(driver,50)


target='"No.2bisnis"'
text="hello"
contact_path='//span[contains(@title,'+ target +')]'
contact=wait.until(EC.presence_of_all_elements_located((By.XPATH,contact_path)))
contact.click()
# kirim pesan
message_box_path = '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[2]'
messeage_box=wait.until(EC.presence_of_all_elements_located((By.XPATH,message_box_path)))
messeage_box.send_key(text + Keys.ENTER)

#open file
# with open('../siapKirim.json', 'r') as file:
#     contents = file.read()
#     data = json.loads(contents)


# print(data["judul"])    