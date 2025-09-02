export const MonarchCategories = {
  // Income
  PAYCHECKS: 'Paychecks',
  INTEREST: 'Interest',
  BUSINESS_INCOME: 'Business Income',
  OTHER_INCOME: 'Other Income',
  HSA_CONTRIBUTION: 'HSA Contribution',
  RENTAL_INCOME: 'Rental Income',

  // Expenses - Gifts & Donations
  CHARITY: 'Charity',
  GIFTS: 'Gifts',
  DONATIONS: 'Donations',

  // Expenses - Auto & Transport
  AUTO_PAYMENT: 'Auto Payment',
  PUBLIC_TRANSIT: 'Public Transit',
  GAS: 'Gas',
  AUTO_MAINTENANCE: 'Auto Maintenance',
  PARKING_TOLLS: 'Parking & Tolls',
  TAXI_RIDE_SHARES: 'Taxi & Ride Shares',

  // Expenses - Housing
  MORTGAGE: 'Mortgage',
  RENT: 'Rent',
  HOME_IMPROVEMENT: 'Home Improvement',

  // Expenses - Bills & Utilities
  GARBAGE: 'Garbage',
  WATER: 'Water',
  GAS_ELECTRIC: 'Gas & Electric',
  INTERNET_CABLE: 'Internet & Cable',
  PHONE: 'Phone',

  // Expenses - Food & Dining
  GROCERIES: 'Groceries',
  RESTAURANTS: 'Restaurants',
  COFFEE_SHOPS: 'Coffee Shops',
  FAST_FOOD: 'Fast Food',
  ALCOHOL_BARS: 'Alcohol & Bars',

  // Expenses - Travel & Lifestyle
  TRAVEL_VACATION: 'Travel & Vacation',
  ENTERTAINMENT_RECREATION: 'Entertainment & Recreation',
  PERSONAL: 'Personal',
  PETS: 'Pets',
  FUN_MONEY: 'Fun Money',

  // Expenses - Shopping
  SHOPPING: 'Shopping',
  CLOTHING: 'Clothing',
  FURNITURE_HOUSEWARES: 'Furniture & Housewares',
  ELECTRONICS: 'Electronics',

  // Expenses - Children
  CHILD_CARE: 'Child Care',
  CHILD_ACTIVITIES: 'Child Activities',

  // Expenses - Education
  STUDENT_LOANS: 'Student Loans',
  EDUCATION: 'Education',

  // Expenses - Health & Wellness
  MEDICAL: 'Medical',
  DENTIST: 'Dentist',
  FITNESS: 'Fitness',
  GYM: 'Gym',

  // Expenses - Financial
  LOAN_REPAYMENT: 'Loan Repayment',
  FINANCIAL_LEGAL_SERVICES: 'Financial & Legal Services',
  FINANCIAL_FEES: 'Financial Fees',
  CASH_ATM: 'Cash & ATM',
  INSURANCE: 'Insurance',
  TAXES: 'Taxes',

  // Expenses - Other
  UNCATEGORIZED: 'Uncategorized',
  CHECK: 'Check',
  MISCELLANEOUS: 'Miscellaneous',

  // Business
  ADVERTISING_PROMOTION: 'Advertising & Promotion',
  BUSINESS_UTILITIES_COMMUNICATION: 'Business Utilities & Communication',
  EMPLOYEE_WAGES_CONTRACT_LABOR: 'Employee Wages & Contract Labor',
  BUSINESS_TRAVEL_MEALS: 'Business Travel & Meals',
  BUSINESS_AUTO_EXPENSES: 'Business Auto Expenses',
  BUSINESS_INSURANCE: 'Business Insurance',
  OFFICE_SUPPLIES_EXPENSES: 'Office Supplies & Expenses',
  OFFICE_RENT: 'Office Rent',
  POSTAGE_SHIPPING: 'Postage & Shipping',
  ONLINE_SERVICES: 'Online Services',
  REI: 'REI',

  // Transfers
  TRANSFER: 'Transfer',
  CREDIT_CARD_PAYMENT: 'Credit Card Payment',
  BALANCE_ADJUSTMENTS: 'Balance Adjustments'
};

// Also export as an array for easier iteration
export const MonarchCategoriesArray = Object.values(MonarchCategories);

// Export categories grouped by type for easier organization
export const MonarchCategoriesByType = {
  INCOME: [
    MonarchCategories.PAYCHECKS,
    MonarchCategories.INTEREST,
    MonarchCategories.BUSINESS_INCOME,
    MonarchCategories.OTHER_INCOME,
    MonarchCategories.HSA_CONTRIBUTION,
    MonarchCategories.RENTAL_INCOME
  ],
  EXPENSES: {
    GIFTS_DONATIONS: [
      MonarchCategories.CHARITY,
      MonarchCategories.GIFTS,
      MonarchCategories.DONATIONS
    ],
    AUTO_TRANSPORT: [
      MonarchCategories.AUTO_PAYMENT,
      MonarchCategories.PUBLIC_TRANSIT,
      MonarchCategories.GAS,
      MonarchCategories.AUTO_MAINTENANCE,
      MonarchCategories.PARKING_TOLLS,
      MonarchCategories.TAXI_RIDE_SHARES
    ],
    HOUSING: [
      MonarchCategories.MORTGAGE,
      MonarchCategories.RENT,
      MonarchCategories.HOME_IMPROVEMENT
    ],
    BILLS_UTILITIES: [
      MonarchCategories.GARBAGE,
      MonarchCategories.WATER,
      MonarchCategories.GAS_ELECTRIC,
      MonarchCategories.INTERNET_CABLE,
      MonarchCategories.PHONE
    ],
    FOOD_DINING: [
      MonarchCategories.GROCERIES,
      MonarchCategories.RESTAURANTS,
      MonarchCategories.COFFEE_SHOPS,
      MonarchCategories.FAST_FOOD,
      MonarchCategories.ALCOHOL_BARS
    ],
    TRAVEL_LIFESTYLE: [
      MonarchCategories.TRAVEL_VACATION,
      MonarchCategories.ENTERTAINMENT_RECREATION,
      MonarchCategories.PERSONAL,
      MonarchCategories.PETS,
      MonarchCategories.FUN_MONEY
    ],
    SHOPPING: [
      MonarchCategories.SHOPPING,
      MonarchCategories.CLOTHING,
      MonarchCategories.FURNITURE_HOUSEWARES,
      MonarchCategories.ELECTRONICS
    ],
    CHILDREN: [
      MonarchCategories.CHILD_CARE,
      MonarchCategories.CHILD_ACTIVITIES
    ],
    EDUCATION: [
      MonarchCategories.STUDENT_LOANS,
      MonarchCategories.EDUCATION
    ],
    HEALTH_WELLNESS: [
      MonarchCategories.MEDICAL,
      MonarchCategories.DENTIST,
      MonarchCategories.FITNESS,
      MonarchCategories.GYM
    ],
    FINANCIAL: [
      MonarchCategories.LOAN_REPAYMENT,
      MonarchCategories.FINANCIAL_LEGAL_SERVICES,
      MonarchCategories.FINANCIAL_FEES,
      MonarchCategories.CASH_ATM,
      MonarchCategories.INSURANCE,
      MonarchCategories.TAXES
    ],
    OTHER: [
      MonarchCategories.UNCATEGORIZED,
      MonarchCategories.CHECK,
      MonarchCategories.MISCELLANEOUS
    ]
  },
  BUSINESS: [
    MonarchCategories.ADVERTISING_PROMOTION,
    MonarchCategories.BUSINESS_UTILITIES_COMMUNICATION,
    MonarchCategories.EMPLOYEE_WAGES_CONTRACT_LABOR,
    MonarchCategories.BUSINESS_TRAVEL_MEALS,
    MonarchCategories.BUSINESS_AUTO_EXPENSES,
    MonarchCategories.BUSINESS_INSURANCE,
    MonarchCategories.OFFICE_SUPPLIES_EXPENSES,
    MonarchCategories.OFFICE_RENT,
    MonarchCategories.POSTAGE_SHIPPING,
    MonarchCategories.ONLINE_SERVICES,
    MonarchCategories.REI
  ],
  TRANSFERS: [
    MonarchCategories.TRANSFER,
    MonarchCategories.CREDIT_CARD_PAYMENT,
    MonarchCategories.BALANCE_ADJUSTMENTS
  ]
};
