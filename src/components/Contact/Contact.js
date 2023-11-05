import React from "react";
import styled from "styled-components";

// Styled components for styling the contact form and its elements
const ContactWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

// Contact component
const Contact = () => {
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating a formData object from the form inputs
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      // Send the form data to the server-side API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parsing the JSON response from the server
      const data = await response.json();

      if (response.ok) {
        // If the submission is successful, log the success and clear the form or give user feedback
        console.log("Success:", data);
        // Add form clearing or success message display logic here
      } else {
        // If the submission fails, log the error and show an error message to the user
        console.error("Error:", data);
        // Add error message display logic here
      }
    } catch (error) {
      // If there is a network or other fetch-related error, handle it here
      console.error("Network error:", error);
      // Add network error handling logic here
    }
  };

  // The component return, rendering the form
  return (
    <ContactWrapper>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="First Name" name="firstName" required />
        <Input type="text" placeholder="Last Name" name="lastName" required />
        <Input type="email" placeholder="Email Address" name="email" required />
        <Input type="tel" placeholder="Phone Number" name="phone" />
        <TextArea placeholder="Your Message" name="message" rows="5" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactWrapper>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
