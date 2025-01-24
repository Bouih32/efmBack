# Notes Manager

An intuitive web application designed to help you organize and manage your notes efficiently. Built with Express.js and secured with JSON Web Tokens (JWT) and express-validator.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your local machine:

- Node (>= 20)
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/Bouih32/notesManager.git
cd notesManager
```

### Install Dependencies

Install all the necessary dependencies :

```bash
npm install
```

Create .env file with :

- MY_EMAIL
- PORT =4000
- GMAIL_KEY
- JWT_SECRET
- DATABASE_URL

Generate prisma client

```bash
npx prisma db push
npx prisma generate
```

## Usage

Run the express server locally:

```bash
npm run dev
```

4. Open your web browser and navigate to `http://localhost:4000` to see the app in action.

## License

This project is Starware. If you like it, please give it a star on GitHub. It helps to promote the project and shows appreciation to the developer.

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: bouih.othmane@gmail.com
