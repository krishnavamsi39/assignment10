import {render, cleanup} from '@testing-library/react';
import React from 'react';

import ErrorMessage from '../ErrorMessage';

afterEach(cleanup)

describe('Error', () => {
  it('finds Error Mesage', () => {
    const {getByText} = render(<ErrorMessage />)
    getByText("Something went wrong with UI")
  })
  
  
  
});