const mahasiswaNIM = '20230010';
const updateData = {
    nama: 'Rahman',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Zampunk' 
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNIM}`,{
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updateData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))