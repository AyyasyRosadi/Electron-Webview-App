<h1>Hi There...</h1>

<h3>This code is intended to create a desktop application that is directed directly to a website url on the internet.</h3>

<h3>Have a favorite website that you want to access easily with just dobble click?</h3>

simple way:

1. Installing Package
> if you dont have npm or yarn you can download from this url https://nodejs.org/en/download

- using npm: "run npm i"
- using yarn: "yarn install"
2. Create .env file and insert your url name,you can see the example like on .example.env file.
3. Run it
- using npm : "npm run start"
- using yarn : "yarn start"

if work then continue to next step!

4. Run this command: " electron-packager ./ "your-application-name" --platformm=win32 --arch=x64 --icon=./example.ico
5. Open bundle and run the exe file

Note:
> You must modify file package.json using your app name in
- name
- productName
> addition : change example.ico with your icon, extension must same ".ico"

any question you can ask to this email - ayyasyrsdy@gmail.com
