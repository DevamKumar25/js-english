let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let choice = prompt("Enter your choice (first, last, new)", "first");

switch (choice) {
    case "first":
        alert("First contact:\nName: " + contacts[0].name + "\nPhone: " + contacts[0].phone + "\nEmail: " + contacts[0].email);
        break;
    case "last":
        alert("Last contact:\nName: " + contacts[contacts.length - 1].name + "\nPhone: " + contacts[contacts.length - 1].phone + "\nEmail: " + contacts[contacts.length - 1].email);
        break;
    case "new":
        let newName = prompt("Enter the new contact's name:");
        let newPhone = prompt("Enter the new contact's phone:");
        let newEmail = prompt("Enter the new contact's email:");

        if (newName && newPhone && newEmail) {
            contacts.unshift({ name: newName, phone: newPhone, email: newEmail });
            alert("New contact added successfully!");
            //alert("New contact:\nName: " + contacts[contacts.length - 1].name + "\nPhone: " + contacts[contacts.length - 1].phone + "\nEmail: " + contacts[contacts.length - 1].email);
            alert("First contact:\nName: " + contacts[0].name + "\nPhone: " + contacts[0].phone + "\nEmail: " + contacts[0].email);

        } else {
            alert("All fields (name, phone, email) are required. Contact not added.");
        }
        break;
    default:
        alert("Invalid choice. Please choose 'first', 'last', or 'new'.");
}
