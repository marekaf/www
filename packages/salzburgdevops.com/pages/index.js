import React from "react";
import MeetupPage from "@app/meetup-theme/layouts/MeetupPage";

import logo from "@app/data/logos/meetups/salzburgdevops_logo_500px_sq.png";

const Index = props => (
  <MeetupPage
    logo={logo}
    site_name="salzburgdevops.com"
    meetup_name="Salzburg DevOps Meetups"
    meetupcom_url={props.site.meetup.meetupcom_url}
    about_us_header="About Us"
    about_us_content={
      "We are DevOps community in Salzburg. We share knowledge and experiences from using tools like CI, Docker, Kubernetes, ELK / EFK, and much more."
    }
    join_us_header="Join Us"
    join_us_content={
      <p>
        Let us know if you are interested. Join us on{" "}
        <a href={props.site.meetup.meetupcom_url}>Meetup.com</a> or drop us mail
        to{" "}
        <a href="mailto:meetups@salzburgdevops.com">
          meetups@salzburgdevops.com
        </a>
        .
      </p>
    }
  />
);

export default Index;
