import { FaFacebook, FaGithub } from "react-icons/fa6";

const SocialMedia = (props) => {
    const { facebook, github } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={facebook} target='_blank' className="highlight" title="Nguyễn Minh">
                <FaFacebook size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="GitHub">
                <FaGithub size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;