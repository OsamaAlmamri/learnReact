import Link from "next/link";
// import styles from "./HeaderNav.module.css"


const myLogo = {
    src: "/img/logo.png",
    alt: "logo",
};

const navLinks = [
    {label: "Home", key: "/#"},
    {label: "About", key: "/#about"},
    {label: "Skill", key: "/#skill"},
    {label: "Services", key: "/#ervices"},
    {label: "Experience", key: "/experience"},
    {label: "Project", key: "/projects"},
    // { label: "Photography", key: "#photography" },
    // { label: "Video Editing", key: "#videogallery" },
    {label: "Contact", key: "/#contact"},
];


function headerNav() {

    const navs = navLinks.map((link, index) =>
        <li key={index} className="nav-item">
            <Link href={link.key} className="nav-link">{link.label}</Link>
        </li>
    );

    return (
                        <ul className="flex gap-4  m-auto mb-2 mb-lg-0">
                            {navs}
                        </ul>
    );
    //
    // return (
    //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //         <div className="container flex align-items-center">
    //             <Link className="navbar-brand" href="/">
    //                 <img src={myLogo.src} alt={myLogo.alt}/></Link>
    //             <button
    //                 className="navbar-toggler"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#navbarSupportedContent"
    //                 aria-controls="navbarSupportedContent"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav m-auto mb-2 mb-lg-0">
    //                     {navs}
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );
}

export default headerNav;
