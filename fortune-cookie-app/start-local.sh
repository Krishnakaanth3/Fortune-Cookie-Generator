#!/bin/bash

echo "🥠 Starting Fortune Cookie Generator locally..."
echo

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

echo "📦 Installing dependencies (if needed)..."
npm install

echo
echo "🚀 Starting development server..."
echo "Your app will open at http://localhost:5173"
echo "Press Ctrl+C to stop the server"
echo

npm run dev 