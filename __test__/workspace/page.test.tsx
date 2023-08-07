import { render } from '@testing-library/react';
import  Home  from '@/app/workspace/page';

describe('Home Component', () => {
  it('renders without errors', () => {
    render(<Home />);
  });
});