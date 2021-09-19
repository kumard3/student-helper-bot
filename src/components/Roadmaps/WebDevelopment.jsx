import { WebDevelopmentData } from "./RoadmapData";

export default function WebDevelopment() {
  return (
    <div>
      {WebDevelopmentData.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            {item.videoLinks.map((link) => {
              return (
                <div>
                  <a href={link.videoLink} target="_blank" rel="noreferrer">
                    <h2>{link.nameOfVideo}</h2>
                  </a>
                </div>
              );
            })}
            {item.books.map((book) => {
              return (
                <div>
                  <a href={book.bookLink} target="_blank" rel="noreferrer">
                    <h2>{book.bookName}</h2>
                  </a>
                </div>
              );
            })}
            <h2>
              Tutorial :<a href={item.tutorial}>W3Schools</a>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
