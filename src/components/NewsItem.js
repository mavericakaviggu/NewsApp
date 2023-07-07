import React from "react";

export default function NewsItem(props) {
  let { title, desc, url, NewsUrl, author, date, source } = props;
  return (
    <div className="container my-4 ">
      <div className="card">
        <span
          className="position-absolute  top-10 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "12px", zIndex: "1", left: "90%" }}
        >
          {source}
        </span>

        <img
          src={
            url
              ? url
              : "https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={NewsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More..
          </a>
        </div>
      </div>
    </div>
  );
}
