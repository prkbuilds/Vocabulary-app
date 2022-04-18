# Vocabulary-App

<p>
    <img src="https://raw.githubusercontent.com/PratikFandade/vocabulary-app/main/example.jpg"/>
</p>

The 🕸️Web-App is deployed on 🌟[Heroku](https://vocabulary-app-01.herokuapp.com)

## 📚 About
Vocabulary app for storing selective words in Dictionary & searching them according to need.

## ⚙️ Functionalities
<ul>
    <li>Store Words with Origin, Definitions & Examples</li>
    <li>Make calls to Oxford Dictionary API for new word data.</li>
    <li>Allow users to search for selected words.</li>
</ul>

## 🔧 Installation
Just Download the files, and run

```bash
npm i
cd client
npm i
```
for installation of all packages in both ``server`` and ``client`` folders.

## 🔌 Usage
For Server, create a `.env` file and store all the environmental vairiables for Oxford Dictionary API & MongoDB Variables.
Then run the following commands
```bash
npm run dev-start
```

For Client, create a `.env` file and store the environmental vairiable for server port.
just run the following commands to run the react application
```bash
cd client
npm start
```

## ⭐ Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
