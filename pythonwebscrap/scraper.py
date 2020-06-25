
# project for extracting video from tamilyogi
import requests
from bs4 import BeautifulSoup
import re

# funtion to html from url


def getHtml(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    return soup

# function to write a file


def scriptFiles(script, title):
    title = re.split('-', title)
    print(title)
    vFile = open("video.js", "r")
    contents = vFile.readlines()
    vFile.close()

    contents.insert(1, script)

    vFile = open(f"{title[0]}.js", "w")
    contents = "".join(contents)
    vFile.write(contents)
    vFile.close()

    scriptName = f'<script src="./{title[0]}.js"></script>'
    titleName = f'<title>{title[0]}</title>'

    with open('media.html', 'r') as file1:
        htmlContent = file1.readlines()

    with open(f"{title[0]}.html", "w") as file1:
        htmlContent.insert(6, titleName)
        htmlContent.insert(31, scriptName)
        htmlContent = "".join(htmlContent)
        file1.write(htmlContent)


# url to get html
webURL = str(input("Enter your website url: "))
baseUrl = getHtml(webURL)
# getting title
movieTitle = (baseUrl.title.string)
print(movieTitle)
# loop to extract link from html
htmlUrl = []
for iframe in baseUrl.find_all('iframe', src=True):
    iframeUrl = (iframe['src'])
    htmlUrl.append(iframeUrl)

# video url to get html
videoHtml = getHtml(htmlUrl[0])

# loop to extract scripts from html
videoScripts = []
for script in videoHtml.find_all('script'):
    videoScripts.append(script)

# extract content from script
files = str(videoScripts[-5])
# i didn't learn regex at the time
regex = r"(sources:.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*\n.*})"
matches = re.search(regex, files, re.MULTILINE | re.IGNORECASE)
script = str(matches.group())

scriptFiles(script, movieTitle)
