import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    const links = [
        {
            url: "https://www.youtube.com/",
            label: "Link to Youtube",
            icon: <IoLogoYoutube size={20} />,
        },
        {
            url: "https://twitter.com/home",
            label: "Link to Twitter",
            icon: <FaXTwitter size={20} />,
        },
        {
            url: "https://www.instagram.com/",
            label: "Link to Instagram",
            icon: <IoLogoInstagram size={20} />,
        },
    ];
    return (
        <div className="w-full h-fit py-10 flex flex-col gap-4 items-center bg-white text-neutral-500">
            <div className="flex gap-8">
                {links.map((link, index) => (
                    <CustomLink key={index} link={link} />
                ))}
            </div>
            <p>&copy; 2024 JIMBROZ, Inc. All Rights Reserved</p>
        </div>
    );
};

export default Footer;

const CustomLink = ({ link }) => {
    const { url, label, icon } = link;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-purple-500 duration-200"
        >
            {icon}
        </a>
    );
};
