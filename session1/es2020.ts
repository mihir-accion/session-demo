import { num } from './dynamic';

// ES2020-ES2024 Important Features Examples
// ==========================================

// ===== ES2020 FEATURES =====

// 1. BigInt - Arbitrary precision integers
console.log('=== BigInt Examples ===');

// Creating BigInt values
const bigNumber = 123456789012345678901234567890n;
const bigFromString = BigInt('123456789012345678901234567890');
const bigFromNumber = BigInt(Number.MAX_SAFE_INTEGER);

console.log('BigInt from literal:', bigNumber);
console.log('BigInt from string:', bigFromString);
console.log('BigInt from number:', bigFromNumber);


// 2. Dynamic Import - Load modules at runtime
console.log('\n=== Dynamic Import Examples ===');


const module = await import('./dynamic');
console.log('num', module.num);


// 3. Optional Chaining Operator (?.)
console.log('\n=== Optional Chaining Examples ===');

interface User {
  name: string;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  orders?: Array<{
    id: number;
    items?: Array<{
      name: string;
      price?: number;
    }>;
  }>;
}

const user: User = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

// Safe property access
console.log('User city:', user.address?.city); // 'New York'
console.log('User country:', user.address?.country); // undefined (no error)
console.log('User street:', user.address?.street?.toUpperCase()); // '123 MAIN ST'

// Safe array access
console.log('First order ID:', user.orders?.[0]?.id); // undefined
console.log('First item name:', user.orders?.[0]?.items?.[0]?.name); // undefined

// Safe method calls
const apiResponse = {
  data: {
    users: [
      { name: 'Alice', getFullName: () => 'Alice Smith' },
      { name: 'Bob' }
    ]
  }
};

console.log('First user full name:', apiResponse.data?.users?.[0]?.getFullName?.()); // 'Alice Smith'
console.log('Second user full name:', apiResponse.data?.users?.[1]?.getFullName?.()); // undefined

// 4. Nullish Coalescing Operator (??)
console.log('\n=== Nullish Coalescing Examples ===');

// Only null and undefined trigger the fallback
const config = {
  apiUrl: '',
  timeout: 0,
  retries: null,
  debug: undefined
};

const apiUrl = config.apiUrl ?? 'https://api.default.com';
const timeout = config.timeout ?? 5000;
const retries = config.retries ?? 3;
const debug = config.debug ?? false;

console.log('API URL:', apiUrl); // '' (empty string is not nullish)
console.log('Timeout:', timeout); // 0 (zero is not nullish)
console.log('Retries:', retries); // 3 (null triggers fallback)
console.log('Debug:', debug); // false (undefined triggers fallback)

// Difference from || operator
const value1 = 0;
const value2 = '';
const value3 = false;

console.log('Using ||:', value1 || 'default'); // 'default'
console.log('Using ??:', value1 ?? 'default'); // 0

console.log('Using ||:', value2 || 'default'); // 'default'
console.log('Using ??:', value2 ?? 'default'); // ''

console.log('Using ||:', value3 || 'default'); // 'default'
console.log('Using ??:', value3 ?? 'default'); // false

console.log('num', num);