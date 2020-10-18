import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/results/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ results: response }))
            .catch(() => this.props.history.push("/"));
    }

    render() {
        const { results: results } = this.state;
        // const allResults = results.map((result, index) => (
        //     <div key={index} className="col-md-6 col-lg-4">
        //         <div className="card mb-4">
        //             <img
        //                 src={result.image}
        //                 className="card-img-top"
        //                 alt={`${result.name} image`}
        //             />
        //             <div className="card-body">
        //                 <h5 className="card-title">{result.name}</h5>
        //                 <Link to={`/result/${result.id}`} className="btn custom-button">
        //                     View Result
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // ));
        const allResults =
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>score</th>
                </tr>
                </thead>
                <tbody>
                {results.map(( result, index ) => {
                    return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{result.name}</td>
                        <td>{result.score}</td>
                    </tr>
                );
                })}
                </tbody>
            </Table>
        const noResult = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No results yet. Why not <Link to="/testme">Take the test!</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">Results</h1>
                        <p className="lead text-muted">
                            Here are the results of all those who have taken the test, see how you compare!
                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <div className="row">
                            {results.length > 0 ? allResults : noResult}
                        </div>
                        <div className="text-right mb-3">
                            <Link to="/testme" className="btn custom-button">
                                Take the test again!
                            </Link>
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                        <Link to="/results" className="btn btn-link">
                            Results
                        </Link>
                    </main>
                </div>
            </>
        );
    }
}
export default Results;