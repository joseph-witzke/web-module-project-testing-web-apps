import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
    render(<ContactForm/>);
});

test('renders the contact form header', ()=> {
    //Arrange: Render out component.
    render(<ContactForm/>);

    //Act: Get header element.
    const header = screen.queryByText(/contact form/i)

    //Assert: Does our element exist?
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/contact form/i);
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    // Arrange: Render out component.
    render(<ContactForm/>);
    

    // Act: Select name input field and enter first name less than 5 characters.
    const nameInput = screen.getByLabelText(/first name/i);
    userEvent.type(nameInput, "Joe");

    //Assert: there will be an error message displayed.
    // const errorDisplay = await screen.findByText(/error/i);
    // expect(errorDisplay).toEqual("firstName must have at least 5 characters.");
    const InputError = await screen.findByText(/Error/i);
    expect(InputError).toBeInTheDocument();
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    //Arrange: Render component.
    render(<ContactForm/>)

    //Act: User selects firstname and lastname inputs and enters a valid value, but selects and clicks submit without adding valid email.
    const nameInput = screen.getByLabelText(/first name/i);
    userEvent.type(nameInput, "Joseph");

    const lastInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastInput, "Witzke");

    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const subError1 = await screen.findByText(/Error/i);
    expect(subError1).toBeInTheDocument();

});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    //Arrange
    // render(<ContactForm/>);
    // const emailInput = screen.getByLabelText("email");
    //Act
    // userEvent.type(emailInput, "test");
    //Assert
    // expect(emailInput).toHaveValue("test");
    // expect(emailInput).toBeInTheDocument();
    // expect(screen.queryByTestId("error").textContent).toEqual("email must be a valid email address");
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});