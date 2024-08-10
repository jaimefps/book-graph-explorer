import "./AboutPage.css"
import { Button } from "@mui/material"
import spinozaHague from "./assets/spinoza.png"
import LaunchIcon from "@mui/icons-material/Launch"
import { Outlet, useNavigate } from "react-router-dom"
import { Page } from "./Page"
import React from "react"

const BaseLink: React.FC<{
  children: React.ReactNode
  href: string
}> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="base-link">
      {children} <LaunchIcon style={{ fontSize: "1rem" }} />
    </a>
  )
}

export const Bio = () => {
  return (
    <div className="about-spinoza">
      <div className="about-spinoza-col">
        <div className="about-header-row">
          <img
            src={spinozaHague}
            className="about-pic"
            alt="Spinoza's statue in The Hague"
          />
          <h2 className="about-header">Who was Spinoza?</h2>
        </div>
        <p className="about-text">
          Baruch Spinoza (1632-1677), also known as Benedictus Spinoza, was a
          Portuguese Jew from the Netherlands and a pivotal figure in Western
          philosophy. His family, Sephardic Jews who fled persecution during the
          Inquisition, settled in the tolerant environment of the Netherlands,
          where Spinoza was born and raised. Excommunicated from the Jewish
          community for his radical ideas, he lived a modest life as a lens
          grinder while dedicating himself to philosophy. Spinoza's works,
          particularly{" "}
          <BaseLink href="https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)">
            Ethics
          </BaseLink>
          , have had a lasting impact on modern thought, earning him recognition
          as one of the most profound philosophers in history. For further
          reading and more detailed information, visit the Stanford Encyclopedia
          of Philosophy entry on{" "}
          <BaseLink href="https://plato.stanford.edu/entries/spinoza/">
            Spinoza
          </BaseLink>
          .
        </p>
      </div>
    </div>
  )
}

export const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <Page>
      <div className="about-container">
        <div className="about-appbar">
          {" "}
          <Button
            variant="outlined"
            className="about-tab"
            onClick={() => navigate("/about/spinoza")}
          >
            Who was Spinoza?
          </Button>
          <Button
            variant="outlined"
            className="about-tab"
            onClick={() => navigate("/about/notation")}
          >
            Notation
          </Button>
          <Button
            variant="outlined"
            className="about-tab"
            onClick={() => navigate("/about/credits")}
          >
            Credits
          </Button>
        </div>
        <div className="about-content">
          <Outlet />
        </div>
      </div>
    </Page>
  )
}
