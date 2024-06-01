const clientList = [];
const clientListListElement = document.getElementById('clientList');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const addClientButton = document.getElementById('addClientButton');

// Agregar contacto
const addClient= () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if (name && phone) {
        const newClient = { name, phone };
        clientList.push(newClient);
        renderClients();
        saveClients();
        nameInput.value = '';
        phoneInput.value = '';
    } else {
        alert('Por favor, ingrese tanto el nombre como el teléfono. Muchas gracias :p');
    }
};

// Función para renderizar la lista de contactos basado en documentación de un video en yt https://youtu.be/GHlXnT-3eiA?si=kDe67KZNBQS9jj7z
const renderClients = () => {
    clientListListElement.innerHTML = '';
    clientList.forEach((client, index) => {
        const li = document.createElement('li');
        li.innerText = `${client.name} - ${client.phone}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => deleteClient(index);
        
        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.onclick = () => editClient(index);
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        clientListListElement.appendChild(li);
    });
};

// Eliminar contacto
const deleteClient = (index) => {
    clientList.splice(index, 1);
    renderClients();
    saveClients();
};

// Editar contacto
const editClient = (index) => {
    const client = clientList[index];
    nameInput.value = client.name;
    phoneInput.value = client.phone;
    addClient
    Button.innerText = 'Actualizar Cliente';
    addClient
    Button.onclick = () => updateClient(index);
};

// Actualizar contacto
const updateClient = (index) => {
    const updatedName = nameInput.value.trim();
    const updatedPhone = phoneInput.value.trim();

    if (updatedName && updatedPhone) {
        clientList[index] = { name: updatedName, phone: updatedPhone };
        renderClients();
        saveClients();
        nameInput.value = '';
        phoneInput.value = '';
        addClient
        Button.innerText = 'Agregar Cliente';
        addClient
        Button.onclick = addClient
        ;
    } else {
        alert('Por favor, ingrese tanto el nombre como el teléfono.');
    }
};

// Guardar contactos en localStorage
const saveClients = () => {
    localStorage.setItem('clients', JSON.stringify(clientList));
};

// Cargar contactos desde localStorage
const loadClients = () => {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
        clientList.push(...JSON.parse(storedClients));
        renderClients();
    }
};

// Evento s
addClient
addClientButton.addEventListener('click',addClient);
window.addEventListener('load',loadClients);
