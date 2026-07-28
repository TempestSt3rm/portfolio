import React from "react";

type ProjectSlug = "radios-firmware" | "variable-telemetry";

interface ProjectArticleProps {
  project: ProjectSlug;
}

const projectContent = {
  "radios-firmware": {
    kicker: "ASTRA · TELEMETRY AND COMMAND PROTOCOL",
    title: "ASTRA Protocol",
    summary:
      "A shared avionics communication standard that keeps telemetry and commands consistent across the flight computer, ground-station radios, and operator software.",
    sections: {
      context: [
        "The McGill Rocket Team’s avionics stack moves live flight data from the flight computer, over LoRa, through the ground-station radios, and into Ground Station Control (GSC). Operators use that same path in reverse to send actions such as launch and propulsion commands to the rocket.",
        "Each system is implemented independently, but all three must interpret the same raw bytes in exactly the same way. My contribution focused on ASTRA—the Avionics Standard for Telemetry and Radios Adoption—which defines the shared packet format and control flow across the flight computer, radios, and GSC."
      ],
      problem: [
        "Without a common standard, changes to field names, types, packet sizes, or calibration could cause definition skew between systems and make received bytes impossible to decode safely. ASTRA needed to provide consistent serialization and deserialization while remaining flexible enough for future devices and telemetry requirements.",
        "The radio link is also half-duplex: the rocket and ground station can both transmit, but not at the same time. Packets can be dropped or corrupted, and operators need positive confirmation that safety-critical commands moved from the GUI, through a ground radio, and into the flight computer.",
        "Finally, the useful telemetry changes throughout flight. Sending a full payload at every stage wastes airtime and weakens link performance as the rocket travels farther away, while aggressive compression can sacrifice precision or make values harder to interpret."
      ],
      implementation: [
        "I designed ASTRA frames around a fixed 8-byte header and a variable payload. The header contains a 16-bit sequence number, control flags, a command acknowledgement ID, and a 32-bit bitmap. Skipped sequence numbers expose dropped frames, while the bitmap identifies which logical telemetry groups—called atomic packets—are present.",
        "Each atomic packet bundles related fields and is serialized in bitmap order. Every field has a defined name, encoding type, size, calibration function, and atomic assignment. This lets the flight computer choose different atomics as link quality and operator needs change through pad, ascent, descent, and recovery, without making the payload ambiguous.",
        "A team-wide telemetry sheet feeds an avionics packet-coordinator sheet that acts as the shared definition. Generation scripts turn that source into XML for the GSC backend and C++ structures for the flight computer and radios. The same workflow can encode calibrated raw values in smaller integer types, preserving useful precision while reducing transmitted bytes.",
        "ASTRA coordinates the half-duplex link with a flight-computer-led Clear To Send (CTS) exchange. Commands use a 7-byte base packet containing an ID and six-byte command string, with an optional 13-byte extension for up to three numeric arguments. The acknowledgement ID and ACK, BAD, and NAK flags let the system report whether a command was accepted, rejected, or replaced by a no-operation packet.",
        "Ground radios validate incoming frames, forward telemetry to GSC over MQTT, and queue operator commands asynchronously. When CTS arrives, an enabled radio sends the queued command and immediately returns to receive mode."
      ],
      results: [
        "ASTRA gives the flight computer, radios, and GSC one generated source of truth for telemetry fields and packet structure. Variable atomic payloads reduce unnecessary radio traffic, while sequence numbers and length validation make packet loss and definition mismatches visible instead of silently corrupting data.",
        "The command path provides four stages of operator feedback: GSC confirms publication, the radio confirms receipt and queueing, the radio confirms RF transmission after CTS, and a later telemetry frame carries the flight computer’s acknowledgement. This makes critical procedures easier to trace and diagnose.",
        "During field trials, the ASTRA telemetry system achieved approximately 5 Hz updates while the rocket was on the pad. The coordinated CTS windows allowed operators to use the half-duplex radio path with interaction that felt like a full-duplex link."
      ]
    }
  },
  "variable-telemetry": {
    kicker: "VARIABLE TELEMETRY · FLIGHT SOFTWARE",
    title: "Variable Telemetry System",
    summary:
      "A configurable telemetry system created with the McGill Rocket Team to control which flight variables are transmitted, recorded, and exposed to the ground station.",
    sections: {
      context: [
        "Different test campaigns and flight configurations need different telemetry. A fixed list of fields makes every change expensive and can waste limited radio bandwidth on data the team does not currently need.",
        "I worked with the team on a variable telemetry system that could adapt the transmitted data without forcing the entire telemetry pipeline to be redesigned."
      ],
      problem: [
        "The system needed to support changing groups of variables while keeping the rocket and ground station in agreement about each value’s identity and format.",
        "It also had to remain efficient enough for an embedded target and understandable enough for other team members to extend safely."
      ],
      implementation: [
        "The design treats telemetry variables as configurable entries rather than a single hard-coded packet. Each entry can be identified, serialized, and reconstructed by the receiving side using shared metadata.",
        "Use this section to explain the registry or configuration format, type handling, serialization strategy, bandwidth decisions, and how the system integrated with the rest of the flight stack."
      ],
      results: [
        "Use this section to describe how the system changed the team’s workflow: faster telemetry changes, better bandwidth use, easier testing, or support for more flight configurations.",
        "Add concrete measurements and examples once they are available."
      ]
    }
  }
} as const;

export const ProjectArticle: React.FC<ProjectArticleProps> = ({ project }) => {
  const content = projectContent[project];

  return (
    <main className="min-h-screen bg-overlay text-white">
      <article className="article-shell pb-28 pt-16 sm:pt-24">
        <header className="pb-16 sm:pb-20">
          <a className="back-link" href="/#projects">
            <span aria-hidden="true">←</span> Back to projects
          </a>
          <p className="article-kicker mt-10">{content.kicker}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-7 text-xl leading-8 text-white/70">{content.summary}</p>
        </header>

        <div className="article-body">
          <section>
            <p className="article-section-label">01 · Context</p>
            <h2>Context</h2>
            {content.sections.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {/* PUT PHOTO HERE */}
          </section>

          <section>
            <p className="article-section-label">02 · Problem</p>
            <h2>Problem</h2>
            {content.sections.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section>
            <p className="article-section-label">03 · Implementation</p>
            <h2>Implementation</h2>
            {content.sections.implementation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {/* PUT DIAGRAM HERE */}
            {/* PUT PHOTO HERE */}
          </section>

          <section>
            <p className="article-section-label">04 · Results</p>
            <h2>Results</h2>
            {content.sections.results.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        </div>
      </article>
    </main>
  );
};
