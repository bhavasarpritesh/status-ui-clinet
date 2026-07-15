import "./NewsList.css";

function NewsList({ news }) {

    return (

        <div className="news-card">

            <h2>

                Latest News

            </h2>

            {

            news.map((item, index) => (
            <div
                key={index}
                className="news-item"
            >
                <h3>{item.title}</h3>

                <p>Author: {item.by}</p>

                {item.url && (
                <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Read Full Article →
                </a>
                )}
            </div>
            ))

            }

        </div>

    )

}

export default NewsList;