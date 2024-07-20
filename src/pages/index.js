import ContactForm from "@/components/contactForm";
import Link from "next/link";
// import ImageWithBlurhash from "@/components/ImageWithBlurhash";

export default function Home() {
  return (
   




  <main>
    
  <section id="hero" class="w-full py-12 md:py-24 lg:py-32">
    <div class="grid gap-6 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
      <div class="flex flex-col justify-center space-y-4">
        <div class="space-y-2">
          <h1 data-aos="fade-up" class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Exceptional Healthcare for Your Family
          </h1>
          <p data-aos="fade" class="max-w-[600px] text-muted-foreground md:text-xl">
            {`At our doctor's practice, we are dedicated to providing personalized, compassionate care for patients of
            all ages. From routine check-ups to specialized treatments, we have the expertise to keep your family
            healthy.`}
          </p>
        </div>
        <div class="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            data-aos="zoom-in"
            class="btn btn-primary"
            href="#contact"
          >
    
            Book Appointment
          </a>
          <a
            data-aos="zoom-in"
            class="btn"
            href={"tel:"+process.env.MOBILE_NUMBER}
          >
            Call us
          </a>
        </div>
      </div>
      <img

        data-aos="fade-up"
        src="/img/dr2.jpg"
        
        alt="Doctor"
        class="rounded-xl w-full"
      />
    </div>
  </section>
    <section id="services" class="py-12 bg-base-200 md:py-16 lg:py-20">

      
      <div class="px-4 md:px-8">

          <div data-aos="fade" class="flex flex-col items-center justify-center space-y-4 text-center">

          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
          <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From routine check-ups to specialized treatments, our team of experienced doctors and nurses are here to
            provide the care you and your family need.
          </p>
          </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-8 h-8 mb-4 text-primary"
            >
              <path d="M12 6v4"></path>
              <path d="M14 14h-4"></path>
              <path d="M14 18h-4"></path>
              <path d="M14 8h-4"></path>
              <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
              <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
            </svg>
            <h3 class="text-2xl font-bold mb-2">General Medicine</h3>
            <p class="text-muted-foreground">
              Our experienced doctors provide comprehensive care for a wide range of medical conditions.
            </p>
          </div>
          <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-8 h-8 mb-4 text-primary"
            >
              <path d="M9 12h.01"></path>
              <path d="M15 12h.01"></path>
              <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
              <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
            </svg>
            <h3 class="text-2xl font-bold mb-2">Pediatrics</h3>
            <p class="text-muted-foreground">
              Dedicated pediatric care for children of all ages, from newborns to adolescents.
            </p>
          </div>
          <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-8 h-8 mb-4 text-primary"
            >
              <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
              <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
              <circle cx="20" cy="10" r="2"></circle>
            </svg>
            <h3 class="text-2xl font-bold mb-2">Specialized Care</h3>
            <p class="text-muted-foreground">
              Our team of specialists provides advanced care for complex medical conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="why-us" class="py-12 md:py-16 lg:py-20">
      <div class="px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{`Why Choose Dr. Aditya's Clinic?`}</h2>
            <p class="text-muted-foreground mb-6">
              {`Our practice is dedicated to providing the highest quality of care for our patients. Here's why you should choose us:`}
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-primary flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h4 class="text-lg font-bold">Experienced Doctors</h4>
                  <p class="text-muted-foreground">
                    Our team of doctors have years of experience in their respective fields, ensuring you receive
                    the best possible care.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-primary flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h4 class="text-lg font-bold">Personalized Approach</h4>
                  <p class="text-muted-foreground">
                    We take the time to understand your unique health needs and tailor our treatment plans
                    accordingly.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-primary flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h4 class="text-lg font-bold">Cutting-Edge Facilities</h4>
                  <p class="text-muted-foreground">
                    Our state-of-the-art facilities are equipped with the latest medical technology to ensure the
                    best possible care.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" class="flex items-center justify-center">
            <img
              src="/img/dr1.jpg"
              
              alt="Doctor"
              class="rounded-lg shadow-lg full-w"
              // style="aspect-ratio: 500 / 500; object-fit: cover;"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-12 md:py-16 lg:py-20 bg-base-200">
  <div class="px-4 md:px-8">
    <div data-aos="fade" class="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
      <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        At Aditya Clinic, we believe in providing holistic healthcare services that focus on the well-being of the entire family. Our clinic is equipped with state-of-the-art facilities and a team of experienced healthcare professionals who are dedicated to offering compassionate and personalized care.
      </p>
    </div>
    <div class="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Mission</h3>
        <p class="text-muted-foreground">
          To deliver exceptional healthcare services that enhance the quality of life for our patients and their families.
        </p>
      </div>
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Vision</h3>
        <p class="text-muted-foreground">
          To be the leading healthcare provider in our community, known for our commitment to patient care and excellence in medical services.
        </p>
      </div>
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Values</h3>
        <ul class="text-muted-foreground list-disc list-inside">
          <li>Compassion</li>
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Respect</li>
        </ul>
      </div>
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Facilities</h3>
        <p class="text-muted-foreground">
          We offer a range of state-of-the-art facilities including modern diagnostic equipment and comfortable patient care areas.
        </p>
      </div>
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Team</h3>
        <p class="text-muted-foreground">
          Our team consists of highly qualified and experienced healthcare professionals dedicated to providing the best possible care.
        </p>
      </div>
      <div data-aos="fade-up" class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Community Involvement</h3>
        <p class="text-muted-foreground">
          We actively participate in community health initiatives and offer educational programs to promote healthy living.
        </p>
      </div>
    </div>
  </div>
    </section>

    <section id="testimonials" class="py-12 md:py-16 lg:py-20 ">
        <div class="px-4 md:px-8">
          <div data-aos="fade" class="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our patients have to say about their experiences at Aditya Clinic.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 ">
            <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">{`"He has now become our family doctor, trust me how he treats his patient outstandingly, at low fees, great😊"`}</p>
              <p class="text-right font-bold">- Ranjan Mishra</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
            <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">{`"Best knowledgeable doctor and good conversation skill and perfect treatment in Naigaon East."`}</p>
              <p class="text-right font-bold">- Ashish Kumar</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
            <div data-aos="fade-up" class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">{`"Aditya Clinic is my go-to place for all my healthcare needs. The doctors are knowledgeable and the services are comprehensive."`}</p>
              <p class="text-right font-bold">- Santosh Yadav</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
          </div>

          <p data-aos="fade" className="text-center py-4">Visit <a target="_blank" className="text-primary" href="https://maps.app.goo.gl/7hpwq6WBE6rhCnkB9">Google Maps</a> to read more reviews</p>
        </div>
    </section>
    
    <section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-base-200">
    <div class="grid items-center justify-center gap-4 px-4 text-center md:px-8">
      <div data-aos="fade" class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">Schedule an Appointment</h2>
        <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Take the first step towards better health. Fill out the form below to schedule an appointment with one of
          our experienced doctors.
        </p>
      </div>
      <div data-aos="fade-up" class="mx-auto w-full max-w-sm space-y-2 ">
        <ContactForm />
      </div>
    </div>
    </section>


    <section id="visit-us" class="w-full py-12 md:py-24 lg:py-32 bg-base-100">
 
    <div class="px-4 md:px-8">

        <div data-aos="fade">
        <h2  className="text-3xl font-bold sm:text-4xl md:text-5xl">Visit Us</h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Come see us in person at our clinic.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div data-aos="fade-up" class="space-y-4 py-4 p-4 my-4 rounded-xl bg-base-200">
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 text-primary"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div>
            <div class="font-medium">Phone</div>
            <a href="#" class="text-muted-foreground hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 text-primary"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
          </svg>
          <div>
            <div class="font-medium">Email</div>
            <a href="#" class="text-muted-foreground hover:underline">
              info@acme.com
            </a>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 text-primary"
          >
            <line x1="2" x2="5" y1="12" y2="12"></line>
            <line x1="19" x2="22" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="2" y2="5"></line>
            <line x1="12" x2="12" y1="19" y2="22"></line>
            <circle cx="12" cy="12" r="7"></circle>
          </svg>
          <div>
            <div class="font-medium">Address</div>
            <p class="text-muted-foreground">123 Main St, Anytown USA 12345</p>
          </div>
          </div>

          </div>

          
          <div data-aos="fade-up" className="my-4">
          <div className="w-full border rounded-xl">
          <iframe className="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15056.541067988197!2d72.8603544!3d19.3632948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af91fcb511b9%3A0x3a4f1d8bd63944b0!2sAditya%20Clinic!5e0!3m2!1sen!2sin!4v1721459560799!5m2!1sen!2sin" width="auto" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          </div>
        </div>
      </div>
    </section>
  
    <hr />


  <section id="faq" class="py-12 md:py-16 lg:py-20">
        <div class="px-4 md:px-8">
          <div data-aos="fade" class="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to some of the common questions our patients ask.
            </p>
          </div>
          <div className="mt-8 space-y-4">

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">What are your clinic hours?</summary>
            <div className="collapse-content">
            <p>Our clinic is open from 10 AM to 2 PM, 5:30 PM to 11 PM, Monday to Saturday.</p>
            <p>Our clinic is open from 10 AM to 2:30 PM, 5:30 PM to 11 PM, Only Sunday.</p>
            </div>
          </details>

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">Do you provide Home Visits?</summary>
            <div className="collapse-content">
            <p>Yeah I do provide home visit.</p>
            </div>
          </details>

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">How can I book an appointment?</summary>
            <div className="collapse-content">
            <p>You can book an appointment by calling us at +91 7208253036 or by filling the above form.</p>
            </div>
          </details>
            
           
          </div>  
        </div>
      </section>
  </main>
  


  );
}
