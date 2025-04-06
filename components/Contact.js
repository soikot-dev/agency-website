export default function Contact() {
    return (
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-5xl font-extrabold mb-6">
            We'd Be Interested In Learning More <br />
            About Your Project.
          </h2>
  
          {/* Contact Us Button */}
          <div className="mt-6">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-400 transition-all">
              Contact Us →
            </button>
          </div>
        </div>
      </section>
    );
  }
  