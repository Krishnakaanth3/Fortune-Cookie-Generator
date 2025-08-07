# 🔧 Node.js Installation Guide for Windows

## Current Status
It appears Node.js is not properly installed or not accessible from the command line. Let's fix this!

## 📥 Download and Install Node.js

### Method 1: Official Installer (Recommended)

1. **Visit the official Node.js website**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - You'll see two versions: **LTS** (Long Term Support) and **Current**
   - **Choose LTS** - it's more stable and recommended

2. **Download the Windows Installer**
   - Click on the LTS version (will say something like "18.x.x LTS")
   - This will download a `.msi` file (around 50MB)

3. **Run the Installer**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the setup wizard
   - **Important**: Make sure "Add to PATH" is checked (it should be by default)
   - Click "Install"
   - You may need to provide administrator permissions

4. **Restart Your Computer**
   - This is important! Restart to ensure PATH variables are updated
   - After restart, Node.js should be available from any command prompt

### Method 2: Using Windows Package Manager (winget)

If you have Windows 10/11 with winget installed:

```powershell
# Open PowerShell as Administrator
winget install OpenJS.NodeJS
```

### Method 3: Using Chocolatey

If you have Chocolatey installed:

```powershell
# Open PowerShell as Administrator
choco install nodejs
```

## 🔍 Verify Installation

After installation and restart, open a **new** Command Prompt or PowerShell and run:

```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.17.0
9.6.7
```

## 🚨 Troubleshooting Common Issues

### Issue 1: "node is not recognized"

**Cause**: Node.js is not in the system PATH

**Solutions**:

1. **Restart your computer** (most common fix)
2. **Open a new command prompt/PowerShell window**
3. **Check if Node.js is installed**:
   - Look for Node.js in "Programs and Features"
   - Check `C:\Program Files\nodejs\` folder exists

4. **Manually add to PATH**:
   - Press `Win + R`, type `sysdm.cpl`
   - Click "Environment Variables"
   - In "System Variables", find "Path"
   - Click "Edit" → "New"
   - Add: `C:\Program Files\nodejs\`
   - Click OK and restart

### Issue 2: Permission Errors

**Solution**: Run Command Prompt as Administrator
- Right-click Command Prompt → "Run as administrator"

### Issue 3: Old Version Conflicts

If you had an old Node.js version:
1. Uninstall from "Programs and Features"
2. Delete `C:\Program Files\nodejs\` folder
3. Reinstall using the latest installer

## 🎯 Quick Test

Create a simple test file to verify Node.js works:

1. Create a file called `test.js` with this content:
   ```javascript
   console.log("Node.js is working! Version:", process.version);
   ```

2. Run it:
   ```bash
   node test.js
   ```

3. You should see: `Node.js is working! Version: v18.17.0`

## 🚀 Next Steps

Once Node.js is properly installed:

1. **Navigate to the project**:
   ```bash
   cd "C:\Users\2405249\OneDrive - Cognizant\Documents\fortune cookie\Fortune-Cookie-Generator\fortune-cookie-app"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Visit `http://localhost:5173`

## 🔗 Alternative: Static Preview

While you're installing Node.js, you can view a static preview:

1. **Open the file**: `fortune-cookie-app/static-preview.html`
2. **Double-click** it to open in your browser
3. **Experience** the basic fortune cookie functionality

The static preview includes:
- ✅ Theme switching (light/dark)
- ✅ Cookie opening animation
- ✅ Paper pulling interaction
- ✅ Fortune display
- ✅ Sample fortune messages

## 📞 Still Having Issues?

If Node.js installation continues to fail:

1. **Check Windows Version**: Node.js requires Windows 10 or later
2. **Free up disk space**: Ensure you have at least 1GB free
3. **Disable antivirus temporarily** during installation
4. **Try the MSI installer from different browser**
5. **Run Windows Update** to ensure your system is up to date

## 🎉 Success!

Once you see Node.js version numbers, you're ready to run the full Fortune Cookie Generator with all features:
- 1000 unique fortunes
- Full animations and interactions
- Social sharing capabilities
- Timer system
- And much more!

Need help? Check the main README.md for additional troubleshooting tips! 