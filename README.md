# Indian Olympic Dream

Following Indian athletes and their journey for Tokyo 2020 and beyond.

## Development Workflow

### Local Development
- **Angular Dev Server**: `http://localhost:4200`
- **Node.js API Server**: `http://localhost:3000`
- **MongoDB**: `mongodb://localhost:27017`

### Production (Pi Server)
- **Access**: `https://indianolympicdream.com`
- **MongoDB**: MongoDB on Pi
- **Deployment**: Via Coolify on Pi

## Quick Start

**Development:**
```bash
npm install
npm run dev          # Start API server with nodemon
ng serve             # Start Angular dev server (new terminal)
```

**Deploy to Production:**
- Push to Git
- Coolify auto-deploys

## Environment Setup

**Local Development:**
- No environment variables needed

**Production (Coolify):**
```bash
NODE_ENV=production
MONGO_URI=<set-in-coolify-dashboard>
```

## Development Flow

1. **Code locally** → `npm run dev` + `ng serve`
2. **Test features** → `http://localhost:4200`
3. **Push to Git** → Coolify auto-deploys
