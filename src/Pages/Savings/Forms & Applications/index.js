import React from "react";
import { get } from "lodash";
import PageLayout from "../../../Components/PageLayout";
import {
  APPLICATIONS,
  FORMS,
} from "../../../Constants/Savings/Forms&Applications";
import "./styles.css";
import { Link } from "react-router-dom";

/**
 *
 * @param {any} forms - contains:
 * @param {string} label label of link
 * @param {any} link - either link or pdf
 * @param {boolean?} local - if true, redirect is a component
 */
function ListGenerator(forms) {
  const links = forms.map((form, idx) => {
    if (!!get(form, "local")) {
      return (
        <li key={idx}>
          <Link to={form.link} target="_blank" className="link">
            {form.label}
          </Link>
        </li>
      );
    }
    return (
      <li key={idx}>
        <a href={form.link} target="_blank" rel="noreferrer" className="link">
          {form.label}
        </a>
      </li>
    );
  });

  return <div className="listView">{links}</div>;
}

export default function FormsApplications() {
  const content = (
    <div className="content-container">
      <div className="title">Forms & Applications</div>
      <div className="content-block">
        <div className="subtitle">Applications</div>
        <div className="paragraph">
          <div className="group">{ListGenerator(APPLICATIONS)}</div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle"> FORMS</div>
        <div className="paragraph">
          <div className="group">
            {FORMS.map((form, idx) => {
              return (
                <div key={idx}>
                  <div className="subtitle">{form.title}</div>
                  <ul className="unordered-list">
                    {ListGenerator(form.forms)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
