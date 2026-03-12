// Contact Manager Program using JavaScript

let contacts = [];

// Function to add a contact
function addContact(name, phone) {

    let contact = {
        name: name,
        phone: phone
    };

    contacts.push(contact);

    print("Contact added successfully.");
}


// Function to view all contacts
function viewContacts() {

    if (contacts.length === 0) {
        print("No contacts available.");
        return;
    }

    print("------ Contact List ------");

    for (let i = 0; i < contacts.length; i++) {

        print(
            (i + 1) + ". Name: " +
            contacts[i].name +
            " | Phone: " +
            contacts[i].phone
        );
    }
}


// Function to search for a contact
function searchContact(name) {

    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === name.toLowerCase()) {

            print("Contact Found:");
            print(
                "Name: " + contacts[i].name +
                " | Phone: " + contacts[i].phone
            );

            found = true;
        }
    }

    if (!found) {
        print("Contact not found.");
    }
}


// Function to update contact
function updateContact(name, newPhone) {

    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === name.toLowerCase()) {

            contacts[i].phone = newPhone;

            print("Contact updated successfully.");

            found = true;
        }
    }

    if (!found) {
        print("Contact not found.");
    }
}


// Function to delete contact
function deleteContact(name) {

    let found = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === name.toLowerCase()) {

            contacts.splice(i, 1);

            print("Contact deleted successfully.");

            found = true;
            break;
        }
    }

    if (!found) {
        print("Contact not found.");
    }
}


// Function to count contacts
function countContacts() {

    print("Total contacts: " + contacts.length);
}


// Program Execution

print("CONTACT MANAGER PROGRAM");
print("-----------------------");

addContact("Ravi", "9876543210");
addContact("Anita", "9123456789");
addContact("Kumar", "9012345678");
addContact("Priya", "9988776655");

viewContacts();

print("\nSearching for Anita:");
searchContact("Anita");

print("\nUpdating Kumar's phone number:");
updateContact("Kumar", "9000000000");

viewContacts();

print("\nDeleting Ravi:");
deleteContact("Ravi");

viewContacts();

countContacts();
