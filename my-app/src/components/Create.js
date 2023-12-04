import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Create() {
    const [kode_karyawan, setKodeKaryawan] = useState('');
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [jabatan, setJabatan] = useState('');

    const postData = () => {
        axios.post('https://656c9d2ee1e03bfd572e8fd4.mockapi.io/api/karyawan/my_karyawan', {
            kode_karyawan,
            nama,
            umur,
            jabatan
        }).then(() => {
            alert('Data berhasil disimpan')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Kode Karyawan</label>
                    <input placeholder='Kode karyawan...' onChange={(e) => setKodeKaryawan(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nama</label>
                    <input placeholder='Nama...' onChange={(e) => setNama(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Umur</label>
                    <input placeholder='Umur...' type='number' onChange={(e) => setUmur(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Jabatan</label>
                    <textarea placeholder='Jabatan...' onChange={(e) => setJabatan(e.target.value)}></textarea>
                </Form.Field>
                <Button onClick={postData} type='submit'>Save</Button>
                <Link to='/'>
                    <Button>Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}
