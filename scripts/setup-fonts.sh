#!/bin/bash

# Create fonts directory
mkdir -p src/assets/fonts

# Download Geist Sans fonts
curl -o src/assets/fonts/GeistSans-Regular.woff2 https://vercel.com/font/sans/roman/regular.woff2
curl -o src/assets/fonts/GeistSans-Medium.woff2 https://vercel.com/font/sans/roman/medium.woff2

# Download Geist Mono fonts
curl -o src/assets/fonts/GeistMono-Regular.woff2 https://vercel.com/font/mono/roman/regular.woff2

# Download full Material Icons font instead of subset
curl -o src/assets/fonts/material-icons.woff2 "https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"

echo "All fonts downloaded successfully to src/assets/fonts/"
ls -lh src/assets/fonts/
