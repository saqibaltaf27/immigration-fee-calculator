# Immigration Case Fee Calculator - Performance Optimized

A **React-based single-page application** for ClearPath Immigration Law that calculates visa filing costs and processing times. This project demonstrates both **performance bottlenecks** and the **optimized Solution** for a real-time filtering of a large dataset (150+ visa types).

---

## Features
- 150+ immigration case entries loaded from JSON
- Real-time **serach-as-you-type**
- **Debounced filtering** for instant responsiveness
- **Memoized rendering** with `React.memo` and `useMemo`
- Add-on options with dynamic cost calculation:
    -> Premium Processing (2500$)
    -> Dependent Filing ($500)
    -> Consular Processing ($800)
- Clean, professional, and responsive UI
- Fully accessible across desktop and mobile devices

---

## Project Setup

### 1. Clone The repository
```bash
git clone https://github.com/saqibaltaf27/immigration-fee-calculator.git
```

### 2. Install Dependencies
npm install

### Start The Development Server
npm run dev

Open the app in your browser at: http://localhost:5173/


## Deployment
1. Github (https://github.com/saqibaltaf27/immigration-fee-calculator.git)
2. Vercel (https://immigration-fee-calculator.vercel.app/)