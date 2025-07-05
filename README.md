# Portfolio Website - Sai Lokesh Reddy

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, experience, and projects as a Full Stack Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with smooth animations
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **Dark/Light Mode**: Toggle between light and dark themes
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)
- **Build Tool**: Create React App

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── portfolio.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects

Add your projects in `src/data/portfolio.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    // ... other project details
  },
  // ... more projects
];
```

### Skills

Update your skills in `src/data/portfolio.js`:

```javascript
export const skills = {
  frontend: [
    { name: "React", level: 90, category: "Frontend" },
    // ... more skills
  ],
  // ... other skill categories
};
```

### Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // ... your primary colors
      },
      // ... other custom colors
    },
  },
},
```

## 📱 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Education, skills, and personal information
3. **Experience**: Work history and achievements
4. **Projects**: Portfolio of work with detailed modals
5. **Contact**: Contact form and information
6. **Footer**: Links and additional information

## 🎯 Performance Features

- Lazy loading for better performance
- Optimized images and assets
- Smooth scrolling and animations
- Responsive design for all screen sizes
- SEO-friendly structure

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: sailokeshreddy@gmail.com
- LinkedIn: [Sai Lokesh Reddy](https://linkedin.com/in/sailokeshg)
- GitHub: [sai-lokesh-reddy](https://github.com/sailokeshg)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sai Lokesh Reddy
