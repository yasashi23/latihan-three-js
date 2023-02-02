from selenium import webdriver
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome(executable_path=r'./chromedriver')
driver.get("https://web.whatsapp.com/")

input("Scan the QR code and then press Enter")



# Replace with the name of the recipient
user = driver.find_elements_by_xpath(
    '//span[@title = "{No.2bisnis}"]'.format("No.2bisnis"))
user.click()

# Type the message
message = driver.find_elements_by_xpath(
    '//*[@id="main"]/footer/div[1]/div[2]/div/div[2]')[0]
message.send_keys("Hello there!")

# Send the message using the Enter key
message.send_keys(Keys.RETURN)
