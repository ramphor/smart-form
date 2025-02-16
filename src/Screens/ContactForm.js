import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý gửi form
    };

    return (
        <Box>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Name" required />
                <Input placeholder="Email" type="email" required />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default ContactForm;
