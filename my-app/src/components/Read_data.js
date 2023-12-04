import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://656c9d2ee1e03bfd572e8fd4.mockapi.io/api/karyawan/my_karyawan')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    localStorage.setItem('ID', "");
    localStorage.setItem('kode_karyawan', "");
    localStorage.setItem('nama', "");
    localStorage.setItem('umur', "")
    localStorage.setItem('jabatan', "")
    
    const setData = (data) => {
        let { id, kode_karyawan, nama, umur, jabatan } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('kode_karyawan', kode_karyawan);
        localStorage.setItem('nama', nama);
        localStorage.setItem('umur', umur)
        localStorage.setItem('jabatan', jabatan)
    }

    const onDelete = (id) => {
        var konfirmasi = window.confirm("apakah kamu yakin ingin menghapus data ini ?");
        if(konfirmasi){
            axios.delete(`https://656c9d2ee1e03bfd572e8fd4.mockapi.io/api/karyawan/my_karyawan/${id}`)
            .then(() => {
                alert("Data berhasil dihapus");
                getData();
            });
        }
    }

    const getData = () => {
        axios.get(`https://656c9d2ee1e03bfd572e8fd4.mockapi.io/api/karyawan/my_karyawan`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kode Karyawan</Table.HeaderCell>
                        <Table.HeaderCell>Nama</Table.HeaderCell>
                        <Table.HeaderCell>Umur</Table.HeaderCell>
                        <Table.HeaderCell>Jabatan</Table.HeaderCell>
                        <Table.HeaderCell>Aksi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.kode_karyawan}</Table.Cell>
                            <Table.Cell>{data.nama}</Table.Cell>
                            <Table.Cell>{data.umur}</Table.Cell>
                            <Table.Cell>{data.jabatan}</Table.Cell>
                            <Table.Cell> 
                                <Link to='/update'>
                                    <Button onClick={() => setData(data)}>Edit</Button>
                                </Link>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}
