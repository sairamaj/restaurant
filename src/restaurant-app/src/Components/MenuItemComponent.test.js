import { render, screen } from '@testing-library/react';
import MenuItemComponent from './MenuItemComponent';

test('test menuitem undefined', () => {
  render(<MenuItemComponent />);
});
