type Expense = {
  name: string;
  category: string;
  price: number;
  date: string; // ISO format (YYYY-MM-DD)
};

export default [
  { name: "Supermarket", category: "Food", price: 150.75, date: "2025-07-01" },
  { name: "Netflix", category: "Entertainment", price: 39.90, date: "2025-07-02" },
  { name: "Gas Station", category: "Transport", price: 220.50, date: "2025-07-03" },
  { name: "Pharmacy", category: "Health", price: 89.30, date: "2025-07-04" },
  { name: "Coffee Shop", category: "Food", price: 25.00, date: "2025-07-05" },
  { name: "Spotify", category: "Entertainment", price: 19.90, date: "2025-07-06" },
  { name: "Bus", category: "Transport", price: 4.80, date: "2025-07-07" },
  { name: "Book", category: "Education", price: 58.40, date: "2025-07-08" },
  { name: "Gym", category: "Health", price: 120.00, date: "2025-07-09" },
  { name: "Snack", category: "Food", price: 32.50, date: "2025-07-10" },
];
