<template>

  <div class="container">
    <div class="text1">
      <h3>Webinar</h3>
      <p>Cari semua webinar yang ada disini sesuai yang kamu inginkan dengan mudah:</p>
    </div>

    <!-- SEARCH BAR -->
    <div class="search-bar">
      <div class="input-group mb-3">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="Ketik Kata Kunci disini" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="search" class="btn btn-outline-info" type="button" id="button-addon2">Enter</button>
      </div>
      <div class="category">
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input v-model="filter.free" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck1">Gratis</label>

          <input v-model="filter.paid" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck2">Berbayar</label>

          <input v-model="filter.online" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck3">Online</label>

          <input v-model="filter.offline" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck4">Offline</label>

          <input v-model="filter.certificate" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck5">Sertifikat</label>

          <input v-model="filter.thisWeek" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck6" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck6">Minggu Ini</label>

          <input v-model="filter.upcoming" @change="handleCheckboxChange" type="checkbox" class="btn-check" id="btncheck7" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck7">Yang akan datang</label>
        </div>
      </div>
    </div>

    <!-- LIST WEBINAR -->
    <div class="list-webinar d-flex justify-content-center">
      <!-- <div class="card-list" v-for="webinar in filteredWebinars" :key="webinar.id"> -->
      <div class="card-list" v-for="(webinar, index) in filteredWebinars" :key="index">
        <article class="card column tempat">
          <figure class="card-image">
          <img :src= "getImageUrl(webinar.img)"
              alt="webinar img" />
          </figure>
          <div class="card-header">
            <RouterLink :to="{ path: '/page/' + webinar.webinar_id }" @click.stop>
              <div @click ="incrementViews(webinar.webinar_id)"><h5>{{ webinar.namaWebinar }}</h5></div>
            </RouterLink>
          <button class="icon-button" @click="like(webinar.webinar_id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
              <path
                d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>
          </button>
          </div>
            <div class="card-body">
              <ul>
                <li>Harga : {{ formatharga(webinar.harga) }}</li>
                <li>Sertifikat : {{ formatsertifikat(webinar.sertif) }}</li>
              </ul>
            </div>
            <div class="card-footer koko">
                                        <div class="card-meta card-meta--views">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
                                                <path
                                                    d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            {{ webinar.views }}
                                        </div>
                                        <div class="card-meta card-meta--date">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" display="block" id="Calendar">
                                            <rect x="2" y="4" width="20" height="18" rx="4" />
                                            <path d="M8 2v4" />
                                            <path d="M16 2v4" />
                                            <path d="M2 10h20" />
                                        </svg>
                                        {{ formatWebinarDate(webinar.waktu) }}
              </div>
                                    
              </div>
            <RouterLink :to="{ path: '/page/' + webinar.webinar_id }" @click.stop>
              <button class="w-100 btn btn-primary more" @click="incrementViews(webinar.webinar_id)">Baca Selengkapnya</button>
           </RouterLink>
        </article>                           
          
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      searchQuery: '',
      filter: {
        free: false,
        paid: false,
        online: false,
        offline: false,
        certificate: false,
        thisWeek: false,
        upcoming: false,
      },
      webinars: [],
    };
  },
  mounted() {
    this.getWebinars();
  },
  computed: {
    filteredWebinars() {
    const searchTerm = this.searchQuery.toLowerCase().trim();
    const currentDate = new Date(); // Current date and time

    // Calculate the end of the current week
    const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay())); // Assuming Sunday is the end of the week

    return this.webinars.filter((webinar) => {
      // cek search input
      const namaWebinarMatch = webinar.namaWebinar.toLowerCase().includes(searchTerm);
      // checkboxes
      const isFree = this.filter.free ? (webinar.harga === 0) : true;
      const isPaid = this.filter.paid ? (webinar.harga !== 0) : true;
      const isOnline = this.filter.online ? (webinar.Online === 'y') : true;
      const isOffline = this.filter.offline ? (webinar.Online === 'n') : true;
      const hasCertificate = this.filter.certificate ? (webinar.sertif === 'y') : true;
      const isThisWeek = this.filter.thisWeek ? (new Date(webinar.waktu) >= currentDate && new Date(webinar.waktu) <= endOfWeek) : true;
      const isUpcoming = this.filter.upcoming ? (new Date(webinar.waktu) >= endOfWeek) : true;

      // return conditions that are met
      return namaWebinarMatch && isFree && isPaid && isOnline && isOffline && hasCertificate && isThisWeek && isUpcoming;
    });
  },
  },
  methods: {
    async getWebinars() {
            try {
                const response = await axios.get(`/webinar-list`);
                console.log(response);
                this.webinars = response.data.payload;
                console.log(this.webinars);
            }
            catch (error) {
                console.error('Error fetching webinars:', error);
            }
    },

    getImageUrl(blobData) {
            console.log('Blob Data:', blobData);
            // Check if blobData is an object with a data property
            if (blobData && blobData.data) {
            // Extract actual data from Proxy
            const bufferData = blobData.data || [];
            
            // Convert Buffer data to Uint8Array
            const uint8Array = new Uint8Array(bufferData);
            
            if (uint8Array.length > 0) {
                const blob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust the type based on your image format
                return URL.createObjectURL(blob);
            }
            }
        
            return ''; // or set a default image URL
        },

        incrementViews(webinar_id) {
        axios.put(`/increment-views/${webinar_id}`).then(response => {
            console.log('Views incremented successfully');
            //bisa kalau ada tampilan views harusnya tampilannya di update disisni
            })
            .catch(error => {
            console.error('Error incrementing views:', error);
            });
        },
        
        formatWebinarDate(dateTimeString) {
            // const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' };
            const formattedDate = new Date(dateTimeString).toLocaleString(undefined, options);
            return formattedDate;
        },
        formatharga(harga)
        {
            if(harga == 0)
            {
                return "free";
            } else {
                return harga;
            }
        },
        formatsertifikat(sertif)
        {
            if(sertif == "y")
            {
                return "ya";
            } else {
                return "no";
            }
        },
    search() {
      // Logika pencarian, jika diperlukan
    },
    like(webinarId) {
      // Logika like, jika diperlukan
    },
    handleCheckboxChange() {
      // Logika untuk menangani perubahan pada checkbox
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/list.css";
.tempat {
  width: 350px;
  height: 620px;
}
.more {
    margin-top: 14px;
}
.koko {
    margin-top: -8px;
}
</style>
