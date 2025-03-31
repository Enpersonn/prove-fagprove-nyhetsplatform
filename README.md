# Nyhetsplatform

En moderne nyhetsplatform bygget med Next.js og Payload CMS.

## 🚀 Teknologier

- **Frontend**: Next.js 15.2.2
- **CMS**: Payload CMS
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Storage**: Supabase
- **Form Håndtering**: React Hook Form
- **UI Komponenter**: Radix UI
- **TypeScript**: 5.7.3

## 📋 Forutsetninger

- Node.js (^18.20.2 eller >=20.9.0)
- pnpm (^10)
- PostgreSQL database
- Supabase konto

## 🛠️ Installasjon

1. Klon prosjektet:

```bash
git clone [repository-url]
cd prove-fagprove-nyhetsplatform
```

2. Installer avhengigheter:

```bash
pnpm install
```

3. Kopier `.env.example` til `.env` og fyll ut nødvendige miljøvariabler:

```bash
cp .env.example .env
```

4. Start utviklingsserveren:

```bash
pnpm dev
```

## 📁 Prosjektstruktur

```
src/
├── app/           # Next.js app router
├── components/    # Gjenbrukbare UI komponenter
├── collections/   # Payload CMS collections
├── schemas/       # Payload CMS schemas
├── layouts/       # Layout komponenter
├── views/         # Side-spesifikke komponenter
├── hooks/         # Custom React hooks
├── lib/           # Hjelpefunksjoner og utilities
└── provider/      # React context providers
```

## 🚀 Tilgjengelige Scripts

- `pnpm dev` - Start utviklingsserver
- `pnpm build` - Bygg prosjektet for produksjon
- `pnpm start` - Start produksjonsserver
- `pnpm lint` - Kjør linting
- `pnpm devsafe` - Start utviklingsserver med ren cache

## 🔒 Sikkerhet

Prosjektet implementerer sikkerhet gjennom:

- Form validering med Zod
- Sikker autentisering via Payload CMS

## 📝 Lisens

MIT
