<template>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="section-bg">
        <div class="container" data-aos="fade-up">
            <header class="section-header">
                <h3 class="section-title">Webinar dan Seminar</h3>
            </header>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-4 col-md-6 portfolio-item filter-web ">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/web3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4><a href="portfolio-details.html">Web 3</a></h4>
                            <p>Web</p>
                            <div>
                                <a href="assets/img/portfolio/web3.jpg" class="portfolio-lightbox link-preview"
                                    data-gallery="portfolioGallery" title="Web 3"><i class="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" class="link-details" title="More Details"><i
                                        class="bi bi-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="assets/img/portfolio/web3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                            <h4><a href="portfolio-details.html">Web 3</a></h4>
                            <p>Web</p>
                            <div>
                                <a href="assets/img/portfolio/web3.jpg" class="portfolio-lightbox link-preview"
                                    data-gallery="portfolioGallery" title="Web 3"><i class="bi bi-plus"></i></a>
                                <a href="portfolio-details.html" class="link-details" title="More Details"><i
                                        class="bi bi-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Portfolio Section -->
</template>

<script>
import axios from 'axios';
export default {
    name: 'Chartwebinar',
    data() {
        return {
            rows: [],
        };
    },
    mounted() {
        this.fetchProtectedData();
    },
    methods: {
        async fetchProtectedData() {
            try {
                const response = await axios.get('protected', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.data) {
                    this.rows = response.data.rows;
                    console.log(this.rows);
                } else {
                    console.error('Response data is undefined:', response);
                }

                // this.message = response.data.message;
            } catch (error) {
                console.error('Failed to fetch protected data:', error.response.data.error);
            }
        },
    },
}
</script>

<style></style>