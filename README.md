
# Ncore-Spooky-Dayz-announcer
![enter image description here](https://i.kek.sh/emm6XNi6TfP.png)

This is an application created in Node, to help you capture the spooky creatures during the "Spooky Dayz" Halloween event of the popular Hungarian Torrent site ncore.
It can send message through Discord webhook when a spooky creature appear, making it easier to capture them.
## Prepare
To run this application, you need [Node](https://nodejs.org/en/)  and [Node Package Manager](https://www.npmjs.com/).
On your Discord server selected text channel, add a new webhook that this application can use.
Create a .env file based on the .env.example, and fill it with the right parameters.

Install the dependencys with:

  

    npm install

  

## Run

    node app.js

When you start up the application, it sends a message to Discord.This way you can test if the webhook url is right.

If the staff or admins change something about the spooky event, they usually drop the active connection.If this happens, the Bot will notify you, in this case you need to restart it.