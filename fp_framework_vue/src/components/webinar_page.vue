<template>
  <div class="container">
    <!-- ***** Banner Start ***** -->
    <div class="row">
      <div class="col-lg-12">
        <div class="main-profile">
          <div class="row">
            <div class="col-lg-4">
              <img src="@/assets/img/portfolio/app1.jpg" alt="" style="border-radius: 23px;">
            </div>
            <div class="col-lg-4 align-self-center">
              <div class="main-info header-text">
                <span>Gratis</span>
                <h4>Alan Smithee</h4>
                <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <div class="main-border-button">
                  <router-link to="#">Start Live Stream</router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 align-self-center">
              <ul>
                <li>Games Downloaded <span>3</span></li>
                <li>Friends Online <span>16</span></li>
                <li>Live Streams <span>None</span></li>
                <li>Clips <span>29</span></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="clips">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="heading-section">
                      <h4><em>Your Most Popular</em> Clips</h4>
                    </div>
                  </div>
                  <!-- ... (lanjutkan dengan item klip) ... -->
                </div>
                <div class="col-lg-12">
                  <div class="main-button">
                    <router-link to="#">Load More Clips</router-link>
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
          <h4><em>Your Gaming</em> Library</h4>
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
export default {
  // Komponen Vue.js
};
</script>

<style scoped>
  @import "@/assets/css/webpage.css";
</style>
