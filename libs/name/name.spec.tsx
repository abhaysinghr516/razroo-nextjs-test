import { render } from '@testing-library/react';

import Name from './name';

describe('Name', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Name />);
    expect(baseElement).toBeTruthy();
  });
});
