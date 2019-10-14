import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

// Test away
afterEach(rtl.cleanup)

test('shows the controls and display and defaults to unlocked and open', () => {
    const dashboard = rtl.render(<Dashboard />);
    
    expect(dashboard.queryByText(/open/i)).toBeInTheDocument();
    expect(dashboard.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(dashboard.queryByText(/close gate/i)).toBeInTheDocument();
    expect(dashboard.queryByText(/lock gate/i)).toBeInTheDocument();

})