# Finance Dashboard UI Assignment

A simple finance dashboard built with React and Redux Toolkit using mock data.
Focused on clean UI, proper structure, and step-by-step development.

---

## Tech Stack

* React (Vite)
* Redux Toolkit + React Redux
* Tailwind CSS

---

## Day-wise Progress

### Day 1 (Setup + Dashboard Basics)

* Setup project using Vite
* Installed and configured Tailwind CSS
* Setup Redux Toolkit store
* Created folder structure (feature-based)

#### Dashboard Overview

* Built layout (Sidebar + Navbar + Main area)
* Created summary cards:

  * Total Balance
  * Income
  * Expenses

#### Data Handling

* Used mock data from `data/transactions.js`
* Loaded data into Redux store
* Used selectors to access data

#### Logic

* Calculated:

  * Total income
  * Total expenses
  * Balance

---

### Day 2 (Transactions + Role + Filters)

#### Transactions Section

* Displayed transaction list with:

  * Date
  * Amount
  * Category
  * Type

#### Filtering & Search

* Filter by type (income / expense / all)
* Search by category
* Sort by date and amount

#### Role-Based UI

* Added role switcher (`viewer` / `admin`)
* Viewer:

  * Can only view data
* Admin:

  * Can add transactions
  * Can edit transactions

#### State Management

Redux store handles:

* `transactions.list`
* `transactions.filters` (type, search, sort)
* `role.role`

---

### Day 3 (Charts + Insights + UI Polish)

#### Dashboard Improvements

* Added time-based visualization:

  * Balance trend over time
* Added category-based visualization:

  * Expense breakdown by category

#### Insights Section

* Highest spending category
* Month-on-month comparison
* Average expense value

#### UI & Responsiveness

* Responsive layout for mobile and desktop
* Clean spacing and alignment
* Empty state handling for no data

---

## Features Implemented

### 1. Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Time-based chart (trend)
* Category-based chart (expenses)

---

### 2. Transactions Section

* Transaction list:

  * Date
  * Amount
  * Category
  * Type
* Filtering, search, and sorting
* Empty state handling

---

### 3. Role-Based UI

* Viewer → read-only access
* Admin → add and edit transactions

---

### 4. Insights

* Highest spending category
* Monthly comparison
* Average expense

---

### 5. State Management

* Managed using Redux Toolkit
* Centralized state for transactions, filters, and role

---

## Project Structure

```text
src/
├── app/
├── components/
├── features/
├── pages/
├── utils/
├── data/
```

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Validation

```bash
npm run lint
npm run build
```
