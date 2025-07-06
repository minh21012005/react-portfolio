import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa6";

interface IProps {
    facebook: string;
    github: string;
    email: string;
}

const SocialMedia = (props: IProps) => {
    const { facebook, github, email } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={facebook} target='_blank' className="highlight" title="FaceBook">
                <FaFacebook size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="GitHub">
                <FaGithub size={30} />
            </a>
            <a href={`mailto:${email}`} className="highlight" title="Email">
                <FaEnvelope size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;