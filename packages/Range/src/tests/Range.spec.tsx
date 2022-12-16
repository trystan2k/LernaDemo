import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Range } from '../Range';

describe('Checkbox', () => {
  test('render the range with label', async () => {
    render(<Range label="Range" />);
    expect(screen.getByText('Range')).toBeInTheDocument();
  });
});
