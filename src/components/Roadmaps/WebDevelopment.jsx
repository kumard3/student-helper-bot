import { WebDevelopmentData } from "./RoadmapData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function WebDevelopment() {
  return (
    <div className="flex flex-wrap flex-row w-full m-1">
      {WebDevelopmentData.map((item) => {
        return (
          <div
            className={classNames(
              "bg-white rounded-xl p-3 m-1",
              "focus:outline-none focus:ring-2 m-1 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <h1 className="text-4xl font-bold ">{item.name}</h1>
            <div >
              <div className="pb-10 pt-5" >
                <h1 className="font-bold text-2xl">Books</h1>
                {item.books.map((book) => {
                  return (
                    <div className=" cursor-pointer">
                      <a href={book.bookLink} target="_blank" rel="noreferrer">
                        <h2>{book.bookName}</h2>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div  className="pb-10 pt-[10px]">

              <h1 className="font-bold text-2xl">Other Resources</h1>

              {item.videoLinks.map((link) => {
                return (
                  <div className=" cursor-pointer">
                    <a href={link.videoLink} target="_blank" rel="noreferrer">
                      <h2 className=" ">{link.nameOfVideo}</h2>
                    </a>
                  </div>
                );
              })}
            </div>
              </div>

            <h2>
              Tutorial :<a href={item.tutorial}>W3Schools</a>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
