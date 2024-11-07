import SectionTitle from "./SectionTitle";

const myProjects = [
    {
        imageUrl: "projects/tazamun.png",
        title: "Industry & Export Directory",
        url: "https://frontend.industry.com.sa/en"
    },
    {
        imageUrl: "projects/moteelz.png",
        title: "Moteelz for Booking Hospitality Units",
        url: "https://moteelz.com/en"
    },
    {
        imageUrl: "projects/hayah11.png",
        title: "hayah for psychology consultant",
        url: "https://hayah11.com"
    },
    {
        imageUrl: "projects/hayah11-admin.png",
        title: "Dashboard For hayah for psychology consultant",
        url: "https://hayah11.com"
    },

    {
        imageUrl: "projects/kingofkey.png",
        title: "king of key for keys services",
        url: "https://kingofkey.net"
    },
    {
        imageUrl: "projects/creativity-keys.png",
        title: "creativity  for keys services",
        url: "https://creativity-keys.net"
    },

    {
        imageUrl: "projects/tatbeqakum.png",
        title: "tatbeqakum ",
        url: "https://tatbeqakum.com"
    },

    {
        imageUrl: "projects/yemencorner.png",
        title: "yemencorner ",
        url: "https://yemencorner.com"
    },

    // {
    //     imageUrl: "projects/yementadawul.png",
    //     title: "yementadawul ",
    //     url: "https://yementadawul.com/ar"
    // },
    //
    // {
    //     imageUrl: "projects/halaalmadi.jpg",
    //     title: "halaalmadi ",
    //     url: "https://halaalmadi.com/"
    // },
    //
    // {
    //     imageUrl: "projects/azar.png",
    //     title: "azar ",
    //     url: "https://azar.kingofkey.net/"
    // },
    //
    //
    // {
    //     imageUrl: "projects/shopadmin-erum-ae.png",
    //     title: "shopadmin erum-ae ",
    //     url: "https://eco.erum.ae/"
    // },
    //
    //
    // {
    //     imageUrl: "projects/salesdev-sabafon-net.png",
    //     title: "salesdev sabafon",
    //     url: "https://salesdev-sabafon-net/ar"
    // },
    // {
    //     imageUrl: "projects/swp.png",
    //     title: "projects management systems",
    //     url: "#"
    // },
    //
    // {
    //     imageUrl: "projects/das.png",
    //     title: "Damage Assessment Study of the Urban Water Supply and Sanitation Situation in Yemen",
    //     url: "#"
    // },
    //
    // {
    //     imageUrl: "projects/asshir.png",
    //     title: "asshir",
    //     url: "https://asshir.com"
    // },
    //
    // {
    //     imageUrl: "projects/covid-19.png",
    //     title: "covid-19",
    //     url: "https://covid-19.com"
    // },
    //
    // {
    //     imageUrl: "projects/dnl-yem.png",
    //     title: "dnl-yem",
    //     url: "https://dnl-yem.com"
    // },
    // {
    //     imageUrl: "projects/nouf-1d.png",
    //     title: "nouf for decor",
    //     url: "https://nouf-1d.com"
    // },
    //
    // {
    //     imageUrl: "projects/yemenwe.png",
    //     title: "yemen women",
    //     url: "https://yemenwe.com"
    // },
    // {
    //     imageUrl: "projects/OnlineCourses.jpg",
    //     title: "Online Courses",
    //     url: "https://github.com/OsamaAlmamri/OnlineCourses"
    // },
    //
    // {
    //     imageUrl: "projects/fcit.jpg",
    //     title: "faculty mangment & social network ",
    //     url: "#"
    // },


];


const title = ("Creative Showcase");
const description = (
    "Here showcases a collection of my frontend development work, demonstrating my proficiency in creating responsive, visually appealing websites with clean code and intuitive user interfaces. Explore my projects and witness the power of clean code and innovative design."
);

function Projects() {
    const listItems = myProjects.map(project =>
        <div key={project.title} className=" mt-3">
            <a href={project.url} className="url-box" target="_blank">
                <figure className="newsCard news-Slide-up">
                    <img src={project.imageUrl} alt={project.title}/>
                    <div className="newsCaption px-4">
                        <div className="flex  items-center justify-items-center  cnt-title">
                            <h5 className="newsCaption-title text-white m-0">{project.title}</h5>
                            <div className="link-icon">
                                <i className="fa-solid fa-link"></i>
                            </div>
                        </div>
                    </div>
                    <span className="overlay"></span>
                </figure>
            </a>
        </div>
    );
    return (
        <section className="section-services py-5" id="project">
            <SectionTitle title={title} description={description}/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {listItems}
            </div>
        </section>

    );
}

export default Projects;
