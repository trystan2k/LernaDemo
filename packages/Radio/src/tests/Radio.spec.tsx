import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from '../Radio';

describe('Checkbox', () => {
  test('render the radio with label', async () => {
    render(<Radio label="Radio" />);
    expect(screen.getByText('Radio')).toBeInTheDocument();
  });
});
