# Indian Olympic Dream

Following Indian athletes and their journey for Tokyo 2020 and beyond.

## Development Workflow

### Local Development (No Docker)
```bash
# Install dependencies
npm install

# Start API server (Terminal 1)
npm run dev          # localhost:3000

# Start Angular dev server (Terminal 2)  
ng serve             # localhost:4200

# Test production build locally
npm run build:test   # Creates dist/ folder
npm start           # Serves built app at localhost:3000
```

### Pi Server Deployment (Docker)
```bash
# Deploy to Pi server
chmod +x deploy-to-pi.sh
./deploy-to-pi.sh

# Manual Pi deployment
ssh pi@192.168.68.251
cd indianolympicdream
git pull origin master
docker-compose up -d --build
```

## Environment Setup

**Local Development:**
- Uses local MongoDB: `mongodb://localhost:27017`
- No Docker required locally

**Pi Server (Production):**
- Uses Docker Compose with MongoDB container
- Accessible at: http://192.168.68.251:3000

## Development Flow

1. **Code locally** → `npm run dev` + `ng serve` (separate terminals)
2. **Test features** → Angular dev server: `http://localhost:4200`
3. **Test production build** → `npm run build:test && npm start` → `http://localhost:3000`
4. **Deploy to Pi** → `./deploy-to-pi.sh`

## Local vs Pi Architecture

**Local Development:**
```
Angular Dev (4200) → Node API (3000) → Local MongoDB (27017)
```

**Pi Production:**
```
Nginx (80/443) → Docker Node App (3000) → Docker MongoDB (27017)
```
