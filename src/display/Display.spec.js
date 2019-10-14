// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

describe('Display Component', () => {
    test("displays closed if the closed prop is true", () => {
        const wrapper = rtl.render(<Display closed={true}/>);
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument(); 
           
    });

    test("displays open if the closed prop is false", () => {
        const wrapper = rtl.render(<Display closed={false}/>);
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument(); 
           
    });
})