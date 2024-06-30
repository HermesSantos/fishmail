# FishMail - SMTP Client

FishMail is a Node.js-based SMTP client designed for development and testing environments, allowing you to intercept and view emails sent from your application without sending them to real recipients.

## Features

- **Email Interception:** Capture and view emails sent from your application in development.
- **SMTP Server Emulation:** Emulate an SMTP server locally to intercept outgoing emails.
- **Web Interface:** Access a web interface to view intercepted emails and their content.

## Installation

To install FishMail, clone this repo:

```bash
git clone https://github.com/HermesSantos/fishmail/
```

## Usage

### Starting FishMail Server

To start FishMail and intercept emails, run the following command in your fishmail cloned directory:

```bash
node ./server.js
```

By default, FishMail starts an SMTP server on port 2525 and a web interface on port 8082.

### Accessing the Web Interface

Open your browser and navigate to `http://localhost:8082` to access the FishMail web interface. Here, you can view intercepted emails and their details.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.
