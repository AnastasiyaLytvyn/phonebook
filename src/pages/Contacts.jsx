import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from "components/App.styled";
import { TitlePhone } from "components/App.styled";
import { TitleContacts } from "components/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { RotatingLines } from "react-loader-spinner";

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
     <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      <Filter />
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="26"
          visible={true}
        />
      )}
      <ContactList />
    </Container> 
  )
};