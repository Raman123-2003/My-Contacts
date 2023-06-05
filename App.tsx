import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleContactPress = (contact: any) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const filteredContacts = [
    { id: 1, name: 'Aman', number: '9334486633' },
    { id: 2, name: 'Raman', number: '6205491447' },
    { id: 3, name: 'Prabhat', number: '8899445566' },
    { id: 4, name: 'Pankaj', number: '1144778855' },
    { id: 5, name: 'Rajiv Mishra', number: '1122334455' },
    { id: 6, name: 'Amit', number: '7788445511' },
    { id: 7, name: 'Sonu', number: '8002795360' },
    { id: 8, name: 'Vikas', number: '1234567890' },
    { id: 9, name: 'Vicky', number: '3216549870' },
    { id: 11, name: 'Sumit', number: '8520963741' },
    { id: 12, name: 'Aman Kapoor', number: '789456125' },
    { id: 13, name: 'Ayush Singh', number: '123054879' },
    { id: 14, name: 'Ishika', number: '93344556622' },
    { id: 15, name: 'Payel Das', number: '784512369' },
    { id: 16, name: 'Priyanka chopra', number: '1023456795' },
    { id: 17, name: 'Ishu', number: '785436922' },
    // // Add more contacts as needed
  ].filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <Text style={styles.contactItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal visible={selectedContact !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedContact?.name}</Text>
          <Text style={styles.modalText}>{selectedContact?.number}</Text>
          <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  contactItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  modalCloseButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: '#000',
  },
});


