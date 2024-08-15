import "./AboutPage.css"
import { Button } from "@mui/material"
import spinozaHague from "./assets/spinoza.png"
import { Outlet, useNavigate } from "react-router-dom"
import FunctionsIcon from "@mui/icons-material/Functions"
import GroupsIcon from "@mui/icons-material/Groups"
import { FeedbackFish } from "@feedback-fish/react"
import { logAnalytics } from "./lib/analytics"
import { Page } from "./Page"
import React from "react"

export const Credits = () => {
  return (
    <div data-demo="credits" className="about-credits">
      <div className="about-credits-col">
        <div className="about-header-row">
          <GroupsIcon className="about-icon" />
          <h2 className="about-header">credits</h2>
        </div>
        <div data-demo="about-me" className="about-credits-col">
          {/* <div className="about-credits-row"> */}
          <p
            style={{
              margin: 0,
              fontSize: "1.1rem",
              textAlign: "justify",
              lineHeight: 1.2,
            }}
          >
            <b>Built by</b> Jaime Pericás — student of philosophy turned
            software engineer. You can find me on{" "}
            <BaseLink href="https://www.linkedin.com/in/jaime-pericas-saez/">
              LinkedIn
            </BaseLink>{" "}
            or <BaseLink href="https://github.com/jaimefps">Github</BaseLink>.{" "}
            <b>Built with</b>{" "}
            <BaseLink href="https://react.dev/">ReactJs</BaseLink>,{" "}
            <BaseLink href="https://js.cytoscape.org/">Cytoscape</BaseLink>,{" "}
            <BaseLink href="https://introjs.com/">Intro.js</BaseLink>{" "}
            <b>Text sourced</b> from:{" "}
            <BaseLink href="https://www.thelatinlibrary.com/spinoza.ethica1.html">
              The Latin Library
            </BaseLink>
            ,{" "}
            <BaseLink href="https://www.gutenberg.org/cache/epub/3800/pg3800-images.html">
              Project Gutenberg
            </BaseLink>
            ,{" "}
            <BaseLink href="https://archive.org/details/etica-de-spinoza/mode/2up">
              Epub Libre
            </BaseLink>
            .
            <br />
            <br />
            I'm working on an open-source project focused on tracking the
            dependency graph of the <i>Ethics</i>; it would be great to bring
            everything together in one place for easier sharing and discussion:
            hence the{" "}
            <BaseLink href="https://github.com/jaimefps/ethics-data">
              <i>Ethics data</i>
            </BaseLink>{" "}
            project.
            <br />
            <br />
            <b>Support these</b> projects if you find them useful by:{" "}
            <BaseLink href="https://www.patreon.com/jaimefps">
              giving it long term support
            </BaseLink>{" "}
            or{" "}
            <BaseLink href="https://buymeacoffee.com/jaimefps">
              getting me coffee
            </BaseLink>
            .
          </p>
          <div>
            <FeedbackFish projectId="13ad8b26700cb2">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "darkseagreen",
                  borderColor: "darkseagreen",
                  ":focus": { borderColor: "darkseagreen", opacity: 0.8 },
                  ":hover": { borderColor: "darkseagreen", opacity: 0.8 },
                }}
              >
                share feedback
              </Button>
            </FeedbackFish>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

const NotationItem: React.FC<{
  label: string
  tag: string
}> = ({ label, tag }) => {
  return (
    <div className="notation-chip-container">
      {label}
      <div className="notation-chip">{tag}</div>
    </div>
  )
}

export const Notation = () => {
  return (
    <div className="about-notation">
      <div className="about-notation-col">
        <div className="about-header-row">
          <FunctionsIcon className="about-icon" />
          <h2 className="about-header">notation</h2>
        </div>
        <p className="about-text">
          Spinoza wrote the <i>Ethics</i> in a geometric fashion to mirror the
          rigor and clarity of mathematical reasoning, inspired by Euclid's{" "}
          <BaseLink href="https://en.wikipedia.org/wiki/Euclid%27s_Elements">
            <i>Elements</i>
          </BaseLink>
          . By using definitions, axioms, and propositions, he aimed to
          demonstrate his philosophical ideas with the same certainty as
          geometric proofs. This method reflects his belief that philosophy,
          like geometry, should be built on a foundation of self-evident truths
          and logical deductions.
        </p>
        <div data-demo="notation" className="notation-display">
          <div className="notation-col">
            <NotationItem label="Ethics" tag="e" />
            <NotationItem label="Preface" tag="pref" />
            <NotationItem label="Definition" tag="def" />
            <NotationItem label="Axiom" tag="ax" />
            <NotationItem label="Proposition" tag="p" />
          </div>
          <div className="notation-col">
            <NotationItem label="Corollary" tag="cor" />
            <NotationItem label="Explanation" tag="exp" />
            <NotationItem label="Appendix" tag="apx" />
            <NotationItem label="Lemma" tag="lem" />
            <NotationItem label="Postulate" tag="post" />
            <NotationItem label="Affect Def." tag="aff" />
          </div>
        </div>
      </div>
    </div>
  )
}

const BaseLink: React.FC<{
  children: React.ReactNode
  href: string
}> = ({ children, href }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="base-link"
        onClick={() => {
          logAnalytics("about-page:link-click")
        }}
      >
        {children}
      </a>
    </>
  )
}

export const Bio = () => {
  return (
    <div className="about-spinoza">
      <div className="about-spinoza-col">
        <div data-demo="spinoza" className="about-header-row">
          <img
            loading="lazy"
            src={spinozaHague}
            className="about-pic"
            alt="Spinoza's statue in The Hague"
          />
          <h2 className="about-header">Who was Spinoza?</h2>
        </div>
        <p className="about-text">
          Baruch Spinoza (1632-1677) was a Portuguese Jew from the Netherlands
          and a pivotal figure in Western philosophy. His family, Sephardic Jews
          who fled persecution during the Inquisition, settled in the tolerant
          environment of the Netherlands, where Spinoza was born and raised.
          Excommunicated from the Jewish community for his beliefs, he lived a
          modest life as a lens grinder while dedicating himself to philosophy.
          His works, including his <i>Ethics</i>, were published posthumously in
          1677. Almost immediately, his writings were met with fierce opposition
          and swiftly banned by both the Catholic Church and the States of
          Holland due to their controversial ideas, which challenged established
          religious and philosophical doctrines. <br />
          <br />
          Spinoza's books survived in the form of contraband for decades.
          Despite being banned, his writings circulated clandestinely, often
          smuggled and read in secret by those drawn to his ideas. This
          underground circulation helped ensure that Spinoza's philosophy
          continued to influence thinkers across Europe, even in the face of
          censorship. Ultimately, Spinoza's works, particularly{" "}
          <BaseLink href="https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)">
            <i>Ethics</i>
          </BaseLink>
          , have had a lasting impact on modern thought, earning him recognition
          as one of the most profound philosophers in history. For further
          reading, visit the Stanford Encyclopedia of Philosophy entry on{" "}
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
            notation
          </Button>
          <Button
            variant="outlined"
            className="about-tab"
            onClick={() => navigate("/about/credits")}
          >
            credits
          </Button>
        </div>
        <div className="about-content">
          <Outlet />
        </div>
      </div>
    </Page>
  )
}
