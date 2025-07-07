import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useTranslation } from "react-i18next";

const Project = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.resolvedLanguage as "vi" | "en";

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        {t("projectSection.heading1")}{" "}
                        <span className="brand-red">{t("projectSection.heading2")}</span>
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">
                        {t("projectSection.subHeading")}
                    </h6>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {PROJECTS?.map((item) => (
                    <Col md={4} className="project-card" key={item.id}>
                        <ProjectCard
                            imgPath={item.imgPath}
                            title={item.title[lang]}         // lấy title theo ngôn ngữ
                            description={item.description[lang]} // lấy description theo ngôn ngữ
                            githubLink={item.githubLink}
                        />
                    </Col>
                ))}
            </Row>
            <div className="mb-7"></div>
        </>
    );
};

export default Project;
