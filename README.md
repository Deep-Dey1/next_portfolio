# Portfolio Website

A modern, professional portfolio website built with React, Tailwind CSS, Express, and Node.js.

## Features

- Clean and minimal design
- Responsive layout
- Smooth animations with Framer Motion
- Contact form with email integration
- Modern tech stack showcase
- Project portfolio section

## Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Framer Motion
- React Icons
- Vite

**Backend:**
- Node.js
- Express
- Nodemailer

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies for both client and server
```bash
npm run install-all
```

3. Configure environment variables

Create a `.env` file in the root directory:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833)

### Running the Application

Development mode (runs both client and server):
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend will be running on `http://localhost:5000`

### Building for Production

Build the frontend:
```bash
npm run build
```

## Customization

### Personal Information

Update the following files with your information:

1. **Contact Details** - [src/components/Contact.jsx](client/src/components/Contact.jsx)
2. **Social Links** - [src/components/Footer.jsx](client/src/components/Footer.jsx)
3. **About Section** - [src/components/About.jsx](client/src/components/About.jsx)
4. **Projects** - [src/components/Projects.jsx](client/src/components/Projects.jsx)

### Styling

- Colors can be customized in [tailwind.config.js](client/tailwind.config.js)
- Global styles in [src/index.css](client/src/index.css)

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   └── package.json
├── server/                # Express backend
│   └── index.js
├── package.json
└── README.md
```

## License

MIT

## Contact

Your Name - your.email@example.com
