import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Add test globals
global.test = vi.test;
global.expect = vi.expect;
global.describe = vi.describe;
global.beforeEach = vi.beforeEach;
global.afterEach = vi.afterEach;
global.vi = vi;