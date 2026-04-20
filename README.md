# Portfolio

![CI](https://github.com/PRAVNEETH/Chat_Application/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/PRAVNEETH/Chat_Application/actions/workflows/deploy.yml/badge.svg)
![Docker](https://img.shields.io/docker/build-status/PRAVNEETH/portfolio)

## Deployment

| Environment | Branch | URL |
|-------------|--------|-----|
| Production | main | https://your-project.vercel.app |
| Preview | PR | Auto-generated on each PR |

## CI/CD Pipeline

```
Developer Push → GitHub Actions
              ↓
        Lint + Build + Test + Docker Build
              ↓
        If PR → Preview Deploy (Vercel)
        If Main → Production Deploy
```

## Features Implemented

- CI Pipeline (Lint + Build + Test)
- Preview Deployments (PR-based)
- Production Deploy only from main
- Environment-based deployments
- Status badges in README
- Lighthouse performance check
- Docker build validation

## Getting Started

### Prerequisites

- Node.js 20+
- npm or bun
- Docker (optional)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Docker

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio
```

## Branch Protection Rules

To enable branch protection:

1. Go to GitHub → Settings → Branches → Add Rule
2. Apply to `main` branch:
   - ✅ Require pull request before merging
   - ✅ Require status checks to pass
   - ✅ Require reviews

## Environment Variables

Configure these secrets in GitHub → Settings → Secrets → Actions:

| Secret | Description |
|--------|-------------|
| VERCEL_TOKEN | Vercel API token |
| ORG_ID | Vercel Organization ID |
| PROJECT_ID | Vercel Project ID |

Get these from:
- Token: https://vercel.com/account/tokens
- Project Settings → General

## Tech Stack

- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS
