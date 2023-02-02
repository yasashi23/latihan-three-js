import json
import time
import pyautogui
import pywhatkit


#open file
# with open('../siapKirim.json', 'r') as file:
#     contents = file.read()
#     data = json.loads(contents)

pywhatkit.sendwhatmsg("+6281314427019","teest menggunakan wa sender",6,15)
time.sleep(1)
pyautogui.click()
time.sleep(1)
pyautogui.press('enter')

# print(data["judul"])    