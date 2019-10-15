import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

// Test away!
afterEach(rtl.cleanup);

describe('Controls Component', () => {
    it('provide buttons to toggle the `closed` and `locked` states', () => {
        const control = rtl.render(<Controls />);
        expect(control.queryByText(/close gate/i)).toBeInTheDocument();
        expect(control.queryByText(/lock gate/i)).toBeInTheDocument();
    })

    it('close button text changes to reflect the state the door will be in if clicked', () => {
        const control = rtl.render(<Controls closed={false} locked={false}/>);
        
        let closeGateElement = control.queryByText(/close gate/i);
        rtl.fireEvent.click(closeGateElement);
        expect(control.queryByText(/lock gate/i)).toBeInTheDocument();
        
    })

    it('lock button text changes to reflect the state the door will be in if clicked', () => {
        const control = rtl.render(<Controls closed={true} locked={true}/>);
        
        let lockGateElement = control.queryByText(/unlock gate/i);
        rtl.fireEvent.click(lockGateElement);
        expect(control.queryByText(/lock gate/i)).toBeInTheDocument();
        
    })

    it('the locked toggle button is disabled if the gate is open', () => {
        const control = rtl.render(<Controls />);
        let button = control.queryByText(/lock gate/i);
        expect(button.disabled).toBe(true);
    });

    it('the closed toggle button is disabled if the gate is locked', () => {
        const control = rtl.render(<Controls closed={true} locked={true}/>);
        let button = control.queryByText(/open gate/i);
        expect(button.disabled).toBe(true);
    })
})