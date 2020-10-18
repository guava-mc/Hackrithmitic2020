import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

class TestMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {
                ans: [0,0,0,0,0],
                numLine: -1
            },
            page: this.props.page,
            index: 0,
            ANS: true,
            name: 'TesterX'
        };
    }

    componentDidMount() {
        // const url = "/api/v1/results/index";
        // fetch(url)
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error("Network response was not ok.");
        //     })
        //     .then(response => this.setState({ results: response }))
        //     .catch(() => this.props.history.push("/"));
    }

//     imageClick(q,a) {
//         alert(q);
//         let tempResults = this.state.results;
//         let tempANS = tempResults.ans;
//         tempANS[q] = a;
//         tempResults.ans = tempANS;
//         this.setState({results: tempResults});
// }

    handleSelect = (selectedIndex, e) => {
        if(this.state.index >= 3) {
            this.setState({ANS: false});
        }
        // alert(selectedIndex)
        this.setState({index: this.state.index + 1 });
    };

    submit = (event) => {
            event.preventDefault();
            const url = "/api/v1/results/create";
            const { name, results } = this.state;
            const min = 1;
            const max = 100;
            const score = min + Math.random() * (max - min);
            if (name.length == 0 )
                return;

            const body = {
                name,
                score
            };

            const token = document.querySelector('meta[name="csrf-token"]').content;
            fetch(url, {
                method: "POST",
                headers: {
                    "X-CSRF-Token": token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Network response was not ok.");
                })
                .then(response => this.props.history.push(`/results`))
                .catch(error => console.log(error.message));
    };

    render() {
        const {results: results, index: index, ANS: ANS} = this.state;

        if (ANS) {
            return (
                <div class="col-md-6 col-md-offset-3">
                    <div><p>Click on the box with FEWER dots</p></div>
                    <div className="container secondary-color">
                        <Carousel slide={false} interval={null} activeIndex={index} onSelect={this.handleSelect}>
                            <Carousel.Item>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/3dots.png"
                                                    alt="q0a1"
                                                    // onClick={this.handleSelect(this.state.index + 1)}
                                                />
                                            </Col>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/4dots.png"
                                                    alt="q0a0"
                                                    // onClick={this.handleSelect(this.state.index + 1)}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/7dots.png"
                                                    alt="q0a1"
                                                    // onClick={this.handleSelect(this.state.index + 1)}
                                                />
                                            </Col>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/14dots.png"
                                                    alt="q0a0"
                                                    // onClick={this.handleSelect(this.state.index + 1)}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/15dots.png"
                                                    alt="q0a1"
                                                    // onClick={this.handleSelect(this.state.index + 1)}
                                                />
                                            </Col>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/14dotsB.png"
                                                    alt="q0a0"
                                                    // onClick={this.imageClick(0,0)}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/more.png"
                                                    alt="q0a1"
                                                    // onClick={this.imageClick(0,1)}
                                                />
                                            </Col>
                                            <Col>
                                                <img
                                                    className="d-block w-100 h-100"
                                                    src="ANS/less.png"
                                                    alt="q0a0"
                                                    // onClick={this.imageClick(0,0)}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            );
        }
        else  {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <p>Now place the dot where you think the number is on the number line from 0 to 100.</p>
                    <div className="my-5">
                        <label htmlFor="customRange1">Where does the number 36 go?</label>
                        <br></br>
                        <Form>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicRangeCustom">
                                         <Form.Control type="range" custom />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <Button variant="primary" type="submit" onClick={this.submit}>
                                Submit
                            </Button>
                        </Form>
                        {/*<div className="text-right mb-3">*/}
                        {/*    <Link to="/results" className="btn custom-button">*/}
                        {/*        Submit*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>

            );
        }
    }
}
export default TestMe;