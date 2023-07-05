import React from "react";

export default function NewsItem(props) {
  let { title, desc, url, NewsUrl } = props;
  return (
    <div className="container my-4 ">
      <div className="card">
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
