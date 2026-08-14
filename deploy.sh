#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Deploying Energy API..."
npm install
npm run build
pm2 restart "energy-api" || pm2 start dist/index.js --name "energy-api"
echo "Energy API deployed successfully!"
