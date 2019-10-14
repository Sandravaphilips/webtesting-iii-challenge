// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display Component', () => {
    test("displays unlocked if the locked prop is false", () => {
        const wrapper = rtl.render(<Display />);
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument(); 
           
    });
    
    test("displays closed if the closed prop is true", () => {
        const wrapper = rtl.render(<Display closed={true}/>);
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument(); 
           
    });

    test("displays locked if the locked prop is true", () => {
        const wrapper = rtl.render(<Display locked={true}/>);
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument(); 
           
    });

    test("displays open if the closed prop is false", () => {
        const wrapper = rtl.render(<Display closed={false}/>);
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument(); 
           
    });

    test('red-led class is applied when locked or closed', ()=> {
        const wrapper = rtl.render(<Display closed={true} locked={true}/>);
        let closedElement = wrapper.queryByText(/closed/i);
        let lockedElement = wrapper.queryByText(/locked/i);
        expect(closedElement.classList.contains('red-led')).toBe(true);
        expect(lockedElement.classList.contains('red-led')).toBe(true);
    });

    test('green-led class is applied when unlocked or open', ()=> {
        const wrapper = rtl.render(<Display closed={false} />);
        let openElement = wrapper.queryByText(/open/i);
        let unlockedElement = wrapper.queryByText(/unlocked/i);
        expect(openElement.classList.contains('green-led')).toBe(true);
        expect(unlockedElement.classList.contains('green-led')).toBe(true)
    })
})