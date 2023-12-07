import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {
    const [kode_karyawan, setKodeKaryawan] = useState('');
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [jabatan, setJabatan] = useState('');

    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setKodeKaryawan(localStorage.getItem('kode_karyawan'));
            setNama(localStorage.getItem('nama'));
            setUmur(localStorage.getItem('umur'));
            setJabatan(localStorage.getItem('jabatan'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://656c9d2ee1e03bfd572e8fd4.mockapi.io/api/karyawan/my_karyawan/${id}`, {
            kode_karyawan,
            nama,
            umur,
            jabatan
        }).then(() => {
            alert('Data berhasil diperbarui')
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Kode Karyawan</label>
                    <input placeholder='Kode karyawan...' value={kode_karyawan} onChange={(e) => setKodeKaryawan(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nama</label>
                    <input placeholder='Nama...' value={nama} onChange={(e) => setNama(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Umur</label>
                    <input placeholder='Umur...' value={umur} type='number' onChange={(e) => setUmur(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Jabatan</label>
                    <textarea placeholder='Jabatan...' value={jabatan} onChange={(e) => setJabatan(e.target.value)}></textarea>
                </Form.Field>

                <Button type='submit' onClick={updateAPIData}>Update</Button>
                <Link to='/'>
                    <Button>Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}
