import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import Home from "./page";

describe('Home', () => {
    it('renders homepage',()=>{
        const home = render(<Home/>);
        expect(home).toMatchSnapshot;
    })
})