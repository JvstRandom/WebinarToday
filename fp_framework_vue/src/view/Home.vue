<template>
    <div class="hero" id="Home">
        <div>
            <Hero />
        </div>
        <main id="main">
            <div >
                <Chart-Webinar />
            </div>
            <div>
                <Tentang />
            </div>

            <!-- ======= Tawaran Layanan Post Webinar Section ======= -->
            <section id="services" class="section-bg">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h3>Tawaran Kami</h3>
                        <p>
                            Kami menyediakan paket layanan bagi para penyelenggara webinar berikut diantaranya:
                        </p>
                    </header>

                    <div class="row justify-content-center">
                        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            <div class="col">
                                <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Free Trial</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">Rp0<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                    <li>1 webinar included</li>
                                    <li>low chance of appearing in top</li>
                                    <li>no Email support</li>
                                    <li>Dashboard access</li>
                                    </ul>
                                    <RouterLink :to="{path:'/sign-up'}" class="w-100 btn btn-lg btn-outline-primary">
                                        Sign up for free
                                    </RouterLink> 
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Pro</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">Rp100k<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                    <li>10 webinars included</li>
                                    <li>more chance of appearing in top</li>
                                    <li>no Email support</li>
                                    <li>Dashboard access</li>
                                    </ul>
                                    <RouterLink :to="{path:'/sign-up'}" class="w-100 btn btn-lg btn-primary">
                                        Get started
                                    </RouterLink> 
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                                <div class="card-header py-3 text-bg-primary border-primary">
                                    <h4 class="my-0 fw-normal">Enterprise</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">Rp210k<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                    <li>100 webinars included</li>
                                    <li>high chance of appearing in top</li>
                                    <li>Email support</li>
                                    <li>Dashboard access</li>
                                    </ul>

                                    <RouterLink :to="{path:'/sign-up'}" class="w-100 btn btn-lg btn-primary">
                                        Get started
                                    </RouterLink> 
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Tawaran Layanan Post Webinar Section -->

            <!-- ======= Why Us Section ======= -->
            <section id="why-us">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h3>Why choose us?</h3>
                        <p>
                            Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
                            partiendo abhorreant vituperatoribus.
                        </p>
                    </header>

                    <div class="row row-eq-height justify-content-center">
                        <div class="col-lg-4 mb-4">
                            <div class="card" data-aos="zoom-in" data-aos-delay="100">
                                <i class="bi bi-calendar4-week"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Corporis dolorem</h5>
                                    <p class="card-text">
                                        Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                                        temporibus sunt ab inventore officiis aut voluptatibus.
                                    </p>
                                    <a href="#" class="readmore">Read more </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card" data-aos="zoom-in" data-aos-delay="200">
                                <i class="bi bi-camera-reels"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Voluptates dolores</h5>
                                    <p class="card-text">
                                        Voluptates nihil et quis omnis et eaque omnis sint aut.
                                        Ducimus dolorum aspernatur.
                                    </p>
                                    <a href="#" class="readmore">Read more </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card" data-aos="zoom-in" data-aos-delay="300">
                                <i class="bi bi-chat-square-text"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Eum ut aspernatur</h5>
                                    <p class="card-text">
                                        Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis
                                        porro in non nemo ex.
                                    </p>
                                    <a href="#" class="readmore">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row counters" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                class="purecounter"></span>
                            <p>Clients</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="1"
                                class="purecounter"></span>
                            <p>Projects</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="1364" data-purecounter-duration="1"
                                class="purecounter"></span>
                            <p>Hours Of Support</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1"
                                class="purecounter"></span>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Why Us Section -->

            <!-- ======= Testimonials Section ======= -->
            <section id="testimonials" class="section-bg">
                <div class="container" data-aso="zoom-in">
                    <header class="section-header">
                        <h3>Testimonials</h3>
                    </header>

                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonial-1.jpg" class="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                Proin iaculis purus consequat sem cure digni ssim donec
                                                porttitora entum suscipit rhoncus. Accusantium quam,
                                                ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                                risus at semper.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- End testimonial item -->

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonial-2.jpg" class="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                Export tempor illum tamen malis malis eram quae irure
                                                esse labore quem cillum quid cillum eram malis quorum
                                                velit fore eram velit sunt aliqua noster fugiat irure
                                                amet legam anim culpa.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- End testimonial item -->

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonial-3.jpg" class="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <p>
                                                Enim nisi quem export duis labore cillum quae magna enim
                                                sint quorum nulla quem veniam duis minim tempor labore
                                                quem eram duis noster aute amet eram fore quis sint
                                                minim.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- End testimonial item -->

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonial-4.jpg" class="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            <p>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla
                                                culpa multos export minim fugiat minim velit minim dolor
                                                enim duis veniam ipsum anim magna sunt elit fore quem
                                                dolore labore illum veniam.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- End testimonial item -->

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonial-5.jpg" class="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure
                                                aliqua veniam tempor noster veniam enim culpa labore
                                                duis sunt culpa nulla illum cillum fugiat legam esse
                                                veniam culpa fore nisi cillum quid.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- End testimonial item -->
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Testimonials Section -->

            <!-- ======= Team Section ======= -->
            <section id="team">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h3>Team</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
                            <div class="member">
                                <img src="assets/img/team-1.jpg" class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="200">
                            <div class="member">
                                <img src="assets/img/team-2.jpg" class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="300">
                            <div class="member">
                                <img src="assets/img/team-3.jpg" class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
                            <div class="member">
                                <img src="assets/img/team-4.jpg" class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Team Section -->

            <!-- ======= Contact Section ======= -->
            <section id="contact">
                <div class="container-fluid" data-aos="fade-up">
                    <div class="section-header">
                        <h3>Contact Us</h3>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="map mb-4 mb-lg-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                    frameborder="0" style="border: 0; width: 100%; height: 340px" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-md-5 info">
                                    <i class="bi bi-geo-alt"></i>
                                    <p>A108 Adam Street, NY 535022</p>
                                </div>
                                <div class="col-md-4 info">
                                    <i class="bi bi-envelope"></i>
                                    <p>info@example.com</p>
                                </div>
                                <div class="col-md-3 info">
                                    <i class="bi bi-phone"></i>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>

                            <div class="form">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="name" class="form-control" id="name"
                                                placeholder="Your Name" required />
                                        </div>
                                        <div class="form-group col-lg-6 mt-3 mt-lg-0">
                                            <input type="email" class="form-control" name="email" id="email"
                                                placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject"
                                            placeholder="Subject" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                            required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" title="Send Message">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Contact Section -->
        </main>
        <!-- End #main -->
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Tentang from './Tentang/Tentang.vue';
import ChartWebinar from '@/components/ChartWebinar.vue';
import axios from 'axios';
export default {
    name: "Home",
    components: {
        Hero,
        Tentang,
        ChartWebinar,
    },
    data() {
        return {
            webinars: [],
        };
    },

    methods: {
        setwebinars(data) {
            this.webinars = data;
        },
    },

    mounted() {
        axios
            .get("http://localhost:8000")
            .then((Response) => this.setwebinars(Response.data))
            .catch((error) => console.log(error))
    },


};
</script>
   
<style scoped>
/* Component-specific styles go here */
</style>
   