// ===== ES2021 FEATURES =====

// 5. Logical Assignment Operators
console.log('\n=== Logical Assignment Examples ===');

const userSettings = {
  theme: 'light',
  notifications: true,
  language: null as string | null
};

// Logical AND assignment (&&=)
userSettings.theme &&= 'dark'; // Only assigns if theme is truthy
console.log('Theme after &&=:', userSettings.theme); // 'dark'

userSettings.theme = '';
userSettings.theme &&= 'dark'; // Won't assign because theme is falsy
console.log('Theme after &&= with empty string:', userSettings.theme); // ''

// Logical OR assignment (||=)
userSettings.language ||= 'en'; // Assigns 'en' because language is null
console.log('Language after ||=:', userSettings.language); // 'en'

// Logical nullish assignment (??=)
userSettings.language = '';
userSettings.language ??= 'en'; // Won't assign because '' is not nullish
console.log('Language after ??= with empty string:', userSettings.language); // ''

userSettings.language = null;
userSettings.language ??= 'en'; // Assigns 'en' because language is null
console.log('Language after ??= with null:', userSettings.language); // 'en'

// 6. Numeric Separators
console.log('\n=== Numeric Separators Examples ===');

// Improved readability for large numbers
const million = 1_000_000;
const billion = 1_000_000_000;
const binary = 0b1010_0001_1000_0101;
const hex = 0xFF_EC_DE_5E;
const octal = 0o755;
const bigInt = 1_000_000_000_000_000_000_000n;

console.log('Million:', million);
console.log('Billion:', billion);
console.log('Binary:', binary);
console.log('Hex:', hex);
console.log('Octal:', octal);
console.log('BigInt:', bigInt);

// ===== ES2022 FEATURES =====

// 7. Private Class Fields
console.log('\n=== Private Class Fields Examples ===');

class BankAccount {
  #balance: number = 0; // Private field
  #accountNumber: string; // Private field
  
  constructor(accountNumber: string, initialBalance: number = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  // Private method
  #validateAmount(amount: number): boolean {
    return amount > 0 && Number.isFinite(amount);
  }
  
  // Public methods
  deposit(amount: number): boolean {
    if (!this.#validateAmount(amount)) {
      return false;
    }
    this.#balance += amount;
    return true;
  }
  
  withdraw(amount: number): boolean {
    if (!this.#validateAmount(amount) || amount > this.#balance) {
      return false;
    }
    this.#balance -= amount;
    return true;
  }
  
  getBalance(): number {
    return this.#balance;
  }
  
  getAccountNumber(): string {
    return this.#accountNumber;
  }
}

const account = new BankAccount('123456789', 1000);
console.log('Initial balance:', account.getBalance()); // 1000
console.log('Deposit 500:', account.deposit(500)); // true
console.log('Balance after deposit:', account.getBalance()); // 1500
console.log('Withdraw 200:', account.withdraw(200)); // true
console.log('Final balance:', account.getBalance()); // 1300

// Private fields are not accessible from outside
// console.log(account.#balance); // Error: Property '#balance' is private

// 8. Top-level await
console.log('\n=== Top-level Await Examples ===');

// This would work in a module context

  // Simulating async operations
  const fetchUserData = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ id: 1, name: 'John Doe' }), 100);
    });
  };
  
  const fetchUserPosts = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([{ id: 1, title: 'Hello World' }]), 150);
    });
  };
  
  // Top-level await (would work in module)
  try {
    const userData = await fetchUserData();
    const userPosts = await fetchUserPosts();
    
    console.log('User data:', userData);
    console.log('User posts:', userPosts);
  } catch (error) {
    console.error('Error in top-level await:', error);
  }


// ===== ES2023 FEATURES =====

// 9. Array.findLast() and Array.findLastIndex()
console.log('\n=== Array.findLast Examples ===');

const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
  { id: 4, name: 'David', active: false }
];

// Find last element matching condition
// Note: These methods require ES2023+ target in tsconfig.json
const lastEven = (numbers as any).findLast((n: number) => n % 2 === 0);
const lastActiveUser = (users as any).findLast((user: any) => user.active);

console.log('Last even number:', lastEven); // 2
console.log('Last active user:', lastActiveUser); // { id: 3, name: 'Charlie', active: true }

// Find last index matching condition
const lastEvenIndex = (numbers as any).findLastIndex((n: number) => n % 2 === 0);
const lastActiveUserIndex = (users as any).findLastIndex((user: any) => user.active);

console.log('Last even number index:', lastEvenIndex); // 7
console.log('Last active user index:', lastActiveUserIndex); // 2

// 10. Hashbang Grammar
console.log('\n=== Hashbang Grammar Examples ===');

// In a real file, this would be at the very top:
// #!/usr/bin/env node
// This allows the file to be executed directly as a script

// ===== ES2024 FEATURES =====

// 11. Object.groupBy() and Map.groupBy()
console.log('\n=== Object.groupBy Examples ===');

const products = [
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Phone', category: 'Electronics', price: 699 },
  { name: 'Book', category: 'Education', price: 29 },
  { name: 'Pen', category: 'Education', price: 2 },
  { name: 'Shirt', category: 'Clothing', price: 39 }
];

// Group by category
// Note: Object.groupBy requires ES2024+ target in tsconfig.json
const groupedByCategory = (Object as any).groupBy(products, (product: any) => product.category);
console.log('Grouped by category:', groupedByCategory);

// Group by price range
const groupedByPriceRange = (Object as any).groupBy(products, (product: any) => 
  product.price < 50 ? 'cheap' : product.price < 500 ? 'medium' : 'expensive'
);
console.log('Grouped by price range:', groupedByPriceRange);

// Group by first letter of name
const groupedByFirstLetter = (Object as any).groupBy(products, (product: any) => product.name[0]);
console.log('Grouped by first letter:', groupedByFirstLetter);

// 12. Array.prototype.toSpliced()
console.log('\n=== Array.prototype.toSpliced Examples ===');

const originalArray = [1, 2, 3, 4, 5];

// toSpliced() creates a new array without modifying the original
// Note: toSpliced requires ES2023+ target in tsconfig.json
const splicedArray = (originalArray as any).toSpliced(1, 2, 'a', 'b', 'c');
console.log('Original array:', originalArray); // [1, 2, 3, 4, 5] (unchanged)
console.log('Spliced array:', splicedArray); // [1, 'a', 'b', 'c', 4, 5]

// Compare with traditional splice()
const arrayForSplice = [1, 2, 3, 4, 5];
const splicedResult = arrayForSplice.splice(1, 2, 'a' as any, 'b' as any, 'c' as any);
console.log('Array after splice:', arrayForSplice); // [1, 'a', 'b', 'c', 4, 5] (modified)
console.log('Splice return value:', splicedResult); // [2, 3] (removed elements)

// 13. Array.prototype.toSorted()
console.log('\n=== Array.prototype.toSorted Examples ===');

const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
const unsortedStrings = ['banana', 'apple', 'cherry', 'date'];

// toSorted() creates a new sorted array
// Note: toSorted requires ES2023+ target in tsconfig.json
const sortedNumbers = unsortedNumbers.toSorted();
const sortedStrings = unsortedStrings.toSorted();

console.log('Original numbers:', unsortedNumbers); // [3, 1, 4, 1, 5, 9, 2, 6] (unchanged)
console.log('Sorted numbers:', sortedNumbers); // [1, 1, 2, 3, 4, 5, 6, 9]

console.log('Original strings:', unsortedStrings); // ['banana', 'apple', 'cherry', 'date'] (unchanged)
console.log('Sorted strings:', sortedStrings); // ['apple', 'banana', 'cherry', 'date']

// Custom sorting
const productsForSort = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Book', price: 29 }
];

const sortedByPrice = (productsForSort as any).toSorted((a: any, b: any) => a.price - b.price);
console.log('Products sorted by price:', sortedByPrice);

// 14. Array.prototype.toReversed()
console.log('\n=== Array.prototype.toReversed Examples ===');

const originalOrder = [1, 2, 3, 4, 5];

// toReversed() creates a new reversed array
const reversedArray = originalOrder.toReversed();

console.log('Original array:', originalOrder); // [1, 2, 3, 4, 5] (unchanged)
console.log('Reversed array:', reversedArray); // [5, 4, 3, 2, 1]

// 15. Array.prototype.with()
console.log('\n=== Array.prototype.with Examples ===');

const originalArrayForWith = [1, 2, 3, 4, 5];

// with() creates a new array with a value at a specific index
const arrayWithNewValue = originalArrayForWith.with(2, 'new value');

console.log('Original array:', originalArrayForWith); // [1, 2, 3, 4, 5] (unchanged)
console.log('Array with new value:', arrayWithNewValue); // [1, 2, 'new value', 4, 5]

// Negative index support
const arrayWithNegativeIndex = originalArrayForWith.with(-1, 'last');
console.log('Array with negative index:', arrayWithNegativeIndex); // [1, 2, 3, 4, 'last']

// ===== USAGE EXAMPLES =====

console.log('\n=== Practical Usage Examples ===');

// Example: Safe API data processing
interface ApiResponse {
  data?: {
    users?: Array<{
      id: number;
      name: string;
      profile?: {
        avatar?: string;
        bio?: string;
      };
    }>;
  };
}

function processApiResponse(response: ApiResponse) {
  // Safe navigation through potentially undefined data
  const firstUser = response.data?.users?.[0];
  const avatarUrl = firstUser?.profile?.avatar ?? '/default-avatar.png';
  const bio = firstUser?.profile?.bio ?? 'No bio available';
  
  console.log('First user avatar:', avatarUrl);
  console.log('First user bio:', bio);
  
  return {
    avatar: avatarUrl,
    bio: bio,
    hasProfile: !!firstUser?.profile
  };
}

// Example: BigInt for financial calculations
function calculateCompoundInterest(principal: bigint, rate: number, time: number): bigint {
  const rateBigInt = BigInt(Math.round(rate * 10000)); // Convert to basis points
  const timeBigInt = BigInt(time);
  
  // Simple compound interest: P(1 + r)^t
  const multiplier = BigInt(10000 + Math.round(rate * 10000));
  const result = (principal * (multiplier ** timeBigInt)) / (BigInt(10000) ** timeBigInt);
  
  return result;
}

const principal = 1000000n; // $10,000.00 (in cents)
const rate = 0.05; // 5%
const time = 10; // 10 years

const finalAmount = calculateCompoundInterest(principal, rate, time);
console.log('Final amount (in cents):', finalAmount.toString());

// Example: Dynamic feature loading
async function loadUserInterface(userType: 'basic' | 'premium' | 'admin') {
  const moduleMap = {
    basic: './ui-basic.js',
    premium: './ui-premium.js',
    admin: './ui-admin.js'
  };
  
  try {
    const module = await import(moduleMap[userType]);
    return module.default;
  } catch (error) {
    console.error(`Failed to load ${userType} UI:`, error);
    // Fallback to basic UI
    const fallbackModule = await import('./ui-basic.js');
    return fallbackModule.default;
  }
}

// Example: Modern array operations
function processUserData(users: Array<{ id: number; name: string; age: number; active: boolean }>) {
  // Group users by age range
  const ageGroups = Object.groupBy(users, user => {
    if (user.age < 18) return 'minor';
    if (user.age < 65) return 'adult';
    return 'senior';
  });
  
  // Find last active user
  const lastActiveUser = users.findLast(user => user.active);
  
  // Create a new array with updated status
  const updatedUsers = users.with(0, { ...users[0], active: true });
  
  return {
    ageGroups,
    lastActiveUser,
    updatedUsers
  };
}

export {
  BankAccount,
  processApiResponse,
  calculateCompoundInterest,
  loadUserInterface,
  processUserData
};
