import '@testing-library/jest-dom';
import { vi } from 'vitest';

beforeAll(() => {
  vi.mock('axios');
  vi.mock('@/utils/api');
});
