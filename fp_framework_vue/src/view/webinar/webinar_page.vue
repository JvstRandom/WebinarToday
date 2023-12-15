<template>
  <br><br><br><br>
  <div class="container">
    <!-- ***** Banner Start ***** -->
    <div class="row">
      <div class="col-lg-12">
        <div class="main-profile">
          <div class="row" v-for="(webinar, index) in this.webinars" :key="index">
            <div class="col-lg-4">
              <img src="@/assets/img/portfolio/app1.jpg" alt="" style="border-radius: 23px;">
            </div>
            <div class="col-lg-4 align-self-center">
              <div class="main-info header-text">
                <span>Gratis</span>
                <h4>{{ webinar.namaWebinar }}</h4>
                <p>{{ webinar.deskripsi }}</p>
                <div class="main-border-button">
                  <router-link to="/daftar">Daftar Sekarang!</router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 align-self-center">
              <ul>
                <li>Harga <span>{{ webinar.harga }}</span></li>
                <li>Host <span>{{ webinar.host }}</span></li>
                <li>Waktu <span>{{ webinar.waktu }}</span></li>
                <li>Contact Person <span>{{ webinar.cp }}</span></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="clips">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="heading-section">
                      <h4><em>Deskripsi</em> Lengkap</h4>
                    </div>
                  </div>
                  <!-- ... (lanjutkan dengan item klip) ... -->
                </div>
                <div class="col-lg-12">
                  <div class="main-button">
                    <router-link to="#">Cari tahu lebih lanjut</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Banner End ***** -->

    <!-- ***** Gaming Library Start ***** -->
    <div class="gaming-library profile-library">
      <div class="col-lg-12">
        <div class="heading-section">
          <h4><em>Rekomendasi</em> Webinar lain</h4>
        </div>

        <!-- Game Item 1 -->
        <div class="item">
          <ul>
            <li><img src="@/assets/img/portfolio/app1.jpg" alt="" class="templatemo-item"></li>
            <li><h4>Dota 2</h4><span>Sandbox</span></li>
            <!-- ... (lanjutkan dengan informasi game lainnya) ... -->
          </ul>
        </div>

        <!-- Game Item 2 -->
        <div class="item">
          <ul>
            <li><img src="@/assets/img/portfolio/app1.jpg" alt="" class="templatemo-item"></li>
            <li><h4>Fortnite</h4><span>Sandbox</span></li>
            <!-- ... (lanjutkan dengan informasi game lainnya) ... -->
          </ul>
        </div>

        <!-- Game Item 3 -->
        <div class="item last-item">
          <ul>
            <li><img src="@/assets/img/portfolio/app1.jpg" alt="" class="templatemo-item"></li>
            <li><h4>CS-GO</h4><span>Sandbox</span></li>
            <!-- ... (lanjutkan dengan informasi game lainnya) ... -->
          </ul>
        </div>

      </div>
    </div>
    <!-- ***** Gaming Library End ***** -->

    <!-- Contact Section -->
    <section id="contact">
      <div class="container-fluid">
        <!-- ... (bagian kontak) ... -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'webinars',
  data() {
    return {
      webinars: []
    }
  },
  mounted(){
    this.getWebinars(this.$route.params.id);
    console.log('mounted');
  },
  methods: {
    getWebinars(webinar_id) {
      axios.get(`/webinar/${webinar_id}`).then(res => {
        this.webinars = res.data.payload;
        console.log(this.webinars);
      })
    }
  }
};
</script>

<style scoped>
  @import "@/assets/css/webpage.css";
</style>
