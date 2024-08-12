// UNIT TESTING...

import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page test Case",()=>{

    test("should load conatct us component", ()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button inside conatct us component", ()=>{
    
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    it("should load input name inside conatct us component", ()=>{
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Enter name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the conatct us component", ()=>{
    
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
        
        // expect(inputBoxes.length).not.toBe(4);
    });

});
