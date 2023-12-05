<template>
  <div class="container">
    <div class="main-body">

        <div class="row gutters-sm">
          <h2>Webinar</h2>
          <div class="col mb-3">
            <div class="card">
              <i class="fas fa-table me-1"></i>
              Insert Data Webinar
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <table class="table table-striped">
                  <tr>
                    <th>Nama Webinar </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.namaWebinar" type="text" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>host </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.host" type="text" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>Online </th>
                  </tr>
                  <tr>
                    <td>
                      <select v-model="formData.Online" class="form-select form-select-sm" aria-label="Small select example" required>
                        <option value="n">Tidak</option>
                        <option value="y">Ya</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>Waktu </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.waktu" type="date" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>lokasi </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.lokasi" type="text" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>Harga </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.harga" type="number" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>cp </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.cp" type="number" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>sertif </th>
                  </tr>
                  <tr>
                    <td>
                      <select v-model="formData.sertif" class="form-select form-select-sm" aria-label="Small select example" required>
                        <option value="n">Tidak</option>
                        <option value="y">Ya</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>Deskripsi </th>
                  </tr>
                  <tr>
                    <td><input v-model="formData.deskripsi" type="text" class="input-group mb-3" required></td>
                  </tr>
                  <tr>
                    <th>
                      <input type="submit" class="btn btn-success" value="SIMPAN"> 
                      &nbsp;&nbsp;&nbsp;
                      <router-link to="/profile-penyelenggara" class="btn btn-info">Kembali</router-link>
                    </th>

                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>

    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        formData: {
          namaWebinar: '',
          Online: 'n',
          sertif: 'n',
          harga: 0,
          deskripsi: '',
          waktu: '',
          lokasi: '',
          cp: 0,
          host: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Kirim data ke API menggunakan Axios
        const organisasi_id = 1; // Ganti dengan organisasi_id yang sesuai
        const apiUrl = `/addWebinar/${organisasi_id}`;

        axios.post(apiUrl, this.formData)
          .then(response => {
            console.log('Response from server:', response.data);
            // Tambahkan logika lainnya setelah mendapatkan respons dari server
            // Navigasi kembali ke menu /profile-penyelenggara setelah post berhasil
            this.$router.push('/profile-penyelenggara');
          })
          .catch(error => {
            console.error('Error submitting form:', error);
            // Handle error
          });
      }
    }
  };
</script>
  
  <style>
  /* Tambahkan gaya sesuai kebutuhan */
  @import "@/assets/css/P_Profile.css";
  
  </style>
  