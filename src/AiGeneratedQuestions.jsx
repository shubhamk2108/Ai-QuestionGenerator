
import axios from 'axios';
import React, { useState } from 'react';
import './AiGeneratedQuestions.css';

export default function AiGeneratedQuestions() {

    let [technology, settechnology] = useState("");
    let [topic, settopic] = useState("");
    let [questiontype, setquestiontype] = useState("");
    let [noofquestions, setnoofgquestions] = useState(0);
    let [experiencelevel, setexperiencelevel] = useState("");
    let [generatedquestions, setgeneratedquestions] = useState("");

    let generate = (event) => {

        event.preventDefault();

        let questiondto = {
            technology,
            topic,
            questiontype,
            noofquestions,
            experiencelevel
        };

        axios.post("http://localhost:8080/addrequest", questiondto)
            .then((response) => {

                setgeneratedquestions(response.data.generatedquestions);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="ai-page">

            {/* HEADER */}

            <div className="ai-header">

                <div className="ai-icon">
                    🤖
                </div>

                <h1>AI Interview Question Generator</h1>

                <p>
                    Generate smart and personalized interview questions
                    based on your technology and experience.
                </p>

            </div>


            {/* MAIN FORM */}

            <div className="ai-container">

                <div className="ai-form-card">

                    <div className="form-title">
                        <span>✨</span>
                        <h2>Create Your Question Set</h2>
                    </div>

                    <p className="form-subtitle">
                        Select your preferences and let AI generate questions for you.
                    </p>


                    <form onSubmit={generate}>

                        {/* TECHNOLOGY */}

                        <div className="form-group">

                            <label>💻 Select Technology</label>

                            <select
                                onChange={(event) => {
                                    settechnology(event.target.value)
                                }}
                                required
                            >

                                <option value="">
                                    Select Technology
                                </option>

                                <option value="Java">
                                    Java
                                </option>

                                <option value="Spring boot">
                                    Spring Boot
                                </option>

                                <option value="HTML">
                                    HTML
                                </option>

                                <option value="CSS">
                                    CSS
                                </option>

                                <option value="Javascript">
                                    JavaScript
                                </option>

                                <option value="React JS">
                                    React JS
                                </option>

                                <option value="AWS Hosting">
                                    AWS Hosting
                                </option>

                                <option value="SQL">
                                    SQL
                                </option>

                            </select>

                        </div>


                        {/* TOPIC */}

                        <div className="form-group">

                            <label>📚 Enter Topic</label>

                            <input
                                type="text"
                                placeholder="Example: OOPs, Collections, Spring Boot..."
                                onChange={(event) => {
                                    settopic(event.target.value)
                                }}
                                required
                            />

                        </div>


                        {/* QUESTION TYPE */}

                        <div className="form-group">

                            <label>📝 Select Question Type</label>

                            <select
                                onChange={(event) => {
                                    setquestiontype(event.target.value)
                                }}
                                required
                            >

                                <option value="">
                                    Select Question Type
                                </option>

                                <option value="subjective">
                                    Subjective
                                </option>

                                <option value="MCQ">
                                    MCQ
                                </option>

                            </select>

                        </div>


                        {/* NUMBER OF QUESTIONS */}

                        <div className="form-group">

                            <label>🔢 Number of Questions</label>

                            <select
                                onChange={(event) => {
                                    setnoofgquestions(event.target.value)
                                }}
                                required
                            >

                                <option value="">
                                    Select Number of Questions
                                </option>

                                <option value="10">10 Questions</option>
                                <option value="20">20 Questions</option>
                                <option value="30">30 Questions</option>
                                <option value="40">40 Questions</option>
                                <option value="50">50 Questions</option>

                            </select>

                        </div>


                        {/* EXPERIENCE */}

                        <div className="form-group">

                            <label>👨‍💻 Experience Level</label>

                            <select
                                onChange={(event) => {
                                    setexperiencelevel(event.target.value)
                                }}
                                required
                            >

                                <option value="">
                                    Select Experience Level
                                </option>

                                <option value="Fresher">
                                    Fresher
                                </option>

                                <option value="1-2 years">
                                    1-2 Years
                                </option>

                                <option value="2-3 years">
                                    2-3 Years
                                </option>

                                <option value="3-4 years">
                                    3-4 Years
                                </option>

                                <option value="5+ years">
                                    5+ Years
                                </option>

                            </select>

                        </div>


                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="generate-btn"
                        >

                            <span>🚀</span>
                            Generate Questions

                        </button>

                    </form>

                </div>


                {/* GENERATED QUESTIONS */}

                {
                    generatedquestions &&

                    <div className="result-card">

                        <div className="result-header">

                            <div>
                                <span className="result-icon">
                                    🎯
                                </span>

                                <h2>Generated Questions</h2>
                            </div>

                            <span className="ai-badge">
                                🤖 AI Generated
                            </span>

                        </div>


                        {/* DETAILS */}

                        <div className="question-info">

                            <div className="info-box technology-box">

                                <span>💻</span>

                                <div>
                                    <small>Technology</small>
                                    <strong>{technology}</strong>
                                </div>

                            </div>


                            <div className="info-box topic-box">

                                <span>📚</span>

                                <div>
                                    <small>Topic</small>
                                    <strong>{topic}</strong>
                                </div>

                            </div>


                            <div className="info-box experience-box">

                                <span>👨‍💻</span>

                                <div>
                                    <small>Experience</small>
                                    <strong>{experiencelevel}</strong>
                                </div>

                            </div>

                        </div>


                        {/* QUESTIONS */}

                        <div className="questions-content">

                            <div
                                style={{
                                    whiteSpace: "pre-line"
                                }}
                            >

                                {generatedquestions}

                            </div>

                        </div>

                    </div>
                }

            </div>


            {/* FOOTER */}

            <div className="ai-footer">

                <span>✨</span>
                Powered by AI • Practice Smarter • Get Interview Ready
                <span>✨</span>

            </div>

        </div>
    );
}

