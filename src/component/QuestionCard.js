import React, { Component } from 'react'

export class QuestionCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             option1: false,
             option2: false,
             option3: false,
             option4: false,
             currentResponse: "",
        };

        this.reset = this.reset.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveResponse = this.saveResponse.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
    }
    reset = () => {
        this.setState({ 
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            currentResponse: ""
        });
    }

    onChange = (e) => {
        this.reset();
        this.setState({ [e.target.name]: true, currentResponse: e.target.value}, () => this.props.answerQuestion(this.state.currentResponse));
    }

    saveResponse = (e) => {
        // this.reset();
        this.props.saveResponse(e);
    }

    changeQuestion = (qno) => {
        this.reset();
        this.props.changeQuestion(qno)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card mt-5 p-3 min-100">
                    <h2 className="card-title">Q{this.props.qno}) {this.props.question}</h2>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><input type="radio" checked={this.state.option1} name="option1" value={this.props.answers[0]} onChange={this.onChange}/>{this.props.answers[0]}</li>
                            <li className="list-group-item"><input type="radio" checked={this.state.option2} name="option2" value={this.props.answers[1]} onChange={this.onChange}/>{this.props.answers[1]}</li>
                            <li className="list-group-item"><input type="radio" checked={this.state.option3} name="option3" value={this.props.answers[2]} onChange={this.onChange}/>{this.props.answers[2]}</li>
                            <li className="list-group-item"><input type="radio" checked={this.state.option4} name="option4" value={this.props.answers[3]} onChange={this.onChange}/>{this.props.answers[3]}</li>
                        </ul>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary m-2 mr-4" onClick={()=>this.changeQuestion(this.props.qno-1)} disabled={this.props.qno === 1}><h3>Prev</h3></button>
                        <button className="btn btn-danger m-2" onClick={this.saveResponse} disabled={this.state.currentResponse === ""}><h3>Save</h3></button>
                        <button className="btn btn-primary ml-4 m-2" onClick={()=>this.changeQuestion(this.props.qno+1)} disabled={this.props.qno === 90}><h3>Next</h3></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionCard;
