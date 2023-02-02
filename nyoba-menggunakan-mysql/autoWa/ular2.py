from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome("chromedriver")

driver.get("https://web.whatsapp.com/")

def msg():
    name = '"No.2bisnis"'
    text = "udfifnb"
    # Find Whom to message
    user = driver.find_element_by_xpath(
        '//span[@title = "{}"]'.format(name)
    )
    user.click()
    text_box = driver.find_element_by_class_name('_3Uu1_')

    #Send Button
    text_box.send_key(text + Keys.ENTER)

msg()