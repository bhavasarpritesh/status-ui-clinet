function NewsList({ news }) {

    return (

        <div>

            <h2>Latest News</h2>

            {
                news.map((item, index) => (

                    <div key={index}>

                        <h3>{item.title}</h3>

                        <p>{item.by}</p>

                    </div>

                ))
            }

        </div>

    );

}

export default NewsList;