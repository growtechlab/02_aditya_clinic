import Link from "next/link";
// import ImageWithBlurhash from "@/components/ImageWithBlurhash";

export default function Home() {
  return (
   




  <main class="">
    
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div class="flex flex-col justify-center space-y-4">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Exceptional Healthcare for Your Family
          </h1>
          <p class="max-w-[600px] text-muted-foreground md:text-xl">
            At our doctor's practice, we are dedicated to providing personalized, compassionate care for patients of
            all ages. From routine check-ups to specialized treatments, we have the expertise to keep your family
            healthy.
          </p>
        </div>
        <div class="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
    
            Book Appointment
          </a>
          <a
            class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
      <img
        src="https://qmedcenter.com/wp-content/uploads/2023/02/Vector-doctor-examining-a-patient-at-the-clinic-portraying-20-qualities-that-make-a-good-doctor.webp"
        
        alt="Doctor"
        class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
      />
    </div>
  </section>
    <section id="services" class="py-12 md:py-16 lg:py-20">

      
      <div class="px-4 md:px-6">

          <div class="flex flex-col items-center justify-center space-y-4 text-center">

          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
          <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From routine check-ups to specialized treatments, our team of experienced doctors and nurses are here to
            provide the care you and your family need.
          </p>
          </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-card p-6 rounded-lg shadow-md">
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
          <div class="bg-card p-6 rounded-lg shadow-md">
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
          <div class="bg-card p-6 rounded-lg shadow-md">
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
    <section id="why-us" class="bg-muted py-12 md:py-16 lg:py-20">
      <div class="px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Dr. Smith's Practice?</h2>
            <p class="text-muted-foreground mb-6">
              Our practice is dedicated to providing the highest quality of care for our patients. Here's why you
              should choose us:
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
          <div class="flex items-center justify-center">
            <img
              src="https://pixabay.com/get/g418bc94cb787ff35c4c13a909d8decbe7a20f92f2f3478067e7f34aaea2e0eaaa5ebd4b8bcf995b0c14ffcb39e2683a924f41ad5ab173878dfbd783cf5137c7c5769a715e6581bad1b7a47275b998a38_640.jpg"
              width="500"
              height="500"
              alt="Doctor"
              class="rounded-lg shadow-lg"
              // style="aspect-ratio: 500 / 500; object-fit: cover;"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-12 md:py-16 lg:py-20 bg-base-200">
  <div class="px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
      <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        At Aditya Clinic, we believe in providing holistic healthcare services that focus on the well-being of the entire family. Our clinic is equipped with state-of-the-art facilities and a team of experienced healthcare professionals who are dedicated to offering compassionate and personalized care.
      </p>
    </div>
    <div class="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Mission</h3>
        <p class="text-muted-foreground">
          To deliver exceptional healthcare services that enhance the quality of life for our patients and their families.
        </p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Vision</h3>
        <p class="text-muted-foreground">
          To be the leading healthcare provider in our community, known for our commitment to patient care and excellence in medical services.
        </p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Values</h3>
        <ul class="text-muted-foreground list-disc list-inside">
          <li>Compassion</li>
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Respect</li>
        </ul>
      </div>
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Facilities</h3>
        <p class="text-muted-foreground">
          We offer a range of state-of-the-art facilities including modern diagnostic equipment and comfortable patient care areas.
        </p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Our Team</h3>
        <p class="text-muted-foreground">
          Our team consists of highly qualified and experienced healthcare professionals dedicated to providing the best possible care.
        </p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-2">Community Involvement</h3>
        <p class="text-muted-foreground">
          We actively participate in community health initiatives and offer educational programs to promote healthy living.
        </p>
      </div>
    </div>
  </div>
    </section>

    <section id="testimonials" class="py-12 md:py-16 lg:py-20 ">
        <div class="px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our patients have to say about their experiences at Aditya Clinic.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 ">
            <div class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">"He has now become our family doctor, trust me how he treats his patient outstandingly, at low fees, great😊"</p>
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
            <div class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">"Best knowledgeable doctor and good conversation skill and perfect treatment in Naigaon East."</p>
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
            <div class="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p class="text-muted-foreground italic">"Aditya Clinic is my go-to place for all my healthcare needs. The doctors are knowledgeable and the services are comprehensive."</p>
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
        </div>
    </section>
    
    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div class="grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">Schedule an Appointment</h2>
        <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Take the first step towards better health. Fill out the form below to schedule an appointment with one of
          our experienced doctors.
        </p>
      </div>
      <div class="mx-auto w-full max-w-sm space-y-2 ">
        <form class="grid gap-4">
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
            placeholder="Name"
            type="text"
          />
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
            placeholder="Email"
            type="email"
          />
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
            placeholder="Phone"
            type="tel"
          />
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
            placeholder="Reason for visit"
          ></textarea>
          <button
            class="inline-flex items-center justify-center base-100space-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
    </section>
  

  <section id="faq" class="py-12 md:py-16 lg:py-20">
        <div class="px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to some of the common questions our patients ask.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className=" p-6 collapse collapse-arrow rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-bold mb-2">What are your clinic hours?</div>
              <div className="collapse-content">
              <p>Our clinic is open from 10 AM to 2 PM, 5:30 PM to 11 PM, Monday to Saturday.</p>
              <p>Our clinic is open from 10 AM to 2:30 PM, 5:30 PM to 11 PM, Only Sunday.</p>
              </div>
            </div>
            <div className="p-6 collapse collapse-arrow rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-bold mb-2">Do you provide Home Visits?</div>
              <div className="collapse-content">
                <p>Yeah I do provide home visit.</p>
              </div>
            </div>
            <div className=" p-6 collapse collapse-arrow rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-bold mb-2">How can I book an appointment?</div>
              <div className="collapse-content">
              <p>You can book an appointment by calling us at +91 7208253036 or by filling the above form.</p>
              </div>
            </div>
          </div>  
        </div>
      </section>
  </main>
  


  );
}
