import React from "react";
import faker from 'faker';
import Client from "components/Client"


class Clients extends React.Component {
    render() {
      const clientList = Array.from({ length: 100 }, () => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        photo: <img src={faker.internet.avatar()} alt=""/>,
        job: faker.name.jobTitle(),
        
        


      }));
  
      let clients = clientList.map((client) => (
        <Client firstName={client.firstName} 
        lastName={client.lastName} 
        job={client.job}
        photo={client.photo}
        phone={<a href={`callto:${client.phone}`}>Appeler</a>}
        email={
            <a href={`mailto:${client.firstName.toLowerCase()}.${client.lastName.toLowerCase()}@gmail.com`}>
              Ecrire
            </a>
          }
        />
      ));
  
      return <ul>{clients}
      </ul>;
    }
  }
  faker.locale = 'fr';
  export default Clients