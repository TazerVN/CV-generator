import "./Components.css";
import { useState } from "react";

function Page({ prop }) {
  const [information, setInformation] = useState(prop.information);

  const [summary, setSummary] = useState(prop.summary);

  const [education, setEducation] = useState(prop.education);

  const [employment, setEmployment] = useState(prop.employment);

  const [openIndex, setOpenIndex] = useState(0);

  const handleInformationInputChange = (index, u, e) => {
    setInformation((previousState) => ({
      ...previousState,
      [index]: { ...previousState[index], [u]: e.target.value },
    }));
  };

  const handleSummaryInputChange = (index, u, e) => {
    setSummary((previousState) => ({
      ...previousState,
      [index]: { ...previousState[index], [u]: e.target.value },
    }));
  };

  const handleEducationInputChange = (index, u, e) => {
    setEducation((previousState) => ({
      ...previousState,
      [index]: { ...previousState[index], [u]: e.target.value },
    }));
  };

  const handleEmploymentInputChange = (index, u, e) => {
    setEmployment((previousState) => ({
      ...previousState,
      [index]: { ...previousState[index], [u]: e.target.value },
    }));
  };

  const EducationDisplay = Object.entries(education).map((section) => (
    <li key={section[0]}>
      <h2 key={section[1].name}>{section[1].name}</h2>
      <h3 key={section[1].degree}>{section[1].degree}</h3>
      <h4 key={section[1].dateStart + section[1].dateEnd}>
        {section[1].dateStart} - {section[1].dateEnd}
      </h4>
      <p key={section[1].details}>{section[1].details}</p>
    </li>
  ));

  const EmploymentDisplay = Object.entries(employment).map((section) => (
    <li key={section[0]}>
      <h2 key={section[1].company}>{section[1].company}</h2>
      <h3 key={section[1].role}>{section[1].role}</h3>
      <h4 key={section[1].dateStart + section[1].dateEnd}>
        {section[1].dateStart} - {section[1].dateEnd}
      </h4>
      <p key={section[1].details}>{section[1].details}</p>
    </li>
  ));

  return (
    <div className="container">
      <div className="edit page">
        <Collapsable
          name={"Information"}
          list={information}
          handleInput={handleInformationInputChange}
          isOpen={openIndex === 1}
          onOpen={() => {
            openIndex != 1 ? setOpenIndex(1) : setOpenIndex(0);
          }}
          classTag={openIndex === 1 ? "selected" : ""}
        />

        <Collapsable
          name={"Summary"}
          list={summary}
          handleInput={handleSummaryInputChange}
          isOpen={openIndex === 2}
          onOpen={() => {
            openIndex != 2 ? setOpenIndex(2) : setOpenIndex(0);
          }}
          classTag={openIndex === 2 ? "selected" : ""}
        />

        <Collapsable
          name={"Education"}
          list={education}
          handleInput={handleEducationInputChange}
          isOpen={openIndex === 3}
          onOpen={() => {
            openIndex != 3 ? setOpenIndex(3) : setOpenIndex(0);
          }}
          classTag={openIndex === 3 ? "selected" : ""}
        />
        <Collapsable
          name={"Professional"}
          list={employment}
          handleInput={handleEmploymentInputChange}
          isOpen={openIndex === 4}
          onOpen={() => {
            openIndex != 4 ? setOpenIndex(4) : setOpenIndex(0);
          }}
          classTag={openIndex === 4 ? "selected" : ""}
        />
        <Collapsable name={"Skill"} />
      </div>
      <div className="display page" id="capture">
        <div className="information">
          <h1>{information[0].name}</h1>
          <h4>{information[0].contact}</h4>
          <h4>{information[0].email}</h4>
        </div>
        <div className="summary section">
          <h1 className="title">{"Summary"}</h1>
          <ul>
            <li>
              <h4>{summary[0].summary}</h4>
            </li>
          </ul>
        </div>

        <div className="education section">
          <h1 className="title">{"Education"}</h1>
          <ul>{EducationDisplay}</ul>
        </div>

        <div className="employment section">
          <h1 className="title">{"Professional"}</h1>
          <ul>{EmploymentDisplay}</ul>
        </div>
      </div>
    </div>
  );
}

function Collapsable({ name, list, handleInput, isOpen, onOpen, classTag }) {
  if (!list) {
    return;
  }
  const inputList = Object.entries(list).map((sections) => (
    <li key={sections[0]}>
      <ul>
        {Object.entries(sections[1]).map((userInput) => (
          <li key={userInput[0]}>
            <label htmlFor={userInput[0]}>{userInput[0].toUpperCase()}: </label>
            {userInput[0] !== "summary" && userInput[0] !== "details" && (
              <input
                autoComplete="false"
                type={
                  userInput[0] === "dateStart" || userInput[0] === "dateEnd"
                    ? "date"
                    : "text"
                }
                id={userInput[0]}
                defaultValue={userInput[1]}
                onChange={(e) =>
                  handleInput(sections[0], userInput[0].toString(), e)
                }
              ></input>
            )}
            {(userInput[0] == "summary" || userInput[0] == "details") && (
              <textarea
                autoComplete="false"
                id={userInput[0]}
                defaultValue={userInput[1]}
                onChange={(e) =>
                  handleInput(sections[0], userInput[0].toString(), e)
                }
              ></textarea>
            )}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className={"collapsable " + classTag}>
      <h1 onClick={onOpen}>{name}</h1>
      <ul>{inputList}</ul>
    </div>
  );
}

export default Page;
