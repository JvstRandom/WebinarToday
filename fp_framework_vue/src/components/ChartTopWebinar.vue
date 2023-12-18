<template>
    <div>
        <section id="portfolio" class="w-100% flex">
            <div class="container" data-aos="fade-up">

                <header class="section-header">
                    <h3 class="section-title">Top Webinar dan Seminar</h3>
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

                <div class="row portfolio-container flex" data-aos="fade-up" data-aos-delay="200">

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="card-list" v-for="webinar in filteredWebinars" :key="webinar.id">
                            <RouterLink :to="{ path: '/page/' + webinar.id }">
                                <article class="card">
                                    <figure class="card-image">
                                        <img src="@/assets/img/poster_webinar_upn.png"
                                            alt="An orange painted blue, cut in half laying on a blue background" />
                                    </figure>
                                    <div class="card-header">
                                        <a href="#">{{ webinar.title }}</a>
                                        <button class="icon-button" @click="like(webinar.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                                                <path
                                                    d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="card-footer">
                                        <div class="card-meta card-meta--views">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" display="block" id="EyeOpen">
                                                <path
                                                    d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                                            </svg>
                                            {{ webinar.views }}
                                        </div>
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
                                        {{ webinar.date }}
                                    </div>
                                </article>
                            </RouterLink>
                        </div>
                    </div>

                </div>

            </div>
        </section><!-- End Portfolio Section -->
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'ChartTopWebinar',
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
            webinars: [
                { id: 101, title: 'Succes Investment Mindser: Bagaimana Cara Mengatur Investasi agar Menjadi Investor yang Sukses.', isFree: 'y', isPaid: false, views: 2465, date: 'Jul 26, 2019' },
                // ... webinar lainnya
            ],
        };
    },
    computed: {
        filteredWebinars() {
            return this.webinars.filter((webinar) => {
                const titleMatch = webinar.title.toLowerCase().includes(this.searchQuery.toLowerCase());
                const isFree = !this.filter.free || webinar.isFree;
                const isPaid = !this.filter.paid || webinar.isPaid;
                const isOnline = !this.filter.online || webinar.isOnline;
                const isOffline = !this.filter.offline || webinar.isOffline;
                const hasCertificate = !this.filter.certificate || webinar.hasCertificate;
                const isThisWeek = !this.filter.thisWeek || webinar.isThisWeek;
                const isUpcoming = !this.filter.upcoming || webinar.isUpcoming;

                return titleMatch && (isFree || isPaid) && (isOnline || isOffline) && hasCertificate && (isThisWeek || isUpcoming);
            });
        },
    },
    methods: {
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
@import "@/assets/css/webpage.css";
</style>
  