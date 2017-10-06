# First Bot

![LiveEngage Bot](https://engage.liveperson.com/usage/img/secretThree.png "LiveEngage Bot")

## General

This project shows how you can implement an agent/bot for the [LiveEngange Plattform](https://www.liveperson.com/lp_video/le_platform) using the [node-agent-sdk](https://github.com/LivePersonInc/node-agent-sdk). Further, it shows how you can wrap the API to fit your needs.

## Setup

1. You need to create a developer account
2. Setup a `.env` file in the root of this project. Below is a sample of the required file(content).

```Code
LP_ACCOUNT=123456
LP_USER=max@mustermann.com
LP_PASS=geheim!
```

3. Install the required node dependencies using `$ yarn install`


## Usage

You now can start your bot using `$ yarn start`. Afterwards, you can check the functionality of your bot using this [webside](https://codepen.io/liveperson/pen/xRzXXd), which allows you to talk to your LiveEngage account. After connecting you should receive the welcome message.
