# Wirapath Career Readiness & Simulation Platform - Frontend

The web user interface for **Wirapath**, a comprehensive career readiness platform designed to evaluate and enhance user skills, offer interactive mock job interviews, and perform salary negotiation simulations.

## 🌟 Key Features

- **Readiness Dashboard**:
  - Interactive **Skill Map** (Radar Chart) charting user mastery across 10 industry-standard skills.
  - Initial tests with multiple choice, essays, and practical tasks.
  - AI-driven CV screening analysis & score evaluation.
- **Career Simulation System**:
  - Live, dynamic chat interface supporting 7 target companies (Gojek, Tokopedia, Shopee, Traveloka, Bukalapak, Blibli, Grab).
  - Pre-defined, context-sensitive quick reply suggestions pulled directly from the database.
  - Interactive negotiation workspace for recruiter interviews and salary talks.
- **Modern User Interface**: Built with premium glassmorphism accents, clean dark theme, and fully responsive layouts.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Components**: Radix UI, Lucide Icons, Recharts (for analytics and radar charts)

---

## 📋 Getting Started & Setup

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env.local` or `.env` file in the root directory to define the backend API URL (defaulting to localhost):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```
