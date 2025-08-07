# 🛠️ Setup Guide for Fortune Cookie Generator

## Prerequisites

Before running this app, you need to have Node.js and npm installed on your system.

### 📋 Check if Node.js and npm are installed

Open a terminal/command prompt and run:
```bash
node --version
npm --version
```

If you see version numbers, you're ready to go! If not, follow the installation steps below.

### 🔽 Installing Node.js and npm

#### Windows
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Restart your computer
5. Open Command Prompt or PowerShell and verify installation

#### Mac
```bash
# Using Homebrew (recommended)
brew install node

# Or download from nodejs.org
```

#### Linux (Ubuntu/Debian)
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

## 🚀 Running the App

### Method 1: Quick Start Scripts

#### Windows Users
Double-click `start-local.bat` file

#### Mac/Linux Users
```bash
# Make the script executable
chmod +x start-local.sh

# Run the script
./start-local.sh
```

### Method 2: Manual Commands

```bash
# Navigate to the app directory
cd fortune-cookie-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Method 3: Alternative Package Managers

If you prefer using other package managers:

#### Using Yarn
```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

#### Using pnpm
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🌐 Accessing the App

Once the development server starts:
1. Open your web browser
2. Navigate to `http://localhost:5173`
3. Enjoy your fortune cookie experience!

## 🚀 Building for Production

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` folder.

## 🔧 Troubleshooting

### Common Issues

#### Issue: "npm command not found"
**Solution:** Node.js/npm is not installed or not in PATH
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal/computer after installation

#### Issue: Port 5173 is already in use
**Solution:** 
- Kill the process using port 5173
- Or the dev server will automatically use the next available port

#### Issue: Permission denied (Mac/Linux)
**Solution:**
```bash
# Make scripts executable
chmod +x start-local.sh
```

#### Issue: Dependencies installation fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Browser Compatibility

The app works best in modern browsers:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance Tips

1. **Close other applications** to free up system resources
2. **Use Chrome DevTools** to monitor performance
3. **Clear browser cache** if you experience issues
4. **Disable browser extensions** that might interfere

## 📱 Mobile Testing

To test on mobile devices:
1. Find your computer's IP address
2. Start the dev server
3. Access `http://YOUR_IP:5173` from your mobile browser

## 🏗️ Development Notes

- The app uses **Vite** as the build tool for fast development
- **Hot reloading** is enabled - changes appear instantly
- **ESLint** is configured for code quality
- Built with **React 19** and **Framer Motion**

## 🆘 Getting Help

If you encounter issues:
1. Check this troubleshooting guide
2. Search existing issues on GitHub
3. Create a new issue with:
   - Your operating system
   - Node.js version
   - Error messages
   - Steps to reproduce

## 🎉 Ready to Deploy?

Check out the main README.md for deployment options including:
- GitHub Pages (automated)
- Vercel
- Netlify
- Firebase

Happy fortune cookie creating! 🥠✨ 