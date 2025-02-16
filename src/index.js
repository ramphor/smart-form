import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';
import FormList from './FormList';
import ContactList from './ContactList';
import Statistics from './Statistics';

const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={FormList} />
                    <Route path="/form/:id" component={ContactForm} />
                    <Route path="/contacts" component={ContactList} />
                    <Route path="/statistics" component={Statistics} />
                </Switch>
            </Router>
        </ChakraProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('contact-form'));