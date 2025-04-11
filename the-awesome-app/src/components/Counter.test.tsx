import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom'


test("render counter", () => {

    render(<Counter initialValue={5}/>);
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();

})
test("inc counter", () => {

    render(<Counter initialValue={5}/>);
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();
    const inctBt = screen.getByText("Inc");
    fireEvent.click(inctBt);
    const updatedtext = screen.getByText("Counter: 7");
    expect(updatedtext).toBeInTheDocument();

})

