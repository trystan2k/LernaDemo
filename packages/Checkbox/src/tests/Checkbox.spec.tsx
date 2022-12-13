import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  test('render the checkbox with label', async () => {
    render(<Checkbox label="Checkbox" />);
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
  });
});
