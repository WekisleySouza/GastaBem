type Expense = {
  name: string;
  category: string;
  price: number;
  date: string; // ISO format (YYYY-MM-DD)
};

const expenses: Expense[] = [
  { name: "Supermercado Pão de Açúcar", date: "2025-07-01", price: 120.50, category: "Alimentação" },
  { name: "Uber para o trabalho", date: "2025-07-01", price: 18.75, category: "Transporte" },
  { name: "Farmácia Drogasil", date: "2025-07-01", price: 45.00, category: "Saúde" },
  { name: "Posto Shell - Gasolina", date: "2025-07-02", price: 230.00, category: "Transporte" },
  { name: "Netflix", date: "2025-07-02", price: 39.90, category: "Entretenimento" },
  { name: "Padaria Bela Vista", date: "2025-07-03", price: 22.30, category: "Alimentação" },
  { name: "Academia FitLife", date: "2025-07-03", price: 99.90, category: "Saúde" },
  { name: "Ônibus urbano", date: "2025-07-03", price: 4.40, category: "Transporte" },
  { name: "Spotify Premium", date: "2025-07-04", price: 19.90, category: "Entretenimento" },
  { name: "Livraria Saraiva", date: "2025-07-04", price: 75.00, category: "Educação" },

  { name: "Mercado Dia", date: "2025-07-01", price: 85.40, category: "Alimentação" },
  { name: "Café Starbucks", date: "2025-07-01", price: 16.50, category: "Alimentação" },
  { name: "Rappi - Jantar", date: "2025-07-05", price: 67.80, category: "Alimentação" },
  { name: "Uber Eats - Lanche", date: "2025-07-05", price: 32.20, category: "Alimentação" },
  { name: "Plano de celular Vivo", date: "2025-07-06", price: 59.99, category: "Comunicação" },
  { name: "Cinema Cinemark", date: "2025-07-06", price: 28.00, category: "Entretenimento" },
  { name: "Ônibus intermunicipal", date: "2025-07-06", price: 14.80, category: "Transporte" },
  { name: "Posto Ipiranga - Etanol", date: "2025-07-07", price: 150.00, category: "Transporte" },
  { name: "McDonald's", date: "2025-07-07", price: 24.90, category: "Alimentação" },
  { name: "HBO Max", date: "2025-07-07", price: 34.90, category: "Entretenimento" },

  { name: "Feira livre", date: "2025-07-08", price: 52.70, category: "Alimentação" },
  { name: "Farmácia Raia", date: "2025-07-08", price: 18.30, category: "Saúde" },
  { name: "Cursos Udemy", date: "2025-07-09", price: 49.99, category: "Educação" },
  { name: "iFood - Almoço", date: "2025-07-09", price: 40.50, category: "Alimentação" },
  { name: "Bike elétrica", date: "2025-07-10", price: 15.00, category: "Transporte" },
  { name: "Apple Music", date: "2025-07-10", price: 21.90, category: "Entretenimento" },
  { name: "Smart Fit", date: "2025-07-10", price: 99.90, category: "Saúde" },
  { name: "Magazine Luiza - Fone", date: "2025-07-11", price: 149.90, category: "Eletrônicos" },
  { name: "Uber para casa", date: "2025-07-11", price: 22.10, category: "Transporte" },
  { name: "Google Drive", date: "2025-07-12", price: 9.90, category: "Comunicação" },

  { name: "Lojas Americanas", date: "2025-07-12", price: 60.00, category: "Outros" },
  { name: "Rappi - Pizza", date: "2025-07-13", price: 55.80, category: "Alimentação" },
  { name: "Taxi para aeroporto", date: "2025-07-13", price: 120.00, category: "Transporte" },
  { name: "Farmácia Drogasil", date: "2025-07-13", price: 12.50, category: "Saúde" },
  { name: "Shopee - Capinha", date: "2025-07-14", price: 18.99, category: "Eletrônicos" },
  { name: "PetShop - Ração", date: "2025-07-14", price: 89.90, category: "Pets" },
  { name: "Uber", date: "2025-07-14", price: 25.50, category: "Transporte" },
  { name: "iFood - Sushi", date: "2025-07-15", price: 89.00, category: "Alimentação" },
  { name: "Spotify Premium", date: "2025-07-15", price: 19.90, category: "Entretenimento" },
  { name: "Ônibus urbano", date: "2025-07-15", price: 4.40, category: "Transporte" },
];

export {
  expenses
};