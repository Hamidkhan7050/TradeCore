import React from "react";

function Team() {
    return (
        <div className="container mb-5">

            {/* Section Heading */}
            <div className="row mt-5 pt-5 border-top">
                <div className="col-12 text-center mb-4">
                    <h1 className="fw-semibold">Meet the Team</h1>
                    <p className="text-muted">
                        The Minds Behind TradeCore’s Trading Innovation
                    </p>
                </div>
            </div>

            {/* Team Member */}
            <div className="row align-items-center text-muted">

                {/* Image Section */}
                <div className="col-12 col-md-5 text-center mb-4">
                    <img
                        src="images/HamidRazaKhan.png"
                        alt="Founder"
                        className="img-fluid rounded-circle"
                        style={{
                            width: "250px",
                            height: "250px",
                            objectFit: "cover"
                        }}
                    />

                    <h4 className="mt-4 mb-1">Hamid Raza Khan</h4>
                    <h6 className="text-secondary">Founder & Full Stack Developer</h6>
                </div>

                {/* Content Section */}
                <div className="col-12 col-md-7 mb-4" style={{ lineHeight: "1.8" }}>
                    <p>
                        Hamid founded TradeCore with a vision to build a modern,
                        technology-driven trading platform focused on performance,
                        scalability, and real-time market execution.
                    </p>

                    <p>
                        With strong expertise in full-stack development and system
                        architecture, he designed TradeCore’s trading engine to ensure
                        secure authentication, efficient order handling, and
                        seamless user experience.
                    </p>

                    <p>
                        TradeCore represents innovation, discipline, and the ambition
                        to redefine how traders interact with financial markets.
                    </p>

                    <p>
                        Connect on{" "}
                        <a
                            href="https://www.linkedin.com/in/hamid-raza-khan-598070361/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            LinkedIn
                        </a>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Team;
